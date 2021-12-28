let btn = document.getElementById('btn');
btn.addEventListener('click',fun);
/**
 * @desc speedFlag 播放节奏开关
 * @value 0 定速
 * @value 1 快速
 * @value -1 慢速
*/
var speedFlag = 1 // 快慢节奏
var count = 0 // 执行了几个
var speed = 330 // 动画频率/毫秒 (多少秒执行一次fun)
var timer = null // 执行id
var startTime = window.performance.now();

function fun(elapsedTime) {
    render(elapsedTime)
}

function render(timestamp) {
    const elapsedTime = timestamp - startTime;
    if (elapsedTime > speed) {
        startTime = timestamp;
        handleSpeedFlag();
        // 动画执行逻辑
        rotate()
    }
    timer = window.requestAnimationFrame(render);
}

function handleSpeedFlag() {
    // 开始匀速
    if (speedFlag == 1 && count > 8) {
        speedFlag = 0;
    }
    // 开始减速 
    if (speedFlag == 0 && count > 24) {
        speedFlag = -1;
    }
    handleSpeed(30)
}
/**
 * @desc 控制速度
 * @params {max:number} 速率值
*/
function handleSpeed(val) {
    switch(speedFlag){
        case 1 :
            speed -= val;
            break;
        case -1 :
          speed += val
        default :
          break;
    }
}
// 执行动画逻辑
function rotate() {
    count ++
    console.log('speed',speed)
}