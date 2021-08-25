import { useState } from 'react';
import { useHistory } from 'react-router';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { ReactComponent as MainImage } from '../../../core/assets/main.svg'
import { makeRequest } from '../../../core/utils/requests';
import AuthCard from '../components/AuthCard';
import AuthCardButton from '../components/AuthCardButton';

type CreateAccountData = {
    name: string;
    email: string;
    password: string;
}

const CreateAccount = () => {
    const { register, handleSubmit } = useForm<CreateAccountData>();
    const [hasError, setHasError] = useState(false);
    const history = useHistory();

    const onSubmit = (createAccountData: CreateAccountData) => {
        const payload = {
            name: createAccountData.name,
            email: createAccountData.email,
            password: createAccountData.password,
            roles: [{
                id: 2
            }]
        }

        makeRequest({
            url: '/users',
            method: 'POST',
            data: payload
        }).then(() => {
            toast.success('Usuário criado com sucesso!');
            history.push('/login')
          }).catch(() => {
            toast.error('Erro ao tentar criar o usuário!');
        })
    }

    return (
        <div className="home-container">
            <div className="home-content">
                <div className="home-left">
                    <h1 className="home-title">Avalie Filmes</h1>
                    <h2 className="home-subtitle">Diga o que você achou do seu filme favorito</h2>
                    <div className="home-image-container">
                        <MainImage />
                    </div>
                </div>
                <AuthCard title="Criar Conta">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        {hasError && (
                            <div className="alert">
                                <p className="alert-text">Usuário ou senha inválidos!</p>
                                <span className="close" onClick={() => setHasError(false)}>X</span>
                            </div>
                        )}
                        <input
                            {...register("name", { required: true },)}
                            type="text"
                            placeholder="Nome"
                            className="auth-input"
                        />
                        <input
                            {...register("email", { required: true },)}
                            type="email"
                            placeholder="Email"
                            className="auth-input"
                        />
                        <input
                            {...register("password", { required: true })}
                            type="password"
                            placeholder="Senha"
                            className="auth-input"
                        />
                        <AuthCardButton buttonTitle="Cadastrar" />
                    </form>
                </AuthCard>
            </div>
        </div>
    )
}

export default CreateAccount;
