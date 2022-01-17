import { useNavigate, Link } from 'react-router-dom'
import { Container } from './styles';
import { useForm, FormActions } from '../../contexts/FormContext'
import { Theme } from '../../components/Theme'
import { ChangeEvent, useEffect } from 'react';
import { api } from '../../services/api'

type State = {
  currentStep: number,
  name: string,
  level: number,
  email: string,
  github: string,

}
export function FormStep4() {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();

  useEffect(() => {
    if (state.name === '') {
      navigate('/')
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 4
      });
    }
  }, []);

  let dataState = {}
  function dataStructure({ name, level, email, github }: State) {
    dataState = {
      nome: state.name,
      nivel: state.level,
      email: state.email,
      github: state.github
    }
    return dataState
  }

  async function handleNextStep() {
    if (state.email !== '' && state.github !== '') {
      localStorage.setItem('@FormData:form', JSON.stringify(state))

      dataStructure(state)

      console.log(dataState)

      await api.post("/step4", dataState, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      console.log(dataState)

      alert('Seus dados foram enviados!')
    } else {
      alert('Verifique se todos dados estão preenchidos!')
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

  function checkLevel() {
    if (state.level === 0) {
      return ('🥳 Sou programador iniciante')
    } else if (state.level === 1) {
      return ('😎 Sou programador experiente')
    }
  }

  return (
    <Theme>
      <Container>
        <p>Confirme seus dados</p>
        <h1>{state.name}, Confirme se seus dados estão certos.</h1>
        <p>Confira os dados e confirme sua inscrição.</p>

        <hr />

        <p>Nome e Sobrenome</p>
        <h3>{state.name}</h3>
        <p>Nivel de programação</p>
        <h2>{checkLevel()}</h2>
        <p>Dados de contato</p>
        <h3>Email: {state.email} </h3>
        <h3>Github: {state.github} </h3>




        <Link className='backButton' to={'/step3'}>Voltar</Link>
        <button onClick={handleNextStep}>Finalizar Cadastro</button>
      </Container>
    </Theme>
  )
}