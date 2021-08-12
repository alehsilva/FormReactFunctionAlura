import { Button, TextField } from "@material-ui/core";
import { useState } from "react";

function DadosEntrega({ aoEnviar }) {
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        aoEnviar({ cep, endereco, numero, estado, cidade });
      }}
    >
      <TextField
        id="cep"
        label="CEP"
        type="number"
        margin="normal"
        variant="outlined"
        fullWidth
        value={cep}
        onChange={e => {setCep(e.target.value)}}
      />

      <TextField
        id="endereco"
        label="Endereço"
        type="text"
        margin="normal"
        variant="outlined"
        fullWidth
        value={endereco}
        onChange={e => {setEndereco(e.target.value)}}
      />
      <TextField
        id="numero"
        label="Número"
        type="number"
        margin="normal"
        variant="outlined"
        value={numero}
        onChange={e => {setNumero(e.target.value)}}
      />
      <TextField
        id="estado"
        label="Estado"
        type="text"
        margin="normal"
        variant="outlined"
        value={estado}
        onChange={e => {setEstado(e.target.value)}}
      />

      <TextField
        id="cidade"
        label="Cidade"
        type="text"
        margin="normal"
        variant="outlined"
        value={cidade}
        onChange={e => {setCidade(e.target.value)}}
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Finalizar Cadastro
      </Button>
    </form>
  );
}

export default DadosEntrega;
