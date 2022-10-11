import { Hardness } from "./Hardness"
export interface Problem {
    title: string
    difficulty: Hardness
    link: string
}
export interface RecType {
    problem: Problem,
    category: string
}
