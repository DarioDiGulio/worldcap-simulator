import React from 'react'
import { groups } from '../../resourses'
import { Group } from '../components/group/Group'
import { Country } from '../../models/Country'
import { GroupsView, GroupsVM } from './GroupsView'
import AppContext from '../../infrastructure/AppContext'
import styled from 'styled-components'

export class Groups extends React.Component implements GroupsView {
    presenter = AppContext.presenters.groups(this)

    state = {
        model: new GroupsVM()
    }

    modelChanged(model: GroupsVM): void {
        this.setState({ model })
    }

    render() {
        return <>
            <h2>Fase de Grupos</h2>
            <Container>
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
            </Container>
        </>
    }
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`