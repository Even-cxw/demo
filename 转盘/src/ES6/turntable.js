
class Turntable extends CanvasAdaptation {
    constructor() {
        super()
        this.initCanvas({designWidth:100,designHeight:200,el:document.getElementById('test')})
    }
}

new Turntable()
