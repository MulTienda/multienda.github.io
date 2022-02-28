



const $tarjeta=document.getElementById("tarjeta").content

let fragmento=document.createDocumentFragment()
let fragmentoOfertas=document.createDocumentFragment()

let producto={

    nombre: ["lentes blue protect","lentes green protect"],

    precio:["s/50","s/100"],

    image:["images/lente.png","images/lente.png"]

}

let productoOfertas={

    nombre: ["lentes blue protect","lentes green protect"],

    precio:["s/50","s/100"],

    image:["images/lente.png","images/lente.png"]

}


producto.nombre.forEach((el,i)=>{

    const $imagen=$tarjeta.querySelector(".producto .imagen img")
    let $nombre=$tarjeta.querySelector(".producto .descripcion")
    const $precio=$tarjeta.querySelector(".producto .price")


    $imagen.setAttribute("src",producto.image[i])
    console.log($nombre)
    $nombre.textContent= producto.nombre[i]
    $precio.textContent= producto.precio[i]

    let $clone=document.importNode($tarjeta,true)

    fragmento.appendChild($clone)

    
})

let $galeria=document.querySelector(".galeria")


$galeria.appendChild(fragmento)


productoOfertas.nombre.forEach((el,i)=>{

    const $imagen=$tarjeta.querySelector(".producto .imagen img")
    let $nombre=$tarjeta.querySelector(".producto .descripcion")
    const $precio=$tarjeta.querySelector(".producto .price")


    $imagen.setAttribute("src",productoOfertas.image[i])
    console.log($nombre)
    $nombre.textContent= productoOfertas.nombre[i]
    $precio.textContent= productoOfertas.precio[i]

    let $clone=document.importNode($tarjeta,true)

    fragmentoOfertas.appendChild($clone)
})

document.querySelector(".main .ofertas-galeria").appendChild(fragmentoOfertas)