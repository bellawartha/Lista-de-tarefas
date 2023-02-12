let txt_tar = document.getElementById('caixadetexto');
let lista = document.getElementById('listatarefas');
let add = document.getElementById('add');

//Adicionar tarefas

function adicionar () {
    
    if (txt_tar.value.length == 0) {
        alert ('Por favor digite uma tarefa');
    } else {
        let item = document.createElement ('li');
        let check = document.createElement ('span');

        check.innerText += `${txt_tar.value}`;
        lista.appendChild (item);
        item.appendChild (check);
        item.appendChild (adicionaBotaoRemover())
        
        check.setAttribute ('class', 'tarefa');
        item.setAttribute ('class', 'naoRealizada')

        check.addEventListener ('click', function (){ if(this.className === 'tarefa'){
            if (this.parentNode.className === 'naoRealizada'){
                item.classList.remove ('naoRealizada')
                item.classList.add ('realizada')
            } else {
                item.classList.remove ('realizada')
                item.classList.add ('naoRealizada')
            }
        }
        })
    }
    
    txt_tar.value = '';
    txt_tar.focus();
}

//Remoção das tarefas

function adicionaBotaoRemover () {
    const botaoRemover = document.createElement ('button');
    botaoRemover.textContent = ('✘');
    botaoRemover.className = ('remover');

botaoRemover.addEventListener ('click', function(){
    lista.removeChild(this.parentNode);
}
);

 return botaoRemover
}

//Navegação

function marcar () {
    let tarefa = document.querySelector ('.tarefa');
    let vetorTarefas = document.querySelectorAll ('.tarefa');
    for (tarefa of vetorTarefas){
        tarefa.dispatchEvent (new Event('click'));
    }
}

function limpar () {
    let vetorRemover = document.querySelectorAll('.remover');
    for (botao of vetorRemover){
        botao.dispatchEvent(new Event('click'));
}
}