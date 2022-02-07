//valid email @Guilherme_Furchi
// input validation e-mail box when field is complete or not.
function valid(){
    let email = document.getElementById("e-mail").value;//get element on the field box e-mail
    var user = email.substring(0, email.indexOf("@"));//identifing user before "@" in the field box 
    var domain = email.substring(email.indexOf("@")+1, email.length);// identifing domain after "@" in the field box

    if(
        (user.length>=1) && // minimum character in user part
        (domain.length>=3) &&// minimum character in domain part
        (user.search("@")==-1) && //find "@" in user part
        (domain.search("@")==-1) &&//find "@" in domain part
        (user.search(" ")==-1) && //find " " in user
        (domain.search(" ")==-1) &&//find " " in domain
        (domain.search(".")!=-1) &&//find "." in domain
        (domain.indexOf(".")>=1) &&//need "." in domain
        (domain.indexOf(".") < domain.length - 1)){//need some character after "." in domain
            document.getElementById("valid").style.display="none"//change element style to Show element when field is complete
            document.getElementById("e-mail").style.backgroundColor="rgb(170, 255, 170)"//change background collor when field is complete
        }else{
            document.getElementById("valid").style.color="red"
            document.getElementById("valid").style.fontSize="12px"
            document.getElementById("valid").innerHTML= "invalid e-mail"
            document.getElementById("valid").style.display="block"
            document.getElementById("e-mail").style.backgroundColor=""
        }
    }
