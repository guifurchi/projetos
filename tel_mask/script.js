//javascript by Guilherme_Furchi - Tel mask
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
