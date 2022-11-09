import { GroupView, GroupVM } from './GroupView'
import { Country } from '../../../models/Country'

export class GroupPresenter {
    private model = new GroupVM()

    constructor(private view: GroupView) {
    }

    async start() {
    }

    selectFirst(countryName: string) {
        this.set({first: new Country(countryName)})
    }

    selectSecond(countryName: string) {
        this.set({second: new Country(countryName)})
    }

    set<K extends keyof GroupVM>(changes: Pick<GroupVM, K>) {
        this.model = Object.assign(this.model, changes)
        this.view.modelChanged(this.model)
    }
}