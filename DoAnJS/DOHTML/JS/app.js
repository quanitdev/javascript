



var product = [
 
  {
      id: "DAM2",
      name: "ĐẦM LƯNG CỔ TIM TÙNG XẾP",
      img: "dam2.png",
      price: 599000,
  },

  {
      id: "DAM4",
      name: "ĐẦM LỬNG SÁT NÁCH NHÚN CỔ",
      img: "dam4.png",
      price: 599000,
  },
  {
      id: "DAM5",
      name: "ĐẦM THUN TAY LOE CUT OUT",
      img: "dam5.png",
      price: 599000,
  },
  {
      id: "DAM6",
      name: "ĐẦM LỬNG FORM A CỔ PHỐI",
      img: "dam6.png",
      price: 499000,
  },
  {
      id: "DAM7",
      name: "ĐẦM NGẮN PHỐI NÚT",
      img: "dam7.png",
      price: 549000,
  },

  {
      id: "AO1",
      name: "ÁO KIỂU NAGWS",
      img: "ao1.png",
      price: 549000,
  },
 
  {
      id: "AO3",
      name: "ÁO HỞ VAI DÀI TAY",
      img: "ao3.png",
      price: 599000,
  },
  {
      id: "AO4",
      name: "ÁO KHÉT NGỰC DÀI TAY",
      img: "ao4.png",
      price: 399000,
  },
  {
      id: "AO5",
      name: "ÁO THUN TRẺ TRUNG",
      img: "ao5.png",
      price: 399000,
  },
  {
      id: "AO6",
      name: "ÁO SƠ MI HÀN QUỐC",
      img: "ao6.png",
      price: 399000,
  },
  {
      id: "AO7",
      name: "ÁO SƠ MI CÔNG SỞ",
      img: "ao7.png",
      price: 299000,
  },
  {
      id: "AO8",
      name: "ÁO THUN BUỘC NƠ VAI",
      img: "ao8.png",
      price: 599000,
  },
  {
      id: "VAY1",
      name: "VÁY A MINI TÚI TRANG TRÍ NÚT",
      img: "vay1.png",
      price: 549000,
  },
  {
      id: "VAY2",
      name: "CHÂN VÁY LỤA DẬP LY",
      img: "vay2.png",
      price: 599000,
  },
 
  {
      id: "VAY5",
      name: "CHÂN VÁY MINI CHẠY VIỀN",
      img: "vay5.png",
      price: 399000,
  },
  {
      id: "VAY6",
      name: "CHÂN VÁY MIDI KIỂU XẾP LY",
      img: "vay6.png",
      price: 599000,
  },
  {
      id: "VAY7",
      name: "VÁY QUẦN KIỂU ĐẮP PHỐI VIỀN",
      img: "vay7.png",
      price: 499000,
  },
  {
      id: "VAY8",
      name: "CHÂN VÁY KIỂU ĐẮP",
      img: "vay8.png",
      price: 199000,
  },

  {
      id: "QUAN2",
      name: "QUẦN JEANS ỐNG LOE",
      img: "quan2.png",
      price: 599000,
  },
  {
      id: "QUAN3",
      name: "QUẦN DÀI ỐNG SUÔNG",
      img: "quan3.png",
      price: 599000,
  },

  {
      id: "QUAN5",
      name: "QUẦN TÂY ỐNG ĐỨNG",
      img: "quan5.png",
      price: 599000,
  },
  {
      id: "QUAN6",
      name: "QUẦN JEANS STRAIGHT",
      img: "quan6.png",
      price: 599000,
  },
  {
      id: "QUAN7",
      name: "QUẦN SHORT JEANS TƯA LAI",
      img: "quan7.png",
      price: 499000,
  },
  {
      id: "QUAN8",
      name: "SHORT LINEN ỐNG RỘNG",
      img: "quan8.png",
      price: 299000,
  },
];

// Số lượng sản phẩm sẽ được hiển thị mỗi lần nhấn nút "Xem Thêm"
var productsPerLoad = 4;
var productsLoaded = 0;

document.getElementById('load-more').addEventListener('click', function() {
  displayProducts(productsLoaded, productsLoaded + productsPerLoad);
  productsLoaded += productsPerLoad;

  if (productsLoaded >= product.length) {
      document.getElementById('load-more').style.display = 'none';
  }
});

var shoppingCart = (function() {
  var cart = [];
  
  function Item(id, name, img, price, count) {
      this.id = id;
      this.name = name;
      this.img = img;
      this.price = price;
      this.count = count;
  }
  
  function saveCart() {
      sessionStorage.setItem('shoppingCart', JSON.stringify(cart));
  }
  
  function loadCart() {
      cart = JSON.parse(sessionStorage.getItem('shoppingCart')) || [];
  }
  
  if (sessionStorage.getItem("shoppingCart") != null) {
      loadCart();
  }
  
  var obj = {};
  
  obj.addItemToCart = function(id, name, img, price, count) {
      for (var item in cart) {
          if (cart[item].id === id) {
              cart[item].count++;
              saveCart();
              return;
          }
      }
      var item = new Item(id, name, img, price, count);
      cart.push(item);
      saveCart();
  };
  
  obj.setCountForItem = function(id, count) {
      for (var i in cart) {
          if (cart[i].id === id) {
              cart[i].count = count;
              break;
          }
      }
      saveCart();
  };
  
  obj.removeItemFromCart = function(id) {
      for (var item in cart) {
          if (cart[item].id === id) {
              cart[item].count--;
              if (cart[item].count === 0) {
                  cart.splice(item, 1);
              }
              break;
          }
      }
      saveCart();
  };
  
  obj.removeItemFromCartAll = function(id) {
      for (var item in cart) {
          if (cart[item].id === id) {
              cart.splice(item, 1);
              break;
          }
      }
      saveCart();
  };
  
  obj.clearCart = function() {
      cart = [];
      saveCart();
  };
  
  obj.totalCount = function() {
      var totalCount = 0;
      for (var item in cart) {
          totalCount += cart[item].count;
      }
      return totalCount;
  };
  
  obj.totalCart = function() {
      var totalCart = 0;
      for (var item in cart) {
          totalCart += cart[item].price * cart[item].count;
      }
      return Number(totalCart.toFixed(2));
  };
  
  obj.listCart = function() {
      var cartCopy = [];
      for (i in cart) {
          item = cart[i];
          itemCopy = {};
          for (p in item) {
              itemCopy[p] = item[p];
          }
          cartCopy.push(itemCopy);
      }
      return cartCopy;
  };
  
  return obj;
})();



function displayProducts(startIndex, endIndex) {
  var productGrid = document.getElementById('product-list');
  for (var i = startIndex; i < endIndex && i < product.length; i++) {
      let productHTML = `
          <div class="col-lg-3 col">
              <div class="card product p-2" style="width: 345px; height: 504px;">
                  <a href="DESCRIBE/${product[i].id}.html">
                      <img class="pro card-img-top" src="IMAGE/${product[i].img}" alt="${product[i].name}">
                  </a>
                  <div class="card-title product-title text-center">
                      <a href="DESCRIBE/${product[i].id}.html">${product[i].name}</a>
                  </div>
                  <div class="price text-center h6">${product[i].price.toLocaleString('vi-VN')}đ</div>
                  <span class="text-center add-to-cart add-cart btn btn-outline-warning text-dark" data-id="${product[i].id}" data-name="${product[i].name}" data-img="${product[i].img}" data-price="${product[i].price}" onclick="tks()">
                      <a><i class="fas fa-cart-plus"></i></a>
                  </span>
              </div>
          </div>
      `;
      productGrid.insertAdjacentHTML('beforeend', productHTML);
  }

  // Add event listeners for "Add to Cart" buttons
  // var addToCartButtons = document.querySelectorAll('.add-to-cart');
  // addToCartButtons.forEach(function(button) {
  //     button.addEventListener('click', function() {
  //         var id = this.getAttribute('data-id');
  //         var name = this.getAttribute('data-name');
  //         var img = this.getAttribute('data-img');
  //         var price = parseInt(this.getAttribute('data-price'));
  //         shoppingCart.addItemToCart(id, name, img, price, 1);
  //         displayCart();
  //         alert("Sản phẩm đã được thêm thành công!");
  //     });
  // });
  function loadproduct() {
    pro = JSON.parse(sessionStorage.getItem('shopping'));
  }
  $('.add-to-cart').click(function(event) {
    event.preventDefault();
    var id = $(this).data('id');
    var name = $(this).data('name');
    var img = $(this).data('img');
    var price = Number($(this).data('price'));
    shoppingCart.addItemToCart(id, name,img, price, 1);
    alert("Sản phẩm đã được thêm vào giỏ hàng")
    displayCart();
  });
  $('.clear-cart').click(function() {
    shoppingCart.clearCart();
      window.location.reload();
    displayCart();
  });
}


// function displayProducts(startIndex, endIndex) {
//   var productGrid = document.getElementById('product-list');
//   for (var i = startIndex; i < endIndex && i < product.length; i++) {
//       let productHTML = `
//           <div class="col-lg-3 col">
//               <div class="card product p-2" style="width: 345px; height: 504px;">
//                   <a href="DESCRIBE/${product[i].id}.html">
//                       <img class="pro card-img-top" src="${product[i].img}" alt="${product[i].name}">
//                   </a>
//                   <div class="card-title product-title text-center">
//                       <a href="DESCRIBE/${product[i].id}.html">${product[i].name}</a>
//                   </div>
//                   <div class="price text-center h6">${product[i].price.toLocaleString('vi-VN')}đ</div>
//                   <span class="text-center add-to-cart add-cart btn btn-outline-warning text-dark" data-id="${product[i].id}" data-name="${product[i].name}" data-img="${product[i].img}" data-price="${product[i].price}" onclick="tks()">
//                       <a><i class="fas fa-cart-plus"></i></a>
//                   </span>
//               </div>
//           </div>
//       `;
//       productGrid.insertAdjacentHTML('beforeend', productHTML);
//   }

  //   // Add event listeners for "Add to Cart" buttons
  //   var addToCartButtons = document.querySelectorAll('.add-to-cart');
  //   addToCartButtons.forEach(function(button) {
  //       button.addEventListener('click', function() {
  //           var id = this.getAttribute('data-id');
  //           var selectedProduct = product.find(p => p.id === id);
  //           shoppingCart.addItemToCart(selectedProduct.id, selectedProduct.name, selectedProduct.img, selectedProduct.price, 1);
  //           displayCart();
  //       });
  //   });
  // }








      // function displayCart() {
      //   var cartArray = shoppingCart.listCart();
      //   var output = '';
      //   for (var i in cartArray) {
      //       output += `
      //           <tr>
      //               <td>${cartArray[i].name}</td>
      //               <td>(${cartArray[i].price} VND)</td>
      //               <td><input class="item-count" type="number" data-id="${cartArray[i].id}" value="${cartArray[i].count}"></td>
      //               <td><button class="delete-item" data-id="${cartArray[i].id}">X</button></td>
      //           </tr>
      //       `;
      //   }
      //   document.querySelector('.show-cart').innerHTML = output;
      //   document.querySelector('.total-cart').innerHTML = shoppingCart.totalCart() + ' VND';
      //   document.querySelector('.total-count').innerHTML = shoppingCart.totalCount();

      //   var deleteButtons = document.querySelectorAll('.delete-item');
      //   var itemCounts = document.querySelectorAll('.item-count');

      //   deleteButtons.forEach(function(button) {
      //       button.addEventListener('click', function() {
      //           var id = this.getAttribute('data-id');
      //           shoppingCart.removeItemFromCartAll(id);
      //           displayCart();
      //       });
      //   });

      //   itemCounts.forEach(function(input) {
      //       input.addEventListener('change', function() {
      //           var id = this.getAttribute('data-id');
      //           var count = Number(this.value);
      //           shoppingCart.setCountForItem(id, count);
      //           displayCart();
      //       });
      //   });
      // }
      function displayCart() {
        var cartArray = shoppingCart.listCart();
        var output = "";
        for (var i in cartArray) {
            output += "<tr class='text-center sp-cart'>"
                + "<td><img src='" + cartArray[i].img + "' style='width:100px'></td>" 
                + "<td class='name-title' style='width: 300px;'>" + cartArray[i].name + "</td>" 
                + "<td class='name-title'>" + cartArray[i].price.toLocaleString('vi-VN') + "₫</td>"
                + "<td style='width: 200px;'><button class='minus-item text-dark cart-count input-group-addon btn btn-outline-primary' data-id='" + cartArray[i].id + "'>-</button>"
                + "<button class='btn cart-count'>" + cartArray[i].count + "</button>" 
                + "<button class='plus-item cart-count btn btn-primary text-dark input-group-addon' data-id='" + cartArray[i].id + "'>+</button>"
                + "</td>"
                + "<td class='name-title'>" + (cartArray[i].price * cartArray[i].count).toLocaleString('vi-VN') + "₫</td>"   
                + "<td><button class='delete-item btn btn-outline-danger' style='width:40px;' data-id='" + cartArray[i].id + "'>X</button></td>"
                + "</tr>";
        }
        document.querySelector(".show-cart-1").innerHTML = output;
        document.querySelector(".total-cart.total-1").innerHTML = shoppingCart.totalCart().toLocaleString('vi-VN') + "₫";
        document.querySelector(".total-cart.total").innerHTML = shoppingCart.totalCart().toLocaleString('vi-VN') + "₫";
    }
    


displayCart();

