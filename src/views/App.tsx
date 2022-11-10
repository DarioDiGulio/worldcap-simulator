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
                            selectFirst={ (country) => this.presenter.selectFirstEight(country, group.name) }
                            selectSecond={ (country) => this.presenter.selectSecondEight(country, group.name) }
                        />
                    })
                }
            </Groups>
        </>
    }

    private renderEightFinals(model: AppVM): React.ReactNode {
        const fase = model.eightFinal
        if (fase.size === 0) return <></>
        return <>
            <h2>Octavos de Final</h2>
            <Row
                selectWinner={ (winner) => {
                    this.presenter.addCuarterWinner(winner, 'FASB')
                } }
                left={ fase.get('A')?.first }
                right={ fase.get('B')?.second }
            />
            <Row
                selectWinner={ (winner) => {
                    this.presenter.addCuarterWinner(winner, 'FCSD')
                } }
                left={ fase.get('C')?.first }
                right={ fase.get('D')?.second }
            />
            <Row
                selectWinner={ (winner) => {
                    this.presenter.addCuarterWinner(winner, 'FESF')
                } }
                left={ fase.get('E')?.first }
                right={ fase.get('F')?.second }
            />
            <Row
                selectWinner={ (winner) => {
                    this.presenter.addCuarterWinner(winner, 'FGSH')
                } }
                left={ fase.get('G')?.first }
                right={ fase.get('H')?.second }
            />
            <Row
                selectWinner={ (winner) => {
                    this.presenter.addCuarterWinner(winner, 'FBSA')
                } }
                left={ fase.get('B')?.first }
                right={ fase.get('A')?.second }
            />
            <Row
                selectWinner={ (winner) => {
                    this.presenter.addCuarterWinner(winner, 'FDSC')
                } }
                left={ fase.get('D')?.first }
                right={ fase.get('C')?.second }
            />
            <Row
                selectWinner={ (winner) => {
                    this.presenter.addCuarterWinner(winner, 'FFSE')
                } }
                left={ fase.get('F')?.first }
                right={ fase.get('E')?.second }
            />
            <Row
                selectWinner={ (winner) => {
                    this.presenter.addCuarterWinner(winner, 'FHSG')
                } }
                left={ fase.get('H')?.first }
                right={ fase.get('G')?.second }
            />
        </>
    }

    private renderCuarterFinals(model: AppVM): React.ReactNode {
        const fase = model.cuarterFinal
        if (fase.size === 0) return <></>
        return <>
            <h2>Cuartos de Final</h2>
            <Row
                left={ fase.get('FASB') }
                right={ fase.get('FCSD') }
                selectWinner={ (winner) => {
                    this.presenter.addSemiWinner(winner, 'A1')
                } }
            />
            <Row
                left={ fase.get('FESF') }
                right={ fase.get('FGSH') }
                selectWinner={ (winner) => {
                    this.presenter.addSemiWinner(winner, 'A2')
                } }
            />
            <Row
                left={ fase.get('FBSA') }
                right={ fase.get('FDSC') }
                selectWinner={ (winner) => {
                    this.presenter.addSemiWinner(winner, 'B1')
                } }
            />
            <Row
                left={ fase.get('FFSE') }
                right={ fase.get('FHSG') }
                selectWinner={ (winner) => {
                    this.presenter.addSemiWinner(winner, 'B2')
                } }
            />
        </>
    }

    private renderSemiFinal(model: AppVM): React.ReactNode {
        const fase = model.semiFinal
        if (fase.size === 0) return <></>
        return <>
            <h2>Semi Final</h2>
            <Row
                left={ fase.get('A1') }
                right={ fase.get('A2') }
                selectWinner={ () => {
                } }
            />
            <Row
                left={ fase.get('B1') }
                right={ fase.get('B2') }
                selectWinner={ () => {
                } }
            />
        </>
    }

    render() {
        const model = this.state.model
        return (
            <Container>
                { this.renderGroups() }
                { this.renderEightFinals(model) }
                { this.renderCuarterFinals(model) }
                { this.renderSemiFinal(model) }
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
