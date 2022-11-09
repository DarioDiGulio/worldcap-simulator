import React from 'react'
import styled from 'styled-components'
import { Country } from '../../models/Country'

export const Row: React.FC<Props> = (props) => {
    return <Container>
        <div>{props.left && props.left.name}</div>
        <div>{props.right && props.right.name}</div>
    </Container>
}

const Container = styled.div`
  display: flex;
  justify-content: space-around;
`

interface Props {
    left: Country | undefined
    right: Country | undefined
}