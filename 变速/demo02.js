
/**
 * @desc AnimationFrame控制快慢类
 * @param {speedFlag|number} 0:定速 1:加速 -1:减速
 * @param {speed|number} 频率
 * @param {countCallback|Function} 变频函数
 * @param {mainFun|Function} 主要业务逻辑函数
 * @param {changeSpeed:numeber} 加速/减速-频率值
*/
// var speedFlag = 1 // 快慢节奏
// var count = 0 // 执行了几个
// var speed = 330 // 动画频率/毫秒 (多少秒执行一次fun)
// var timer = null // 执行id
// var startTime = window.performance.now();

class AnimationFrame {
	constructor({speedFlag=0, speed = 500, changeSpeed = 50, countCallback = () => {}, mainFun = () => {} } = {}) {
		this.speedFlag = speedFlag;
		this.speed = speed;
		this.mainFun = mainFun;
		this.countCallback = countCallback;
		this.timer = null;
		this.startTime = window.performance.now();
		this.count = 0;
		this.changeSpeed = changeSpeed;
		this.isStop = false;
		this.render();
	}
	// 主函数
	render(timestamp) {
		if (this.isStop) return;
    const elapsedTime = timestamp - this.startTime;
    if (elapsedTime > this.speed) {
        this.startTime = timestamp;
        this.animate();
				this.handleSpeed();
    }
    this.timer = window.requestAnimationFrame(this.render.bind(this));
	}
	// 执行动画函数
	animate() {
		this.countCallback(this.count);
		if (this.isStop) return;
		this.mainFun(this.count);
		this.count++
	}
	// 处理频率函数
	handleSpeed() {
		if (this.speedFlag === 1) {
			// 当减到最小值时，自动变匀速；
			this.speed>this.changeSpeed?this.speed -= this.changeSpeed:this.speedFlag = 0;
		} else if (this.speedFlag === -1) {
			this.speed += this.changeSpeed;
		}
	}
	// 加速
	quicken() {
		this.speedFlag = 1
	}
	// 减速
	slow() {
		this.speedFlag = -1
	}
	// 匀速
	equally() {
		this.speedFlag = 0
	}
	// 停止
	stop() {
		cancelAnimationFrame(this.timer);
		this.isStop = true;
	}
}