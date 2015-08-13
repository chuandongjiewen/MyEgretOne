/**
 *
 * @author 
 *
 */
class BgScene extends egret.Sprite{
    
    private bitmap1: egret.Bitmap;
    private bitmap2: egret.Bitmap;
    
    private bgHeight: number;
    
	public constructor() {
        super();
        
        this.initData();
	}
	
	
	private initData(): void{
        this.bitmap1  = new egret.Bitmap();
        this.bitmap1.texture = RES.getRes("start_background_png");
        this.addChild(this.bitmap1);
                
        this.bitmap2  = new egret.Bitmap();
        this.bitmap2.texture = RES.getRes("start_background_png");
        this.addChild(this.bitmap2);
        
        this.bgHeight = this.bitmap1.height;
        this.bitmap1.y = 0;
        this.bitmap2.y = -this.bgHeight;
	}
	
	
	
	public run(_moveNum): void{
	    if(this.bitmap1.y > this.bgHeight){
            this.bitmap1.y = this.bitmap2.y - this.bgHeight;
	    }
	    
	    if(this.bitmap2.y > this.bgHeight){
            this.bitmap2.y = this.bitmap1.y - this.bgHeight;
	    }
	    
        this.bitmap1.y += _moveNum;
        this.bitmap2.y += _moveNum;
	}
}
