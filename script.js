/*Responsive navbar*/
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if(bar){
    bar.addEventListener('click',()=> {
        nav.classList.add('active');
    })
}


if(close){
    close.addEventListener('click',()=> {
        nav.classList.remove('active');
    })
}

/*Booking Form*/

var companyObject = {
      "Bajaj": ["Pulsar","Dominar","Discover","Platina","Chetak"],
      "Yamaha": ["FZ","MT15","R15","Fascino"],
      "Honda": ["Shine","H'ness","Activa","Aviator"]
    }
  
  window.onload = function() {
    var companySel = document.getElementById("company");
    var modelSel = document.getElementById("model");
    for (var x in companyObject) {
      companySel.options[companySel.options.length] = new Option(x, x);
    }
    companySel.onchange = function() {
      modelSel.length = 1;

      var y = companyObject[this.value];

      for (var i = 0;i<y.length;i++) {
        modelSel.options[modelSel.options.length] = new Option(y[i], y[i]);
      }
    }

    
  }
