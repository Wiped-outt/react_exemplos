// Importa o React e os hooks necessários do React
import React, { useState } from 'react';
// Importa hook useForm do react-hook-form para lidar com formulários de maneiras eficiente
// Obs: Para instalar (npm install react-hook-form)
import { useForm } from 'react-hook-form';
// Importa o arquivo style.css
import '../css/style.css';
// Importa a imagem de fundo do login
import minhaImagem from '../images/login.jpg';
// Importa a imagem de verificação
import verified from '../images/verified.png';

// Função principal que representa o componente do formulário
function MyForm() {
    // Destruturação do objeto retornado pelo hook useForm
    //  formState é um objeto que contém o estado do formulário, e errors é uma propriedade desse objeto
    const { register, handleSubmit, formState: {errors } } = useForm();
    // Estado local para controlar o estado do formulário
    const [status, setStatus] = useState({ submittedSuccessfully: false, loading: false, showPassword: false });

    // Função que é chamada quando o formulário é enviado
    const onSubmit = data => {
        // { ...status }: O operador de propagação (...) é utilizado para criar uma cópia do estado atual (status). isso é feito para garantir que não estamos modificando diretamente o estado anterior, respeitando o principio de imutabilidade no React.
        setStatus({ ...status, loading: true }); // Atualiza o estado para indicar que está carregando

        // Simula um tempo de espera antes de atualizar o estado para sucesso
        setTimeout(() => {
            setStatus({ submittedSuccessfully: true, loading: false });
        }, 1000);
    };

    //  Função para gerar mensagens de erro com base no nome do campo
    const generateErrorMessage = fieldName => {
        return{
            required: `${fieldName} é obrigatório`,
            pattern: fieldName === 'email' ? 'Formato de e-mail inválido' : null
        };
    };

    const handleReturnButtonClick = () => {
        window.location.href = '/';
    };

    return(
        <div className='container'>
            {status.submittedSuccessfully ?(
                <div className='success-message'>
                    <img src={verified} alt='Verificado'/>
                    <h2>Formulário enviado com Sucesso!</h2>
                    <p>Obrigado por enviar o formulário.</p>
                    <button className='btn' onClick={handleReturnButtonClick}>Retornar</button>
                </div>
            ):(
                <div className='form-sign-up'>
                    <div>
                        <img src={minhaImagem} alt='imagem d"e uma pessoa cadastrando'/>
                    </div>

                    <section>
                        <h1>Inscreva-se</h1>

                        {}
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {}
                            <div className='form flex'>
                                <label htmlfor='name'>Nome</label>
                                <input
                                    {...register("firstName", generateErrorMessage("Nome"))}
                                    placeholder="Nome"
                                    id='name'
                                    autoComplete='off'
                                    className={errors.firstName ? 'error' : ''}/>
                                    {errors.firstName && <span className='error.message'>{errors.firstName.message}</span>}
                            </div>
                            {}
                            <div className='form flex'>
                                <label htmlfor='sobrenome'>Sobrenome</label>
                                <input
                                    {...register("lastName", generateErrorMessage("Sobrenome"))}
                                    placeholder="Sobrenome"
                                    id='sobrenome'
                                    autoComplete='off'
                                    className={errors.lastName ? 'error' : ''}/>

                                    {errors.lastName && <span className='error.message'>{errors.lastName.message}</span>}
                            </div>
                            {}
                            <div className='form flex'>
                                <label htmlfor='email'>E-mail</label>
                                <input
                                    {...register("email", generateErrorMessage("E-mail"))}
                                    placeholder="E-mail"
                                    id='email'
                                    autoComplete='off'
                                    className={errors.email ? 'error' : ''}/>
                                    {errors.email && <span className='error.message'>{errors.email.message}</span>}
                            </div>

                            {}
                            <div className='form flex'>
                                <label htmlfor='password'>Senha</label>
                                <div className="password-input-container">
                                    <input
                                        {...register("password", generateErrorMessage("Senha"))}
                                        placeholder="Senha"
                                        id='password'
                                        autoComplete='off'
                                        type={status.showPassword ? 'text': 'password'}
                                        className={errors.password ? 'error' : ''}
                                    />

                                    <button
                                        type="button"
                                        className='password-toggle'
                                        onClick={() => setStatus({...status, showPassword: !status.showPassword})}
                                    >
                                        {status.showPassword ? <i className='fas fa-eye'></i> : <i className='fas fa-eye-slash'></i>}
                                        {}
                                    </button>
                                </div>
                                {errors.password && <span className='error-message'>{errors.password.message}</span>}
                                </div>
                                {}
                                <button className='btn' type="submit" disabled={status.loading}>
                                    {status.loading ? 'Enviando...' :'Enviar'}
                                </button>
                        </form>
                        {status.loading && <p>Carregando...</p>}
                    </section>
                    </div>
            )
            }
        </div>
    );
}

export default MyForm;

