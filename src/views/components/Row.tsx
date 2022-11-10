import React, { useState } from 'react'
import styled from 'styled-components'
import { Country } from '../../models/Country'
import classNames from 'classnames'

export const Row: React.FC<Props> = (props) => {
    const [ isLeftSelected, setIsLeftSelected ] = useState(false)
    const [ isRightSelected, setIsRightSelected ] = useState(false)

    if (props.left === undefined && props.right === undefined) return null
    return <Container>
        <div
            onClick={() => {
                if (!props.left) return
                props.selectWinner(props.left.name)
                setIsLeftSelected(!isLeftSelected)
                setIsRightSelected(false)
            }}
            className={classNames({ selected: isLeftSelected })}
        >
            {props.left && props.left.name}
        </div>
        <p>vs</p>
        <div
            onClick={() => {
                if (!props.right) return
                props.selectWinner(props.right.name)
                setIsRightSelected(!isRightSelected)
                setIsLeftSelected(false)
            }}
            className={classNames({ selected: isRightSelected })}
        >
            {props.right && props.right.name}
        </div>
    </Container>
}

const Container = styled.div`
  width: 45%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 5px;
  border-top: 1px solid rgba(213, 213, 213, .2);

  div {
    width: 40%;
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
    right: Country | undefined
    selectWinner: (winner: string) => void
}