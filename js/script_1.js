const endpoint="https://gb32026227f69f2-db202111061025.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client" 

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

function mostrarDatosTabla(clients){
    let cadena=""
    clients.forEach(client => {
        cadena+=    "<tr>" +
                    "<td> " + client.id + "</td>" +
                    "<td> " + client.name + "</td>" +
                    "<td> " + client.email + "</td>" +
                    "<td> " + client.age + "</td>" +
                    "</tr>"
    })
    return cadena
}


/** Función post */
function peticionPost(){
    
    const  room= {
        id:"4",
        name:"Milcon",
        email:"milcon@gmail.com",
        age:"2",
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
    
    const  client= {
        id:"4",
        name:"Milcon",
        email:"milcon@gmail.com",
        age:"49",
    }

    const datasend=JSON.stringify(client)


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
    
    const  client= {
        id:"4"
    }

    const datasend=JSON.stringify(client)


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
