import { AppView, AppVM } from './AppView'
import { Country } from '../models/Country'

export class AppPresenter {
    private model = new AppVM()

    constructor(private view: AppView) {
    }

    selectFirstEight(countryName: string, groupName: string) {
        let second = undefined
        if (this.model.eightFinal.get(groupName) !== undefined) {
            second = this.model.eightFinal.get(groupName)!!.second
        }
        this.model.eightFinal.set(groupName, { first: new Country(countryName), second })
        this.set({ eightFinal: this.model.eightFinal })
    }

    selectSecondEight(countryName: string, groupName: string) {
        let first = undefined
        if (this.model.eightFinal.get(groupName) !== undefined) {
            first = this.model.eightFinal.get(groupName)!!.first
        }
        this.model.eightFinal.set(groupName, { first, second: new Country(countryName) })
        this.set({ eightFinal: this.model.eightFinal })
    }

    set<K extends keyof AppVM>(changes: Pick<AppVM, K>) {
        this.model = Object.assign(this.model, changes)
        this.view.modelChanged(this.model)
    }
}