export function clone<T extends object>(obj: T): T {
    return Object.assign({}, obj);
}
