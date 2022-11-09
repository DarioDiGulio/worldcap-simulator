import { GroupPresenter } from '../views/components/group/GroupPresenter'
import { GroupView } from '../views/components/group/GroupView'
import { AppView } from '../views/AppView'
import { AppPresenter } from '../views/AppPresenter'

export class PresenterFactory {
    app = (view: AppView) => new AppPresenter(view)
    group = (view: GroupView) => new GroupPresenter(view)
}