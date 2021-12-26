var url = document.URL;
var page = url.substring(url.indexOf("?")+1, url.length)

if(url.indexOf("#") != -1){
    var hash = url.substring(url.indexOf("#"), url.length)
    var sum = page.length - hash.length
    var paramPage = page.substring(0, sum)
}else{
    var paramPage = url.substring(url.indexOf("?")+1, url.length)
}
 
document.getElementById("container1").style.marginTop = "50px"
document.getElementById("container1").style.marginBottom = "50px"


//Parâmetros para pagina de Serviços
if(paramPage == "serv=atend_nutri"){
    document.getElementById("container3").style.display="none"
    document.getElementById("especialidade").style.display="none"


    document.getElementById("title").innerHTML = "Atendimento Nutricional"
    document.getElementById("parag").innerHTML = "O atendimento individualizado foi o método que adotei para os meus clientes, para que de fato tenham resultado que atendama as necessidades e espectativas."
    document.getElementById("serv").style.backgroundImage = "url('./img/atendimento.png')"
    //bloco 01
    document.getElementById("sub1").innerHTML = "Como funciona?"
    document.getElementById("parag1").innerHTML = "O atendimento nutricional clínico visa entender no aspecto geral a situação da saúde física do paciente, para ai sim determinar quais tratamentos e cuidados deverão ser aplicados como modo corretivo, para tratar de doenças já existentes, e métodos preventivos, para evitar que possíveis doenças possam ocorrer durante sua vida. "
    //bloco 02
    document.getElementById("sub2").innerHTML = "Por que devo consultar um nutricionista?"
    document.getElementById("parag2").innerHTML = "Consultar um especialista e manter o acompanhamento é de suma importância, pois cada organismo pode ter uma reação específica a determinado alimento. Ou seja, é possível que algo que tenha funcionado para um paciente não apresente os mesmos resultados em outro. Assim o nutricionista assume papel fundamental no momento da indicação de um cardápio individualizado, que leva em conta as particularidades do paciente e seja, de fato, adequado a ele, proporcionado diversos benefícios ao organismo e possibilitando alterações e ajustes ao longo do tempo, conforme a necessidade de cada um. "
    //bloco 03
    document.getElementById("sub3").innerHTML = "Benefícios"
    document.getElementById("parag3").innerHTML = "Melhora na qualidade de vida; Prevenção de doenças; Otimização de processos de recuperação (cirurgia, inflamação, infecção e doenças); Alimentação balanceada e saudável, promovendo equilíbrio nutricional; Tratamento individualizado; Melhora das funções cognitivas em casos de problemas que interferem em tais funções; Saúde integral."
}
if(paramPage == "serv=personal_diet"){
    document.getElementById("container3").style.display="none"
    document.getElementById("especialidade").style.display="none"

    document.getElementById("title").innerHTML = "Personal Diet"
    document.getElementById("parag").innerHTML = "O atendimento personalizado foi o método que idealizei para os meus clientes, para que de fato tenham resultado que atendama as necessidades e espectativas."
    document.getElementById("serv").style.backgroundImage = "url('./img/personal_diet.png')"
    //bloco 01
    document.getElementById("sub1").innerHTML = "O que é o personal diet?"
    document.getElementById("parag1").innerHTML = "É o atendimento nutricional domiciliar e personalizado, onde o profissional nutricionista avalia, orienta e ensina o cliente e/ou sua família a fazer da alimentação sua maior fonte de saúde de forma personalizada, respeitando todas as individualidades. Neste tipo de atendimento é possível montar um plano alimentar personalizado que permite que o paciente consiga dentro de sua rotina diária, de suas necessidades, possibilidades financeiras e principalmente dentro do seu domicílio ou ambiente de trabalho, incluir de maneira prática as orientações fornecidas por este profissional."
    //bloco 02
    document.getElementById("sub2").innerHTML = "Quais serviços podem ser oferecidos?"
    document.getElementById("parag2").innerHTML = "<p>Consulta Nutricional Personalizada: esta consulta pode ser feita na casa, no trabalho ou até mesmo na academia do cliente, esta comodidade aumenta a adesão do cliente ao tratamento. É feita anamnese, avaliação antropométrica, montagem do planejamento e visita a cozinha do cliente quando a consulta é realizada em domícilio. </p> <p>- Cardápios Exclusivos: Montagem de cardápio semanal em cima do plano nutricional proposto, respeitando gostos e preferencias do cliente. </p> <p>- Aula de Culinária: Tem como objetivo ensinar receitas saudáveis para a cozinheira ou para o próprio cliente. </p> <p>Estes são apenas alguns dos serviços que você pode oferecer ao seu cliente! </p>"
    //bloco 03
    document.getElementById("sub3").innerHTML = ""
    document.getElementById("parag3").innerHTML = ""

}
if(paramPage == "serv=consultoria"){
    document.getElementById("container3").style.display="none"
    document.getElementById("especialidade").style.display="none"

    document.getElementById("title").innerHTML = "Assessoria e Consultoria"
    document.getElementById("parag").innerHTML = "Com frequência, equivocadamente, é usado o termo segurança alimentar para se referir a serviços que contemplem exclusivamente a qualidade microbiológica e físico química do alimento oferecido, com vistas a minimizar os riscos ao consumidor, ou seja, a segurança dos alimentos. Entretanto, segurança alimentar abrange, além da oferta de alimentos seguros, a oferta de uma alimentação saudável e a garantia de acesso aos alimentos. Dessa forma, a descrição adequada dos serviços que serão oferecidos pelo profissional deve contemplar definições corretas a respeito da sua atuação."
    document.getElementById("serv").style.backgroundImage = "url('./img/consultoria.png')"
    //bloco 01
    document.getElementById("sub1").innerHTML = "O que é Assessoria em Nutrição?"
    document.getElementById("parag1").innerHTML = "é o serviço realizado por Nutricionista habilitado que, embasado em seus conhecimentos, habilidades e experiências, assiste tecnicamente as pessoas físicas ou jurídicas, planejando, implementando e avaliando programas e projetos em atividades específicas na área de alimentação e nutrição humana, bem como oferecendo solução para situações relacionadas com a sua especialidade."
    //bloco 02
    document.getElementById("sub2").innerHTML = "O que é Consultoria em Nutrição?"
    document.getElementById("parag2").innerHTML = "serviço realizado por Nutricionista habilitado que abrange o exame e emissão de parecer sobre assunto relacionado à área de alimentação e nutrição humana, com prazo determinado, sem, no entanto, assumir a responsabilidade técnica.>"
    //bloco 03
    document.getElementById("sub3").innerHTML = ""
    document.getElementById("parag3").innerHTML = ""
}
if(paramPage == "serv=tabela_nutri"){
    document.getElementById("container3").style.display="none"
    document.getElementById("especialidade").style.display="none"

    document.getElementById("title").innerHTML = "Tabela Nutricional"
    document.getElementById("parag").innerHTML = "O atendimento personalizado foi o método que idealizei para os meus clientes, para que de fato tenham resultado que atendama as necessidades e espectativas."
    document.getElementById("serv").style.backgroundImage = "url('./img/tabela.png')"
    //bloco 01
    document.getElementById("sub1").innerHTML = "Por que ter tabela Nutricional?"
    document.getElementById("parag1").innerHTML = "A Resolução ANVISA RDC 360/03 torna obrigatória a rotulagem nutricional com o objetivo principal de atuar em benefício do consumidor e se aplica a todos os alimentos e bebidas produzidos, comercializados e embalados na ausência do cliente e prontos para oferta ao consumidor."
    //bloco 02
    document.getElementById("sub2").innerHTML = "Como é elaborado a table nutricional?"
    document.getElementById("parag2").innerHTML = "Através de Análises – Nesse caso o produto é analisado e quantifica-se o valor real do produto de carboidratos, proteínas, gorduras totais, valor calórico total, sódio e cálcio, as demais informações obrigatórias da rotulagem nutricional são obtidas através de referências bibliográficas."
    //bloco 03
    document.getElementById("sub3").innerHTML = ""
    document.getElementById("parag3").innerHTML = "Através de Fontes – Nesse caso, utiliza-se fontes nacionais e reconhecidas. Calcula-se os valores dos componentes nutricionais através de fontes bibliográficas indicadas pela ANVISA."

}

//Parâmetros para Pagina Especialidades
if(paramPage == "info=emagrecimento"){
    //Texto de introdução
    document.getElementById("especialidade").style.display="none"
    document.getElementById("container2").style.display="none"
    document.getElementById("container3").style.display="none"

    document.getElementById("title").innerHTML = "Emagrecimento e Obesidade"
    document.getElementById("parag").innerHTML = "A obesidade já é considerada um dos principais problemas de saúde pública no Brasil e no mundo, atingindo não apenas países em desenvolvimento, mas também os desenvolvidos. O sobrepeso e a obesidade são responsáveis por doenças como: hipertensão, problemas cardíacos, diabetes, alguns casos de câncer, infertilidade, problemas de coluna, entre outros."
    document.getElementById("serv").style.backgroundImage = "url('./img/obesidade_1.png')"
    //bloco 01
    document.getElementById("sub1").innerHTML = "O que causa a obesidade?"
    document.getElementById("parag1").innerHTML = "A causa para esse aumento da massa adiposa se dá por diversos fatores, dentre eles pode-se destacar o sedentarismo e práticas alimentares inadequadas. Além disso, pesquisas apontam a relação entre herança genética e obesidade, ou seja, é possível que ocorra por conta de fatores genéticos. Outro aspecto que pode estar relacionado é a alteração hormonal, devido a mudanças funcionais de glândulas como a tireoide, suprarrenais e da região do hipotálamo. "
    //bloco 02
    document.getElementById("sub2").innerHTML = "Quais as consequências da obesidade?"
    document.getElementById("parag2").innerHTML = "Como a obesidade é um problema crônico, que tende a piorar ao longo dos anos, é essencial iniciar um tratamento para reverter o quadro o quanto antes. Essa condição compromete a qualidade de vida, compromete o funcionamento do organismo e pode resultar no desenvolvimento de doenças associadas, como diabetes, problemas cardiovasculares, asma e entre outros. Além disso, em estágios mais avançados (obesidade mórbida), é capaz de causar incapacidade funcional, interferindo, por exemplo, na capacidade de movimentação, e redução da expectativa de vida. "
    //bloco 03
    document.getElementById("sub3").innerHTML = "Como funcionam os tratamentos para a obesidade?"
    document.getElementById("parag3").innerHTML = "A melhor maneira de se combater a obesidade é através da adoção de um estilo de vida saudável, alinhando diversos hábitos que tem como objetivo reverter o quadro a aprimorar a qualidade de vida do paciente: " + "\n" +  "Reeducação alimentar," + "\n" + "adquirindo hábitos saudáveis e priorizando a ingestão equilibrada de calorias orientada por nutricionista qualificado;" + "\n" + "Acompanhamento com nutricionista, a fim de analisar os resultados e verificar o que será mantido ou modificado;" + "\n" + "Prática regular de exercícios físicos."

}
if(paramPage == "info=funcional"){
    //Texto de introdução
    document.getElementById("especialidade").style.display="none"
    document.getElementById("container2").style.display="none"
    document.getElementById("container3").style.display="none"

    document.getElementById("title").innerHTML = "Nutrição Funcional"
    document.getElementById("parag").innerHTML = "A Nutrição Funcional envolve o estudo da individualidade bioquímica de cada paciente, levando em conta suas particularidades para indicar alimentos adequados, a fim de alcançar harmonia do funcionamento do organismo, aprimorar a qualidade de vida, amenizar ou corrigir problemas e 'falhas' e até prevenir doenças.  "
    document.getElementById("serv").style.backgroundImage = "url('./img/funcional_1.png')"
    //bloco 01
    document.getElementById("sub1").innerHTML = "Como funciona?"
    document.getElementById("parag1").innerHTML = "A Nutrição Funcional visa tratar os desequilíbrios causados pelo excesso ou pela carência nutricional de cada indivíduo, baseia- se no rastreamento metabólico, o qual possui o objetivo de conhecer o organismo e recomendar alimentos ideais para reparar determinadas situações, a partir da elaboração de um cardápio balanceado capaz de fornecer todos os nutrientes necessários para uma alimentação saudável, auxiliando assim no tratamento de doenças e proporcionando qualidade de vida."
    //bloco 02
    document.getElementById("sub2").innerHTML = "Por que devo consultar um nutricionista?"
    document.getElementById("parag2").innerHTML = "Consultar um especialista e manter o acompanhamento é de suma importância, pois cada organismo pode ter uma reação específica a determinado alimento. Ou seja, é possível que algo que tenha funcionado para um paciente não apresente os mesmos resultados em outro. Assim o nutricionista assume papel fundamental no momento da indicação de um cardápio individualizado, que leva em conta as particularidades do paciente e seja, de fato, adequado a ele, proporcionado diversos benefícios ao organismo e possibilitando alterações e ajustes ao longo do tempo, conforme a necessidade de cada um. "
    //bloco 03
    document.getElementById("sub3").innerHTML = "Benefícios"
    document.getElementById("parag3").innerHTML = "Melhora na qualidade de vida; Prevenção de doenças; Otimização de processos de recuperação (cirurgia, inflamação, infecção e doenças); Alimentação balanceada e saudável, promovendo equilíbrio nutricional; Tratamento individualizado; Melhora das funções cognitivas em casos de problemas que interferem em tais funções; Saúde integral."

}
if(paramPage == "info=estetica"){
    //Texto de introdução
    document.getElementById("especialidade").style.display="none"
    document.getElementById("container2").style.display="none"
    document.getElementById("container3").style.display="none"

    document.getElementById("title").innerHTML = "Nutrição e Estética"
    document.getElementById("parag").innerHTML = "A nutrição estética relaciona a melhora dos resultados de tratamentos estéticos com a conduta nutricional aplicada, tendo em mente o conceito de que a beleza começa de dentro. "
    document.getElementById("serv").style.backgroundImage = "url('./img/estetica_1.png')"
    //bloco 01
    document.getElementById("sub1").innerHTML = "Quais são as áreas de atuação?"
    document.getElementById("parag1").innerHTML = "Celulite; Gordura localizada; Flacidez; Envelhecimento e hidratação cutâneas; Acne; Fotoproteção; Pré e pós operatório de cirurgias plásticas; Fortalecimento de unhas e cabelos."
    //bloco 02
    document.getElementById("sub2").innerHTML = "Como a nutrição está relacionada à estética?"
    document.getElementById("parag2").innerHTML = "Alimentos funcionais, fitoterápicos, nutracêuticos, vitaminas e minerais contribuem de forma benéfica para a prevenção e melhora de problemas relacionados à estética, tais como: Envelhecimento; Rugas; Flacidez; Celulite; Acne; Estrias; Fortalecimento das unhas; Crescimento dos cabelos; Bronzeamento; TPM; Obesidade; Barriga saliente; Libido; Sono."
    //bloco 03
    document.getElementById("sub3").innerHTML = ""
    document.getElementById("parag3").innerHTML = "<p> Essa relação se dá pois 'você é o que você come'. Ou seja, a forma como você se alimenta é capaz de interferir de diversas formas, inclusive quando o assunto é beleza. Existem alimentos capazes de acelerar o processo de envelhecimento da pele, assim como há aqueles que possuem componentes que ajudam a retardar tal processo, amenizar os sinais de envelhecimento e proporcionar o rejuvenescimento facial. </p> <p>Além disso, há alimentos indicados para problemas específicos, como acne e estresse, por exemplo. Assim como é possível realizar uma dieta visando sanar o problema de obesidade ou sono. Vale ressaltar que é essencial sempre respeitar o seu biotipo, seguindo as indicações e orientações do nutricionista. Inclusive, exite um tipo de nutrição, chamado funcional, que tem como objetivo estabelecer um cardápio de acordo com o funcionamento do seu organismo. Outro aspecto importante é que, muitas vezes, temos o hábito de consumir determinados alimentos que acabam potencializando o problema. </p>"

}
if(paramPage == "info=fitoterapia"){
    //Texto de introdução
    document.getElementById("especialidade").style.display="none"
    document.getElementById("container2").style.display="none"
    document.getElementById("container3").style.display="none"

    document.getElementById("title").innerHTML = "Fitoterapia"
    document.getElementById("parag").innerHTML = "Fitoterapia é uma técnica que estuda as funções terapêuticas das plantas e vegetais para prevenção e tratamento de doenças. Médicos, nutricionistas, farmacêuticos, fisioterapeutas e outros profissionais são capacitados para indicar fitoterápicos aos seus pacientes, com o objetivo de melhorar o organismo, ajudar no combate de doenças e atuar na prevenção de problemas de saúde."
    document.getElementById("serv").style.backgroundImage = "url('./img/fitoterapia_1.png')"
    //bloco 01
    document.getElementById("sub1").innerHTML = "Como funciona a fitoterapia?"
    document.getElementById("parag1").innerHTML = "As plantas produzem naturalmente substâncias para o seu próprio desenvolvimento. Seja para o crescimento, a reprodução, para a defesa de adversidades ambientais ou para a sua formação, elas acabam produzindo compostos ativos que apresentam importantes efeitos terapêuticos para o corpo humano. "
    //bloco 02
    document.getElementById("sub2").innerHTML = "Quais são os benefícios da fitoterapia?"
    document.getElementById("parag2").innerHTML = "Além da positiva atuação nos tratamentos de saúde, a fitoterapia apresenta outros benefícios, como a composição natural, a biodiversidade disponível e menos efeitos colaterais. Acompanhe a seguir mais detalhes de cada um deles."
    //bloco 03
    document.getElementById("sub3").innerHTML = ""
    document.getElementById("parag3").innerHTML = ""
}

//Pagina de informações sobre a Nutri
if(paramPage == "sobre=valeria"){
    document.getElementById("container1").style.display="none"
    document.getElementById("container2").style.display="none"
    document.getElementById("especialidade").style.display="none"
    document.getElementById("container3").style.marginTop = "50px"
    document.getElementById("container3").style.marginBottom = "50px"
}

//animação para aparecer Especialidades
function aparecerEspec(){
    var id = document.querySelectorAll("#especialidade").length
    if(id == 1){
        document.getElementById("especialidade").style.display = "block"
        document.getElementById("especialidade").setAttribute("id","especialidade_")
    }
    if(id == 0){
        document.getElementById("especialidade_").style.display = "none"
        document.getElementById("especialidade_").setAttribute("id","especialidade")
    }
    console.log(id)
}

//Animação para aparecer os campos as perguntas dobre o assunto;
function aparecerBlock(){
    var id = document.querySelectorAll("#container2").length
    if(id >=1){
        document.getElementById("container2").style.display = "block"
        document.getElementById("container2").setAttribute("id","container_")
    }
}

function aparecerBlockEspc(){
    if(paramPage != "sobre=valeria"){
    var id = document.querySelectorAll("#especialidade").length
    if(id >=1){
        document.getElementById("especialidade").style.display = "block"
    }
    }
}

