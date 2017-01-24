var chestyBtn = document.getElementById('chestyBtn');
var marineBtn = document.getElementById('marineBtn');

chestyBtn.addEventListener('click', function(event){
  event.preventDefault;
  console.log('clicked on chesty');
});

marineBtn.addEventListener('click', function(event){
  event.preventDefault;
  console.log('clicked on Marine');
});

quotesBtn.addEventListener('click', function(event){
  event.preventDefault;
  console.log('clicked on quotes');
});
