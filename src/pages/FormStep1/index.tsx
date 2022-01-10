import { useNavigate } from 'react-router-dom'
import { Container } from './styles';
import { useForm, FormActions } from '../../contexts/FormContext'
import { Theme } from '../../components/Theme'
import { ChangeEvent, useEffect } from 'react';


export function FormStep1() {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();

  useEffect(() => {

    // const getData = JSON.parse(localStorage.getItem('@FormData:form')!)
    const getData = localStorage.getItem('@FormData:form')

    if (getData) {
      const dataOriginal = JSON.parse(getData)

      dispatch({
        type: FormActions.setName,
        payload: dataOriginal.name,
      });
    }

    dispatch({
      type: FormActions.setCurrentStep,
      payload: 1,
    });
  }, []);

  function handleNextStep() {
    if (state.name !== '') {
      navigate('/step2')
    } else {
      alert('Preencha seus dados')
    }
  }

  function handleNameChange(e: ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: FormActions.setName,
      payload: e.target.value
    })
  }

  return (
    <Theme>
      <Container>
        <p>Passo {state.currentStep}/3</p>
        <h1>Vamos começar com o seu nome</h1>
        <p>Preencha o campo abaixo com o seu nome completo.</p>

        <hr />

        <label >
          Seu nome completo
          <input
            type="text"
            autoFocus
            value={state.name}
            onChange={handleNameChange}
          />
        </label>

        <button onClick={handleNextStep}>Próximo</button>
      </Container>
    </Theme>
  )
}