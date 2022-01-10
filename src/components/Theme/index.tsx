import { ReactNode } from 'react';
import { Container, Content, Steps, Sidebar, Page } from './styles';
import { Header } from '../Header'
import { SidebarItem } from '../SidebarItem'
import { useForm } from '../../contexts/FormContext'

type PropsTheme = {
  children: ReactNode
}

export function Theme({ children }: PropsTheme) {
  const { state } = useForm();


  return (
    <Container>
      <Content>
        <Header />

        <Steps>
          <Sidebar>

            <SidebarItem
              title='Pessoal'
              description='Se identifique'
              icon='profile'
              path="/"
              active={state.currentStep === 1}
            />

            <SidebarItem
              title='Profissional'
              description='Seu nivel'
              icon='book'
              path="/step2"
              active={state.currentStep === 2}
            />

            <SidebarItem
              title='Contatos'
              description='Como te achar'
              icon='mail'
              path="/step3"
              active={state.currentStep === 3}
            />

            <SidebarItem
              title='Finalizar Cadastro'
              description='Confirme seus dados'
              icon='checks'
              path="/step4"
              active={state.currentStep === 4}
            />

          </Sidebar>
          <Page>
            {children}
          </Page>
        </Steps>

      </Content>
    </Container>
  )
}