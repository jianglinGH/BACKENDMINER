function Head() {
    // let ws = new WebSocket('ws://asteroids.dev.mediasia.cn/');
    // // 客户端接收消息
    // ws.onmessage = (event) =>{
    //     let message = JSON.parse(event.data).message;
    //     console.log(message)
    // }
    // // 出错
    // ws.onerror = (error) =>{
    //     console.log(error);
    // }
    // // 关闭
    // ws.onclose = ()=>{
    //     console.log('webSocket断开连接')
    // }
    
    return(<div className='head'>
        <img className="head-logo" src={require('../img/Vector.png')}/> 
        <span className="head-span">BACKEND MINER</span>
    </div>)
}

export {Head}