import { useNavigate, Link } from 'react-router-dom'
import { Container } from './styles';
import { useForm, FormActions } from '../../contexts/FormContext'
import { Theme } from '../../components/Theme'
import { ChangeEvent, useEffect } from 'react';


export function FormStep3() {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();

  useEffect(() => {
    if (state.name === '') {
      navigate('/')
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 3
      });
    }
  }, []);

  function handleNextStep() {
    if (state.email !== '' && state.github !== '') {
      navigate('/step4')
    }
  }

  function handleEmailChange(e: ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: FormActions.setEmail,
      payload: e.target.value
    })
  }

  function handleGithubChange(e: ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: FormActions.setGithub,
      payload: e.target.value
    })
  }

  return (
    <Theme>
      <Container>
        <p>Passo {state.currentStep}/3</p>
        <h1>Legal {state.name}, onde te achamos?</h1>
        <p>Preencha com seus contatos para conseguirmos entrar em contato.</p>

        <hr />

        <label >
          Qual o seu email?
          <input
            type="email"
            value={state.email}
            onChange={handleEmailChange}
          />
        </label>

        <label >
          Qual o seu email Github?
          <input
            type="url"
            value={state.github}
            onChange={handleGithubChange}
          />
        </label>

        <Link className='backButton' to={'/step2'}>Voltar</Link>
        <button onClick={handleNextStep}>Próximo</button>
      </Container>
    </Theme>
  )
}