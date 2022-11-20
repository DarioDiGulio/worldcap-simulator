import { RowVM } from './RowVM'

export interface RowView {
    modelChanged(model: RowVM): void
}