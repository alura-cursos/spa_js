import inicializaCadastro from "./componentes/cadastro/componente-cadastro";
import inicializaTabela from "./componentes/listagem/listagem-cliente"
import incializaFormEdicao from "./componentes/edita/form-edicao"

const rotas = { 
    "/": inicializaTabela,
    "/cadastro": inicializaCadastro,
    "/edita": incializaFormEdicao
    
}

const rootDiv = document.querySelector('[data-container]')


const navegacao = pathname => { 
    window.history.pushState({}, pathname, window.location.origin + pathname)

    rootDiv.innerHTML = ""
    const inicarRota = rotas[window.location.pathname]

    rootDiv.appendChild(inicarRota())

}

window.navegacao = navegacao

window.onpopstate = () =>{ 

rootDiv.innerHTML = ""

rootDiv.appendChild(rotas[window.location.pathname]())

}


export { navegacao }