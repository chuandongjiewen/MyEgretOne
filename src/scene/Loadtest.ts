/**
 *
 * @author 
 *
 */
class Loadtest extends egret.gui.SkinnableComponent{
    
    public btnLoadtest: egret.gui.Button;
    
	public constructor() {
        super();
        
        //  Assign the skin name used by this Component
        this.skinName = "skins.scene.LoadtestSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE , this.createCompleteEvent, this);
        
	}
	
    public createCompleteEvent(event:egret.gui.UIEvent):void{
        this.removeEventListener(egret.gui.UIEvent.CREATION_COMPLETE , this.createCompleteEvent, this);
        
        
    } 
	
	public childrenCreated(){
        this.btnLoadtest.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBtnLoadtestClick, this);
	}
	
	
	private onBtnLoadtestClick(event:egret.TouchEvent):void{
        console.log(event.stageX + "-" + event.stageY);
        console.log(event.target);
	}
	
	
	
}
