

var smallPizzas=[
    {
        price: 300
    },
    {
        price: 450
    },
    {
        price: 500
    },
    {
        price: 490
    },
    {
        price: 403
    }
]
function displayPrices() {
    for(var i = 0; i <= smallPizzas.length-1; i++) {
        $( "#ourRow" ).append( "<div class '=' 'col-md-4'>"+smallPizzas[i].price+"</div></br>" );
     
    }
    // smallPizzas.forEach(item=>{
    //    let prices = "<p>" + item.price +"</p>"
    //    document.getElementById("#ourCol").innerHTML = prices

    // });
    // console.log(prices)


  }
  var price = 400
  var quantity = 1;
  var deliveryFee = 0
  $("#price").text("Total:  ksh" + "  "+price);
  $("#deliverSection").text("Delivery Fee:  ksh" + "  "+deliveryFee);

$(document).ready(function(){
    $("#checkoutButton").click(function(){
    })
})
$(document).ready(function(){
    $("#deliver").click(function(){
        deliveryFee=deliveryFee+20;
        price = price+deliveryFee
        $("#deliverSection").text("Delivery Fee:  ksh" + "  "+deliveryFee);
        $("#price").text("Total: ksh" + "  "+price);


    })

})
$(document).ready(function(){
   
    $("#quantity").text("Quantity:" + "  "+quantity);
    $("#add_pizza").click(function(){
        quantity=quantity+1
        price = price*quantity
        $("#quantity").text("Quantity: " + ""+quantity);
        $("#price").text("Total: ksh" + "  "+price);

    })

})
displayPrices()
