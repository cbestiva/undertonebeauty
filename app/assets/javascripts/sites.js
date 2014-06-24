//Signup Modal
$(function () {
  $("#sign_up").modal({show:false});
})

var initialize = function () {

  //User profile favorites tabs 
  $("#myProductsTab a").click(function(e) {
    e.preventDefault();
    $(this).tab("show");
  });


  var clicked = false;  

  //Filter Fair-Medium Skintones
  $('#usersFairMediumButton').click(function() {
    if (!clicked) {
      $('#productsFairMediumButton').removeClass('active');
      $('#usersFairMediumButton').addClass('active');
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
          } else if (skintone === "Fair") {
            $('.filtered_users').empty().append("<br /><p>No users found.</p>");
            // console.log(data);
            for (var i=0; i < skintone_data.length; i++) {
              // console.log(data[i].skintone.color);
              // console.log(skintone);
              if (skintone_data[i].skintone.color === "Fair") {
              // if (skintone_data[i].skintone.color === skintone) {
                console.log(skintone_data[i]);
                users.push(skintone_data[i]);
                console.log(users);
                $('.filtered_users').empty();
              } 
            }
            $(users).each(function(index, result) {
              var recordHTML = HandlebarsTemplates.user(result);
              $('.filtered_users').append(recordHTML);
            });
          } else if (skintone === "Medium") {
            $('.filtered_users').empty().append("<br /><p>No users found.</p>");
            for(var i=0; i < skintone_data.length; i++) {
              if (skintone_data[i].skintone.color === "Medium") {
                users.push(skintone_data[i]);
                $('.filtered_users').empty();
              }
            }
            $(users).each(function(index, result) {
              var recordHTML = HandlebarsTemplates.user(result);
              $('.filtered_users').append(recordHTML);
            });            
          }
        }); 
      });
    }     
  });

  //Fileter Fair-Medium Products
  $('#productsFairMediumButton').click(function() {
    if (!clicked) {
      $('#usersFairMediumButton').removeClass('active');
      $('#productsFairMediumButton').addClass('active');
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
            $('.filtered_users').empty().append("<br /><p>No skincare products found.</p>");
            for (var i=0; i < product_data.length; i++) {
              if (product_data[i].category_id === 1) {
                skincare_products.push(product_data[i])
                $('.filtered_users').empty();
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
            $('.filtered_users').empty().append("<br /><p>No concealer products found.</p>");
            for (var i=0; i < product_data.length; i++) {
              if (product_data[i].category_id === 2) {
                concealer_products.push(product_data[i])
                $('.filtered_users').empty();
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
            $('.filtered_users').empty().append("<br /><p>No foundation/bb cream products found.</p>");
            for (var i=0; i < product_data.length; i++) {
              if (product_data[i].category_id === 3) {
                foundation_products.push(product_data[i])
                $('.filtered_users').empty();
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
          } else if (category === "Eyeliner & Mascara") {
            $('.filtered_users').empty().append("<br /><p>No eyeliner or mascara products found.</p>");
            for (var i=0; i < product_data.length; i++) {
              if (product_data[i].category_id === 4) {
                eyeliner_products.push(product_data[i])
                $('.filtered_users').empty();
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
            $('.filtered_users').empty().append("<br /><p>No eyeshadow products found.</p>");
            for (var i=0; i < product_data.length; i++) {
              if (product_data[i].category_id === 5) {
                eyeshadow_products.push(product_data[i])
                $('.filtered_users').empty();
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
            $('.filtered_users').empty().append("<br /><p>No brow products found.</p>");
            for (var i=0; i < product_data.length; i++) {
              if (product_data[i].category_id == 6) {
                brow_products.push(product_data[i]);
                $('.filtered_users').empty();
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
            $('.filtered_users').empty().append("<br /><p>No blush/bronzer products found.</p>");
            for (var i=0; i < product_data.length; i++) {
              if (product_data[i].category_id === 7) {
                blush_products.push(product_data[i]);
                $('.filtered_users').empty();
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
            $('.filtered_users').empty().append("<br /><p>No lipstick/gloss products found.</p>");
            for (var i=0; i < product_data.length; i++) {
              if (product_data[i].category_id === 8) {
                lipstick_products.push(product_data[i]);
                $('.filtered_users').empty();
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

  // //Filter Brown-Dark Skintones
  $('#usersBrownDarkButton').click(function() {
    if (!clicked) {
      $('#productsBrownDarkButton').removeClass('active');
      $('#usersBrownDarkButton').addClass('active');
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
          url: '/undertonebeauty/brown-dark.json',
          type: 'POST',
          data: { data: user}
        }).done(function(data) {
          var skintone_data = data[0]
          $('.filtered_users').empty();
          if (skintone === "Brown & Dark") {
            for (var i=0; i < skintone_data.length; i++) {
              $('.filtered_users').empty();
              users.push(skintone_data[i]);
              $(users).each(function(index, result) {
                var recordHTML = HandlebarsTemplates.user(result);
                $('.filtered_users').append(recordHTML);
              });
            }    
          } else if (skintone === "Brown") {
            $('.filtered_users').empty().append("<br /><p>No users found.</p>");
            // console.log(data);
            for (var i=0; i < skintone_data.length; i++) {
              // console.log(data[i].skintone.color);
              // console.log(skintone);
              if (skintone_data[i].skintone.color === "Brown") {
              // if (skintone_data[i].skintone.color === skintone) {
                console.log(skintone_data[i]);
                users.push(skintone_data[i]);
                console.log(users);
                $('.filtered_users').empty();
              } 
            }
            $(users).each(function(index, result) {
              var recordHTML = HandlebarsTemplates.user(result);
              $('.filtered_users').append(recordHTML);
            });
          } else if (skintone === "Dark") {
            $('.filtered_users').empty().append("<br /><p>No users found.</p>");
            for(var i=0; i < skintone_data.length; i++) {
              if (skintone_data[i].skintone.color === "Dark") {
                users.push(skintone_data[i]);
                $('.filtered_users').empty();
              }
            }
            $(users).each(function(index, result) {
              var recordHTML = HandlebarsTemplates.user(result);
              $('.filtered_users').append(recordHTML);
            });            
          }
        }); 
      });
    }     
  });

  //Fileter Brown-Dark Products
  $('#productsBrownDarkButton').click(function() {
    if (!clicked) {
      $('#usersBrownDarkButton').removeClass('active');
      $('#productsBrownDarkButton').addClass('active');
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
          url: '/undertonebeauty/brown-dark.json',
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
            $('.filtered_users').empty().append("<br /><p>No skincare products found.</p>");
            for (var i=0; i < product_data.length; i++) {
              if (product_data[i].category_id === 1) {
                skincare_products.push(product_data[i])
                $('.filtered_users').empty();
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
            $('.filtered_users').empty().append("<br /><p>No concealer products found.</p>");
            for (var i=0; i < product_data.length; i++) {
              if (product_data[i].category_id === 2) {
                concealer_products.push(product_data[i])
                $('.filtered_users').empty();
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
            $('.filtered_users').empty().append("<br /><p>No foundation/bb cream products found.</p>");
            for (var i=0; i < product_data.length; i++) {
              if (product_data[i].category_id === 3) {
                foundation_products.push(product_data[i]);
                $('.filtered_users').empty();
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
          } else if (category === "Eyeliner & Mascara") {
            $('.filtered_users').empty().append("<br /><p>No eyeliner or mascara products found.</p>");
            for (var i=0; i < product_data.length; i++) {
              if (product_data[i].category_id === 4) {
                eyeliner_products.push(product_data[i])
                $('.filtered_users').empty();
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
            $('.filtered_users').empty().append("<br /><p>No eyeshadow products found.</p>");
            for (var i=0; i < product_data.length; i++) {
              if (product_data[i].category_id === 5) {
                eyeshadow_products.push(product_data[i]);
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
            $('.filtered_users').empty().append("<br /><p>No brow products found.</p>");
            for (var i=0; i < product_data.length; i++) {
              if (product_data[i].category_id === 6) {
                brow_products.push(product_data[i]);
                $('.filtered_users').empty();
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
            $('.filtered_users').empty().append("<br /><p>No blush/bronzer products found.</p>");
            for (var i=0; i < product_data.length; i++) {
              if (product_data[i].category_id === 7) {
                blush_products.push(product_data[i]);
                $('.filtered_users').empty();
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
            $('.filtered_users').empty().append("<br /><p>No lipstick/gloss products found.</p>");
            for (var i=0; i < product_data.length; i++) {
              if (product_data[i].category_id === 8) {
                lipstick_products.push(product_data[i]);
                $('.filtered_users').empty();
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

  //Filter Olive-Brown Skintones
  $('#usersOliveBrownButton').click(function() {
    if (!clicked) {
      $('#productsOliveBrownButton').removeClass('active');
      $('#usersOliveBrownButton').addClass('active');
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
          url: '/undertonebeauty/olive-brown.json',
          type: 'POST',
          data: { data: user}
        }).done(function(data) {
          var skintone_data = data[0]
          $('.filtered_users').empty();
          if (skintone === "Olive & Brown") {
            for (var i=0; i < skintone_data.length; i++) {
              $('.filtered_users').empty();
              users.push(skintone_data[i]);
              $(users).each(function(index, result) {
                var recordHTML = HandlebarsTemplates.user(result);
                $('.filtered_users').append(recordHTML);
              });
            }    
          } else if (skintone === "Olive") {
            $('.filtered_users').empty().append("<br /><p>No users found.</p>");
            // console.log(data);
            for (var i=0; i < skintone_data.length; i++) {
              // console.log(data[i].skintone.color);
              // console.log(skintone);
              if (skintone_data[i].skintone.color === "Olive") {
              // if (skintone_data[i].skintone.color === skintone) {
                console.log(skintone_data[i]);
                users.push(skintone_data[i]);
                console.log(users);
                $('.filtered_users').empty();
              } 
            }
            $(users).each(function(index, result) {
              var recordHTML = HandlebarsTemplates.user(result);
              $('.filtered_users').append(recordHTML);
            });
          } else if (skintone === "Brown") {
            $('.filtered_users').empty().append("<br /><p>No users found.</p>");
            for(var i=0; i < skintone_data.length; i++) {
              if (skintone_data[i].skintone.color === "Brown") {
                users.push(skintone_data[i]);
                $('.filtered_users').empty();
              }
            }
            $(users).each(function(index, result) {
              var recordHTML = HandlebarsTemplates.user(result);
              $('.filtered_users').append(recordHTML);
            });            
          }
        }); 
      });
    }     
  });

   //Filter Olive-Brown Products
  $('#productsOliveBrownButton').click(function() {
    if (!clicked) {
      $('#usersOliveBrownButton').removeClass('active');
      $('#productsOliveBrownButton').addClass('active');
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
          url: '/undertonebeauty/olive-brown.json',
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
            $('.filtered_users').empty().append("<br /><p>No skincare products found.</p>");
            for (var i=0; i < product_data.length; i++) {
              if (product_data[i].category_id !== 1) {
                skincare_products.push(product_data[i]);
                $('.filtered_users').empty();
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
            $('.filtered_users').empty().append("<br /><p>No concealer products found.</p>");
            for (var i=0; i < product_data.length; i++) {
              // $('.filtered_users').empty();
              if (product_data[i].category_id === 2) {
                concealer_products.push(product_data[i]);
                $('.filtered_users').empty();
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
            $('.filtered_users').empty().append("<br /><p>No foundation/bb cream products found.</p>");
            for (var i=0; i < product_data.length; i++) {
              if (product_data[i].category_id === 3) {
                foundation_products.push(product_data[i]);
                $('.filtered_users').empty();
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
          } else if (category === "Eyeliner & Mascara") {
            $('.filtered_users').empty().append("<br /><p>No eyeliner or mascara products found.</p>");
            for (var i=0; i < product_data.length; i++) {
              if (product_data[i].category_id === 4) {
                eyeliner_products.push(product_data[i]);
                $('.filtered_users').empty();
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
            $('.filtered_users').empty().append("<br /><p>No eyeshadow products found.</p>");
            for (var i=0; i < product_data.length; i++) {
              if (product_data[i].category_id === 5) {
                eyeshadow_products.push(product_data[i]);
                $('.filtered_users').empty();
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
            $('.filtered_users').empty().append("<br /><p>No brow products found.</p>");
            for (var i=0; i < product_data.length; i++) {
              if (product_data[i].category_id === 6) {
                brow_products.push(product_data[i]);
                $('.filtered_users').empty();
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
            $('.filtered_users').empty().append("<br /><p>No blush/bronzer products found.</p>");
            for (var i=0; i < product_data.length; i++) {
              if (product_data[i].category_id === 7) {
                blush_products.push(product_data[i]);
                $('.filtered_users').empty();
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
            $('.filtered_users').empty().append("<br /><p>No lipstick/gloss products found.</p>");
            for (var i=0; i < product_data.length; i++) {
              if (product_data[i].category_id === 8) {
                lipstick_products.push(product_data[i]);
                $('.filtered_users').empty();
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

   //Filter Light-Fair Skintones
  $('#usersLightFairButton').click(function() {
    if (!clicked) {
      $('#productsLightFairButton').removeClass('active');
      $('#usersLightFairButton').addClass('active');
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
          url: '/undertonebeauty/light-fair.json',
          type: 'POST',
          data: { data: user}
        }).done(function(data) {
          var skintone_data = data[0]
          $('.filtered_users').empty();
          if (skintone === "Light & Fair") {
            for (var i=0; i < skintone_data.length; i++) {
              $('.filtered_users').empty();
              users.push(skintone_data[i]);
              $(users).each(function(index, result) {
                var recordHTML = HandlebarsTemplates.user(result);
                $('.filtered_users').append(recordHTML);
              });
            }    
          } else if (skintone === "Light") {
            $('.filtered_users').empty().append("<br /><p>No users found.</p>");
            // console.log(data);
            for (var i=0; i < skintone_data.length; i++) {
              // console.log(data[i].skintone.color);
              // console.log(skintone);
              if (skintone_data[i].skintone.color === "Light") {
                console.log(skintone_data[i]);
                users.push(skintone_data[i]);
                console.log(users);
                $('.filtered_users').empty();
              }
            }
            $(users).each(function(index, result) {
              var recordHTML = HandlebarsTemplates.user(result);
              $('.filtered_users').append(recordHTML);
            });
          } else if (skintone === "Fair") {
            $('.filtered_users').empty().append("<br /><p>No users found.</p>");
            for(var i=0; i < skintone_data.length; i++) {
              if (skintone_data[i].skintone.color === "Fair") {
                users.push(skintone_data[i]);
                $('.filtered_users').empty();
              }
            }
            $(users).each(function(index, result) {
              var recordHTML = HandlebarsTemplates.user(result);
              $('.filtered_users').append(recordHTML);
            });            
          }
        }); 
      });
    }     
  });

  //Filter Light-Fair Products
  $('#productsLightFairButton').click(function() {
    if (!clicked) {
      $('#usersLightFairButton').removeClass('active');
      $('#productsLightFairButton').addClass('active');
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
          url: '/undertonebeauty/light-fair.json',
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
              $('.filtered_users').empty().append(recordHTML);
            });
          } else if (category === "Skincare") {
            $('.filtered_users').empty().append("<br /><p>No skincare products found.</p>");
            for (var i=0; i < product_data.length; i++) {
              if (product_data[i].category_id === 1) {
              // if (product_data[i].category_id === 1) {
                skincare_products.push(product_data[i]);
                $('.filtered_users').empty();
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
            $('.filtered_users').empty().append("<br /><p>No concealer products found.</p>");
            for (var i=0; i < product_data.length; i++) {
              if (product_data[i].category_id === 2) {
                concealer_products.push(product_data[i]);
                $('.filtered_users').empty();
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
            $('.filtered_users').empty().append("<br /><p>No foundation/bb cream products found.</p>");
            for (var i=0; i < product_data.length; i++) {
              if (product_data[i].category_id === 3) {
                foundation_products.push(product_data[i]);
                $('.filtered_users').empty();
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
          } else if (category === "Eyeliner & Mascara ") {
            $('.filtered_users').empty().append("<br /><p>No eyeliner or mascara products found.</p>");
            for (var i=0; i < product_data.length; i++) {
              if (product_data[i].category_id === 4) {
                eyeliner_products.push(product_data[i]);
                $('.filtered_users').empty();
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
            $('.filtered_users').empty().append("<br /><p>No eyeshadow products found.</p>");
            for (var i=0; i < product_data.length; i++) {
              if (product_data[i].category_id === 5) {
                eyeshadow_products.push(product_data[i]);
                $('.filtered_users').empty();
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
            $('.filtered_users').empty().append("<br /><p>No brow products found.</p>");
            for (var i=0; i < product_data.length; i++) {
              if (product_data[i].category_id === 6) {
                brow_products.push(product_data[i]);
                $('.filtered_users').empty();
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
            $('.filtered_users').empty().append("<br /><p>No blush/bronzer products found.</p>");
            for (var i=0; i < product_data.length; i++) {
              if (product_data[i].category_id === 7) {
                blush_products.push(product_data[i]);
                $('.filtered_users').empty();
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
            $('.filtered_users').empty().append("<br /><p>No lipstick/gloss products found.</p>");
            for (var i=0; i < product_data.length; i++) {
              if (product_data[i].category_id === 8) {
                lipstick_products.push(product_data[i]);
                $('.filtered_users').empty();
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

};

$(document).on('ready page:load', initialize);