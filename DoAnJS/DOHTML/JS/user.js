// var user =
//     [
//         {
//             id: "USER1",
//             username: "admin",
//             name: "ADMIN",
//             sdt: "0337423654",
//             email: "admin123@gmail.com",
//             address: "HUẾ",
//             password: "12345678",
//             role: "admin"

//         },
//         {
//             id: "USER2",
//             username: "user",
//             name: "Lê Văn Quốc",
//             sdt: "0833440608",
//             email: "quocle@gmail.com",
//             address: "HUẾ",
//             password: "12345678",
//             role: "user"

//         },



//     ];

// // đẩy mảng user vào local
//     var saveUser =function (){
//          localStorage.setItem('listUser',JSON.stringify(user))
//      }
//     //lấy list user 
//      var loadUser = function(){
//          user = JSON.parse(localStorage.getItem('listUser'))
//      }
//      if (localStorage.getItem("listUser")!=null){
        
//         loadUser();
//      }
//      saveUser();
// // chức năng đăng kí
//      var checkSignin = function(){
//          if ((document.getElementById("usernamed").value=="")||
//          (document.getElementById("hotend").value=="")||(document.getElementById("sdtd").value=="")||
//          (document.getElementById("passwordd").value=="")||(document.getElementById("emaild").value=="") ){
//             $(".require-login").css("display","block");
//          }
//          else{
//             $(".require-login").css("display","none");
//             signIn();
//          }
//      }
//      var signIn = function (){
//          var User = {
//              id: "USER"+parseInt( user.length+1),
//              username: document.getElementById("usernamed").value,
//              name: document.getElementById("hotend").value,
//              sdt : document.getElementById("sdtd").value,
//              password:  document.getElementById("passwordd").value,
//              email:  document.getElementById("emaild").value,
//              address:"",
//              role : "user",
//          }
//          alert("Đăng kí thành công");
//          user.push(User);
//          localStorage.setItem('listUser',JSON.stringify(user));
// 			window.location.reload();
//      }
//      var signupArr = [];
//      var saveLogin =function (){
//         localStorage.setItem('signup',JSON.stringify(signupArr))
//     }
     
     

//      var loadLogin = function(){
//         signupArr = JSON.parse(localStorage.getItem('signup'))
//     }
//     if (localStorage.getItem("signup")!=null){
       
//         loadLogin();
//     }
// saveLogin();
//     var checksignup = function(){
//         if ((document.getElementById("name").value=="")||(document.getElementById("password").value=="")){
//             $(".require-login").css("display","block");
//         }
//         else{
//             $(".require-login").css("display","none");
//             signUp();
//         }
//     }
//         var signUp = function(){
//             var k=-1;
//             // var User1 ="";
//             for (var i in user){
//                 var data = JSON.parse(JSON.stringify(user[i]))
                
//                 if (
//                     ((document.getElementById("name").value == data.username) &&
//                         (document.getElementById("password").value == data.password)
//                         && (data.role == "admin")
//                     )
//                 ) {
//                     k = i;
//                     alert("đăng nhập thành công");
        
//                     window.location.href = '../ADMIN/dashboard.html';
                   
//                 }
//                 if (
//                     ((document.getElementById("name").value == data.username) &&
//                         (document.getElementById("password").value == data.password)
//                         && (data.role == "user")
//                     )
//                 ) {
                    
//                             alert("đăng nhập thành công");
//                                k=i; 
//                                 window.location.href = '../index.html';
                              


//                                 var userLogin = {
//                                     username: document.getElementById("name").value,
//                                     password: document.getElementById("password").value
//                                 }
                              

                                
//                                 signupArr.push(userLogin);

//                                 localStorage.setItem('signup',JSON.stringify(signupArr));
                                
//                                 saveLogin();

//                 }
//             }

//             if (k == -1) {
//                 alert("đăng nhập không thành công");
//             }
           
//         }
        



// function getName () {
//     for (var i in user) {
//         if(String(user[i].username) == String(signupArr[0].username)) {
//             document.getElementById("matkhau").innerHTML='<button class="btn btn-outline-danger" onclick="changePassword('+i+')">Đổi</buttoon>';
//             document.getElementById("thanh2").innerHTML=user[i].name;
//             document.getElementById("username").value=user[i].username;
//             document.getElementById("hoten").value=user[i].name;
//             document.getElementById("sdt").value=user[i].sdt;
//             document.getElementById("email").value=user[i].email;
//             document.getElementById("diachi").value=user[i].address;
     
//          document.getElementById("update").innerHTML='<button type="submit" class="mt-3 btn btn-outline-danger" onclick="updateInfo('+i+')">Cập nhật thông tin</button>';

//         }
//     }
//     document.getElementById("doimk").innerHTML='<button class="mt-2 btn btn-outline-danger"  type="button" data-toggle="modal" data-target="#changePassword">Đổi password</button>';

//     document.getElementById("username").setAttribute("disabled","disabled");
  
// }
// getName();

// function updateInfo(i){
//     alert("Cập nhật thành công");
//    var h = user[i];

//    h.name = document.getElementById("hoten").value,
//    h.sdt = document.getElementById("sdt").value,

//    h.email = document.getElementById("email").value,
//    h.address = document.getElementById("diachi").value,

//    localStorage.setItem('listUser',JSON.stringify(user));
//    window.location.reload();

// }

// function changePassword(i){
//     var k = user[i];

//     if (
//         (document.getElementById("oldpass").value == k.password )&&( document.getElementById("newpass").value == document.getElementById("changepass").value)
//          ){

    
//     alert("đổi mật khẩu thành công");

//    k.password = document.getElementById("newpass").value,

//     localStorage.setItem('listUser',JSON.stringify(user));
//     window.location.reload();
//     }

//     if (document.getElementById("oldpass").value != k.password)
//     {
//         alert("mật khẩu cũ không đúng");
//     }
//     if (document.getElementById("newpass").value != document.getElementById("changepass").value)

//     {
//         alert("nhập lại mật khẩu không đúng");
//     }

// }

// function checkLogin(){


// var check = signupArr;

// if (check !=""){
//     window.location.href = '../USER/info.html';

// }

// if (check =="")
//     {
//     window.location.href = '../USER/signup.html';
// }


// }
// function logOut () {
//     signupArr = [];
//     localStorage.setItem('signup',JSON.stringify(signupArr));
//     saveLogin();

// }

// Initial user data
var user = [
    {
        id: "USER1",
        username: "admin",
        name: "ADMIN",
        sdt: "0337423654",
        email: "admin123@gmail.com",
        address: "HUẾ",
        password: "12345678",
        role: "admin"
    },
    {
        id: "USER2",
        username: "user",
        name: "Lê Văn Anh Quân",
        sdt: "0833440608",
        email: "quanle@gmail.com",
        address: "HUẾ",
        password: "12345678",
        role: "user"
    }
];

// Save user array to local storage
var saveUser = function () {
    localStorage.setItem('listUser', JSON.stringify(user));
}

// Load user array from local storage
var loadUser = function () {
    user = JSON.parse(localStorage.getItem('listUser')) || [];
}

// Initialize user data
if (localStorage.getItem("listUser") != null) {
    loadUser();
} else {
    saveUser();
}

// Sign Up function
var checkSignin = function () {
    if (document.getElementById("usernamed").value == "" ||
        document.getElementById("hotend").value == "" ||
        document.getElementById("sdtd").value == "" ||
        document.getElementById("passwordd").value == "" ||
        document.getElementById("emaild").value == "") {
        $(".require-login").css("display", "block");
    } else {
        $(".require-login").css("display", "none");
        signIn();
    }
}

// Register new user
var signIn = function () {
    loadUser(); // Ensure we have the latest user data

    var newUser = {
        id: "USER" + (user.length + 1),
        username: document.getElementById("usernamed").value,
        name: document.getElementById("hotend").value,
        sdt: document.getElementById("sdtd").value,
        password: document.getElementById("passwordd").value,
        email: document.getElementById("emaild").value,
        address: "",
        role: "user"
    };

    user.push(newUser); // Add new user to user array
    saveUser(); // Save updated user array to local storage

    alert("Đăng ký thành công");
    window.location.href = 'signup.html'; // Redirect to login page
}

// Other functions...
var signupArr = [];

var saveLogin = function () {
    localStorage.setItem('signup', JSON.stringify(signupArr));
}

var loadLogin = function () {
    signupArr = JSON.parse(localStorage.getItem('signup')) || [];
}

if (localStorage.getItem("signup") != null) {
    loadLogin();
} else {
    saveLogin();
}

function checksignup() {
    loadUser();
    var username = document.getElementById('name').value;
    var password = document.getElementById('password').value;
    var check = false;
    var role = '';

    for (var i in user) {
        var u = user[i].username;
        var p = user[i].password;
        if (username === u && password === p) {
            check = true;
            role = user[i].role;
            break;
        }
    }

    if (check) {
        alert('Đăng nhập thành công');
        if (role === 'admin') {
            window.location.href = "../ADMIN/dashboard.html"; // Redirect to admin page
        } else {
            window.location.href = "../index.html"; // Redirect to user page
        }
    } else {
        alert('Tên đăng nhập hoặc mật khẩu không đúng');
    }
}

function getName() {
    for (var i in user) {
        if (signupArr.length > 0 && String(user[i].username) == String(signupArr[0].username)) {
            document.getElementById("matkhau").innerHTML = '<button class="btn btn-outline-danger" onclick="changePassword(' + i + ')">Đổi</button>';
            document.getElementById("thanh2").innerHTML = user[i].name;
            document.getElementById("username").value = user[i].username;
            document.getElementById("hoten").value = user[i].name;
            document.getElementById("sdt").value = user[i].sdt;
            document.getElementById("email").value = user[i].email;
            document.getElementById("diachi").value = user[i].address;
            document.getElementById("update").innerHTML = '<button type="submit" class="mt-3 btn btn-outline-danger" onclick="updateInfo(' + i + ')">Cập nhật thông tin</button>';
        }
    }
    document.getElementById("doimk").innerHTML = '<button class="mt-2 btn btn-outline-danger" type="button" data-toggle="modal" data-target="#changePassword">Đổi password</button>';
    document.getElementById("username").setAttribute("disabled", "disabled");
}
getName();

function updateInfo(i) {
    alert("Cập nhật thành công");
    user[i].name = document.getElementById("hoten").value;
    user[i].sdt = document.getElementById("sdt").value;
    user[i].email = document.getElementById("email").value;
    user[i].address = document.getElementById("diachi").value;
    saveUser();
    window.location.reload();
}

function changePassword(i) {
    var k = user[i];
    if (document.getElementById("oldpass").value == k.password &&
        document.getElementById("newpass").value == document.getElementById("changepass").value) {
        alert("đổi mật khẩu thành công");
        k.password = document.getElementById("newpass").value;
        saveUser();
        window.location.reload();
    } else if (document.getElementById("oldpass").value != k.password) {
        alert("mật khẩu cũ không đúng");
    } else if (document.getElementById("newpass").value != document.getElementById("changepass").value) {
        alert("nhập lại mật khẩu không đúng");
    }
}

function checkLogin() {
    if (signupArr.length > 0) {
        window.location.href = '../USER/info.html';
    } else {
        window.location.href = '../USER/signup.html';
    }
}

function logOut() {
    signupArr = [];
    saveLogin();
}
