function ajax(obj) {
    if (obj) {
        if (obj.method && obj.url) {
            var xhr = new XMLHttpRequest();
            xhr.open(obj.method , obj.url);
            xhr.onload = ()=>{

                if (xhr.status === 200) {
                    console.log("sucess");
                    obj.handler(xhr.responseText);
                } else {
                    console.log("wrong");
                }
            }
            xhr.send();
        } else {
          throw "URL or Method Undefiend"
        }
    } else {
        throw "No object passed in";
    }
}

ajax({
    method : "GET",
    url : "https://randomuser.me/api/?results=5000",
    handler : test2,
    dataType :
})
