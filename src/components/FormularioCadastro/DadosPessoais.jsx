import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";
import { useState } from "react";

function DadosPessoais({ aoEnviar, validacoes }) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(false);
  const [erros, setErros] = useState({ cpf: { valido: false, texto: "" } });


  function validaErro(e){
    e.preventDefault();
    const {name, value} = e.target;
    const guardaValidacao = validacoes[name](value);
    const novoEstado = {...erros};
    novoEstado[name] = guardaValidacao;
    
    setErros(novoEstado);
    
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        aoEnviar({ nome, sobrenome, cpf, promocoes, novidades });
      }}
    >
      <TextField
        id="nome"
        label="Nome"
        variant="outlined"
        fullWidth
        margin="normal"
        value={nome}
        onChange={(e) => {
          e.preventDefault();
          setNome(e.target.value);
        }}
      />
      <TextField
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        fullWidth
        margin="normal"
        value={sobrenome}
        onChange={(e) => {
          e.preventDefault();
          setSobrenome(e.target.value);
        }}
      />
      <TextField
        id="cpf"
        name="cpf"
        label="CPF"
        variant="outlined"
        fullWidth
        margin="normal"
        value={cpf}
        error={erros.cpf.valido}
        helperText={erros.cpf.texto}
        onBlur={validaErro}
        onChange={(e) => {
          e.preventDefault();
          setCpf(e.target.value);
        }}
      />

      <FormControlLabel
        label="Promoções"
        control={
          <Switch
            onChange={(e) => {
              setPromocoes(e.target.checked);
            }}
            name="promocoes"
            color="primary"
            checked={promocoes}
          />
        }
      />
      <FormControlLabel
        label="Novidades"
        control={
          <Switch
            onChange={(e) => {
              setNovidades(e.target.checked);
            }}
            name="novidades"
            color="primary"
            checked={novidades}
          />
        }
      />

      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default DadosPessoais;
