import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { ProblemListComponent } from './components/problem-list/problem-list.component';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideFunctions, getFunctions } from '@angular/fire/functions';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { FormsModule } from '@angular/forms';
import { CategoryContainerComponent } from './components/category-container/category-container.component';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox'
import {CdkAccordionModule} from '@angular/cdk/accordion';
import {MatTooltipModule} from '@angular/material/tooltip';
import { FooterComponent } from './components/footer/footer.component';
import { RecsListComponent } from './recs-list/recs-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProblemListComponent,
    CategoryContainerComponent,
    FooterComponent,
    RecsListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatTableModule,
    MatCheckboxModule,
    CdkAccordionModule,
    MatTooltipModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideFunctions(() => getFunctions())
  ],
  providers: [{ provide: FIREBASE_OPTIONS, useValue: environment.firebase }],
  bootstrap: [AppComponent]
})
export class AppModule { }
