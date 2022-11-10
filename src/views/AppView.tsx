import { Country } from '../models/Country'

export class AppVM {
    eightFinal: Map<string, BattleFinal> = new Map()
    cuarterFinal: Map<string, Country> = new Map()
    semiFinal: Map<string, Country> = new Map()
}

export interface AppView {
    modelChanged(model: AppVM): void
}

export interface BattleFinal {
    first: Country | undefined
    second: Country | undefined
}