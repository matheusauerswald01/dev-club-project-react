import { Container, TopBackground, Title, Form, ContainerInputs, Input, Button, InputLabel } from "./styles"
import { useRef } from "react"
import UsersImage from '../../assets/users.png'
import api from "../../services/api"
function Home() {

  const inputName = useRef()
  const inputemail = useRef()
  const inputage = useRef()

  async function registerNewUser(){
   await api.post('/usuarios', {
      name: inputName.current.value,
      email: inputemail.current.value,
      age: parseInt(inputage.current.value)
    })
    
  }

  return (
    <Container>
      <TopBackground>
        <img src={UsersImage} />
      </TopBackground>

      <Form>
        <Title>Cadastro de Usuário</Title>

        <ContainerInputs>
            <div>
              <InputLabel>Nome <span>*</span></InputLabel>
              <Input type="text" placeholder="Nome do usuário" ref={inputName}/>
            </div>

            <div>
              <InputLabel>Idade <span>*</span></InputLabel>
              <Input type="number" placeholder="Idade do usuário" ref={inputage}/>
            </div>

          
        </ContainerInputs>
        <div style={{ width: '100%' }}>
          <InputLabel>E-mail <span>*</span></InputLabel>
          <Input type="email" placeholder="E-mail do usuário" ref={inputemail}/>
        </div>

        <Button type="button" onClick={registerNewUser}>Cadastrar Usuário</Button>

      </Form>

    </Container>
  )
}

export default Home
