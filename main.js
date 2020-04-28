// Esercizio di oggi: Esercizio Dischi
// Descrizione:
// Attraverso una chiamata ajax all’Api di boolean avremo a disposizione una decina di dischi musicali.
// Servendoci di handlebars stampiamo tutto a schermo.
// In questo momento non è importante la parte grafica.
// Bonus: Creare una select con i seguenti generi: pop, rock, metal e jazz. In base a cosa scegliamo nella select vedremo i corrispondenti cd.
//Endpoint API
//https://flynn.boolean.careers/exercises/api/array/music
$(document).ready(function() {

var apiBo = 'https://flynn.boolean.careers/exercises/api/array/music';

var albums = [];

  $.ajax({
    url: apiBo,
    method: 'GET',
    success: function(data){
      var singles = data.response;
      console.log(singles);
      if(data.success){
        albums.push(singles)
      }
    },
    error: function(){
      console.log('error');
    }

  });

  var template = $('#cd-template').html();
  var compiledTemplate = Handlebars.compile(template);

  console.log(albums);
});
