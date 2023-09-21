var array = []

function enviar(){
    if(localStorage.array){
        array = localStorage.getItem(JSON.parse(array))
    }

    var nome = String(document.getElementById("nome").value)
    var nota1 = Number(document.getElementById("m1").value)
    var nota2 = Number(document.getElementById("m2").value)
    var nota3 = Number(document.getElementById("m3").value)
    var nota4 = Number(document.getElementById("m4").value)
    var media = (nota1+nota2+nota3+nota4)/4

    if(media > 10)
        {   window.alert(`[ERRO!] Nota e Média não podem ser maiores que dez(10). Está sendo atribuído nota 10 no local do erro.`)
            media = 10
        }
    else if(nota1 > 10)
    {
        window.alert(`[ERRO!] Nota e Média não podem ser maiores que dez(10). Está sendo atribuído nota 10 no local do erro.`)
        nota1 = 10
    }
    else if(nota2 > 10)
    {
        window.alert(`[ERRO!] Nota e Média não podem ser maiores que dez(10). Está sendo atribuído nota 10 no local do erro.`)
        nota2 = 10
    }
    else if(nota3 > 10)
    {
        window.alert(`[ERRO!] Nota e Média não podem ser maiores que dez(10). Está sendo atribuído nota 10 no local do erro.`)
        nota3 = 10
    }
    else if(nota4 > 10)
    {
        window.alert(`[ERRO!] Nota e Média não podem ser maiores que dez(10). Está sendo atribuído nota 10 no local do erro.`)
        nota4 = 10
    }
    
    if(media < 0)
        {   window.alert(`[ERRO!] Nota e Média não podem ser menores que zero(0). Está sendo atribuído nota 0 no local do erro.`)
            media = 0
        }
    else if(nota1 < 0)
    {
        window.alert(`[ERRO!] Nota e Média não podem ser menores que zero(0). Está sendo atribuído nota 0 no local do erro.`)
        nota1 = 0
    }
    else if(nota2 < 0)
    {
        window.alert(`[ERRO!] Nota e Média não podem ser menores que zero(0). Está sendo atribuído nota 0 no local do erro.`)
        nota2 = 0
    }
    else if(nota3 < 0)
    {
        window.alert(`[ERRO!] Nota e Média não podem ser menores que zero(0). Está sendo atribuído nota 0 no local do erro.`)
        nota3 = 0
    }
    else if(nota4 < 0)
    {
        window.alert(`[ERRO!] Nota e Média não podem ser menores que zero(0). Está sendo atribuído nota 0 no local do erro.`)
        nota4 = 0
    }

    array.push({Nome: nome, Nota1: nota1, Nota2: nota2, Nota3: nota3, Nota4: nota4, Média: media})

    localStorage.setItem("Notas", JSON.stringify(array))

    document.getElementById("nome").value = ``
    document.getElementById("m1").value = ``
    document.getElementById("m2").value = ``
    document.getElementById("m3").value = ``
    document.getElementById("m4").value = ``

    var enviado = document.getElementById("enviado")
    enviado.innerHTML = `Enviado com sucesso!`

    setTimeout(
        function(){
            var enviado = document.getElementById("enviado")
            enviado.innerHTML = ``
        }, 2000
    )
}

function buscar(){

    var r = localStorage.getItem("Notas")
    var resultado = JSON.parse(r)
    console.log(resultado)
    var res = document.getElementById("mostrar")
    res.innerHTML = ``

    for(c=0; c<resultado.length; c++){

        if(resultado[c].Média >= 7){
            res.innerHTML +=
                `<br>Aluno: ${resultado[c].Nome}<br>
                1 Unidade: ${resultado[c].Nota1}<br>
                2 Unidade: ${resultado[c].Nota2}<br>
                3 Unidade: ${resultado[c].Nota3}<br>
                4 Unidade: ${resultado[c].Nota4}<br>
                Média: ${resultado[c].Média}<br>
                Resultado: <strong>APROVADO !<strong/><br>`
        }else{
            res.innerHTML += `
                <br>Aluno: ${resultado[c].Nome}<br>
                1 Unidade: ${resultado[c].Nota1}<br>
                2 Unidade: ${resultado[c].Nota2}<br>
                3 Unidade: ${resultado[c].Nota3}<br>
                4 Unidade: ${resultado[c].Nota4}<br>
                Média: ${resultado[c].Média}<br>
                Resultado: <strong>REPROVADO !<strong/><br>`
        }
    }

} 

limparDados = () =>{
    localStorage.clear("Notas")
    var res = document.getElementById("mostrar")
    res.innerHTML = ``
    array = []
} 