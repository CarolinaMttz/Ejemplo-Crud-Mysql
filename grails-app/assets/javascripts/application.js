// This is a manifest file that'll be compiled into application.js.
//
// Any JavaScript file within this directory can be referenced here using a relative path.
//
// You're free to add application-wide JavaScript to this file, but it's generally better
// to create separate JavaScript files as needed.
//
//= require jquery-3.3.1.min
//= require bootstrap
//= require popper.min
//= require_self
$("#notaP1, #notaP2, #notaP3, #notaExamen").change(function(){
    var n1 = parseFloat( $("#notaP1").val() ) * 0.23;
    var n2 = parseFloat( $("#notaP2").val() ) * 0.23;
    var n3 = parseFloat( $("#notaP3").val() ) * 0.23;
    var notaExamen = parseFloat( $("#notaExamen").val() ) * 0.31;

    var result = (n1 + n2 + n3 + notaExamen);
    $("#notaFinal").val( result.toFixed( fractionDigits: 2 ).toString().replace(searchValue: ".", replace: ",") );
});