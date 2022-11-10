import React from 'react'
import styled from 'styled-components'

export const Radio: React.FC<Props> = (props) => {
    return <Container>
        <Input type="radio" name={ props.name } onInput={ props.onInput }/>
    </Container>
}

const Container = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`

enum StatusColors {
    GREY = '#CFCFCF',
    DARK_GREY = '#A7A7A7',
}

const Input = styled.input`
  cursor: pointer;
  -webkit-appearance: none;
  appearance: none;
  margin: 0;
  width: 1.5em;
  height: 1.5em;
  border: 2px solid ${ StatusColors.DARK_GREY };
  border-radius: 50%;
  transition: all 0.1s ease-in-out;

  ::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 0.75em;
    height: 0.75em;
    margin: 3px;
  }

  :checked {
    ::after {
      background-color: ${ StatusColors.DARK_GREY };
    }

    :hover {
      background-color: #FAFAFA;
      border: 2px solid ${ StatusColors.DARK_GREY };

      ::after {
        background-color: ${ StatusColors.DARK_GREY };
      }
    }
  }

  :hover {
    ::after {
      background-color: ${ StatusColors.GREY };
    }
  }
}
`

interface Props {
    name: string
    onInput: () => void
}