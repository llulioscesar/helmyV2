
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '717024069121831',
      cookie     : true,
      xfbml      : true,
      version    : 'v7.0'
    });
      
    FB.AppEvents.logPageView();   
      
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));


   function fbLogin(){
     FB.login(function(response){
         if(response.authResponse){
            fbAfterLogin();
         }
     });
   }

   function fbAfterLogin(){
    FB.getLoginStatus(function(response) {
        if (response.status === 'connected') {
            FB.api('/me?fields=email,permissions', function(response) {
                
                let email = response.email;
                let password = 'FACEBOOK';

                var datos = new FormData();
                datos.append('email', email);
                datos.append('password', password);

                // crear el llamado a ajax
                console.log(datos);

                var xhr = new XMLHttpRequest();
                xhr.open('POST', 'social.php', true);

                // retornando datos

                xhr.onload = function () {
                    if (this.status === 200) {
                        let respuesta = JSON.parse(xhr.responseText);
                         //si la respuesta es correcta
                        if (respuesta.status === '1') {
                            // si es un nuevo usuario
                            console.log('registro exitoso');

                        } else {
                            if (respuesta.status === '2') {
                              console.log('login correcto');
                            }
                        }
                    }
                }
                // Enviar la peticion
                xhr.send(datos);
            });
        }
    });
}