// const getCSS = document.querySelector('#getCSS');
// console.log(getCSS);

// request.readyState
// 0	Uninitialized	初始化状态。XMLHttpRequest 对象已创建或已被 abort() 方法重置。
// 1	Open	open() 方法已调用，但是 send() 方法未调用。请求还没有被发送。
// 2	Sent	Send() 方法已调用，HTTP 请求已发送到 Web 服务器。未接收到响应。
// 3	Receiving	所有响应头部都已经接收到。响应体开始接收但未完成。
// 4	Loaded	HTTP 响应已经完全接收。

// 信息响应 (100–199)
// 成功响应 (200–299)
// 重定向消息 (300–399)
// 客户端错误响应 (400–499)
// 服务端错误响应 (500–599)

getCSS.onclick = ()=> {
    console.log("点击了getCSS");
    // 创建一个 XMLHttpRequest 对象
    const request = new XMLHttpRequest();
    // 指定请求方式，与路径，构造请求，这说明，XMLHttpRequest 会自动拼接域名的
    request.open('GET', '/style.css');
    // 设置请求回调
    request.onload = () => {
        // 响应数据
        console.log("响应");
        console.log(request.response);
        const style = document.createElement('style');
        style.innerHTML = request.response;
        document.head.appendChild(style);
    }
    // 设置请求回调
    request.onreadystatechange = () =>{
        if(request.readyState === 4){
            if(request.status >= 200 && request.status <= 300){
                const style = document.createElement('style');
                style.innerHTML = request.response;
                document.head.appendChild(style);
            }
        }
    }
    request.send();
}

getJS.onclick = () =>{
    const request = new XMLHttpRequest();
    request.open('GET','/2.js');
    // request.onload = () => {
    //     const script = document.createElement('script');
    //     script.innerHTML = request.response;
    //     document.body.appendChild(script);
    // }
    request.onreadystatechange = () => {
        if(request.readyState === 4 && request.status >= 200 && request.status <= 300){
            const script = document.createElement('script');
            script.innerHTML = request.response;
            document.body.appendChild(script);
       }
    }
    request.send();
}

getHTML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '3.htm');
    request.onreadystatechange = () =>{
        if(request.readyState === 4){
            console.log(request.status); // 404
            console.log(request.response);
        }
    }
    request.send();
}

getXML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET','4.xml');
    request.onreadystatechange = () => {
        if(request.readyState === 4 && request.status >= 200 && request.status <= 300){
            const dom = request.responseXML;
            const text = dom.getElementsByTagName('warning')[0].textContent;
            console.log(text.trim());
        }
    };
    request.send()
};

getJSON.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET','/5.json');
    request.onreadystatechange = () => {
        console.log(request.response);
        if(request.readyState === 4 && request.status >= 200 && request.status <= 300){
            try {
                console.log(JSON.parse(request.response));
            } catch (e) {
                console.log(e);
            }
        }
    };
    request.send();
};

let n = 2
getPage.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', `/page${n}`);
    request.onreadystatechange = () => {
        if(request.readyState === 4 && request.status >= 200 && request.status <= 300){
            console.log("分页");
            let arr = JSON.parse(request.response);
            arr.forEach((item) => {
             const li = document.createElement('li');
             li.textContent = item.id;
             xxx.appendChild(li);
            })
            n+=1;
        }
    };
    request.send();
};
