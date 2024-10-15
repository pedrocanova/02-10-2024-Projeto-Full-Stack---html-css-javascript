const protocolo = 'http://';
const baseURL = 'localhost:3000';
const filmeEndPoint = '/filmes';

function listarFilmes (filmes) {
    let tabela = document.querySelector('.filmes')
    let corpoTabela = tabela.getElementsByTagName('tbody')[0]
    corpoTabela.innerHTML = ""
    for (let filme of filmes) {
        let linha = corpoTabela.insertRow(0)
        let celulaTitulo = linha.insertCell(0)
        let celulaSinopse = linha.insertCell(1)
        celulaTitulo.innerHTML = filme.titulo
        celulaSinopse.innerHTML = filme.sinopse 
    }
}

async function obterFilmes() {
    const URLcompleta = `${protocolo}${baseURL}${filmeEndPoint}`;
    const filmes = (await axios.get(URLcompleta)).data
    listarFilmes(filmes)
}

async function cadastrarFilme() {
    const URLcompleta = `${protocolo}${baseURL}${filmeEndPoint}`
    let tituloInput = document.querySelector('#tituloInput')
    let sinopseInput = document.querySelector('#sinopseInput')
    let titulo = tituloInput.value
    let sinopse = sinopseInput.value 
    tituloInput.value = ""
    sinopseInput.value = ""
    const filmes = (await axios.post(URLcompleta, {titulo, sinopse})).data
    listarFilmes(filmes)
}