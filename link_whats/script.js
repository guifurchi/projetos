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
function Filtro(event){
    return((event.charCode >= 48 && event.charCode <= 57) || (event.keyCode == 44 || event.keyCode ==46));
}

function dadosAgenda(){
    let de = document.getElementById("telefone1").value;
    let para = document.getElementById("telefone").value;
    let msg = document.getElementById("msg").value;
    let url = "https://api.whatsapp.com/send?phone=" + para +"&text=" + msg;
    console.log(de)
    console.log(para)
    console.log(msg)
    console.log(url)
    window.open(url)
}
