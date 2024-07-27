emailjs.init('Ba53doHZ4dCGVs_It'); //importa la libreria con mi //
document.getElementById("suscription").addEventListener('submit',function(event){
    event.preventDefault(); //para que el sistema no se rompa
    var userEmail = document.getElementById( "userEmail").value; // el value se trae solo lo que esta escrito en esa caja de texto
    var mensaje = "Estoy interesado en tí,comunicate conmigo";
    
    var params = {
        from_name: "Usuario",
        to_email: userEmail,
        message: mensaje,
        name:"María José",

    }
    emailjs.send('service_o7qg4xt','template_gp9c22u', params)
        .then(function(response){// then = entonces, si eso es vdd entra 
        console.log("Enviado correctamente");
        Swal.fire({
            icon: 'success',
            title: "¡Correo enviado",
            text: "Gracias por contactarme, tratare de comunicarme contigo lo mas rapido posible"
        });

        document.getElementById("userEmail").value = "";// para limpiar una caja de  texto 
    }, function(error){
        console.log("No se pudo enviar correctamente");
        Swal.fire({
            icon: 'error',
            title: "No se pudo enviar el correo",
            text: "Intenta nuevamente, o llamame a mi numero celular"
        });
    });
});