export class TickerGraphic extends Entity {

    public myVideoClip = new VideoClip('https://player.vimeo.com/external/761177706.m3u8?s=c895218706c15bf5a55726e8665dfd588086bd66') 
    public myVideoTexture = new VideoTexture(this.myVideoClip)
    public source = new Texture('images/Trilligent-Ticker.jpg')
    public myMaterial = new Material()


    constructor() {
        super()
        this.myMaterial.albedoTexture = this.source
        this.addComponent(new PlaneShape())
        this.addComponent(new Transform())
        this.addComponent(this.myMaterial)
    }

}