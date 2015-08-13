/**
 *
 * @author 
 *
 */
class Star extends egret.Bitmap{
    
    public location: any;
    
	public constructor() {
        super();
        
        this.anchorX = 0.5;
        this.anchorY = 0.5;
        this.location = {"x": 0, "y": 0 };
        this.initData();
	}
	
	private initData(): void{
        this.texture = RES.getRes("music_down");
	}
}
