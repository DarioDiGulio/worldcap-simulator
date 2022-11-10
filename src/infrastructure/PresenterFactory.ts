import { GroupPresenter } from '../views/components/group/GroupPresenter'
import { GroupView } from '../views/components/group/GroupView'
import { AppView } from '../views/AppView'
import { AppPresenter } from '../views/AppPresenter'
import { EventBus } from '../base/eventBus/EventBus'
import { GroupsView } from '../views/phases/GroupsView'
import { GroupsPresenter } from './GroupsPresenter'

export class PresenterFactory {
    constructor(private eventBus: EventBus) {}

    app = (view: AppView) => new AppPresenter(view, this.eventBus)
    group = (view: GroupView) => new GroupPresenter(view)
    groups = (view: GroupsView) => new GroupsPresenter(view, this.eventBus)
}