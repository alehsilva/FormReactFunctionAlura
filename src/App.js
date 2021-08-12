import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import {Container, Typography} from '@material-ui/core';
import 'fontsource-roboto';
import {validarCPF, validarSenha} from './model/cadastro';

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">Formulário de cadastro</Typography>
      <FormularioCadastro validacoes={{cpf: validarCPF, senha: validarSenha}} aoEnviar={aoEnviarForm}/>
    </Container>
  );
}

function aoEnviarForm(dados){
  console.log(dados);
}



export default App;
