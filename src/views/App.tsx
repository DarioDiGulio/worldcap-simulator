import { Group } from './components/group/Group'
import { Country } from '../models/Country'
import React from 'react'
import styled from 'styled-components'
import { Row } from './components/Row'
import AppContext from '../infrastructure/AppContext'
import { AppView, AppVM } from './AppView'
import { groups } from '../resourses'

export class App extends React.Component implements AppView {
    presenter = AppContext.presenters.app(this)

    state = {
        model: new AppVM()
    }

    modelChanged(model: AppVM): void {
        this.setState({ model })
    }

    private renderGroups(): React.ReactNode {
        return <>
            <h2>Fase de Grupos</h2>
            <Groups>
                {
                    groups.map(group => {
                        return <Group
                            key={ group.name }
                            name={ group.name }
                            countries={ group.teams.map(team => new Country(team.name, team.flag)) }
                            selectFirst={ (country) => this.presenter.selectFirstGroupRound(country, group.name) }
                            selectSecond={ (country) => this.presenter.selectSecondGroupRound(country, group.name) }
                        />
                    })
                }
            </Groups>
        </>
    }

    private renderSixteenRound(model: AppVM): React.ReactNode {
        const round = model.sixteenRound
        if (round.size === 0) return <></>
        return <>
            <h2>Octavos de Final</h2>
            <Row
                selectWinner={ (winner) => {
                    this.presenter.addSixteenRoundWinner(winner, 'FASB')
                } }
                left={ round.get('A')?.first }
                right={ round.get('B')?.second }
            />
            <Row
                selectWinner={ (winner) => {
                    this.presenter.addSixteenRoundWinner(winner, 'FCSD')
                } }
                left={ round.get('C')?.first }
                right={ round.get('D')?.second }
            />
            <Row
                selectWinner={ (winner) => {
                    this.presenter.addSixteenRoundWinner(winner, 'FESF')
                } }
                left={ round.get('E')?.first }
                right={ round.get('F')?.second }
            />
            <Row
                selectWinner={ (winner) => {
                    this.presenter.addSixteenRoundWinner(winner, 'FGSH')
                } }
                left={ round.get('G')?.first }
                right={ round.get('H')?.second }
            />
            <Row
                selectWinner={ (winner) => {
                    this.presenter.addSixteenRoundWinner(winner, 'FBSA')
                } }
                left={ round.get('B')?.first }
                right={ round.get('A')?.second }
            />
            <Row
                selectWinner={ (winner) => {
                    this.presenter.addSixteenRoundWinner(winner, 'FDSC')
                } }
                left={ round.get('D')?.first }
                right={ round.get('C')?.second }
            />
            <Row
                selectWinner={ (winner) => {
                    this.presenter.addSixteenRoundWinner(winner, 'FFSE')
                } }
                left={ round.get('F')?.first }
                right={ round.get('E')?.second }
            />
            <Row
                selectWinner={ (winner) => {
                    this.presenter.addSixteenRoundWinner(winner, 'FHSG')
                } }
                left={ round.get('H')?.first }
                right={ round.get('G')?.second }
            />
        </>
    }

    private renderQuarterFinals(model: AppVM): React.ReactNode {
        const round = model.quarterFinal
        if (round.size === 0) return <></>
        return <>
            <h2>Cuartos de Final</h2>
            <Row
                left={ round.get('FASB') }
                right={ round.get('FCSD') }
                selectWinner={ (winner) => {
                    this.presenter.addQuarterWinner(winner, 'A1')
                } }
            />
            <Row
                left={ round.get('FESF') }
                right={ round.get('FGSH') }
                selectWinner={ (winner) => {
                    this.presenter.addQuarterWinner(winner, 'A2')
                } }
            />
            <Row
                left={ round.get('FBSA') }
                right={ round.get('FDSC') }
                selectWinner={ (winner) => {
                    this.presenter.addQuarterWinner(winner, 'B1')
                } }
            />
            <Row
                left={ round.get('FFSE') }
                right={ round.get('FHSG') }
                selectWinner={ (winner) => {
                    this.presenter.addQuarterWinner(winner, 'B2')
                } }
            />
        </>
    }

    private renderSemiFinal(model: AppVM): React.ReactNode {
        const round = model.semiFinal
        if (round.size === 0) return <></>
        return <>
            <h2>Semi Final</h2>
            <Row
                left={ round.get('A1') }
                right={ round.get('A2') }
                selectWinner={ (winner) => {
                    this.presenter.addSemiFinalWinner(winner, 'FINAL-LEFT')
                } }
            />
            <Row
                left={ round.get('B1') }
                right={ round.get('B2') }
                selectWinner={ (winner) => {
                    this.presenter.addSemiFinalWinner(winner, 'FINAL-RIGHT')
                } }
            />
        </>
    }

    renderFinal(model: AppVM): React.ReactNode {
        const round = model.final
        if (round.size === 0) return <></>
        return <>
            <h2>Final</h2>
            <Row
                left={ round.get('FINAL-LEFT') }
                right={ round.get('FINAL-RIGHT') }
                selectWinner={() => {}}
            />
        </>
    }

    render() {
        const model = this.state.model
        return (
            <Container>
                { this.renderGroups() }
                { this.renderSixteenRound(model) }
                { this.renderQuarterFinals(model) }
                { this.renderSemiFinal(model) }
                { this.renderFinal(model) }
            </Container>
        )
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

const Groups = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`
