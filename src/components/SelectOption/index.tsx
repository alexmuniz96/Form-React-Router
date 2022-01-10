import { Container, Icon, Info, Title, Description } from './styles'


type PropsSelectOption = {
  title: string;
  description: string;
  icon: string;
  select: boolean;
  onClick: () => void;
}


export function SelectOption({ title, description, icon, select, onClick }: PropsSelectOption) {
  return (
    <Container onClick={onClick} select={select}>
      <Icon select={select}> {icon} </Icon>
      <Info>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Info>
    </Container>
  )
}