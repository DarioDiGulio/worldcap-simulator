import ReactDOM from 'react-dom/client'
import React from 'react'
import { App } from './views/App'
import { PresenterFactory } from './infrastructure/PresenterFactory'
import AppContext from './infrastructure/AppContext'
import { EventBus } from './base/eventBus/EventBus'

export class Application {
    private presenters!: PresenterFactory
    private eventBus!: EventBus

    private createPresenterFactory() {
        this.eventBus = new EventBus()
        this.presenters = new PresenterFactory(this.eventBus)
    }

    private initializeAppContext() {
        AppContext.presenters = this.presenters
    }

    render() {
        this.createPresenterFactory()
        this.initializeAppContext()
        const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
        root.render(<App />)
    }
}