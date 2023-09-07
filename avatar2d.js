let button = document.querySelectorAll("button")
let base_cabelo = document.querySelector(".base-cabelo")
let base_camiseta = document.querySelector(".base-camiseta")
let base_calça = document.querySelector(".base-calça")
let base_tenis = document.querySelector(".base-tenis")
let base_nome = document.querySelector(".nome-base")
let guarda_roupa = document.querySelector(".guarda-roupa")
let guarda_roupa_estoque = []
let input = document.querySelector("input")

let cond_cabelo = 0
let cond_camiseta = 0
let cond_calça = 0
let cond_tenis = 0


let cond_cabelo_anterior = ""
let cond_camiseta_anterior = ""
let cond_calça_anterior = ""
let cond_tenis_anterior = ""



button[0].addEventListener("click",()=>{
cond_cabelo += 1
guarda_roupa_estoque.push(`CABELO +ADD ${cond_cabelo}`)
switch(cond_cabelo){
    case 0:
        cond_cabelo_anterior = "background-image: url(/);"
        base_cabelo.style ="background-image: url(/);"
        break;
    case 1:
cond_cabelo_anterior = "background-image: url(/imagens/Img/cabelo03.png);"
base_cabelo.style ="background-image: url(/imagens/Img/cabelo03.png);"
break;
    case 2:
        cond_cabelo_anterior = "background-image: url(/imagens/Img/cabelo04.png);"
        base_cabelo.style ="background-image: url(/imagens/Img/cabelo04.png);"
break;
default:
    cond_cabelo_anterior = "background-image: url(/imagens/Img/cabelo02.png);"
    cond_cabelo -= 4
    base_cabelo.style ="background-image: url(/imagens/Img/cabelo02.png);"
}
base_nome.style = "display:block"
})

button[1].addEventListener("click",()=>{
    cond_camiseta += 1
    
    guarda_roupa_estoque.push(`CAMISETA +ADD ${cond_camiseta}`)
    switch(cond_camiseta){
        case 0:
    cond_camiseta_anterior = "background-image: url(/imagens/Img/camiseta01.png);"
    base_camiseta.style ="background-image: url(/imagens/Img/camiseta01.png);"
            break;
        case 1:
    cond_camiseta_anterior = "background-image: url(/imagens/Img/camiseta02.png);"
    base_camiseta.style ="background-image: url(/imagens/Img/camiseta02.png);"
    break;
        case 2:
    cond_camiseta_anterior = "background-image: url(/imagens/Img/camiseta03.png);"
    base_camiseta.style ="background-image: url(/imagens/Img/camiseta03.png);"
    break;
    default:
        cond_camiseta_anterior = "background-image: url(/imagens/Img/camiseta04.png);"
        cond_camiseta -= 4
        base_camiseta.style ="background-image: url(/imagens/Img/camiseta04.png);"
    }
    base_nome.style = "display:block"
    })

    button[2].addEventListener("click",()=>{
        cond_calça += 1
        guarda_roupa_estoque.push(`CALÇA +ADD ${cond_calça}`)
        switch(cond_calça){
            case 0:
        cond_calça_anterior = "background-image: url(/imagens/Img/calça2.png);"
        base_calça.style ="background-image: url(/imagens/Img/calça2.png);"
                break;
            case 1:
        cond_calça_anterior = "background-image: url(/imagens/Img/calça1.png);"
        base_calça.style ="background-image: url(/imagens/Img/calça1.png);"
        break;
            case 2:
        cond_calça_anterior = "background-image: url(/imagens/Img/calça3.png);"
        base_calça.style ="background-image: url(/imagens/Img/calça3.png);"
        break;
        default:
            cond_calça -= 4
            cond_calça_anterior = "background-image: url(/imagens/Img/calça4.png);"
            base_calça.style ="background-image: url(/imagens/Img/calça4.png);"
        }
        base_nome.style = "display:block"
        })

        button[3].addEventListener("click",()=>{
            cond_tenis += 1
            guarda_roupa_estoque.push(`TENIS +ADD ${cond_tenis}`)
            switch(cond_tenis){
                case 0:
            cond_tenis_anterior = "background-image: url(/imagens/Img/tenis1.png);"
            base_tenis.style ="background-image: url(/imagens/Img/tenis1.png);"
                    break;
                case 1:
            cond_tenis_anterior = "background-image: url(/imagens/Img/tenis2.png);"
            base_tenis.style ="background-image: url(/imagens/Img/tenis2.png);"
            break;
            default:
                cond_tenis_anterior = "background-image: url(/imagens/Img/tenis3.png);"
                cond_tenis -= 3
                base_tenis.style ="background-image: url(/imagens/Img/tenis3.png);"
            }
            base_nome.style = "display:block"
            })

            button[4].addEventListener("click",(a)=>{
                window.scrollTo(0,1000)
                a.preventDefault()
                const nome_colocado = input.value;
                console.log(guarda_roupa_estoque)
                let papel_foto = document.createElement("div")
                let base_cabelo_nova = document.createElement("div")
                let base_camiseta_nova = document.createElement("div")
                let base_calça_nova = document.createElement("div")
                let base_tenis_nova = document.createElement("div")
                let nome_personagem = document.createElement("p")
                let base_personagem = document.createElement("div")

                papel_foto.setAttribute("class","papel-foto")
                base_cabelo_nova.setAttribute("class","base-cabelo-nova")
                base_camiseta_nova.setAttribute("class","base-camiseta-nova")
                base_calça_nova.setAttribute("class","base-calça-nova")
                base_tenis_nova.setAttribute("class","base-tenis-nova")
                nome_personagem.setAttribute("class"," nome-personagem")
                base_personagem.setAttribute("class","base-personagem")

if(cond_cabelo_anterior.style == ""){
cond_cabelo_anterior.style = "background-image: url(/imagens/Img/cabelo02.png);"
    }
if(cond_camiseta_anterior.style == ""){
cond_camiseta_anterior.style = "background-image: url(/imagens/Img/camiseta01.png);"
}
if(cond_calça_anterior.style == ""){
    cond_calça_anterior.style = "background-image: url(/imagens/Img/calça1.png);"
        }
if(cond_tenis_anterior.style == ""){
cond_tenis_anterior.style = "background-image: url(/imagens/Img/tenis1.png);"
    }
                papel_foto.style = "background-image: url(/imagens/Img/personagem.png);"
                base_cabelo_nova.style = cond_cabelo_anterior;
                base_camiseta_nova.style = cond_camiseta_anterior;
                base_calça_nova.style = cond_calça_anterior;
                base_tenis_nova.style = cond_tenis_anterior;

                nome_personagem.textContent = nome_colocado

                guarda_roupa.appendChild(papel_foto)
                papel_foto.appendChild(base_cabelo_nova)
                papel_foto.appendChild(base_camiseta_nova)
                papel_foto.appendChild(base_calça_nova)
                papel_foto.appendChild(base_tenis_nova)
                papel_foto.appendChild(base_personagem)
                base_personagem.appendChild(nome_personagem)
                })
                