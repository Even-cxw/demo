/**
 * @desc 会按照designWidth，designHeight 的比列进行缩放。
 * @param {el:Element|null} :  1.Element:canvas会充满整个元素，2.null:canvas会充满整个屏幕。
 * @param {designWidth} : 设计图的宽度
 * @param {designHeight} : 设计图的高度
 */

class CanvasAdaptation {
	constructor() {}
	initCanvas({el=null,designWidth=800,designHeight=400}={}){
		this.el = el;
		this.designWidth = designWidth;
		this.designHeight = designHeight;
		if (!designWidth || !designWidth) {
			throw new Error('请传入宽高!')
		}
		this.insertDom();
		this.resizeCanvas(); // 初始化canvas
		window.addEventListener('resize', ()=> {
			this.getWrapperBound();
			this.resizeCanvas();
		})
	}
	insertDom() {
		this.canvas = document.createElement('canvas');
		var wrapper = document.createElement('div');
		wrapper.style.cssText = 'height:100%;width:100%;display:flex;justify-content:center;align-items:center;'
		wrapper.appendChild(this.canvas);
		if (this.el) {
			this.el.appendChild(wrapper)
		} else {
			document.body.appendChild(wrapper);
		}
		this.getWrapperBound();
	}

	getWrapperBound() {
		console.log(window.getComputedStyle(this.el).height.replace('px', ''))
		if (this.el) {
			this.wWidth = Number(window.getComputedStyle(this.el).width.replace('px', ''));
			this.wHeight = Number(window.getComputedStyle(this.el).height.replace('px', ''));
			console.log(this.el.style);
			console.log(this.wWidth, this.wHeight);
		} else {
			this.wWidth = document.body.clientWidth || document.documentElement.clientWidth;
			this.wHeight = document.body.clientHeight || document.documentElement.clientHeight;
		}
	}

	resizeCanvas() {  
		var ctx = this.canvas.getContext("2d");
		var whRate = this.designWidth/this.designHeight; // 设计图比率
		if(this.wWidth - this.wHeight > 0) {
			// 宽大于高， 以高度为基准
			this.cheight = this.wHeight
			this.cwidth = this.cheight*whRate
		} else {
			this.cwidth = this.wWidth
			this.cheight = this.cwidth/whRate
		}
		this.canvas.width = this.cwidth;
		this.canvas.height = this.cheight;
		ctx.fillStyle = 'black';
		ctx.fillRect(0, 0, this.cwidth, this.cheight);

		ctx.fillStyle = 'red';
		console.log('calcX(50)', this.calcX(50))
		console.log('calcY(50)', this.calcY(50));
		ctx.fillRect(this.calcX(50), this.calcY(50), this.calcX(50), this.calcY(50));
	}
	calcX(X) {
		return X/this.designWidth*this.cwidth
	}
	calcY(Y) {
		return Y/this.designHeight*this.cheight
	}
}