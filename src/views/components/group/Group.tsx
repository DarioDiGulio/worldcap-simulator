import React from 'react'
import styled from 'styled-components'
import { Country } from '../../../models/Country'
import { GroupView, GroupVM } from './GroupView'
import AppContext from '../../../infrastructure/AppContext'

export class Group extends React.Component<Props, any> implements GroupView {
    presenter = AppContext.presenters.group(this)

    state = {
        model: new GroupVM(),
    }

    modelChanged(model: GroupVM): void {
        this.setState({ model })
    }

    async componentDidMount() {
        await this.presenter.start()
    }

    render() {
        return <Table>
            <Header>
                <p>Group {this.props.name}</p>
                <p>1º</p>
                <p>2º</p>
            </Header>
            {this.props.countries.map(country => {
                return (
                    <Row>
                        <p key={country.name}>{country.name}</p>
                        <input type="radio" name={`first-${this.props.name}`} value={country.name}/>
                        <input type="radio" name={`second-${this.props.name}`} value={country.name}/>
                    </Row>
                )
            })}
        </Table>
    }
}

const Table = styled.div`
  max-width: 300px;
  min-width: 300px;
  border-radius: 10px;
  box-shadow: 5px 5px 10px -5px rgba(0, 0, 0, .7);
  margin: 25px 25px;
`

const Header = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: rgb(167, 167, 167);
  border: none;
  border-radius: 10px 10px 0 0;
  color: white;
`

const Row = styled.div`
  border-top: 1px solid rgba(213, 213, 213, .2);
  margin: 1px;
  padding: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

interface Props {
    name: string
    countries: Country[]
}