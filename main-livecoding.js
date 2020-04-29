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
var template = Handlebars.compile(source);
var apiBo = 'https://flynn.boolean.careers/exercises/api/array/music';

  $.ajax({
    url: apiBo,
    method: 'GET',
    success: function(data){
    var singles = data.response;
    //  console.log(singles);

        for(var i= 0; i < singles.length; i++) {
        var thisCd = singles[i];

          var context = {
            poster :thisCd.poster,
            title : thisCd.title,
            author : thisCd.author,
            year : thisCd.year,
            genres : thisCd.genre.toLowerCase()
          };

          var html = template(context);
          $('.cds-container').append(html)

        }
  },
    error: function(){
      console.log('error');
    }

  });

  // select genres
  $('#genres').change(function (){
    console.log('Change', $(this).val());
    var genre = $(this).val();

    if(genre === 'all') {
      $('.cd').show();
    } else {
      $('.cd').hide();
      $('.cd' + genre).show();
    }
  });


});//ready
