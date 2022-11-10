import { AppView, AppVM } from './AppView'
import { Country } from '../models/Country'

export class AppPresenter {
    private model = new AppVM()

    constructor(private view: AppView) {}

    selectFirstGroupRound(country: Country, groupName: string) {
        let second = undefined
        if (this.model.sixteenRound.get(groupName) !== undefined) {
            second = this.model.sixteenRound.get(groupName)!!.second
        }
        this.model.sixteenRound.set(groupName, {first: country, second})
        this.set({sixteenRound: this.model.sixteenRound})
    }

    selectSecondGroupRound(country: Country, groupName: string) {
        let first = undefined
        if (this.model.sixteenRound.get(groupName) !== undefined) {
            first = this.model.sixteenRound.get(groupName)!!.first
        }
        this.model.sixteenRound.set(groupName, {first, second: country})
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