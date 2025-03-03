export let cart = [];

export function addItemToCart(productId){
    let matchingItem;
    cart.forEach((cartItem)=>{
      if(productId === cartItem.productId){
        matchingItem = cartItem;
      }
    })
    if(matchingItem){
      matchingItem.quantity += 1;
    }
    else{
      cart.push({
        productId : productId,
        quantity:1
      })
    }
  }
  
  export function updateCartNumber(){
    let cartQuantity = 0;
        
    cart.forEach((cartItem) =>{
        cartQuantity += cartItem.quantity;
    })
    document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
  }