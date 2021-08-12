import { Button, TextField } from "@material-ui/core";
import { useState } from "react";

function DadosUsuario({aoEnviar, validacoes}) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [erros, setErros] = useState({ senha: { valido: false, texto: "" } })


    function validaErro(e){
      e.preventDefault();
      const {name , value} = e.target;
      const guardaErro = validacoes[name](value);
      const erro = {...erros};
      erro[name] = guardaErro;
      setErros(erro);
      
    }

    function possoEnviar(){
      for(let campo in erros){
        if(erros[campo].valido){
          return false;
        }
      }
      
      return true;
    }

  return (
    <form onSubmit={
        e => {
            e.preventDefault();
            if(possoEnviar()){
              aoEnviar({email, senha});
            }
            
        }
    }>
      <TextField
        id="email"
        label="Email"
        type="email"
        variant="outlined"
        fullWidth
        margin="normal"
        required
        value={email}
        onChange={e => {setEmail(e.target.value)}}
      />
      <TextField
        id="senha"
        name="senha"
        label="Senha"
        type="password"
        variant="outlined"
        fullWidth
        margin="normal"
        required
        value={senha}
        helperText={erros.senha.texto}
        error={erros.senha.valido}
        onBlur={validaErro}
        onChange={e => {setSenha(e.target.value)}}
      />

      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default DadosUsuario;
