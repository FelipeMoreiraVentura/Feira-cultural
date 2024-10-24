//Atualizando a página
window.addEventListener('storage', (event) => {
    if (event.key === 'atualizar') {
        location.reload();
    }
})

//coletando dados enviados do outro scripts
proximo = localStorage.getItem('proximo')
anterior = localStorage.getItem('anterior')
atendimento = localStorage.getItem('atendimento')

//enviando dados coletados para o HTML
document.getElementById("proximo").innerHTML = proximo
document.getElementById("anterior").innerHTML =  anterior
document.getElementById("atendimento").innerHTML = atendimento
