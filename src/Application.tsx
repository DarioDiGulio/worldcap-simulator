import ReactDOM from 'react-dom/client'
import React from 'react'
import { App } from './views/App'
import { PresenterFactory } from './infrastructure/PresenterFactory'
import AppContext from './infrastructure/AppContext'

export class Application {
    private presenters!: PresenterFactory

    private createPresenterFactory() {
        this.presenters = new PresenterFactory()
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