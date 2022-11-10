import { AppView, AppVM } from './AppView'
import { Country } from '../models/Country'
import { EventBus, Event } from '../base/eventBus/EventBus'
import { FirstCountryFromGroupSelected } from '../infrastructure/events/FirstCountryFromGroupSelected'
import { SecondCountryFromGroupSelected } from '../infrastructure/events/SecondCountryFromGroupSelected'

export class AppPresenter {
    private model = new AppVM()

    constructor(private view: AppView, eventBus: EventBus) {
        eventBus.subscribe(this, FirstCountryFromGroupSelected, this.onFirstCountryFromGroupSelected.bind(this))
        eventBus.subscribe(this, SecondCountryFromGroupSelected, this.onSecondCountryFromGroupSelected.bind(this))
    }

    private onFirstCountryFromGroupSelected(event: Event) {
        const currentEvent = event as FirstCountryFromGroupSelected
        let second = undefined
        if (this.model.sixteenRound.get(currentEvent.groupName) !== undefined) {
            second = this.model.sixteenRound.get(currentEvent.groupName)!!.second
        }
        this.model.sixteenRound.set(currentEvent.groupName, {first: currentEvent.country, second})
        this.set({sixteenRound: this.model.sixteenRound})
    }

    private onSecondCountryFromGroupSelected(event: Event) {
        const currentEvent = event as SecondCountryFromGroupSelected
        let first = undefined
        if (this.model.sixteenRound.get(currentEvent.groupName) !== undefined) {
            first = this.model.sixteenRound.get(currentEvent.groupName)!!.first
        }
        this.model.sixteenRound.set(currentEvent.groupName, {first, second: currentEvent.country})
        this.set({sixteenRound: this.model.sixteenRound})
    }

    addSixteenRoundWinner(country: Country, id: string) {
        this.model.quarterFinal.set(id, country)
        this.set({quarterFinal: this.model.quarterFinal})
    }

    addQuarterWinner(country: Country, id: string) {
        this.model.semiFinal.set(id, country)
        this.set({semiFinal: this.model.semiFinal})
    }

    addSemiFinalWinner(country: Country, id: string) {
        this.model.final.set(id, country)
        this.set({ final: this.model.final })
    }

    addSemiFinalLooser(country: Country, id: string) {
        this.model.third.set(id, country)
        this.set({ third: this.model.third })
    }

    set<K extends keyof AppVM>(changes: Pick<AppVM, K>) {
        this.model = Object.assign(this.model, changes)
        this.view.modelChanged(this.model)
    }

    showChampion(winner: Country) {
        this.view.alert(winner.fullNameOriented(), '¡Campeón del Mundo!')
    }
}