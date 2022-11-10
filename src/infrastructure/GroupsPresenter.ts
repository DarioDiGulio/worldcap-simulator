import { GroupsView } from '../views/phases/GroupsView'
import { EventBus } from '../base/eventBus/EventBus'
import { Country } from '../models/Country'
import { FirstCountryFromGroupSelected } from './events/FirstCountryFromGroupSelected'
import { SecondCountryFromGroupSelected } from './events/SecondCountryFromGroupSelected'

export class GroupsPresenter {
    constructor(private view: GroupsView, private eventBus: EventBus) {
    }

    selectFirstGroupRound(country: Country, groupName: string) {
        this.eventBus.post(new FirstCountryFromGroupSelected(country, groupName))
    }

    selectSecondGroupRound(country: Country, groupName: string) {
        this.eventBus.post(new SecondCountryFromGroupSelected(country, groupName))
    }
}