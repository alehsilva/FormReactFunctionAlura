function validarCPF(cpf){
    if(cpf.length !== 11){
      return {valido:true, texto:"CPF deve ter 11 digitos."}
    }else{
      return {valido:false, texto:""};
    }
  }


  function validarSenha(senha){
    if(senha.length < 6 || senha.length > 30){
      return {valido:true, texto:"Senha deve ter mais de 5 digitos e menos de 30"};
    }else{
      return {valido:false, texto:""};
    }
  }


  export {validarCPF, validarSenha};