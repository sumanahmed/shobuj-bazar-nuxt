//get cart session product & show in cart dropdown
var image_base_path = "http://localhost:8000/";
$(document).ready(function () {    
    $.get('/get-cart/', function(data) {
        var quantity     = 0;      
        var cart_total   = 0;      
        var cart_details = '';

        for(var i = 0; i < data.length; (i++)){
            quantity    += data[i].quantity;
            cart_total  += data[i].price;
            cart_details = cart_details + '<div class="cart-float-single-item d-flex">\n' +
                                            '<div class="cart-float-single-item-image">\n' +
                                                '<a href="/product/details/'+ data[i].id +'"><img src="'+image_base_path + data[i].thumbnail +'" class="img-fluid" alt=""></a>\n' +
                                            '</div>\n' +
                                            '<div class="cart-float-single-item-desc">\n' +
                                                '<p class="product-title"> <a href="/product/details/'+ data[i].id +'">'+ data[i].en_name +'</a></p>\n' +
                                                '<p class="price"><span class="count">'+ data[i].quantity +' x </span>'+ data[i].unit_price +'  =  '+ data[i].price +'</p>\n' +
                                            '</div>\n' +
                                        '</div>';            
        }
            
        $('.cart-items').html(cart_details);
        $('.dropdown-cart-item').html(quantity);
        $('.dropdown-cart-subtotal').html(cart_total);
    });

});

//item add to cart
$(document).ready(function () {
    $('.addtocart').click(function() {
        var pid = this.id;
        $.get('/cart/add/'+ pid, function(data) {
            var quantity     = 0;      
            var cart_total   = 0;      
            var cart_details = '';
            for(var i = 0; i < data.length; (i++)){
                quantity    += data[i].quantity;
                cart_total  += data[i].price;
                cart_details = cart_details + '<div class="cart-float-single-item d-flex">\n' +
                                                '<div class="cart-float-single-item-image">\n' +
                                                    '<a href="/product/details/'+ data[i].id +'"><img src="'+ image_base_path + data[i].thumbnail +'" class="img-fluid" alt=""></a>\n' +
                                                '</div>\n' +
                                                '<div class="cart-float-single-item-desc">\n' +
                                                    '<p class="product-title"> <a href="/product/details/'+ data[i].id +'">'+ data[i].en_name +'</a></p>\n' +
                                                    '<p class="price"><span class="count">'+ data[i].quantity +' x </span>'+ data[i].unit_price +'  =  '+ data[i].price +'</p>\n' +
                                                '</div>\n' +
                                            '</div>';            
            }                
            $('.cart-items').html(cart_details);
            $('.dropdown-cart-item').html(quantity);
            $('.dropdown-cart-subtotal').html(cart_total);
        });			
    });
});

//item increment
function increment(pid) {
    console.log(pid);      
    $.get('/cart/add/'+ pid, function(data) {  
        var shipping_cost= 0;      
        var coupon_amount= 0;       
        var quantity     = 0;      
        var cart_total   = 0;      
        var cart_details = '';
        var cart_rows    = '';
        for(var i = 0; i < data.length; (i++)){
            shipping_cost= data[i].shipping_charge != null ? parseFloat(data[i].shipping_charge) : 0;
            quantity    += data[i].quantity;
            cart_total  += data[i].price;
            cart_details = cart_details + '<div class="cart-float-single-item d-flex">\n' +
                                            '<div class="cart-float-single-item-image">\n' +
                                                '<a href="/product/details/'+ data[i].id +'"><img src="'+image_base_path + data[i].thumbnail +'" class="img-fluid" alt=""></a>\n' +
                                            '</div>\n' +
                                            '<div class="cart-float-single-item-desc">\n' +
                                                '<p class="product-title"> <a href="/product/details/'+ data[i].id +'">'+ data[i].en_name +'</a></p>\n' +
                                                '<p class="price"><span class="count">'+ data[i].quantity +' x </span>'+ data[i].unit_price +'  =  '+ data[i].price +'</p>\n' +
                                            '</div>\n' +
                                        '</div>';   
                                        
            cart_rows = cart_rows + '<tr>\n' +
                                        '<td class="pro-thumbnail">\n' +
                                            '<a href="/product/details/'+ data[i].id +'">\n' +
                                                '<img src="'+image_base_path + data[i].thumbnail +'" class="img-fluid" alt="Product">\n' +
                                            '</a>\n' +
                                        '</td>\n' +
                                        '<td class="pro-title"><a href="/product/details/'+ data[i].id +'">'+ data[i].en_name +'</a></td>\n' +                       
                                        '<td class="pro-price"><span>'+ data[i].unit_price +'</span></td>  \n' +                                          
                                        '<td class="pro-quantity">\n' +
                                            '<div class="pro-qty">\n' +
                                                '<input type="text" value="'+ data[i].quantity +'" readonly />\n' +
                                                '<a href="#!" onClick="increment('+ data[i].id +')" class="inc">+</a>\n' + 
                                                '<a href="#!" onClick="decrement('+ data[i].id +')" class="dec">-</a>\n' +
                                            '</div>\n' +
                                        '</td>\n' + 
                                        '<td class="pro-subtotal"><span>'+ data[i].price +'</span></td>\n' +
                                        '<td class="pro-remove"><a href="#!" onClick="decrement('+ data[i].id +')"><i class="fa fa-trash-o"></i></a></td>\n' +
                                    '</tr>';
        }                
        $('.cart-items').html(cart_details);
        $('.dropdown-cart-item').html(quantity);
        $('.shipping_cost').html(shipping_cost);
        $('.dropdown-cart-subtotal').html(cart_total);
        $('.cart_rows').html(cart_rows);
        $('.cart-page-total').html(cart_total);
        $('.grand_total').html(parseFloat(cart_total+shipping_cost));
    });			
}

//item dec from cart
function decrement(pid) {  
    console.log(pid);
    $.get('/cart/remove/'+pid, function(data) {          
        var count = data.length;
        if (count == 0){
            $("#"+pid).closest("tr").remove();	          	
            $('.cart-items').html('');
            $('.dropdown-cart-item').html(0);
            $('.dropdown-cart-subtotal').html(0);
            $('.cart_rows').html(0);
            $('.cart-page-total').html('');
            $('.grand_total').html('');
        }          
        var shipping_cost= 0; 
        var quantity     = 0;      
        var cart_total   = 0;      
        var cart_details = '';
        var cart_rows    = '';
        for(var i = 0; i < data.length; (i++)){
            shipping_cost= data[i].shipping_charge != null ? parseFloat(data[i].shipping_charge) : 0;
            quantity    += data[i].quantity;
            cart_total  += data[i].price;
            cart_details = cart_details + '<div class="cart-float-single-item d-flex">\n' +
                                            '<div class="cart-float-single-item-image">\n' +
                                                '<a href="/product/details/'+ data[i].id +'"><img src="'+image_base_path + data[i].thumbnail +'" class="img-fluid" alt=""></a>\n' +
                                            '</div>\n' +
                                            '<div class="cart-float-single-item-desc">\n' +
                                                '<p class="product-title"> <a href="/product/details/'+ data[i].id +'">'+ data[i].en_name +'</a></p>\n' +
                                                '<p class="price"><span class="count">'+ data[i].quantity +' x </span>'+ data[i].unit_price +'  =  '+ data[i].price +'</p>\n' +
                                            '</div>\n' +
                                        '</div>';   
                                        
            cart_rows = cart_rows + '<tr>\n' +
                                        '<td class="pro-thumbnail">\n' +
                                            '<a href="/product/details/'+ data[i].id +'">\n' +
                                                '<img src="'+image_base_path + data[i].thumbnail +'" class="img-fluid" alt="Product">\n' +
                                            '</a>\n' +
                                        '</td>\n' +
                                        '<td class="pro-title"><a href="/product/details/'+ data[i].id +'">'+ data[i].en_name +'</a></td>\n' +                       
                                        '<td class="pro-price"><span>'+ data[i].unit_price +'</span></td>  \n' +                                          
                                        '<td class="pro-quantity">\n' +
                                            '<div class="pro-qty">\n' +
                                                '<input type="text" value="'+ data[i].quantity +'" readonly />\n' +
                                                '<a href="#!" onClick="increment('+ data[i].id +')" class="inc">+</a>\n' + 
                                                '<a href="#!" onClick="decrement('+ data[i].id +')" class="dec">-</a>\n' +
                                            '</div>\n' +
                                        '</td>\n' + 
                                        '<td class="pro-subtotal"><span>'+ data[i].price +'</span></td>\n' +
                                        '<td class="pro-remove"><a href="#!" onClick="decrement('+ data[i].id +')"><i class="fa fa-trash-o"></i></a></td>\n' +
                                    '</tr>';
        }
        
        $('.cart-items').html(cart_details);
        $('.dropdown-cart-item').html(quantity);
        $('.shipping_cost').html(shipping_cost);
        $('.dropdown-cart-subtotal').html(cart_total);
        $('.cart_rows').html(cart_rows);
        $('.cart-page-total').html(cart_total);
        $('.grand_total').html(parseFloat(cart_total+shipping_cost));
    });
}

//item remove from cart
$('.remove').click(function() {  
    var pid = $(this).attr("class").split(' ')[1];
    console.log(pid);
    $.get('/cart/remove/'+pid, function(data) {          
        var count = data.length;
        if (count == 0){
            $("#"+pid).closest("tr").remove();	          	
            $('.cart-items').html('');
            $('.dropdown-cart-item').html(0);
            $('.dropdown-cart-subtotal').html(0);
            $('.cart_rows').html(0);
            $('.cart-page-total').html('');
            $('.grand_total').html('');
        }          
        var shipping_cost= 0; 
        var quantity     = 0;      
        var cart_total   = 0;      
        var cart_details = '';
        var cart_rows    = '';
        for(var i = 0; i < data.length; (i++)){
            shipping_cost= data[i].shipping_charge != null ? parseFloat(data[i].shipping_charge) : 0;
            quantity    += data[i].quantity;
            cart_total  += data[i].price;
            cart_details = cart_details + '<div class="cart-float-single-item d-flex">\n' +
                                            '<div class="cart-float-single-item-image">\n' +
                                                '<a href="/product/details/'+ data[i].id +'"><img src="'+image_base_path + data[i].thumbnail +'" class="img-fluid" alt=""></a>\n' +
                                            '</div>\n' +
                                            '<div class="cart-float-single-item-desc">\n' +
                                                '<p class="product-title"> <a href="/product/details/'+ data[i].id +'">'+ data[i].en_name +'</a></p>\n' +
                                                '<p class="price"><span class="count">'+ data[i].quantity +' x </span>'+ data[i].unit_price +'  =  '+ data[i].price +'</p>\n' +
                                            '</div>\n' +
                                        '</div>';   
                                        
            cart_rows = cart_rows + '<tr>\n' +
                                        '<td class="pro-thumbnail">\n' +
                                            '<a href="/product/details/'+ data[i].id +'">\n' +
                                                '<img src="'+image_base_path + data[i].thumbnail +'" class="img-fluid" alt="Product">\n' +
                                            '</a>\n' +
                                        '</td>\n' +
                                        '<td class="pro-title"><a href="/product/details/'+ data[i].id +'">'+ data[i].en_name +'</a></td>\n' +                       
                                        '<td class="pro-price"><span>'+ data[i].unit_price +'</span></td>  \n' +                                          
                                        '<td class="pro-quantity">\n' +
                                            '<div class="pro-qty">\n' +
                                                '<input type="text" value="'+ data[i].quantity +'" readonly />\n' +
                                                '<a href="#!" onClick="increment('+ data[i].id +')" class="inc">+</a>\n' + 
                                                '<a href="#!" onClick="decrement('+ data[i].id +')" class="dec">-</a>\n' +
                                            '</div>\n' +
                                        '</td>\n' + 
                                        '<td class="pro-subtotal"><span>'+ data[i].price +'</span></td>\n' +
                                        '<td class="pro-remove"><a href="#!" onClick="decrement('+ data[i].id +')"><i class="fa fa-trash-o"></i></a></td>\n' +
                                    '</tr>';
        }        
        $('.cart-items').html(cart_details);
        $('.dropdown-cart-item').html(quantity);
        $('.shipping_cost').html(shipping_cost);
        $('.dropdown-cart-subtotal').html(cart_total);
        $('.cart_rows').html(cart_rows);
        $('.cart-page-total').html(cart_total);
        $('.grand_total').html(parseFloat(cart_total+shipping_cost));
    });
});

//change Shipping 
$("#changeShipping").change(function(){
    var shipping_id = $(this).val();   
    $.ajaxSetup({
        headers: {
          'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    $.ajax({
        type:'POST',
        url: '/add/shipping-charge',
        headers: { 'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content') },
        data: {
            shipping_id:shipping_id
        },
        success:function(data){
            $('.shipping_cost').html(data.shipping_charge);
            $('.grand_total').html(data.grand_total);
        }
    });    
});

//coupon wise grand total update
$(".apply-coupon").click(function(e){
    e.preventDefault();
    var coupon_code = $('.coupon_code').val();    
    $.ajaxSetup({
        headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') }
    });
    $.ajax({
        type:'POST',
        url: '/coupon',
        headers: { 'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content') },
        data: {coupon_code  : coupon_code},
        success:function(response){
            if(response.code == 409){ 
                toastr.error('Coupon already applied !')
            }else if(response.code == 200){
                toastr.success('Coupon applied successfully')
                location.reload();
            }else{
                toastr.error('Coupon not available.')
            }            
        }
    });
});

$('.checkout-btn').click(function(){
    var shipping_charge_value = $("#changeShipping option:selected").val();
    if((shipping_charge_value == 1) || (shipping_charge_value == 2)){
        return true;
    }else{
        toastr.error('Please select shipping area');
        return false;
    }
});