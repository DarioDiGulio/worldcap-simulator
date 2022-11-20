import { Country } from '../models/Country'
import React from 'react'
import styled from 'styled-components'
import { Row } from './components/Row/Row'
import AppContext from '../infrastructure/AppContext'
import { AppView, AppVM, Classifieds } from './AppView'
import Swal from 'sweetalert'
import { Groups } from './groups/Groups'

export class App extends React.Component implements AppView {
    presenter = AppContext.presenters.app(this)

    state = {
        model: new AppVM()
    }

    modelChanged(model: AppVM): void {
        this.setState({ model })
    }

    alert(title: string, message: string): void {
        Swal({
            title: title,
            text: message,
            icon: 'success',
            buttons: [ false, false ]
        })
    }

    render() {
        const model = this.state.model
        return (
            <Container>
                <Groups />
                { this.renderSixteenRound(model.sixteenRound) }
                { this.renderQuarterFinals(model.quarterFinal) }
                { this.renderSemiFinal(model.semiFinal) }
                { this.renderThirdPhase(model.third) }
                { this.renderFinal(model.final) }
            </Container>
        )
    }

    private renderSixteenRound(round: Map<string, Classifieds>): React.ReactNode {
        if (round.size === 0) return <></>
        return <>
            <h2>Octavos de Final</h2>
            <Row
                selectWinner={ winner => {
                    this.presenter.addSixteenRoundWinner(winner, 'FASB')
                } }
                left={ round.get('A')?.first }
                right={ round.get('B')?.second }
                leftEmpty='1º A'
                rightEmpty='2º B'
            />
            <Row
                selectWinner={ winner => {
                    this.presenter.addSixteenRoundWinner(winner, 'FCSD')
                } }
                left={ round.get('C')?.first }
                right={ round.get('D')?.second }
                leftEmpty='1º C'
                rightEmpty='2º D'
            />
            <Row
                selectWinner={ winner => {
                    this.presenter.addSixteenRoundWinner(winner, 'FESF')
                } }
                left={ round.get('E')?.first }
                right={ round.get('F')?.second }
                leftEmpty='1º E'
                rightEmpty='2º F'
            />
            <Row
                selectWinner={ winner => {
                    this.presenter.addSixteenRoundWinner(winner, 'FGSH')
                } }
                left={ round.get('G')?.first }
                right={ round.get('H')?.second }
                leftEmpty='1º G'
                rightEmpty='2º H'
            />
            <Row
                selectWinner={ winner => {
                    this.presenter.addSixteenRoundWinner(winner, 'FBSA')
                } }
                left={ round.get('B')?.first }
                right={ round.get('A')?.second }
                leftEmpty='1º B'
                rightEmpty='2º A'
            />
            <Row
                selectWinner={ winner => {
                    this.presenter.addSixteenRoundWinner(winner, 'FDSC')
                } }
                left={ round.get('D')?.first }
                right={ round.get('C')?.second }
                leftEmpty='1º D'
                rightEmpty='2º C'
            />
            <Row
                selectWinner={ winner => {
                    this.presenter.addSixteenRoundWinner(winner, 'FFSE')
                } }
                left={ round.get('F')?.first }
                right={ round.get('E')?.second }
                leftEmpty='1º F'
                rightEmpty='2º E'
            />
            <Row
                selectWinner={ winner => {
                    this.presenter.addSixteenRoundWinner(winner, 'FHSG')
                } }
                left={ round.get('H')?.first }
                right={ round.get('G')?.second }
                leftEmpty='1º H'
                rightEmpty='2º G'
            />
        </>
    }

    private renderQuarterFinals(round: Map<string, Country>): React.ReactNode {
        if (round.size === 0) return <></>
        return <>
            <h2>Cuartos de Final</h2>
            <Row
                left={ round.get('FASB') }
                right={ round.get('FCSD') }
                selectWinner={ winner => {
                    this.presenter.addQuarterWinner(winner, 'A1')
                } }
            />
            <Row
                left={ round.get('FESF') }
                right={ round.get('FGSH') }
                selectWinner={ winner => {
                    this.presenter.addQuarterWinner(winner, 'A2')
                } }
            />
            <Row
                left={ round.get('FBSA') }
                right={ round.get('FDSC') }
                selectWinner={ winner => {
                    this.presenter.addQuarterWinner(winner, 'B1')
                } }
            />
            <Row
                left={ round.get('FFSE') }
                right={ round.get('FHSG') }
                selectWinner={ winner => {
                    this.presenter.addQuarterWinner(winner, 'B2')
                } }
            />
        </>
    }

    private renderSemiFinal(round: Map<string, Country>): React.ReactNode {
        if (round.size === 0) return <></>
        return <>
            <h2>Semi Final</h2>
            <Row
                left={ round.get('A1') }
                right={ round.get('A2') }
                selectWinner={ winner => {
                    this.presenter.addSemiFinalWinner(winner, 'FINAL-LEFT')
                } }
                selectLooser={ (looser) => {
                    this.presenter.addSemiFinalLooser(looser, 'THIRD-LEFT')
                } }
            />
            <Row
                left={ round.get('B1') }
                right={ round.get('B2') }
                selectWinner={ winner => {
                    this.presenter.addSemiFinalWinner(winner, 'FINAL-RIGHT')
                } }
                selectLooser={ (looser) => {
                    this.presenter.addSemiFinalLooser(looser, 'THIRD-RIGHT')
                } }
            />
        </>
    }

    private renderFinal(round: Map<string, Country>): React.ReactNode {
        if (round.size === 0) return <></>
        return <>
            <h2>Final</h2>
            <Row
                left={ round.get('FINAL-LEFT') }
                right={ round.get('FINAL-RIGHT') }
                selectWinner={ winner => {
                    this.presenter.showChampion(winner)
                } }
            />
        </>
    }

    private renderThirdPhase(round: Map<string, Country>) {
        if (round.size === 0) return <></>
        return <>
            <h2>Tercer Puesto</h2>
            <Row
                left={ round.get('THIRD-LEFT') }
                right={ round.get('THIRD-RIGHT') }
                selectWinner={ () => {} }
            />
        </>
    }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    text-align: center;
  }
`
