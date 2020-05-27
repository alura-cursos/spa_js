import { detalhaCliente, editaCliente } from '../../api/cliente'
import validaCPF from '../validacao/validaCPF'

const eventoForm = form => { 


const pegaURL = new URL(window.location)

const id = pegaURL.searchParams.get('id')

const inputCPF = form.querySelector('[data-cpf]')
const inputNome = form.querySelector('[data-nome]')

detalhaCliente(id).then( dados => {
    inputCPF.value = dados[0].cpf 
    inputNome.value = dados[0].nome
})


const alerta = (classe, mensagem) => { 
    const linha = document.createElement('section');

    const conteudoLinha = `
    <div class="${classe}">${mensagem}</div>
    
`
  
    linha.innerHTML = conteudoLinha;
    return linha;
} 
form.addEventListener('submit', event => { 
    event.preventDefault()

    if(!validaCPF(inputCPF.value)){
        alert("ESSE CPF NÃO EXISTE")
        return 
    }

    editaCliente(id, inputCPF.value, inputNome.value)
			.then(() => {
							form.appendChild(
								alerta(
									"alert alert-success",
									"CLIENTE EDITADO COM SUCESSO !")
							)
						})
			.catch(() => {
							form.appendChild(alerta(
									"alert alert-warning",
									"O CLIENTE NÃO PODE SER EDITADO !")
							)   
						})
})
}

export default eventoForm