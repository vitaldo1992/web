jQuery( document ).ready(function() {
    jQuery(".table-dymohody td").mouseover(function() {
    var trs = jQuery( this.parentElement ).parent().find("tr");
    var tds = jQuery( this ).parent().find("td");
    index = jQuery.inArray( this, tds );

    jQuery(".table-dymohody td:nth-child("+( index + 1 )+")").css("background-color", "#0088B5");
    jQuery(".table-dymohody td:nth-child("+( index + 1 )+") a").css("color", 'white');

    this.style.backgroundColor="red";

  }).mouseout(function() {
    var tds = jQuery( this ).parent().find("td"),
    index = jQuery.inArray( this, tds );

    jQuery(".table-dymohody td:nth-child("+( index + 1 )+")").css("background-color", "inherit");
    jQuery(".table-dymohody td:nth-child("+( index + 1 )+") a").css("color", '');
    this.style.border="";
  });
})
