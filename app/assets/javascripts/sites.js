//Signup Modal
$(function () {
  $("#sign_up").modal({show:false});
})

//Filter by skintone
function filterUsers(){
  var getValue = document.getElementById('selected_skin');
  // console.log(getValue);
  var skintone = getValue.options[getValue.selectedIndex].value;
  console.log(skintone);

  var users = [];
  var user = {};
  user.username = $('#user_username').val();
  user.email = $('#user_email').val();
  user.avatar = $('#user_avatar').val();
  user.skintone = $('#user_skintone_id option:selected').text();
  user.eyecolor = $('#user_eyecolor_id').val();
  // console.log(user);

  $.ajax({
    url: '/undertonebeauty/fair-medium.json',
    type: 'POST',
    data: { data: user}
  }).done(function(data) {
    $('.filtered_users').empty();
    if (skintone === "All") {
      for (var i=0; i < data.length; i++) {
        // $('.filtered_users').empty();
        // users.push(data[i]);
        var recordHTML = HandlebarsTemplates.user(data[i]);
        $('.filtered_users').append(recordHTML);
      }    
    } else {
      // console.log(data);
      for (var i=0; i < data.length; i++) {
        // console.log(data[i].skintone.color);
        // console.log(skintone);
        if (data[i].skintone.color === skintone) {
          console.log(data[i]);
          $('.filtered_users').empty();
          users.push(data[i]);
          console.log(users);
          $(users).each(function(index, result) {
            var recordHTML = HandlebarsTemplates.user(result);
            $('.filtered_users').append(recordHTML);
          });
        } 
        // else {
        //   $('.filtered_users').empty();
        //   $('.filtered_users').append("<br/><p>No users found.</p>");
        // }
      }
    }
  });
}


var initialize = function () {

  //User profile favorites tabs 
  $("#myProductsTab a").click(function(e) {
    e.preventDefault();
    $(this).tab("show");
  });


};

$(document).on('ready page:load', initialize);