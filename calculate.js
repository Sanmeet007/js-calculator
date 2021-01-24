        

    function num_press(num){

        $("#hideme").html("");

        $('#results').html("");

        $('#calculation_history').append(num);

     

     }

    $('#clear').on("click" , function(){

       $("#display_history").html("");

     

      var h = 0;

      $('#calculation_history').html("");

    

      $('#results').html("");

      

    });

    $('.equal').on("click" , function(){

   

      if($('#results').html() != ""){

        $('#results').html("");

      } 

     

    var calculate= $('#calculation_history').html();

    

    calculate= eval(calculate);

    $('#results').html(calculate);

    

  $('.history').html( $("#calculation_history").html() );

   $("#calculation_history").html(calculate);

     

   // $("#display_history").html(mikasa);

 // $("#calculation_history").html(mikasa);

    

    });

    $('#clearme').on('click' , function (){

  

    var g =  $('#calculation_history').html();

      g =  g.substr(0, g.length-1);

      $('#calculation_history').html(g);

  

        //document.write(g.length);

       if(g.length == 25){

         $('#calculation_history').html("");

        

          }

    });

    

    

    function paranthesis_open() {

     value = $('#calculation_history').html();

    

      $('#calculation_history').append("(");

    

    }

    

    function paranthesis_close() {

     value = $('#calculation_history').html();

    

      $('#calculation_history').append(")");

    

    }

    

    function make_negative(){

      

    var check = $('#calculation_history').html();

      if(check > 0){

        $('#calculation_history').prepend("-");

     

      }

      if(check < 0){

       check =   check.replace("-" , "");

          $('#calculation_history').html(check);

      }

      

    }

    

    

    $('.history').on("click", function(){

      

      var jk= $(this).html();

       $('#calculation_history').html(jk);

    });

    

    

   

    

    

