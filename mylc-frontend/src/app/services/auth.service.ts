import { Injectable } from '@angular/core';
import { GoogleAuthProvider } from '@angular/fire/auth';
import {AngularFireAuth } from '@angular/fire/compat/auth'
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore/'; 
import { map, Observable, of, switchMap } from 'rxjs';
import { User } from '../User';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<any>
  constructor(
    private afAuth:AngularFireAuth,
    private afStore:AngularFirestore,
  ) { 
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afStore.doc<User>(`users/${user.uid}`).valueChanges()
        } else {
          return of(null)
        }
      })
    )
  }

  async googleSignIn() {
    const provider = new GoogleAuthProvider()
    const credentials = await this.afAuth.signInWithPopup(provider)
    this.updateUserData(credentials.user)
  }

  async signOut() {
    await this.afAuth.signOut() 
  }

  private updateUserData(user: any) {
    const userRef: AngularFirestoreDocument<User> = this.afStore.doc(`users/${user.uid}`)
    const completedProblems = localStorage.getItem('completed-problems')?.toString()
    const toAdd = !!completedProblems ? JSON.parse(completedProblems): {}
    let userData:User | undefined
    userRef.get().subscribe(async (data) => {
      userData = data.data()
      const problemDocsID = userData?.problemDocsID ? userData.problemDocsID : (await this.afStore.collection("completedProblems").add(toAdd)).id
      const toSet: User= {
        id: user.uid,
        displayName: user.displayName,
        pfpUrl: user.photoURL,
        email: user.email,
        problemDocsID: problemDocsID
      }
      userRef.set(toSet, {merge: true})
    })
  }

  getCompletedProblems(user: any): Observable<any> {
    const userRef: AngularFirestoreDocument<User> = this.afStore.doc(`users/${user.id}`)
    return userRef.get().pipe(
      map(data => {
        const problemDocsID = data.data()?.problemDocsID
        return this.afStore.collection("completedProblems").doc(problemDocsID).get()
      })
    )
  }

  modifyCompletedProblem(user: any, category: string, problem: string, add: boolean = true): void {
    const userRef: AngularFirestoreDocument<User> = this.afStore.doc(`users/${user.id}`)
    userRef.get().pipe(switchMap(data => {
      const problemDocsID = data.data()?.problemDocsID
      const problemsRef:AngularFirestoreDocument<any> = this.afStore.collection("completedProblems").doc(problemDocsID)
      return problemsRef.get().pipe(map((completedProblemSnapShot) => ({problemsRef, completedProblemSnapShot})))
    })).subscribe(({problemsRef, completedProblemSnapShot}) => {
      const completedProblems: Set<string> = new Set(completedProblemSnapShot.data()[category] || [])
      if (add) {completedProblems.add(problem)} else  {completedProblems.delete(problem)}
      problemsRef.set({[category]: Array.from(completedProblems)}, {merge:true})
    })
  }
}
