// Escalar um jogador
function gerencia_escala(button){
    const div1 = document.getElementById('container-main')
    const div2 = document.createElement('div')
        div2.id = 'container-list'

    const form = document.createElement('form')
        form.id = 'form1'
        form.action = ""
        form.method = "post"
        form.className = "formulario"

    const ul = document.createElement('ul')

    const nomeLi = document.createElement('li')
        nomeLi.innerHTML = '<label for="nome">Nome do Jogador: </label>'
    const nomeInput = document.createElement('input')
        nomeInput.type = 'text'
        nomeInput.name = 'nome'
        nomeInput.id = 'nome'
        nomeInput.required = true
        nomeInput.value = ''

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

    const botao_escalar = document.createElement('button')
        botao_escalar.innerText = 'Escalar'
        botao_escalar.form = 'form1'
        botao_escalar.type = 'submit'
        botao_escalar.onclick = function() {
            const texto_nome = nomeInput.value
            const texto_posicao = posicaoInput.value
            const texto_numero = numeroInput.value

            const confirmacao = confirm(
                "Você confirma as seguintes informações?\n" +
                "\nNome do jogador: " + texto_nome +
                "\nPosição: " + texto_posicao +
                "\nNúmero da camisa: " + texto_numero
            )

            if(confirmacao){
                const ul2 = document.createElement('ul')

                const nomeLi2 = document.createElement('li')
                    nomeLi2.innerHTML = '<label for="nome2">Nome do Jogador: </label>'
                const nomeInput2 = document.createElement('input')
                    nomeInput2.type = 'text'
                    nomeInput2.name = 'nome2'
                    nomeInput2.id = 'nome2'
                    nomeInput2.value = texto_nome
                    nomeInput2.readOnly = true
                nomeLi2.appendChild(nomeInput2)

                const posicaoLi2 = document.createElement('li')
                    posicaoLi2.innerHTML = '<label for="pos2">Posição: </label>'
                const posicaoInput2 = document.createElement('input')
                    posicaoInput2.type = 'text'
                    posicaoInput2.name = 'pos2'
                    posicaoInput2.id = 'pos2'
                    posicaoInput2.value = texto_posicao
                    posicaoInput2.readOnly = true
                posicaoLi2.appendChild(posicaoInput2)

                const numeroLi2 = document.createElement('li')
                    numeroLi2.innerHTML = '<label for="num2">Número da camisa: </label>'
                const numeroInput2 = document.createElement('input')
                    numeroInput2.type = 'text'
                    numeroInput2.name = 'num2'
                    numeroInput2.id = 'num2'
                    numeroInput2.value = texto_numero
                    numeroInput2.readOnly = true
                numeroLi2.appendChild(numeroInput2)

                ul2.append(nomeLi2, posicaoLi2, numeroLi2)

                const botao_remover = document.createElement('button')
                    botao_remover.innerText = 'Remover'
                    botao_remover.onclick = function() {
                        let identifica_jogador = prompt('Informe o número da camisa do jogador a ser removido: ')
                        const inputs = document.getElementById('ul2')

                        inputs.forEach(input => {
                            if(input.value == identifica_jogador){
                                const confirmacao = confirm(
                                    "Você confirma a remoção do seguinte jogador?\n" +
                                    "\nNome do jogador: " + texto_nome +
                                    "\nPosição: " + texto_posicao +
                                    "\nNúmero da camisa: " + texto_numero
                                )
        
                                if(confirmacao){
                                    div2.removeChild(ul2)
                                    div2.removeChild(botao_remover)
                                }
                            }
                        });

                    }

    

                /* const botao_remover = document.createElement('button')
                    botao_remover.innerText = 'Remover'
                    botao_remover.onclick = function() {

                        const confirmacao = confirm(
                            "Você confirma a remoção do seguinte jogador?\n" +
                            "\nNome do jogador: " + texto_nome +
                            "\nPosição: " + texto_posicao +
                            "\nNúmero da camisa: " + texto_numero
                        )

                        if(confirmacao){
                            div2.removeChild(ul2)
                            div2.removeChild(botao_remover)
                        }
                    } */

                div2.append(ul2)
                div1.appendChild(div2)
            }
            form.reset()
        }
    
    nomeLi.appendChild(nomeInput)
    posicaoLi.appendChild(posicaoInput)
    numeroLi.appendChild(numeroInput)
    ul.append(nomeLi, posicaoLi, numeroLi)
    form.appendChild(ul)
    div1.append(form, botao_escalar, botao_remover)

    
   
    button.disabled = true
}

function escalar() {
    const botao_escalar = document.createElement('button')
        botao_escalar.innerText = 'Escalar'
        botao_escalar.form = 'form1'
        botao_escalar.type = 'submit'
        botao_escalar.onclick = function() {
            const texto_nome = nomeInput.value
            const texto_posicao = posicaoInput.value
            const texto_numero = numeroInput.value

            const confirmacao = confirm(
                "Você confirma as seguintes informações?\n" +
                "\nNome do jogador: " + texto_nome +
                "\nPosição: " + texto_posicao +
                "\nNúmero da camisa: " + texto_numero
            )
        }
    return te
}
/* createElement sintaxe
createElement(tagName)
createElement(tagName, options) */
