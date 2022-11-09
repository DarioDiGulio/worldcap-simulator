import React from 'react'
import styled from 'styled-components'
import { Country } from '../../models/Country'

export const Row: React.FC<Props> = (props) => {
    if (props.left === undefined && props.right === undefined) return null
    return <Container>
        <div
            onClick={() => {
                if (!props.left) return
                props.selectWinner(props.left.name)
            }}>
            {props.left && props.left.name}
        </div>
        <p>vs</p>
        <div
            onClick={() => {
                if (!props.right) return
                props.selectWinner(props.right.name)
            }}>
            {props.right && props.right.name}
        </div>
    </Container>
}

const Container = styled.div`
  width: 35%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 5px;
  border-top: 1px solid rgba(213, 213, 213, .2);

  div {
    width: 40%;
  }

  div:first-child {
    text-align: left;
  }

  div:last-child {
    text-align: right;
  }
`

interface Props {
    left: Country | undefined
    right: Country | undefined
    selectWinner: (winner: string) => void
}