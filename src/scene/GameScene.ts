/**
 *
 * @author 
 *
 */
class GameScene extends egret.Sprite{
    
	public constructor() {
        super();
        
        this.initData();
	}
	
	
	private initData(): void{
        var star1: Star = new Star();
        star1.x = 200;
        star1.y = 500;
        this.addChild(star1);
	}
}
