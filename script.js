$(function(){
	
    var $name = $('#name');
    var $specification = $('#specification');

    $('#button').on("click", function(){
        if (!$name.val() || !$specification.val()) {
            alert("Заполните поля!");
            return false();}

        $('h3').hide();
       
        $('#column-left').append("<ul><li class='li1'>"  + $name.val()  + 
            "<button class='delete'>&#10006</button><button class='row'></button></li><li class='li2'>" 
                                    + $specification.val() + "</li></ul>");
        $name.val("");
        $specification.val("");
    });
       
    $("#column-left").on("click", ".delete", function(){
        $(this).parents('ul').remove();
        if (!$('ul').children().length) {$('h3').show();};
    });

    $('#column-left').on("click", ".row", function(){
        if ($(this).parents('li').next().is(":visible")) {
          $(this).parents('li').next().hide("slow");
             $(this).animate({  borderSpacing: 90 }, {
                step: function(now,fx) {
                 $(this).css('transform','rotate('+now+'deg)');  
                      },
                     duration:'slow'
                        },'ease');
        }
        else {
          $(this).parents('li').next().show("slow");
           $(this).animate({  borderSpacing: -2 }, {
                step: function(now,fx) {
                 $(this).css('transform','rotate('+now+'deg)');  
                      },
                     duration:'slow'
                        },'ease');
        }
    });

});