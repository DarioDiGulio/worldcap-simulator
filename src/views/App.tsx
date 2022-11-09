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

    selectFirst(countryName: string, group: string) {
        this.presenter.selectFirst(countryName, group)
    }

    selectSecond(countryName: string, group: string) {
        this.presenter.selectSecond(countryName, group)
    }

    modelChanged(model: AppVM): void {
        this.setState({model})
    }

    render() {
        const model = this.state.model
        return (
            <Container>
                <h2>Fase de Grupos</h2>
                <Groups>
                    <Group
                        selectFirst={(countryName) => this.selectFirst(countryName, 'A')}
                        selectSecond={(countryName) => this.selectSecond(countryName, 'A')}
                        name="A" countries={
                        [
                            new Country('🇶🇦 Qatar'),
                            new Country('🇪🇨 Ecuador'),
                            new Country('🇸🇳 Senegal'),
                            new Country('🇳🇱 Holanda'),
                        ]
                    }/>
                    <Group
                        selectFirst={(countryName) => this.selectFirst(countryName, 'B')}
                        selectSecond={(countryName) => this.selectSecond(countryName, 'B')}
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
                        selectFirst={(countryName) => this.selectFirst(countryName, 'C')}
                        selectSecond={(countryName) => this.selectSecond(countryName, 'C')}
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
                        selectFirst={(countryName) => this.selectFirst(countryName, 'D')}
                        selectSecond={(countryName) => this.selectSecond(countryName, 'D')}
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
                        selectFirst={(countryName) => this.selectFirst(countryName, 'E')}
                        selectSecond={(countryName) => this.selectSecond(countryName, 'E')}
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
                        selectFirst={(countryName) => this.selectFirst(countryName, 'F')}
                        selectSecond={(countryName) => this.selectSecond(countryName, 'F')}
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
                        selectFirst={(countryName) => this.selectFirst(countryName, 'G')}
                        selectSecond={(countryName) => this.selectSecond(countryName, 'G')}
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
                        selectFirst={(countryName) => this.selectFirst(countryName, 'H')}
                        selectSecond={(countryName) => this.selectSecond(countryName, 'H')}
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
                <h2>Octavos de Final</h2>
                <Row left={model.eightFinal.get('A')?.first} right={model.eightFinal.get('B')?.second}/>
                <Row left={model.eightFinal.get('C')?.first} right={model.eightFinal.get('D')?.second}/>
                <Row left={model.eightFinal.get('E')?.first} right={model.eightFinal.get('F')?.second}/>
                <Row left={model.eightFinal.get('G')?.first} right={model.eightFinal.get('H')?.second}/>
                <Row left={model.eightFinal.get('B')?.first} right={model.eightFinal.get('A')?.second}/>
                <Row left={model.eightFinal.get('D')?.first} right={model.eightFinal.get('C')?.second}/>
                <Row left={model.eightFinal.get('F')?.first} right={model.eightFinal.get('E')?.second}/>
                <Row left={model.eightFinal.get('H')?.first} right={model.eightFinal.get('G')?.second}/>
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
