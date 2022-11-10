import { AppView, AppVM } from './AppView'
import { Country } from '../models/Country'

export class AppPresenter {
    private model = new AppVM()

    constructor(private view: AppView) {
    }

    selectFirstEight(country: Country, groupName: string) {
        let second = undefined
        if (this.model.eightFinal.get(groupName) !== undefined) {
            second = this.model.eightFinal.get(groupName)!!.second
        }
        this.model.eightFinal.set(groupName, {first: country, second})
        this.set({eightFinal: this.model.eightFinal})
    }

    selectSecondEight(country: Country, groupName: string) {
        let first = undefined
        if (this.model.eightFinal.get(groupName) !== undefined) {
            first = this.model.eightFinal.get(groupName)!!.first
        }
        this.model.eightFinal.set(groupName, {first, second: country})
        this.set({eightFinal: this.model.eightFinal})
    }

    addCuarterWinner(country: Country, id: string) {
        this.model.cuarterFinal.set(id, country)
        this.set({cuarterFinal: this.model.cuarterFinal})
    }

    addSemiWinner(country: Country, id: string) {
        this.model.semiFinal.set(id, country)
        this.set({semiFinal: this.model.semiFinal})
    }

    set<K extends keyof AppVM>(changes: Pick<AppVM, K>) {
        this.model = Object.assign(this.model, changes)
        this.view.modelChanged(this.model)
    }
}