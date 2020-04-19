


$(".t1").click(function(){
  shorten();
})
$(".t2").click(function(){
  longen();
})

var x = $("#shorten");
var y = $("#longen");
var z = $("#btnnn");


function shorten(){

  x.css("left", "50px")
  y.css("left","1500px")
  z.css("left","0px")
}
function longen(){

  x.css("left", "-1500px")
  y.css("left","50px")
  z.css("left","110px")

}


$(".btnn").click(function(){

  location.href = "signup.html";

})
$(".btnn1").click(function(){

  location.href = "signup.html";

})



$(".btnn5").click(function(e) {
  $(".btnn5").text("Copied!");
  $(".btnn5").css("background-color", "hsl(257, 27%, 26%)");

  e.preventDefault();
  var copyText = $(".link-a").attr('href');

  document.addEventListener('copy', function(e) {
    e.clipboardData.setData('text/plain', copyText);
    e.preventDefault();
  }, true);

  document.execCommand('copy');

});


$(".bshort").click(function() {
  if ($(".inputshort").val() == "") {
    $(".inputshort").addClass("innn");
    $(".inputshort").css("border", "2px solid red");
    $(".pshort").css("display","block");

  }
  else{
  $(".link-p").text($(".input1").val());
  $(".shortened-link").css("display", "block");
  $(".title-features").removeClass("title-padding");
}
const data = {"url": $(".inputshort").val()}

fetch('https://rel.ink/api/links/', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then((response) => response.json())
.then((data) => {
  console.log('Success:', data)
  console.log(data.hashid)
  $(".link-a").text("https://rel.ink/"+data.hashid)
  $(".link-a").attr('href',"https://rel.ink/"+data.hashid)
})
.catch((error) => {
  console.error('Error:', error);
});
})

$(".blong").click(function() {
  if ($(".inputlong").val() == "") {
    $(".inputlong").addClass("innn");
    $(".inputlong").css("border", "2px solid red");
    $(".plong").css("display","block");

  }
  else{
  $(".link-p").text($(".input1").val());
  $(".shortened-link").css("display", "block");
  $(".title-features").removeClass("title-padding");
}

const hashstring = $(".inputlong").val().slice(16,$(".inputlong").val().length);

fetch('https://rel.ink/api/links/'+hashstring, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  }

})
.then((response) => response.json())
.then((data) => {
  console.log('Success:', data)
  console.log(data.hashid)
  $(".link-a").text("https://rel.ink/"+data.hashid)
  $(".link-a").attr('href',"https://rel.ink/"+data.hashid)
})
.catch((error) => {
  console.error('Error:', error);
});
})
