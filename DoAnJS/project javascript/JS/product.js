var product = [
    {
        id:"SP1",
        name:"ĐẦM KIỂU XOWMI ĐAI XOẮN",
        img : "sp1.webp",
        price:122000,
    },
    {
        id:"SP2",
        name:"ĐẦM BABY-DOLL TAY PHỒNG",
        img : "sp2.webp",
        price:200000,
    },
    {
        id:"SP3",
        name:"CHÂN VÁY MIDI KIỂU XẾP LY",
        img : "sp3.webp",
        price:150000,
    },
    {
        id:"SP4",
        name:"ĐẦM CỔ VUÔNG PHỐI TÚI",
        img : "sp4.webp",
        price:264000,
    },
    {
        id:"SP5",
        name:"ĐẦM KIỂU TAY BÍ CỔ YẾM",
        img : "sp5.webp",
        price:354000,
    },
    {
        id:"SP6",
        name:"ĐẦM BÚT CHÌ PHỐI ORGANZA",
        img : "sp6.webp",
        price:123000,
    },
    {
        id:"SP7",
        name:"ĐẦM TRÁI TIM TAY DÀI",
        img : "sp7.webp",
        price:145000,
    },
    {
        id:"SP8",
        name:"ĐẦM MINI THUN EO",
        img : "sp8.webp",
        price:158000,
    },
   
];
var pro = [];
function saveproduct() {
    sessionStorage.setItem('shopping', JSON.stringify(pro));
  }
// đẩy mảng product vào local
function Save(){
    localStorage.setItem('listProduct',JSON.stringify(product))
}

//lấy sản phẩm 
function load(){
   product = JSON.parse(localStorage.getItem('listProduct'));
} 
//xuất sản phẩm ra html
if (localStorage.getItem("listProduct") != null) {
load();
}
if (localStorage.getItem("listProduct") == null) {
Save();
}
var listLocal = function(){
   var listproduct ="";
   for (var i in product){
       var data = JSON.parse(JSON.stringify(product[i]))
    var listproduct = '<div class="col-lg-3 col-md-6 col-sm-6 col-6 mt-3">';
    listproduct += '<div class="card product p-2" styte="width:auto">'; 
    listproduct += '<a ><img  class="proo card-img-top" data-id="'+data.id+'" data-name="'+data.name+'" data-img="'+data.img+'" data-price="'+data.price+'" src="IMAGE/' + data.img +'" alt="..."></a>';
    listproduct += '<div class="card-title product-title text-center" ><a href="chitiet.html"  class="proo" data-id="'+data.id+'" data-name="'+data.name+'" data-img="'+data.img+'" data-price="'+data.price+'">'+data.name+'</a></div>';
    listproduct += '<div class="price text-center h6">'+data.price.toLocaleString('de-DE')+'₫</div>';
    listproduct +=  '<span class="text-center add-to-cart add-cart btn btn-outline-warning text-dark" data-id="'+data.id+'" data-name="'+data.name+'" data-img="'+data.img+'" data-price="'+data.price+'" onclick="tks()">';
    listproduct +=  '<a>';
    listproduct +=  '<i class="fas fa-cart-plus"></i>';
    listproduct +=  '</a>';
    listproduct +=  '</span>';
    listproduct += '</div>';
    listproduct += '</div>';
    document.getElementById("banchay").innerHTML += listproduct;
   }
   Save();
}

listLocal();