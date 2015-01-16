$(document).ready(function() {
    "use strict"

    $("#button").click(function(){
        var textbox = $("#textbox");
        if(textbox != ""){
            $.ajax({
                url: "http://md5.jsontest.com/?service=md5",
                type: "POST",
                contentType: "application/x-www-form-urlencoded",
                data: {text: textbox.val()},

                success: function(response) {
                    $("#result").html("The MD5 of " + $(response).attr("original") + " is " + $(response).attr("md5"));
                },
            });
        } else {
            $("#result").html("ERROR: Enter text");
        }   

    });

});
