import { Group } from './components/group/Group'
import { Country } from '../models/Country'
import React from 'react'
import styled from 'styled-components'

export const App: React.FC = () => {
    return <Groups>
        <Group name="A" countries={
            [
                new Country('🇶🇦 Qatar'),
                new Country('🇪🇨 Ecuador'),
                new Country('🇸🇳 Senegal'),
                new Country('🇳🇱 Holanda'),
            ]
        }/>
        <Group name="B" countries={
            [
                new Country('🏴󠁧󠁢󠁥󠁮󠁧󠁿 Inglaterra'),
                new Country('🇮🇷 Irán'),
                new Country('🇺🇸 EE.UU.'),
                new Country('🏴󠁧󠁢󠁷󠁬󠁳󠁿 Gales'),
            ]
        }/>
        <Group name="C" countries={
            [
                new Country('🇦🇷 Argentina'),
                new Country('🇲🇽 México'),
                new Country('🇸🇦 A. Saudita'),
                new Country('🇵🇱 Polonia'),
            ]
        }/>
        <Group name="D" countries={
            [
                new Country('🇫🇷 Francia'),
                new Country('🇦🇺 Australia'),
                new Country('🇩🇰 Dinamarca'),
                new Country('🇹🇳 Túnez'),
            ]
        }/>
        <Group name="E" countries={
            [
                new Country('🇪🇸 España'),
                new Country('🇨🇷 Costa Rica'),
                new Country('🇩🇪 Alemania'),
                new Country('🇯🇵 Japón'),
            ]
        }/>
        <Group name="F" countries={
            [
                new Country('🇧🇪 Bélgica'),
                new Country('🇨🇦 Canadá'),
                new Country('🇲🇦 Marruecos'),
                new Country('🇭🇷 Croacia'),
            ]
        }/>
        <Group name="G" countries={
            [
                new Country('🇧🇷 Brasil'),
                new Country('🇷🇸 Serbia'),
                new Country('🇨🇭 Suiza'),
                new Country('🇨🇲 Camerún'),
            ]
        }/>
        <Group name="H" countries={
            [
                new Country('🇵🇹 Portugal'),
                new Country('🇬🇭 Ghana'),
                new Country('🇺🇾 Uruguay'),
                new Country('🇰🇷 R. de Corea'),
            ]
        }/>
    </Groups>
}

const Groups = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0 200px;
`
