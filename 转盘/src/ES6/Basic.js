/**
 * @desc canvas适配等基础方法
 * @param {el:Element|null} :  1.Element:canvas会充满整个元素，2.null:canvas会充满整个屏幕。
 * 
 */
class Basic {
	constructor({el=null}={}) {
		var canvas = document.createElement('canvas');
		if (el) {
			el.appendChild(canvas)
		}
		document.body.appendChild(canvas);
		var ctx = canvas.getContext("2d");
		var designWidth =  800; // 设计图宽
		var designHeight = 600; // 设计图高
		var whRate = designWidth/designHeight; // 设计图比率
		var cwidth,cheight; // canvas真实宽高
		resizeCanvas(); // 初始化canvas
		window.addEventListener('resize', function () {
			resizeCanvas();
		})
		function resizeCanvas() {  
			// 获取屏幕宽高
			// 谷歌浏览器 document.documentElement.clientWidth
			// ie浏览器 document.body.clientHeight
			var clientWidth = document.body.clientWidth || document.documentElement.clientWidth;
			var clientHeight = document.body.clientHeight || document.documentElement.clientHeight;
			console.log(clientWidth, clientHeight)
			// 设计图纸800/600。
			if(clientWidth - clientHeight > 0) {
				// 宽大于高， 以高度为基准
				cheight = clientHeight
				cwidth = cheight*whRate
			} else {
				cwidth = clientWidth
				cheight = cwidth/whRate
			}
			canvas.width = cwidth;
			canvas.height = cheight;
			ctx.fillStyle = 'black';
			ctx.fillRect(0, 0, cwidth, cwidth);

			ctx.fillStyle = 'red';
			console.log('calcX(50)', calcX(50))
			console.log('calcY(50)', calcY(50));
			ctx.fillRect(calcX(50), calcY(50), calcX(50), calcY(50));
		}
		function calcX(X) {
			return X/designWidth*cwidth
		}
		function calcY(Y) {
			return Y/designHeight*cheight
		}
	}
}