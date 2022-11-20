import { RowVM } from './RowVM'
import { RowView } from './RowView'

export class RowPresenter {
    model = new RowVM()

    constructor(private view: RowView) {}

    leftClicked() {
        this.set({
            isLeftSelected: !this.model.isLeftSelected,
            isRightSelected: false,
        })
    }

    rightClicked() {
        this.set({
            isRightSelected: !this.model.isRightSelected,
            isLeftSelected: false,
        })
    }

    set<K extends keyof RowVM>(changes: Pick<RowVM, K>) {
        this.model = Object.assign(this.model, changes)
        this.view.modelChanged(this.model)
    }
}