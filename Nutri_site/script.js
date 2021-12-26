//funcção para calcular o IMC
function calcImc(){
    let email = document.getElementById("e-mail").value;
    let altura = parseFloat(document.getElementById("altura").value.replace(",","."));//correção da entrada para "."
    let peso = parseFloat(document.getElementById("peso").value.replace(",","."));//correcção da entrada para "."
    let list = [18.5, 24.9, 29.9, 34.9, 39.9, 40 ];//definindo tabela de IMC
    let F = [18.5, 22];//faixa de IMC para genero feminino
    let M = [22, 24.9];//faixa de IMC para genero masculino
    let gen = document.getElementsByName("genero");

    //marcar o genero e enviar o valor no radio button
    for(let i = 0; i < gen.length; i++){
        if(gen[i].checked){
            gen_i = gen[i].value;
        }
    }
    
    //gatilhos para executar a função 
    //validação do email
    var usuario = email.substring(0, email.indexOf("@"));
    var dominio = email.substring(email.indexOf("@")+1, email.length);
    // parametrização para validação do campo de e-mail
    if(
        (usuario.length>=1) &&
        (dominio.length>=3) &&
        (usuario.search("@")==-1) &&
        (dominio.search("@")==-1) &&
        (usuario.search(" ")==-1) &&
        (dominio.search(" ")==-1) &&
        (dominio.search(".")!=-1) &&
        (dominio.indexOf(".")>=1) &&
        (dominio.indexOf(".") < dominio.length - 1)){
            e=0
            document.getElementById("valid").style.display="none"
            document.getElementById("e-mail").style.backgroundColor="rgb(170, 255, 170)"
        }else{
            var e=1
            document.getElementById("valid").style.color="red"
            document.getElementById("valid").style.fontSize="12px"
            document.getElementById("e-mail").style.backgroundColor="rgb(255, 209, 209)"
            document.getElementById("valid").innerHTML= "Campo Obrigatório"
            document.getElementById("valid").style.display="block"
        }
    //valores que não contenham "." ou "," na altura
    var int = document.getElementById("altura").value;
    decDot = int.indexOf(".");
    decComa = int.indexOf(",");
    if(decDot == -1 && decComa == -1){
         var b=1
    }else{
        var b=0
    }
    //parametrizar erro para campos vazios
    if(isNaN(altura)){
        var a=1
    }else{
        a=0
    }
    if(isNaN(peso)){
        var p=1
    }else{
        p=0
    }
    let soma=b+e+a+p; //para soma = 0, todos os gatilhos foram atendidos.
    console.log(soma)

    if(soma == 0){// executar se todas os gatilhos forem atendidos
    //calcular Peso ideal de acordo com o genero
        if(gen_i == 0){
            min = F[0] * (altura*altura);
            max = F[1] * (altura*altura);
        }else{
            min = M[0] * (altura*altura);
            max = M[1] * (altura*altura);
        }
        document.getElementById("ideal").innerHTML = "Seu peso ideal deve estar entre " + min.toFixed(0) + " Kg " + " e " + max.toFixed(0) + " Kg";
        
        //calcular IMC e enviar informacao sobre o resultado
        imc = peso / (altura * altura);
            if(imc < list[0]){
                cl = "Baixo Peso";
                msg=" Nesse caso pode lelet a queda de cabelo, infertilidade, ausência menstrual, fadiga stress, ansiedade"
                msg_nutri="Eu sei como te ajudar nesse caso. Preencha os dados abaixo sem compomisso"
            }
            if(imc >= list[0] && imc <= list[1]){
                cl = "Peso normal";
                msg=" Nesse caso pode lelet a queda de cabelo, infertilidade, ausência menstrual, fadiga stress, ansiedade"
                msg_nutri="Eu sei como te ajudar nesse caso. Preencha os dados abaixo sem compomisso"
            }
            if(imc > list[1] && imc <= list[2]){
                cl = "Excesso de Peso";
                msg=" Nesse caso pode lelet a queda de cabelo, infertilidade, ausência menstrual, fadiga stress, ansiedade"
                msg_nutri="Eu sei como te ajudar nesse caso. Preencha os dados abaixo sem compomisso"
            }
            if(imc > list[2] && imc <= list[3]){
                cl = "Obesidade de Classe 1";
                msg=" Nesse caso pode lelet a queda de cabelo, infertilidade, ausência menstrual, fadiga stress, ansiedade"
                msg_nutri="Eu sei como te ajudar nesse caso. Preencha os dados abaixo sem compomisso"
            }
            if(imc > list[3] && imc <= list[4]){
                cl = "Obesidade de Classe 2";
                msg=" Nesse caso pode lelet a queda de cabelo, infertilidade, ausência menstrual, fadiga stress, ansiedade"
                msg_nutri="Eu sei como te ajudar nesse caso. Preencha os dados abaixo sem compomisso"
            }
            if(imc >= list[5]){
                cl = "Obesidade de Classe 3";
                msg=" Nesse caso pode lelet a queda de cabelo, infertilidade, ausência menstrual, fadiga stress, ansiedade"
                msg_nutri="Eu sei como te ajudar nesse caso. Preencha os dados abaixo sem compomisso"
            }
            document.getElementById("resultado").innerHTML = "IMC = " + imc.toFixed(2)+" Kg/m²"
            document.getElementById("cl").innerHTML = cl;
            document.getElementById("msg").innerHTML = msg;
            document.getElementById("msg-nutri").innerHTML = msg_nutri;

            //ocultar HTML e exibir quando clicado no botão
            let display = document.getElementById("page-imc").style.display;

            let key = 0;
            if(display == "none" && key== 0){
                document.getElementById("page-imc").style.display = 'block';
            }
            if(display == "none" && key !=0){
                document.getElementById("page-imc").style.display = 'none';
            }
            if(display == "block" && key == 0){
                document.getElementById("page-imc").style.display = 'none';
            }
            console.log(display)
            console.log(key)
        
    }else{//se não atender algum dos gatilhos mesmo quando feito pelomenos uma vez a consulta
            document.getElementById("page-imc").style.display = 'none';
    }
}
// mascaras para inserir telefone
function mascaraTel(telefone){
    let tel = telefone.value;
    tel = tel.replace(/\-/g," ")
    const ddd = tel.slice(0,2)
    const pre = tel.slice(2,7);
    const suf = tel.slice(7,11);
    telajustado = "("+ddd+") "+ pre + "-" + suf;
    telefone.value = telajustado;
}

// mascara para inserir somente números, "." e ","
var filtroNum = function(event){
    return((event.charCode >= 48 && event.charCode <= 57) || (event.keyCode == 44 || event.keyCode ==46));
}

//mostrar valor do Slider altura
function slider(valor){
    var val = valor.value;
    document.getElementById("valor").innerHTML = "Altura: "+ val + " m"
}
//mostrar valor do Slider peso
function slider_p(valor_p){
    var val = valor_p.value;
    document.getElementById("valor_p").innerHTML = "Peso: "+ val + " Kg"
}

//envio de mensagem para o whatsapp
function whats(){
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email_a").value;
    let contato = 5592981836379;
    let telefone = document.getElementById("telefone_a").value;
    let servico = document.getElementById("servico").value;
    let duv = document.getElementById("msg_w").value;
    let text =  "*" + "Serviço: " + servico + "*" + "\n" + "nome: "+ nome + "\n" + "telefone: " + telefone + "\n" + "e-mail: " + email + "\n" + "\n" + duv;
    let msg = window.encodeURIComponent(text)
    let url = "https://api.whatsapp.com/send?phone=" + contato +"&text=" + msg;

    //validar e-mail
    var usuario = email.substring(0, email.indexOf("@"));
    var dominio = email.substring(email.indexOf("@")+1, email.length);
    // parametrização para validação do campo de e-mail
    if(
        (usuario.length>=1) &&
        (dominio.length>=3) &&
        (usuario.search("@")==-1) &&
        (dominio.search("@")==-1) &&
        (usuario.search(" ")==-1) &&
        (dominio.search(" ")==-1) &&
        (dominio.search(".")!=-1) &&
        (dominio.indexOf(".")>=1) &&
        (dominio.indexOf(".") < dominio.length - 1)){
            e=0
            document.getElementById("valid_a").style.display="none"
            document.getElementById("email_a").style.backgroundColor="rgb(170, 255, 170)"
        }else{
            var e=1
            document.getElementById("valid_a").style.color="red"
            document.getElementById("valid_a").style.fontSize="12px"
            document.getElementById("email_a").style.backgroundColor="rgb(255, 209, 209)"
            document.getElementById("valid_a").innerHTML= "Campo Obrigatório"
            document.getElementById("valid_a").style.display="block"
        }
    //validar do telefone
    if(
    (telefone.indexOf("(") == 0) &&
    ((telefone.split("(").length -1) == 1) &&
    (telefone.indexOf(")") == 3) &&
    (telefone.indexOf(" ") == 4) &&
    (telefone.indexOf("-") == 10)
    ){
        t=0
        document.getElementById("valid_t").style.display="none"
        document.getElementById("telefone_a").style.backgroundColor="rgb(170, 255, 170)"
    }else{
        t=1
        document.getElementById("valid_t").style.color="red"
        document.getElementById("valid_t").style.fontSize="12px"
        document.getElementById("telefone_a").style.backgroundColor="rgb(255, 209, 209)"
        document.getElementById("valid_t").innerHTML= "Número de telefone inválido"
        document.getElementById("valid_t").style.display="block"
    }
    soma= e+t;

    if(soma == 0){
    window.open(url)
    }else{
        alert("Mensagem não foi enviada, favor verificar os dados preenchidos!")
    }
    console.log(telefone.length)
    console.log(telefone.split("(").length-1)
    console.log(telefone.indexOf(")"))
    console.log(telefone.indexOf(" "))
    console.log(telefone.indexOf("-"))
    console.log(soma)
}

