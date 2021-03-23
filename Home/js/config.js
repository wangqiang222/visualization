var baseUrl="http://localhost:45568/setCommand/"


const BUILDING_CONFIG=[{
    buildName: '大楼',
    floors: ["wallFloor0","wallFloor1"]
},
{
    buildName: '大楼(Clone)',
    floors: ["wallFloor0","wallFloor1"]
}]

const SYS_CLASS_CONFIG=["制冷"]

//封装http请求
function httpRequest(url, params) {
    return new Promise((resolve, reject) => {
        var xmlHttp = null;
        if (window.XMLHttpRequest) {        
            xmlHttp = new XMLHttpRequest;
        } else if (window.ActiveXObject) {
            xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        if (xmlHttp == null) {
            alert("浏览器不支持xmlHttp");
            return;
        }
        xmlHttp.open("post", url);
        xmlHttp.send(JSON.stringify(params)); 
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState == 4) {
                if (xmlHttp.status == 200) {
                    let res = JSON.parse(xmlHttp.responseText);
                    if (res) {
                        resolve(res);
                    } else {
                        reject(res);
                    }
                }
            }
        }
    })

}

 
