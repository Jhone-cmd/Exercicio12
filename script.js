// Questão 01
function executar(){
    let v1 = Number(document.getElementById("v1").value.trim());
    let v2 = Number(document.getElementById("v2").value.trim());
   
    if (v1 == "" || v2 == ""){
        alert("Não foi possível executar. Um dos campos está vazio, por favor preencher corretamente! ")
    }else {
   
        let text = ''
        
        for ( ;v1 <= v2; v1++){
        
        text += v1 + ", ";
    
    }
    document.getElementById("mostrar").innerHTML = "Resultado: Os número entre A e Z são: ( " + text + " ).";
    }
}

function limpar(){
    let v1 = Number(document.getElementById("v1").value = "");
    v1 =  Number(document.getElementById("v1").focus());
    let v2 = Number(document.getElementById("v2").value = "");   
}


//Questão 02
let item = [];

function add() {
    let item2 = document.getElementById("item").value.trim();

    if (item2 == ""){
        alert("Não foi possível executar. O campo está vazio, por favor preencher corretamente! ")
    }   
    else{
         item.push(document.getElementById("item").value);
         document.getElementById("itens").innerHTML = "Resultado: A lista de itens é [ " + item +  " ]";
         item2 = document.getElementById("item").value = "";
         item2 = document.getElementById("item").focus();  
    }
}

function show(){
    document.getElementById("itens").style.display = "block";
}

function hide(){
    document.getElementById("itens").style.display = "none";
    
}

function clean(){
    let certeza = confirm("Será excluído o último nome adicionado na lista. Tem certeza que deseja excluir esse nome!");
    if (certeza == true)
        item.pop(document.getElementById("item").value);
        document.getElementById("itens").innerHTML = "Resultado: A lista de itens é [ " + item + " ]";
}

//Questão 03
let mulher = [];
let homem = [];

function add2() {

    let nome= document.getElementById("nome").value.trim();
    let sexo = document.getElementById("gender").value;
        
    if (nome == ""){
            alert("Não foi possível executar. O campo está vazio, por favor preencher corretamente! ")
    }  
    else if (sexo == "M"){        
        homem.push(document.getElementById("nome").value);
        document.getElementById("lista").innerHTML = "Resultado:" +
        "<br>" + "Lista de homens [ " + homem + " ]" +
        "<br>" + "Lista de mulheres [" + mulher  + " ]";        
    }   
    else {  
         mulher.push(document.getElementById("nome").value);
         document.getElementById("lista").innerHTML = "Resultado:" +
         "<br>" + "Lista de homens [ " + homem + " ]" +
         "<br>" + "Lista de mulheres [ " + mulher  + " ]";
    }

    nome = document.getElementById("nome").value = "";
    nome = document.getElementById("nome").focus(); 
}

function show2(){
    document.getElementById("lista").style.display = "block";
}

function hide2(){
    document.getElementById("lista").style.display = "none";
    
}
function clean2(){
    
    alert("Selecione o sexo abaixo (Masculino ou Feminino) antes de excluir o nome desejado da lista certa!")
    let sexo = document.getElementById("gender").value;
    let confirmar = confirm("Será excluído o último nome adicionado na lista correspondente. Tem certeza que deseja excluir esse nome!");
    
    if (confirmar == true){

    if (sexo == "M"){        
        homem.pop(document.getElementById("nome").value);
        document.getElementById("lista").innerHTML = "Resultado:" +
        "<br>" + "Lista d   e homens [ " + homem + " ]" +
        "<br>" + "Lista de mulheres [" + mulher  + " ]";
    }   
    else {  
        mulher.pop(document.getElementById("nome").value);
        document.getElementById("lista").innerHTML = "Resultado:" +
        "<br>" + "Lista de homens [ " + homem + " ]" +
        "<br>" + "Lista de mulheres [" + mulher  + " ]";
    }   
}
}