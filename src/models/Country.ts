import { Direction } from './Direction'

export class Country {
    constructor(public name: string, public flag: string) {}

    fullNameOriented(direction: Direction = Direction.left) {
        if (direction === Direction.right) return `${this.name} ${this.flag}`
        return `${this.flag} ${this.name}`
    }
}
