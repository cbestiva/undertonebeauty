//Signup Modal
$(function () {
  $("#sign_up").modal({show:false});
})

//Filter by brown-dark skintone
function filterBrownDarkUsers(){
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
    url: '/undertonebeauty/brown-dark.json',
    type: 'POST',
    data: { data: user}
  }).done(function(data) {
    var skintone_data = data[0]
    $('.filtered_users').empty();
    if (skintone === "All") {
      for (var i=0; i < skintone_data.length; i++) {
        $('.filtered_users').empty();
        users.push(skintone_data[i]);
        $(users).each(function(index, result) {
          var recordHTML = HandlebarsTemplates.user(result);
          $('.filtered_users').append(recordHTML);
        });
      }    
    } else {
      // console.log(data);
      for (var i=0; i < skintone_data.length; i++) {
        // console.log(data[i].skintone.color);
        // console.log(skintone);
        if (skintone_data[i].skintone.color === skintone) {
          console.log(skintone_data[i]);
          $('.filtered_users').empty();
          users.push(skintone_data[i]);
          console.log(users);
          $(users).each(function(index, result) {
            var recordHTML = HandlebarsTemplates.user(result);
            $('.filtered_users').append(recordHTML);
          });
        } 
        // else {
        // $('.filtered_users').empty();
        // $('.filtered_users').append("<br/><p>No users found.</p>");
        // }
      }
    }
  });
}

//Filter by olive-brown skintone
function filterOliveBrownUsers(){
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
    url: '/undertonebeauty/olive-brown.json',
    type: 'POST',
    data: { data: user}
  }).done(function(data) {
    var skintone_data = data[0]
    $('.filtered_users').empty();
    if (skintone === "All") {
      for (var i=0; i < skintone_data.length; i++) {
        $('.filtered_users').empty();
        users.push(skintone_data[i]);
        $(users).each(function(index, result) {
          var recordHTML = HandlebarsTemplates.user(result);
          $('.filtered_users').append(recordHTML);
        });
      }    
    } else {
      // console.log(data);
      for (var i=0; i < skintone_data.length; i++) {
        // console.log(data[i].skintone.color);
        // console.log(skintone);
        if (skintone_data[i].skintone.color === skintone) {
          console.log(skintone_data[i]);
          $('.filtered_users').empty();
          users.push(skintone_data[i]);
          console.log(users);
          $(users).each(function(index, result) {
            var recordHTML = HandlebarsTemplates.user(result);
            $('.filtered_users').append(recordHTML);
          });
        } 
        // else {
        // $('.filtered_users').empty();
        // $('.filtered_users').append("<br/><p>No users found.</p>");
        // }
      }
    }
  });
}

//Filter by light-fair skintone
function filterLightFairUsers(){
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
    url: '/undertonebeauty/light-fair.json',
    type: 'POST',
    data: { data: user}
  }).done(function(data) {
    var skintone_data = data[0]
    $('.filtered_users').empty();
    if (skintone === "All") {
      for (var i=0; i < skintone_data.length; i++) {
        $('.filtered_users').empty();
        users.push(skintone_data[i]);
        $(users).each(function(index, result) {
          var recordHTML = HandlebarsTemplates.user(result);
          $('.filtered_users').append(recordHTML);
        });
      }    
    } else {
      // console.log(data);
      for (var i=0; i < skintone_data.length; i++) {
        // console.log(data[i].skintone.color);
        // console.log(skintone);
        if (skintone_data[i].skintone.color === skintone) {
          console.log(skintone_data[i]);
          $('.filtered_users').empty();
          users.push(skintone_data[i]);
          console.log(users);
          $(users).each(function(index, result) {
            var recordHTML = HandlebarsTemplates.user(result);
            $('.filtered_users').append(recordHTML);
          });
        } 
        // else {
        // $('.filtered_users').empty();
        // $('.filtered_users').append("<br/><p>No users found.</p>");
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

  var clicked = false;  

  //Filter Fair-Medium Skintones
  $('#usersButton').click(function() {
    if (!clicked) {
      $('#productsButton').removeClass('active');
      $('#usersButton').addClass('active');
      $('#selectedSkintone li a').click(function(e) {
        e.preventDefault();
        var skintone = $(this).text();
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
          var skintone_data = data[0]
          $('.filtered_users').empty();
          if (skintone === "Fair & Medium") {
            for (var i=0; i < skintone_data.length; i++) {
              $('.filtered_users').empty();
              users.push(skintone_data[i]);
              $(users).each(function(index, result) {
                var recordHTML = HandlebarsTemplates.user(result);
                $('.filtered_users').append(recordHTML);
              });
            }    
          } else {
            // console.log(data);
            for (var i=0; i < skintone_data.length; i++) {
              // console.log(data[i].skintone.color);
              // console.log(skintone);
              if (skintone_data[i].skintone.color === skintone) {
                console.log(skintone_data[i]);
                $('.filtered_users').empty();
                users.push(skintone_data[i]);
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
      });
    }     
  });

  //Fileter Fair-Medium Products
  $('#productsButton').click(function() {
    if (!clicked) {
      $('#usersButton').removeClass('active');
      $('#productsButton').addClass('active');
      $('#selectedProduct li a').click(function(e) {
        e.preventDefault();
        var category = $(this).text();
        console.log(category);
        var skincare_products = [];
        var concealer_products = [];
        var foundation_products = [];
        var eyeliner_products = [];
        var eyeshadow_products = [];
        var brow_products = [];
        var blush_products = [];
        var lipstick_products = [];

        var products = [];
        var product = {};
        product.name = $('#product_name').val();
        product.image = $('#product_image').val();
        product.category = $('#product_category_id option:selected').text();
        product.review = $('#product_review').val();

        var users = [];
        var product_user = {};
        var user = {};
        user.username = $('#user_username').val();
        user.email = $('#user_email').val();
        user.avatar = $('#user_avatar').val();
        user.skintone = $('#user_skintone_id option:selected').text();
        user.eyecolor = $('#user_eyecolor_id').val();

        $.ajax({
          url: '/undertonebeauty/fair-medium.json',
          type: 'POST',
          data: { data: product }
        }).done(function(data) {
          console.log(data);
          var user_data = data[0];
          var product_data = data[1];
          if (category == "All") {
            $('.filtered_users').empty();
            for (var i=0; i < product_data.length; i++) {
              product_user = product_data[i].user_id;
              products.push(product_data[i]);
            }
            $(products).each(function(index, result) {
              result.username = {};
              result.avatar = {};
              // var recordHTML = HandlebarsTemplates.product(result);
              // $('.filtered_users').append(recordHTML);
              console.log(result.user_id);
              for (var j=0; j < user_data.length; j++) {
                if (user_data[j].id === result.user_id) {
                  result.username = user_data[j].username;
                  result.avatar = user_data[j].avatar.circle_face_thumb.url;
                }
              }
              console.log(result.username);
              console.log(result.avatar);
              var recordHTML = HandlebarsTemplates.product(result);
              $('.filtered_users').append(recordHTML);
            });
          } else if (category === "Skincare") {
            for (var i=0; i < product_data.length; i++) {
              $('.filtered_users').empty();
              if (product_data[i].category_id === 1) {
                skincare_products.push(product_data[i])
              }
            }
            $(skincare_products).each(function(index, result) {
              result.username = {};
              result.avatar = {};
              console.log(result.user_id);
              for (var j=0; j < user_data.length; j++) {
                if (user_data[j].id === result.user_id) {
                  result.username = user_data[j].username;
                  result.avatar = user_data[j].avatar.circle_face_thumb.url;
                }
              }
              console.log(result.username);
              console.log(result.avatar);
              var recordHTML = HandlebarsTemplates.product(result);
              $('.filtered_users').append(recordHTML);
            });
          } else if (category === "Concealer") {
            for (var i=0; i < product_data.length; i++) {
              $('.filtered_users').empty();
              if (product_data[i].category_id === 2) {
                concealer_products.push(product_data[i])
              }
            }
            $(concealer_products).each(function(index, result) {
              result.username = {};
              result.avatar = {};
              console.log(result.user_id);
              for (var j=0; j < user_data.length; j++) {
                if (user_data[j].id === result.user_id) {
                  result.username = user_data[j].username;
                  result.avatar = user_data[j].avatar.circle_face_thumb.url;
                }
              }
              console.log(result.username);
              console.log(result.avatar);
              var recordHTML = HandlebarsTemplates.product(result);
              $('.filtered_users').append(recordHTML);  
            });          
          } else if (category === "Foundation/BB Cream") {
            for (var i=0; i < product_data.length; i++) {
              $('.filtered_users').empty();
              if (product_data[i].category_id === 3) {
                foundation_products.push(product_data[i])
              }
            }
            $(foundation_products).each(function(index, result) {
              result.username = {};
              result.avatar = {};
              console.log(result.user_id);
              for (var j=0; j < user_data.length; j++) {
                if (user_data[j].id === result.user_id) {
                  result.username = user_data[j].username;
                  result.avatar = user_data[j].avatar.circle_face_thumb.url;
                }
              }
              console.log(result.username);
              console.log(result.avatar);
              var recordHTML = HandlebarsTemplates.product(result);
              $('.filtered_users').append(recordHTML);  
            });                      
          } else if (category === "Eyeliner") {
            for (var i=0; i < product_data.length; i++) {
              $('.filtered_users').empty();
              if (product_data[i].category_id === 4) {
                eyeliner_products.push(product_data[i])
              }
            }
            $(eyeliner_products).each(function(index, result) {
              result.username = {};
              result.avatar = {};
              console.log(result.user_id);
              for (var j=0; j < user_data.length; j++) {
                if (user_data[j].id === result.user_id) {
                  result.username = user_data[j].username;
                  result.avatar = user_data[j].avatar.circle_face_thumb.url;
                }
              }
              console.log(result.username);
              console.log(result.avatar);
              var recordHTML = HandlebarsTemplates.product(result);
              $('.filtered_users').append(recordHTML);  
            });                                  
          } else if (category === "Eyeshadow") {
            for (var i=0; i < product_data.length; i++) {
              $('.filtered_users').empty();
              if (product_data[i].category_id === 5) {
                eyeshadow_products.push(product_data[i])
              }
            }
            $(eyeshadow_products).each(function(index, result) {
              result.username = {};
              result.avatar = {};
              console.log(result.user_id);
              for (var j=0; j < user_data.length; j++) {
                if (user_data[j].id === result.user_id) {
                  result.username = user_data[j].username;
                  result.avatar = user_data[j].avatar.circle_face_thumb.url;
                }
              }
              console.log(result.username);
              console.log(result.avatar);
              var recordHTML = HandlebarsTemplates.product(result);
              $('.filtered_users').append(recordHTML);  
            });                                  
          } else if (category === "Brow") {
            for (var i=0; i < product_data.length; i++) {
              $('.filtered_users').empty();
              if (product_data[i].category_id === 6) {
                brow_products.push(product_data[i])
              }
            }
            $(brow_products).each(function(index, result) {
              result.username = {};
              result.avatar = {};
              console.log(result.user_id);
              for (var j=0; j < user_data.length; j++) {
                if (user_data[j].id === result.user_id) {
                  result.username = user_data[j].username;
                  result.avatar = user_data[j].avatar.circle_face_thumb.url;
                }
              }
              console.log(result.username);
              console.log(result.avatar);
              var recordHTML = HandlebarsTemplates.product(result);
              $('.filtered_users').append(recordHTML);  
            });                                              
          } else if (category === "Blush/Bronzer") {
            for (var i=0; i < product_data.length; i++) {
              $('.filtered_users').empty();
              if (product_data[i].category_id === 7) {
                blush_products.push(product_data[i])
              }
            }
            $(blush_products).each(function(index, result) {
              result.username = {};
              result.avatar = {};
              console.log(result.user_id);
              for (var j=0; j < user_data.length; j++) {
                if (user_data[j].id === result.user_id) {
                  result.username = user_data[j].username;
                  result.avatar = user_data[j].avatar.circle_face_thumb.url;
                }
              }
              console.log(result.username);
              console.log(result.avatar);
              var recordHTML = HandlebarsTemplates.product(result);
              $('.filtered_users').append(recordHTML);  
            });                                                      
          } else if (category === "Lipstick/Gloss") {
            for (var i=0; i < product_data.length; i++) {
              $('.filtered_users').empty();
              if (product_data[i].category_id === 8) {
                lipstick_products.push(product_data[i])
              }
            }
            $(lipstick_products).each(function(index, result) {
              result.username = {};
              result.avatar = {};
              console.log(result.user_id);
              for (var j=0; j < user_data.length; j++) {
                if (user_data[j].id === result.user_id) {
                  result.username = user_data[j].username;
                  result.avatar = user_data[j].avatar.circle_face_thumb.url;
                }
              }
              console.log(result.username);
              console.log(result.avatar);
              var recordHTML = HandlebarsTemplates.product(result);
              $('.filtered_users').append(recordHTML);  
            });                                                    
          }
        });
      });
    }
  });

  //Filter Brown-Dark Skintones



};

$(document).on('ready page:load', initialize);