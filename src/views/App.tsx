import { Group } from './components/group/Group'
import { Country } from '../models/Country'
import React from 'react'
import styled from 'styled-components'
import { Row } from './components/Row'
import AppContext from '../infrastructure/AppContext'
import { AppView, AppVM } from './AppView'

export class App extends React.Component implements AppView {
    presenter = AppContext.presenters.app(this)

    state = {
        model: new AppVM()
    }
    modelChanged(model: AppVM): void {
        this.setState({model})
    }

    private renderGroups(): React.ReactNode {
        return <>
            <h2>Fase de Grupos</h2>
            <Groups>
                <Group
                    selectFirst={(countryName) => this.presenter.selectFirstEight(countryName, 'A')}
                    selectSecond={(countryName) => this.presenter.selectSecondEight(countryName, 'A')}
                    name="A" countries={
                    [
                        new Country('🇶🇦 Qatar'),
                        new Country('🇪🇨 Ecuador'),
                        new Country('🇸🇳 Senegal'),
                        new Country('🇳🇱 Holanda'),
                    ]
                }/>
                <Group
                    selectFirst={(countryName) => this.presenter.selectFirstEight(countryName, 'B')}
                    selectSecond={(countryName) => this.presenter.selectSecondEight(countryName, 'B')}
                    name="B"
                    countries={
                        [
                            new Country('🏴󠁧󠁢󠁥󠁮󠁧󠁿 Inglaterra'),
                            new Country('🇮🇷 Irán'),
                            new Country('🇺🇸 EE.UU.'),
                            new Country('🏴󠁧󠁢󠁷󠁬󠁳󠁿 Gales'),
                        ]
                    }/>
                <Group
                    selectFirst={(countryName) => this.presenter.selectFirstEight(countryName, 'C')}
                    selectSecond={(countryName) => this.presenter.selectSecondEight(countryName, 'C')}
                    name="C"
                    countries={
                        [
                            new Country('🇦🇷 Argentina'),
                            new Country('🇲🇽 México'),
                            new Country('🇸🇦 A. Saudita'),
                            new Country('🇵🇱 Polonia'),
                        ]
                    }/>
                <Group
                    selectFirst={(countryName) => this.presenter.selectFirstEight(countryName, 'D')}
                    selectSecond={(countryName) => this.presenter.selectSecondEight(countryName, 'D')}
                    name="D"
                    countries={
                        [
                            new Country('🇫🇷 Francia'),
                            new Country('🇦🇺 Australia'),
                            new Country('🇩🇰 Dinamarca'),
                            new Country('🇹🇳 Túnez'),
                        ]
                    }/>
                <Group
                    selectFirst={(countryName) => this.presenter.selectFirstEight(countryName, 'E')}
                    selectSecond={(countryName) => this.presenter.selectSecondEight(countryName, 'E')}
                    name="E"
                    countries={
                        [
                            new Country('🇪🇸 España'),
                            new Country('🇨🇷 Costa Rica'),
                            new Country('🇩🇪 Alemania'),
                            new Country('🇯🇵 Japón'),
                        ]
                    }/>
                <Group
                    selectFirst={(countryName) => this.presenter.selectFirstEight(countryName, 'F')}
                    selectSecond={(countryName) => this.presenter.selectSecondEight(countryName, 'F')}
                    name="F"
                    countries={
                        [
                            new Country('🇧🇪 Bélgica'),
                            new Country('🇨🇦 Canadá'),
                            new Country('🇲🇦 Marruecos'),
                            new Country('🇭🇷 Croacia'),
                        ]
                    }/>
                <Group
                    selectFirst={(countryName) => this.presenter.selectFirstEight(countryName, 'G')}
                    selectSecond={(countryName) => this.presenter.selectSecondEight(countryName, 'G')}
                    name="G"
                    countries={
                        [
                            new Country('🇧🇷 Brasil'),
                            new Country('🇷🇸 Serbia'),
                            new Country('🇨🇭 Suiza'),
                            new Country('🇨🇲 Camerún'),
                        ]
                    }/>
                <Group
                    selectFirst={(countryName) => this.presenter.selectFirstEight(countryName, 'H')}
                    selectSecond={(countryName) => this.presenter.selectSecondEight(countryName, 'H')}
                    name="H"
                    countries={
                        [
                            new Country('🇵🇹 Portugal'),
                            new Country('🇬🇭 Ghana'),
                            new Country('🇺🇾 Uruguay'),
                            new Country('🇰🇷 R. de Corea'),
                        ]
                    }/>
            </Groups>
        </>
    }

    private renderEightFinals(model: AppVM): React.ReactNode {
        if (this.state.model.eightFinal.size === 0) return <></>
        return <>
            <h2>Octavos de Final</h2>
            <Row selectWinner={(winner) => {this.presenter.addCuarterWinner(winner, 'FASB')}} left={model.eightFinal.get('A')?.first} right={model.eightFinal.get('B')?.second}/>
            <Row selectWinner={(winner) => {this.presenter.addCuarterWinner(winner, 'FCSD')}} left={model.eightFinal.get('C')?.first} right={model.eightFinal.get('D')?.second}/>
            <Row selectWinner={(winner) => {this.presenter.addCuarterWinner(winner, 'FESF')}} left={model.eightFinal.get('E')?.first} right={model.eightFinal.get('F')?.second}/>
            <Row selectWinner={(winner) => {this.presenter.addCuarterWinner(winner, 'FGSH')}} left={model.eightFinal.get('G')?.first} right={model.eightFinal.get('H')?.second}/>
            <Row selectWinner={(winner) => {this.presenter.addCuarterWinner(winner, 'FBSA')}} left={model.eightFinal.get('B')?.first} right={model.eightFinal.get('A')?.second}/>
            <Row selectWinner={(winner) => {this.presenter.addCuarterWinner(winner, 'FDSC')}} left={model.eightFinal.get('D')?.first} right={model.eightFinal.get('C')?.second}/>
            <Row selectWinner={(winner) => {this.presenter.addCuarterWinner(winner, 'FFSE')}} left={model.eightFinal.get('F')?.first} right={model.eightFinal.get('E')?.second}/>
            <Row selectWinner={(winner) => {this.presenter.addCuarterWinner(winner, 'FHSG')}} left={model.eightFinal.get('H')?.first} right={model.eightFinal.get('G')?.second}/>
        </>
    }

    private renderCuarterFinals(model: AppVM): React.ReactNode {
        // if (this.state.model.cuarterFinal.size === 0) return <></>
        return <>
            <h2>Cuartos de Final</h2>
            <Row left={model.cuarterFinal.get('FASB')} right={model.cuarterFinal.get('FCSD')} selectWinner={() => {}} />
            <Row left={model.cuarterFinal.get('FESF')} right={model.cuarterFinal.get('FGSH')} selectWinner={() => {}} />
            <Row left={model.cuarterFinal.get('FBSA')} right={model.cuarterFinal.get('FDSC')} selectWinner={() => {}} />
            <Row left={model.cuarterFinal.get('FFSE')} right={model.cuarterFinal.get('FHSG')} selectWinner={() => {}} />
        </>

    }

    render() {
        const model = this.state.model
        return (
            <Container>
                {this.renderGroups()}
                {this.renderEightFinals(model)}
                {this.renderCuarterFinals(model)}
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
  padding: 0 200px;
`
