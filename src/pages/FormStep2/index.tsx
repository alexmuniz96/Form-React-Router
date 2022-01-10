import { useNavigate, Link } from 'react-router-dom'
import { Container } from './styles';
import { useForm, FormActions } from '../../contexts/FormContext'
import { Theme } from '../../components/Theme'
import { useEffect } from 'react';
import { SelectOption } from '../../components/SelectOption';


export function FormStep2() {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();

  useEffect(() => {
    if (state.name === '') {
      navigate('/')
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 2
      });
    }
  }, []);

  function handleNextStep() {
    if (state.name !== '') {
      navigate('/step3')
    } else {
      alert('Preencha seus dados')
    }
  }

  function setLevel(level: number) {
    dispatch({
      type: FormActions.setLevel,
      payload: level
    })
  }

  return (
    <Theme>
      <Container>
        <p>Passo {state.currentStep}/3</p>
        <h1>{state.name}, o que melhor escreve você?</h1>
        <p>Escolha a opção que melhor condiz com seu estado atual, profissionalmente.</p>

        <hr />

        <SelectOption
          title="Sou iniciante"
          description="Comecei a programar a menos de 2 anos"
          icon="🥳"
          select={state.level === 0}
          onClick={() => setLevel(0)}
        />

        <SelectOption
          title="Sou programador"
          description="Já programo a 2 anos ou mais"
          icon="😎"
          select={state.level === 1}
          onClick={() => setLevel(1)}

        />

        <Link className='backButton' to={'/'}>Voltar</Link>
        <button onClick={handleNextStep}>Próximo</button>
      </Container>
    </Theme>
  )
}