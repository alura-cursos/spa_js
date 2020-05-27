import eventoEnvia from "../cadastro/cadastro-clientes";

const form = document.createElement('form')
const cadastro = `
<div class="container">
  <div class="form-group">
    <label>CPF</label>
    <input
      type="number"
      class="form-control"
      data-cpf
      placeholder="Digite seu CPF aqui"
    />
  </div>
  <div class="form-group">
    <label>Nome</label>
    <input
      type="text"
      class="form-control"
      data-nome
      placeholder="Digite seu nome aqui"
    />
  </div>
  <button type="submit" class="btn btn-primary">
    Enviar
  </button>
</div>;
`
form.innerHTML = cadastro;

const inicializaCadastro = () =>  { 
  const container = document.querySelector('[data-container]')  
  eventoEnvia( form )
  container.innerHTML = ""
  container.appendChild( form )
  return form

}

export default inicializaCadastro