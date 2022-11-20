import React from 'react'
import styled from 'styled-components'
import { Country } from '../../../models/Country'
import classNames from 'classnames'
import { Direction } from '../../../models/Direction'
import { RowView } from './RowView'
import { RowVM } from './RowVM'
import AppContext from '../../../infrastructure/AppContext'

export class Row extends React.Component<Props> implements RowView {
    presenter = AppContext.presenters.row(this)

    state = {
        model: new RowVM(),
    }

    modelChanged(model: RowVM): void {
        this.setState({ model })
    }

    render() {
        if (this.props.left === undefined && this.props.right === undefined) return null
        return <Container>
            <div
                onClick={ () => {
                    if (!this.props.left) return
                    this.props.selectWinner(this.props.left)
                    this.presenter.leftClicked()
                    if (this.props.selectLooser && this.props.right) this.props.selectLooser(this.props.right)
                } }
                className={ classNames({ selected: this.state.model.isLeftSelected }) }
            >
                { this.props.left && this.props.left.fullNameOriented() || this.props.leftEmpty }
            </div>
            <p>vs</p>
            <div
                onClick={ () => {
                    if (!this.props.right) return
                    this.props.selectWinner(this.props.right)
                    this.presenter.rightClicked()
                    if (this.props.selectLooser && this.props.left) this.props.selectLooser(this.props.left)
                } }
                className={ classNames({ selected: this.state.model.isRightSelected }) }
            >
                { this.props.right && this.props.right.fullNameOriented(Direction.right) || this.props.rightEmpty }
            </div>
        </Container>
    }
}

const Container = styled.div`
  width: 45%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 5px;
  border-top: 1px solid rgba(213, 213, 213, .2);

  div {
    width: 80%;
    min-width: 100px;
    cursor: pointer;
    padding: 5px;
  }

  div:first-child {
    text-align: left;
  }

  div:last-child {
    text-align: right;
  }

  div.selected {
    background-color: rgba(154, 255, 127, .2);
    transform: scale(1.2);
  }
`

interface Props {
    left: Country | undefined
    leftEmpty?: string
    rightEmpty?: string
    right: Country | undefined
    selectWinner: (country: Country) => void
    selectLooser?: (country: Country) => void
}