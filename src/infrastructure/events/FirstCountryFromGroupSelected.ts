import { Event } from '../../base/eventBus/EventBus'
import { Country } from '../../models/Country'

export class FirstCountryFromGroupSelected implements Event {
    constructor(public country: Country, public groupName: string) {}
}