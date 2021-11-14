const endpoint="https://gb32026227f69f2-db202111061025.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/partyroom/partyroom" 

$(document).ready(function (){
    $("#consultar").click(function(){

        peticionGet()

    })
})


$(document).ready(function (){
        peticionGet()
        $("#guardar").click(function(){

            peticionPost()

        })
})

$(document).ready(function (){
    peticionGet()
    $("#modificar").click(function(){

        peticionPut()

    })
})

$(document).ready(function (){
    peticionGet()
    $("#borrar").click(function(){

        peticionDel()

    })
})


function peticionGet(){

    $.ajax({
        method:"GET",
        url:endpoint,
        success:function(data){
            if (data.lenght==0){
                console.log("Sin datos")

            }
            else {
                console.log(data.items)
                $("#tbody").html(mostrarDatosTabla(data.items))
                console.log(mostrarDatosTabla(data.items))
            }
        }
    })
}

function mostrarEtiqueta(rooms){
    let cadena=""
    rooms.forEach(room => {
        cadena+=    "<p> codigo: " + producto.id + "</p>" +
                    "<p> Producto: " + producto.owner + "</p>" +
                    "<p> Precio: " + producto.capacity + "</p>" +
                    "<p> Inventario: " + producto.inventario
        
    })
    return cadena
}

function mostrarDatosTabla(rooms){
    let cadena=""
    rooms.forEach(room => {
        cadena+=    "<tr>" +
                    "<td> " + room.id + "</td>" +
                    "<td> " + room.owner + "</td>" +
                    "<td> " + room.capacity + "</td>" +
                    "<td> " + room.category_id + "</td>" +
                    "<td> " + room.name + "</td>" +
                    "</tr>"
    })
    return cadena
}


/** Función post */
function peticionPost(){
    
    const  room= {
        id:"4",
        owner:"Milcon",
        capacity:"400",
        category_id:"2",
        name:"Salón de fiestas infántiles"
    }

    const datasend=JSON.stringify(room)


    $.ajax({
        method:"POST",
        url:endpoint,
        data:datasend,
        contentType:"application/json",
        complete: function(response){

            console.log(response.status)
            peticionGet()
        }
    })
}


/** Función post */
function peticionPut(){
    
    const  room= {
        id:"4",
        owner:"Milcon Montenegro",
        capacity:"400",
        category_id:"2",
        name:"Salón de fiestas infántiles 1"
    }

    const datasend=JSON.stringify(room)


    $.ajax({
        method:"PUT",
        url:endpoint,
        data:datasend,
        contentType:"application/json",
        complete: function(response){

            console.log(response.status)
            peticionGet()
        }
    })
}

/** Función Delete*/
function peticionDel(){
    
    const  room= {
        id:"4"
    }

    const datasend=JSON.stringify(room)


    $.ajax({
        method:"DELETE",
        url:endpoint,
        data:datasend,
        contentType:"application/json",
        complete: function(response){

            console.log(response.status)
            peticionGet()
        }
    })
}
