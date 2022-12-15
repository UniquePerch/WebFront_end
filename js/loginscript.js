function login() {
    console.log("func");
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == 'willow' && password == 'lyh701721')
        window.location.href = 'index.html'
    else
        window.alert("密码输入错误")
}
