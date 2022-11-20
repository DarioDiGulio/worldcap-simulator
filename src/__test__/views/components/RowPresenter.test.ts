import { RowView } from '../../../views/components/Row/RowView'
import { RowVM } from '../../../views/components/Row/RowVM'
import { RowPresenter } from '../../../views/components/Row/RowPresenter'

test('on left clicked is rightClicked change to false', () => {
    presenter.set({ isRightSelected: true })

    presenter.leftClicked()

    expect(view.model.isRightSelected).toBeFalsy()
    expect(view.model.isLeftSelected).toBeTruthy()
})

test('on right clicked is leftClicked change to false', () => {
    presenter.set({ isLeftSelected: true })

    presenter.rightClicked()

    expect(view.model.isLeftSelected).toBeFalsy()
    expect(view.model.isRightSelected).toBeTruthy()
})

test('when isLeftClicked on left clicked change to false', () => {
    presenter.set({ isLeftSelected: true })

    presenter.leftClicked()

    expect(view.model.isLeftSelected).toBeFalsy()
})

test('when isRightClicked on left clicked change to false', () => {
    presenter.set({ isRightSelected: true })

    presenter.rightClicked()

    expect(view.model.isRightSelected).toBeFalsy()
})

beforeEach(() => {
    view = new ViewStub()
    presenter = new RowPresenter(view)
})

let view: ViewStub
let presenter: RowPresenter

class ViewStub implements RowView {
    model = new RowVM()

    modelChanged(model: RowVM): void {
        this.model = model
    }
}