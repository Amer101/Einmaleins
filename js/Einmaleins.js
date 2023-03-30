$(document).ready(function(){

    $("#output").click(function(){

        $("#header").html("Die " + $("#input").val() +"er Reihe");
        $(".hidden").animate({ width: '220px'
                                                        
    });
        var i;
        var item="";
        var result;
        for(i=1; i <= 10; i++) {
            result = i * $("#input").val();
            item += "<tr>" + 
            "<td>" + i + "</td>" +
            "<td>*</td>" + "<td>" +
            $("#input").val() + "</td>" +
            "<td>=</td>" +
            "<td>" + result + "</td>" +
            "</tr>";
        }
        
        $("#result").html(item); 
        $("#header").show();
        $("#result").show();  
});

$("#new").click(function(){
    $(".hidden").animate({
        width: '0px'
    })
    $("#header").hide();
    $("#result").hide();
    $("#input").val("");
});  
})