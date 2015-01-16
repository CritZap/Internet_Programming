$(document).ready(function() {
    "use strict"

    $("#button").click(function(){
        var textbox = $("#textbox");

        $.ajax({
            url: "http://validate.jsontest.com/?service=validate",
            type: "POST",
            contentType: "application/x-www-form-urlencoded",
            data: {json: textbox.val()},

            success: function(response) {
                var result;
                for (var property in response) {
                    if (response.hasOwnProperty(property)) {
                        result = response[property];
                        break;
                    }
                }
                if(result === "object" || result === "array") {
                    $("#result").html("This is " + result);
                } else {
                    $("#result").html("<b>ERROR</b>: " + result);
                }
            },
        });

    });

});
