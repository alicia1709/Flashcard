function criaCartao(categoria, pergunta, resposta) {
    let container = document.getElementById('container')
    let cartao = document.createElement('article')
    cartao.className = 'cartao'

    cartao.innerHTML = `
    <div class="cartao__conteudo">
                   <h3>Revolução francesa</h3> 
                   <div class="cartao__conteudo__pergunta">
                    <p>Qual evento marcou o início da Revolução francesa?</p>
                   </div>
                   <div class="cartao__conteudo__resposta">
                   <p>A queda da Bastilha em 1789</p>
                   </div>
                </div>
                `
                container.appendChild(cartao)
}