      

            var section = document.getElementById('product-row');
            
            var products = [
    {
        "id":1,
        "Name":"Outfitter t-Shirt",
        "Price": "$200",
        "img_url": "i1.jpg"
    },
    {
        "id":2,
        "Name":"Eminent Jeans",
        "Price": "$190",
        "img_url": "i2.jpg"
    }, 
    {
        "id":3,
        "Name":"Jamaldin's Shirt",
        "Price": "$120",
        "img_url": "i3.jpg"
    },
    {
        "id":4,
        "Name":"NYK t-Shirt",
        "Price": "$220",
        "img_url": "i4.jpg"
    },
    {
        "id":5,
        "Name":"Polo t-Shirt",
        "Price": "$170",
        "img_url": "i5.jpg"
    },
    {
        "id":6,
        "Name":"Denim Jackets",
        "Price": "$140",
        "img_url": "i6.jpg"
    },
    {
        "id":7,
        "Name":"Levis Trouser",
        "Price": "$150",
        "img_url": "i7.jpg"
    },
    {
        "id":8,
        "Name":"Denim Pent",
        "Price": "$180",
        "img_url": "i8.jpg"
    },
    {
        "id":9,
        "Name":"Levis",
        "Price": "$180",
        "img_url": "i8.jpg"
    }
]


    for(var item of products)
    {
        section.innerHTML += `<div class="col-md-4">
                    <div class="product-card">
                        <div class="p-card-header">
                            <img src="images/`+item.img_url+`" alt="">
                        </div>
                        <div class="p-card-body">
                            <h4>`+item.Name+`</h4>
                            <p>`+item.Price+`</p>
                            <span><i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i></span>
                        </div>
                        <div class="p-card-footer">
                            <a href="#">Buy Now</a>
                        </div>
                    </div>
                </div>`;
    }



$(document).ready(function(){
    $('#myinput').keyup(function(){
        var text = $(this).val().toLowerCase();
        $(".product-card ").filter(function() {
            console.log(this)
            $(this).toggle($(this).text().toLowerCase().indexOf(text) > -1)
          });
    });
});

