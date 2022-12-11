var remove = document.querySelectorAll('.minus-btn')
for (let i = 0; i < remove.length; i++) {
    remove[i].addEventListener('click', function(){
        if ( remove[i].nextElementSibling.value > 1 ) {
            remove[i].nextElementSibling.value--
            totalPrice()
        }
    })
}


var add = document.querySelectorAll('.plus-btn')
for (let i = 0; i < add.length; i++) {
    add[i].addEventListener('click', function(){
        add[i].previousElementSibling.value++ 
        totalPrice()  
    })
}


var del = document.querySelectorAll('.delete')
for (let i = 0; i < del.length; i++) {
    del[i].addEventListener('click', function(){
        del[i].parentNode.remove()
        totalPrice();
    })
}


function totalPrice() {
    var quant = document.querySelectorAll('.Quant')
    var price = document.querySelectorAll('.price')
    var total = 0;
    for (let i = 0; i < price.length; i++) {
        total += price[i].innerHTML * quant[i].value
    }
    document.getElementById('finalPrice').value = total 
} 


var heart = document.getElementsByClassName("like");
for (let i = 0; i < heart.length; i++) {
  let like = heart[i];
  like.addEventListener("click", function () {
    if (like.firstChild.style.color == "palevioletred") {
      like.firstChild.style.color = "black";
    } else {
      like.firstChild.style.color = "palevioletred";
    }
  });
}
