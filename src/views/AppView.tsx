import { Country } from '../models/Country'

export class AppVM {
    sixteenRound: Map<string, Classifieds> = new Map()
    quarterFinal: Map<string, Country> = new Map()
    semiFinal: Map<string, Country> = new Map()
    final: Map<string, Country> = new Map()
    third: Map<string, Country> = new Map()
}

export interface AppView {
    modelChanged(model: AppVM): void
    alert(title: string, message: string): void
}

export interface Classifieds {
    first: Country | undefined
    second: Country | undefined
}