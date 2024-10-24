//função que da reload na outra página para exibir os dados coletados
function atualizarOutraPagina() {
    localStorage.setItem('atualizar', Date.now());
}



var array = []

function urgencia(){
    let resp = document.getElementById("cliente").value //pegando cliente digitado

    if (resp == '') alert("preencha os campos");//validando se o campo esta vazio

    //adicionando cliente como prioridade
    else{
        array.unshift(resp)

        document.getElementById("list").innerHTML = array.join("<li>") //enviando a lista do array

        localStorage.setItem('proximo', resp);//enviando para outra página que ele será o prox a ser atendido
        atualizarOutraPagina()
    }
    
}

function adicionar(){
    let resp = document.getElementById("cliente").value //pegando cliente digitado

    if (resp == '') alert("preencha os campos"); //validação de o campo estiver vazio

    //Adicionando o cliente a lista no final
    else{
        array.push(resp)

        document.getElementById("list").innerHTML = array.join("<li>") //enviando a lista do array

        //enviando para outra página que ele será o prox a ser atendido
        let proximo = array[0] == undefined ? "" : array[0]
        localStorage.setItem('proximo', proximo) 
        atualizarOutraPagina()
    }

}

var anterior = '' //variavel para armazenar o cliente que foi atendido anteriormente
function atender(){
    
    anterior = anterior == undefined ? "" : anterior
    localStorage.setItem('anterior', anterior)//enviando o cliente que foi atendido anteriormente
    anterior = array[0]  //atualizando a variavel de cliente anterior

    if (array == '') alert("Sem clientes"); //validação se tem algo no array

    //mostrando cliente em atenedimento e removendo ele da lista de atendimento   
    else{
        document.getElementById("out").innerHTML = `Em atendimento: ${array[0]}`
        localStorage.setItem('atendimento', array[0])//enviando para outra página quem esta sendoi atendido

        array.shift()

        document.getElementById("list").innerHTML = array.join("<li>") //atualizando a lista do array

        //enviando para outra página que ele será o prox a ser atendido
        let proximo = array[0] == undefined ? "" : array[0]
        localStorage.setItem('proximo', proximo) 
        atualizarOutraPagina()

        new Audio("assets\\aud\\ATENDIMENTO.mp3").play() //efeito sonoro de atendimento
    }

}
