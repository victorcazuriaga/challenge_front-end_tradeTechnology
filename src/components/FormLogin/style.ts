import styled from 'styled-components'

export const ContainerLogin = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 2;
    height: 100%;
    position: relative;
    a {
        text-decoration: none;
        color: var(--primary-color);
        font: var(--subheading-1);
        font-weight: bold;
    }

    .register {
        padding: 0.625rem;
        position: absolute;
        top: 0;
        right: 0;
        font: var(--subheading-1);
    }
    .header_login {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 20%;
        box-sizing: border-box;
    }

    .form_login {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 1.25rem;
        height: 40%;
        align-items: center;
        label {
            font: var(--subheading-1);
            font-weight: bold;
        }
        input {
            width: 70%;
            height: 1.7rem;
            border: solid 1px #eeeff1;
            border-radius: 3px;
        }

        button {
            color: white;
            font: var(--heading-4);
            width: 70%;
            border-radius: 3px;
            border: none;
            background-color: var(--primary-color);
            box-shadow: 0px 0px 5px var(--primary-color);
            padding: 0.625rem 1.25rem;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }
        button:hover {
            background-color: #45c46f;
        }
        button:active {
            filter: saturate(80%);
        }
    }
    .form_login_checkbox {
        display: flex;
        align-items: center;
        input[type='checkbox'] {
            appearance: none;
            width: 1.3rem;
            height: 1.3rem;
            border: 2px solid #2bab54;
            border-radius: 4px;
            outline: none;
            margin-right: 0.625rem;
            cursor: pointer;
        }

        input:checked {
            background-color: var(--primary-color);
        }
        label {
            color: var(--primary-color);
            font-weight: bold;
        }
    }
`
