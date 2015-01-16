$(document).ready(function() {
    "use strict" 

    var text = $("#text");
    
    $("#button").click(function(){
        var key = $("#key");
        var value = $("#value");
        if(key.val() != "" && value.val() != ""){
            $.ajax('http://echo.jsontest.com/' + encodeURIComponent(key.val()) + '/' + encodeURIComponent(value.val()) + '/?service=echo', {
                method: "GET"
                }).then(function(data) {
                    text.html("JSON: " + JSON.stringify(data));
            });
        } else {
            text.html("ERROR: Please enter key and value");
        }
    });
});
