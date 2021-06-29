

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
 
$(document).ready(function(){
    $("#checkoutButton").click(function(){
        console.log("you clicked this one")
    })
})

$(document).ready(function(){
    var price = 400
    var quantity = 1;
    $("#price").text("Price:  ksh" + "  "+price);
    $("#quantity").text("Quantity:" + "  "+quantity);
    $("#add_pizza").click(function(){
        quantity=quantity+1
        price = price*quantity
        $("#quantity").text("Quantity: " + ""+quantity);
        $("#price").text("Price: ksh" + "  "+price);

    })

})
displayPrices()
