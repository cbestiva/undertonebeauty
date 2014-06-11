var initialize = function () {

  //User profile favorites tabs 
  $("#myProductsTab a").click(function(e) {
    e.preventDefault();
    $(this).tab("show");
  });

};

$(document).on('ready page:load', initialize);