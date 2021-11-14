const endpoint="https://gb32026227f69f2-db202111061025.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message" 

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

function mostrarDatosTabla(message){
    let cadena=""
    message.forEach(message => {
        cadena+=    "<tr>" +
                    "<td> " + message.id + "</td>" +
                    "<td> " + message.messagetext + "</td>" +
                    "</tr>"
    })
    return cadena
}


/** Función post */
function peticionPost(){
    
    const  message= {
        id:"4",
        messagetext:"Este es un mensaje"
    }

    const datasend=JSON.stringify(message)


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
    
    const  message= {
        id:"4",
        messagetext:"Este es un mensaje modificado"
    }

    const datasend=JSON.stringify(message)


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
    
    const  message= {
        id:"4"
    }

    const datasend=JSON.stringify(message)


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
