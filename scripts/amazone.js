// const products=[{
//   image:"images/products/athletic-cotton-socks-6-pairs.jpg",
//   name:'Acer Laptop',
//   rating:{
//     stars:4.5,
//     count:87
//   },
//   priceCents:1090
// },{
//   image:"images/products/intermediate-composite-basketball.jpg",
//   name:'PCs',
//   rating:{
//     stars:4,
//     count:127
//   },
//   priceCents:2095
// },{
//   image:"images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
//   name:'Make Up ',
//   rating:{
//     stars:4.5,
//     count:56
//   },
//   priceCents:799
// },
// {
//   image:"images/products/black-2-slot-toaster.jpg",
//   name:"black-2-slot-toaster",
//   rating:{
//     stars:4.5,
//     count:56
//   },
//   priceCents:1899
// }
// ]

let productHtml='';
products.forEach((product)=>{

productHtml+=`
<div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
           ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars*10}.png">
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
            $${(product.priceCents/100).toFixed(2)}
          </div>

          <div class="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id="${product.id}">
            Add to Cart
          </button>
        </div>
`;
/*
data attribute :-
 it is just an another html attribute . 
 it allow us to attach any information to an element.
 syntax :-
 it start with data- after that yu can give any name and in the rhs side of = we give value 
 ex:- data-product-id="${product.name} // line nmbr=85
*/

})
// console.log(productHtml);
document.querySelector('.js-products-grid').innerHTML=productHtml;

document.querySelectorAll('.js-add-to-cart').forEach((button)=>{
  button.addEventListener('click',()=>{
    const productId=button.dataset.productId
    let matchingItem;
    cart.forEach((item)=>{
      if(productId===item.productId){
        matchingItem=item;
      }
    })
    if(matchingItem){
      matchingItem.quantity++;
    }
    else{
      cart.push({
      productId:productId,
      quantity:1
    })
    }
    
    console.log(cart)
  
  })
})




