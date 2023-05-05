//CONFIG FORM
let n = document.getElementById("name");
let email = document.getElementById("email");
let t = document.getElementById("textarea");
let btn = document.getElementById("btn");

btn.addEventListener("click", (e) =>  {
    e.preventDefault();
    if (n.value == "") {
        console.log("Preencha o campo nome corretamente!");
        alert("Preencha o campo nome corretamente!");
    } else if (email.value == "") {
        console.log("Preencha o campo e-mail corretamente!");
        alert("Preencha o campo e-mail corretamente!");
    } else if (t.value == "") {
        console.log("Preencha a mensagem!");
        alert("Preencha a mensagem!");
    } else {
        n.value = "";
        email.value = "";
        t.value = "";

        console.log("Mensagem enviada com sucesso!")
        alert("Mensagem enviada com sucesso!");
        sumir.classList.remove('sumiu');
    }
});



const viagens = [
    {
        "id": 1,
        "nome" : "Londres",
        "regiao" : "Europa"
    },
    {
        "id": 2,
        "nome" : "Dubai",
        "regiao": "Oriente medio"
    },
    {
        "id": 3,
        "nome": "Roma",
        "regiao": "Europa"
    },
    {
        "id": 4,
        "nome": "Paris",
        "regiao": "Europa"
    },
    {
        "id": 5,
        "nome": "Rio de Janeiro",
        "regiao": "America do sul"
    },
    {
        "id": 6,
        "nome": "Tailândia",
        "regiao": "Asia"
    },
    {
        "id": 7,
        "nome": "New york",
        "regiao": "America do norte"
    },
    {
        "id": 8,
        "nome": "Alasca",
        "regiao": "America do norte"
    }
];

const rodape = document.querySelector(".rodape");

const viagem = viagens.map((element) => {
    //console.log(element.nome);
    const h1 = document.createElement('h1');
    const p = document.createElement('p');
    rodape.appendChild(h1);

    h1.innerHTML = element.nome;
});















