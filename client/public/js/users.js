$(function() {
  console.log('scripts loaded...');

  var renderQuote = function(quote){
    var h1 = $("<h1>");
    h1.text(quote.name);
    $("body").append(h1);
  };

  var $form = $("#new-quote");

  $form.submit( function(e){
    console.log("you submitted");
    e.preventDefault(); // stop submission

    $.ajax({ url: "/api/quotes",
          method: "post",
          data: { title: $form.find("[name=title]").val(),
                  who: $form.find("[name=who]").val()
                },
          success: function(quote){
            console.log(quote);
            renderQuote(quote); // something's up here
          }
    });

  });

$(document).ready(function(){
  // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
  $('.modal-trigger').leanModal();
});

  //on login sucess callback method, add this line
  // Cookie.set("jwt_token", token);

  //to logout
  // Cookie.set("jwt_token", "blah")



});
