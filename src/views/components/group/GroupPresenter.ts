import { GroupView, GroupVM } from './GroupView'
import { Country } from '../../../models/Country'

export class GroupPresenter {
    private model = new GroupVM()

    constructor(private view: GroupView) {
    }

    start() {}

    selectFirst(country: Country) {
        this.set({first: country})
    }

    selectSecond(country: Country) {
        this.set({second: country})
    }

    set<K extends keyof GroupVM>(changes: Pick<GroupVM, K>) {
        this.model = Object.assign(this.model, changes)
        this.view.modelChanged(this.model)
    }
}