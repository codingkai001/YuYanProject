$(document).ready(function () {
    var wishId = 1;
    var page = 1;
    // $.post("http://120.77.32.233/xinyuan/user/login",{"phone": "15080073390","password": "123456789"},function (data,status) {
    //     alert(status);
    //     alert(code);
    //     // {dataType: 'jsonp', crossDomain: true}
    //    // http://120.77.32.233/xinyuan/user/login
    // });
    var xmlObj;
    if (window.XMLHttpRequest)
        xmlObj = new XMLHttpRequest();
    else
        xmlObj = new ActiveXObject("Microsoft.XMLHTTP");
    xmlObj.onreadystatechange = function () {
        if (xmlObj.readyState === 4 && xmlObj.status === 200) {
            // var result = document.getElementById("result");
            try {
                var data = eval('(' + xmlObj.responseText + ')');   //将json字符串转化为json对象
                alert(xmlObj.responseText);
                // result.innerHTML = "姓名：" + data.name + ",性别：" + data.sex;
            }
            catch (err) {
                // alert(err.toString());
                console.log(err.toString());
            }
        }
    };
    xmlObj.open("POST", "http://120.77.32.233/xinyuan/user/login", true);  //可添加查询字符串
    xmlObj.send({"phone": "15080073390", "password": "123456789"});   //仅用于POST方法发送数据
    // xml.open("http://120.77.32.233/xinyuan/user/login",)
    // // document.cookie = "token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyMzQ1Njc4OSIsImV4cCI6MTUzMzgxOTk3NywiaWF0IjoxNTMzMjE1MTc3fQ.IGkszZFwxIjQATXIEyz0DCAemyG2iSkz1VrGXH5zYnc;domain=120.77.32.233;";
    // $.post("http://120.77.32.233/xinyuan/comment/get/"+wishId.toString()+"/"+page.toString(),{dataType: 'jsonp', crossDomain: true}, function (data, status) {
    //     alert(data);
    //     alert(status);
    //     // if (status === "success"){
    //     //     alert(data)
    //     // }
    //     // else
    //     //     alert(status)
    // });
});
