

var product = [
   
    {
        id:"DAM1",
        name:"ĐẦM HOA PHỐI DÂY RUY BĂNG",
        img : "dam1.png",
        price:549000,
    },
    {
        id:"DAM2",
        name:"ĐẦM LƯNG CỔ TIM TÙNG XẾP",
        img : "dam2.png",
        price:599000,
    },
    {
        id:"DAM3",
        name:"ĐẦM LỬNG CÚP 2 LỚP",
        img : "dam3.png",
        price:599000,
    },
    {
        id:"DAM4",
        name:"ĐẦM LỬNG SÁT NÁCH NHÚN CỔ",
        img : "dam4.png",
        price:599000,
    },
    {
        id:"DAM5",
        name:"ĐẦM THUN TAY LOE CUT OUT",
        img : "dam5.png",
        price:599000,
    },
    {
        id:"DAM6",
        name:"ĐẦM LỬNG FORM A CỔ PHỐI",
        img : "dam6.png",
        price:499000,
    },
    {
        id:"DAM7",
        name:"ĐẦM NGẮN PHỐI NÚT",
        img : "dam7.png",
        price:549000,
    },
    {
        id:"DAM8",
        name:"ĐẦM 2 DÂY DÀI BUỘC NƠ VAI",
        img : "dam8.png",
        price:599000,
    },

    {
        id:"AO1",
        name:"ÁO KIỂU NAGWS",
        img : "ao1.png",
        price:549000,
    },
    {
        id:"AO2",
        name:"ÁO KIỂU TAY NGẮN PHỐI BÈO",
        img : "ao2.png",
        price:449000,
    },
    {
        id:"AO3",
        name:"ÁO HỞ VAI DÀI TAY",
        img : "ao3.png",
        price:599000,
    },
    {
        id:"AO4",
        name:"ÁO KHÉT NGỰC DÀI TAY ",
        img : "ao4.png",
        price:399000,
    },
    {
        id:"AO5",
        name:"ÁO THUN TRẺ TRUNG",
        img : "ao5.png",
        price:399000,
    },
    {
        id:"AO6",
        name:"ÁO SƠ MI HÀN QUỐC",
        img : "ao6.png",
        price:399000,
    },
    {
        id:"AO7",
        name:"ÁO SƠ MI CÔNG SỞ",
        img : "ao7.png",
        price:299000,
    },
    {
        id:"AO8",
        name:"ÁO THUN BUỘC NƠ VAI",
        img : "ao8.png",
        price:599000,
    },

    {
        id:"VAY1",
        name:"VÁY A MINI TÚI TRANG TRÍ NÚT",
        img : "vay1.png",
        price:549000,
    },
    {
        id:"VAY2",
        name:"CHÂN VÁY LỤA DẬP LY",
        img : "vay2.png",
        price:599000,
    },
    {
        id:"VAY3",
        name:"CHÂN VÁY A PHỐI NẸP",
        img : "vay3.png",
        price:399000,
    },
    {
        id:"VAY4",
        name:"CHÂN VÁY BÚT CHÌ XẾP EO ",
        img : "vay4.png",
        price:399000,
    },
    {
        id:"VAY5",
        name:"CHÂN VÁY MINI CHẠY VIỀN",
        img : "vay5.png",
        price:399000,
    },
    {
        id:"VAY6",
        name:"CHÂN VÁY MIDI KIỂU XẾP LY",
        img : "vay6.png",
        price:599000,
    },
    {
        id:"VAY7",
        name:"VÁY QUẦN KIỂU ĐẮP PHỐI VIỀN ",
        img : "vay7.png",
        price:499000,
    },
    {
        id:"VAY8",
        name:"CHÂN VÁY KIỂU ĐẮP",
        img : "vay8.png",
        price:199000,
    },

    {
        id:"QUAN1",
        name:"QUẨN DÀI ỐNG LOE THUN",
        img : "quan1.png",
        price:549000,
    },
    {
        id:"QUAN2",
        name:"QUẦN JEANS ỐNG LOE",
        img : "quan2.png",
        price:599000,
    },
    {
        id:"QUAN3",
        name:"QUẦN DÀI ỐNG SUÔNG",
        img : "quan3.png",
        price:599000,
    },
    {
        id:"QUAN4",
        name:"QUẦN DÀI ỐNG RỘNG GẬP GẤU",
        img : "quan4.png",
        price:599000,
    },
    {
        id:"QUAN5",
        name:"QUẦN TÂY ỐNG ĐỨNG",
        img : "quan5.png",
        price:599000,
    },
    {
        id:"QUAN6",
        name:"QUẦN JEANS STRAIGHT",
        img : "quan6.png",
        price:599000,
    },
    {
        id:"QUAN7",
        name:"QUẦN SHORT JEANS TƯA LAI",
        img : "quan7.png",
        price:499000,
    },
    {
        id:"QUAN8",
        name:"SHORT LINEN ỐNG RỘNG",
        img : "quan8.png",
        price:299000,
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

