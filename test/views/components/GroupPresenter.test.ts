import { GroupPresenter } from '../../../src/views/components/group/GroupPresenter'
import { GroupView, GroupVM } from '../../../src/views/components/group/GroupView'
import { clone } from '../../../src/base/lang/clone'

it('start without first and second country',  () => {
    presenter.start()

    expect(view.model.first).toEqual(null)
    expect(view.model.second).toEqual(null)
})

it('on select first some country will be the first', () => {
    presenter.selectFirst('Argentina')

    expect(view.model.first).toEqual('Argentina')
})

it('on select second some country will be the second', () => {
    presenter.selectSecond('Argentina')

    expect(view.model.second).toEqual('Argentina')
})

beforeEach(() => {
    view = new View()
    presenter = new GroupPresenter(view)
})

class View implements GroupView {
    model = new GroupVM()

    modelChanged(model: GroupVM) {
        this.model = clone(model)
    }
}

let presenter: GroupPresenter
let view: View