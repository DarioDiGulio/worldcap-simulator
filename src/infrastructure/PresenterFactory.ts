import { GroupPresenter } from '../views/components/group/GroupPresenter'
import { GroupView } from '../views/components/group/GroupView'

export class PresenterFactory {
    group = (view: GroupView) => new GroupPresenter(view)
}