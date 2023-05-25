import styled from 'styled-components'

export const ContainerContentDisplay = styled.div`
    display: flex;
    flex-direction: column;
    /* background-color: red; */
`

export const SwitchButton = styled.button<{ active: boolean }>`
    height: 40px;
    background-color: ${(props) => (props.active ? '#fff' : '#ccc')};
    color: ${(props) => (props.active ? '#000' : '#555')};
    border: none;
    outline: none;
    cursor: pointer;
`
