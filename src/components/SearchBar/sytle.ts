import styled from 'styled-components'

export const ContainerSearchBar = styled.div`
    display: flex;
    justify-content: center;
    gap: 40px;
    background-color: #2bab54;
    border: 2px solid #2bab54;
    border-radius: 8px;
    padding: 10px;

    @media (max-width: 680px) {
        flex-direction: column;
    }
`

export const Select = styled.select`
    width: auto;
    height: 2.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 6px 12px;
    font-size: 14px;
    color: #fff;
    background-color: #2bab54;

    @media (max-width: 680px) {
        width: 100%;
    }
`

export const Button = styled.button`
    background-color: #2bab54;
    height: 2.1rem;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
`

export const LabelSearchBar = styled.label`
    font-size: 16px;
    font-weight: bold;
    height: 1.2rem;
    display: flex;
    align-items: center;
    color: #fff;
`

export const WrapperLabel = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;

    @media (max-width: 680px) {
        flex-direction: column;
    }
`
