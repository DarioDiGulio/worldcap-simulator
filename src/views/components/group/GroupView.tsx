import { Country } from '../../../models/Country'

export class GroupVM {
    first: Country | null = null
    second: Country | null = null
}

export interface GroupView {
    modelChanged(model: GroupVM): void
}