function criarFormulario() {
    const form = document.createElement('form')
        form.id = 'form1'
        form.action = ""
        form.method = "post"
        form.className = "formulario"

    const ul = document.createElement('ul')

    const tituloForm = document.createElement('h2')
        tituloForm.innerText = 'Formulário para escalar jogador: '
    
    const nomeLi = document.createElement('li')
        nomeLi.innerHTML = '<label for="nome">Nome do Jogador: </label>'
    const nomeInput = document.createElement('input')
        nomeInput.type = 'text'
        nomeInput.name = 'nome'
        nomeInput.id = 'nome'
        nomeInput.required = true

    const posicaoLi = document.createElement('li')
        posicaoLi.innerHTML = '<label for="pos">Posição: </label>'
    const posicaoInput = document.createElement('input')
        posicaoInput.type = 'text'
        posicaoInput.name = 'pos'
        posicaoInput.id = 'pos'
        posicaoInput.required = true

    const numeroLi = document.createElement('li')
        numeroLi.innerHTML = '<label for="num">Número da Camisa: </label>'
    const numeroInput = document.createElement('input')
        numeroInput.type = 'text'
        numeroInput.name = 'num'
        numeroInput.id = 'num'
        numeroInput.required = true

    nomeLi.appendChild(nomeInput)
    posicaoLi.appendChild(posicaoInput)
    numeroLi.appendChild(numeroInput)
    ul.append(nomeLi, posicaoLi, numeroLi)
    form.append(tituloForm, ul)

    return form
}

function escalarJogador(){
    const nome = document.getElementById('nome').value
    const posicao = document.getElementById('pos').value
    const numero = document.getElementById('num').value

    const confirmacao = confirm(
        "Você confirma as seguintes informações?\n" +
        "\nNome do jogador: " + nome +
        "\nPosição: " + posicao +
        "\nNúmero da camisa: " + numero
    )

    if(confirmacao) {
        const sectionLista = document.createElement('section')
        const ul2 = document.createElement('ul')

        const nomeLi2 = document.createElement('li')
            nomeLi2.innerText = 'Nome do jogador: '
        const nomeP = document.createElement('p')
            nomeP.innerText = nome

        const posicaoLi2 = document.createElement('li')
            posicaoLi2.innerText = 'Posição: '
        const posicaoP = document.createElement('p')
            posicaoP.innerText = posicao

        const numeroLi2 = document.createElement('li')
            numeroLi2.innerText = 'Número da camisa: '
        const numeroP = document.createElement('p')
            numeroP.innerText = numero
        
        nomeLi2.appendChild(nomeP)
        posicaoLi2.appendChild(posicaoP)
        numeroLi2.appendChild(numeroP)
        ul2.append(nomeLi2, posicaoLi2, numeroLi2)
        sectionLista.appendChild(ul2)
        document.getElementById('container-main').appendChild(sectionLista)
    }
}

function removerJogador() {
    alert('oi')
}

function gerenciaEscala(botao_gerenciaEscala){
    const div1 = document.getElementById('container-main')

    const formulario = criarFormulario()

    const botao_escalar = document.createElement('button')
        botao_escalar.innerText = 'Escalar'
        botao_escalar.type = 'button'
        botao_escalar.addEventListener("click", escalarJogador)

    const botao_remover = document.createElement('button')
        botao_remover.innerText = 'Remover'
        botao_remover.type = 'button'
        botao_remover.addEventListener("click", removerJogador)

    formulario.append(botao_escalar, botao_remover)
    div1.appendChild(formulario)

    

    botao_gerenciaEscala.disabled = true //desativa o botão 'Gerenciar Escala' após ser usado
}

/* createElement sintaxe
createElement(tagName)
createElement(tagName, options) */
