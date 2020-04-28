// Esercizio di oggi: Esercizio Dischi
// Descrizione:
// Attraverso una chiamata ajax all’Api di boolean avremo a disposizione una decina di dischi musicali.
// Servendoci di handlebars stampiamo tutto a schermo.
// In questo momento non è importante la parte grafica.
// Bonus: Creare una select con i seguenti generi: pop, rock, metal e jazz. In base a cosa scegliamo nella select vedremo i corrispondenti cd.
//Endpoint API
//https://flynn.boolean.careers/exercises/api/array/music

$(document).ready(function() {

var contentMex = $('.cds-container');
var source = $('#cd-template').html();
var apiBo = 'https://flynn.boolean.careers/exercises/api/array/music';

  $.ajax({
    url: apiBo,
    method: 'GET',
    success: function(data){

      var singles = data.response;
    //  console.log(singles);
      if(singles.length > 0){
        for(var i= 0; i < singles.length; i++) {
          //console.log(singles[i]);

          var template = Handlebars.compile(source);
          var html = template(singles[i]);
          contentMex.append(html);
        }
      }
    },
    error: function(){
      console.log('error');
    }

  });

  $( "select" )
    .change(function() {

      $( "select option:selected" ).each(function() {
        console.log('ciao', $( this).val());
      });

    })


});//ready
