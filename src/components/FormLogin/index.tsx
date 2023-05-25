import authenticate from '../../shared/services/authentication'
import { IFormInput } from '../../shared/types/FormLogin'
import { ContainerLogin } from './style'
import { useForm, SubmitHandler } from 'react-hook-form'
export const FormLogin = () => {
    const { register, handleSubmit } = useForm<IFormInput>()
    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        const isAuthenticated = await authenticate(data.apikey)

        if (isAuthenticated) {
            console.log('entrou')
            //navigate
        }
    }
    return (
        <ContainerLogin>
            <div className="register">
                <span>
                    Não possui uma Api Key ?{' '}
                    <a href="https://dashboard.api-football.com/">
                        Cadastre-se
                    </a>
                </span>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="form_login">
                <div className="header_login">
                    <h1>Entrar no Meu Time</h1>
                    <h3> insira seus detalhes abaixo </h3>
                </div>
                <label htmlFor="login" className="form_login_label">
                    API Key
                </label>
                <input
                    id="login"
                    className="form_login_input"
                    placeholder=" Digite sua Api key"
                    {...register('apikey')}
                />
                <div className="form_login_checkbox">
                    <input type="checkbox" />
                    <label>Salvar</label>
                    <span className="checkmark"></span>
                </div>
                <button type="submit"> Entrar </button>
            </form>
        </ContainerLogin>
    )
}
