import React from 'react'
import styled from 'styled-components'

export const Radio: React.FC<Props> = (props) => {
    return <Container>
        <Input type="radio" name={props.name} onInput={props.onInput}/>
    </Container>
}

const Container = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`

enum StatusColors {
    GREEN = '#EEEBEB',
    DARK_GREEN_FADED = '#CFCFCF',
    DARK_GREEN = '#A7A7A7',
}

const Input = styled.input`
  cursor: pointer;
  -webkit-appearance: none;
  appearance: none;
  margin: 0;
  width: 1.5em;
  height: 1.5em;
  border: 2px solid ${ StatusColors.DARK_GREEN };
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
      background-color: ${ StatusColors.DARK_GREEN };
    }

    :hover {
      background-color: #FAFAFA;
      border: 2px solid ${ StatusColors.DARK_GREEN };

      ::after {
        background-color: ${ StatusColors.DARK_GREEN };
      }
    }
  }

  :hover {
    ::after {
      background-color: ${ StatusColors.DARK_GREEN_FADED };
    }
  }

  :disabled {
    cursor: not-allowed;
    border: 2px solid ${ StatusColors.DARK_GREEN_FADED };
    background-color: ${ StatusColors.GREEN };

    :hover {
      ::after {
        background-color: ${ StatusColors.GREEN };
      }
    }

    :checked {
      ::after {
        background-color: ${ StatusColors.DARK_GREEN_FADED };
      }

      :hover {
        background-color: ${ StatusColors.GREEN };

        ::after {
          background-color: ${ StatusColors.DARK_GREEN_FADED };
        }
      }
    }
  }
`

interface Props {
    name: string
    onInput: () => void
}