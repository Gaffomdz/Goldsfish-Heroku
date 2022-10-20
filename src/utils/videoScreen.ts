export class Screen1 extends Entity {

    public myVideoClip = new VideoClip('https://player.vimeo.com/external/758745843.m3u8?s=2e31be9a87462e92d5755365a85c5be8f2c379fd')
    public myVideoTexture = new VideoTexture(this.myVideoClip)
    public s1 = new Texture('images/s1.png')
    public myMaterial = new Material()


    constructor() {
        super()

        this.myMaterial.albedoTexture = this.s1
        this.addComponent(new PlaneShape())
        this.addComponent(new Transform())
        this.addComponent(this.myMaterial)
    }

}
export class Screen2 extends Entity {

    public s2a = new Texture('images/s2a.png')
    public s2b = new Texture('images/s2b.jpg')
    public s2c = new Texture('images/s2c.jpg')
    public myMaterial = new Material()


    constructor() {
        super()

        this.myMaterial.albedoTexture = this.s2a
        this.addComponent(new PlaneShape())
        this.addComponent(new Transform())
        this.addComponent(this.myMaterial)



    }

}
export class Screen3 extends Entity {

    public s3a = new Texture('images/s3a.png')
    public s3b = new Texture('images/s3b.jpg')
    public s3c = new Texture('images/s3c.jpg')
    public s3d = new Texture('images/s3d.jpg')
    public s3e = new Texture('images/s3e.jpg')
    public myMaterial = new Material()


    constructor() {
        super()

        this.myMaterial.albedoTexture = this.s3a
        this.addComponent(new PlaneShape())
        this.addComponent(new Transform())
        this.addComponent(this.myMaterial)



    }

}
export class Screen4 extends Entity {

    public s4a = new Texture('images/s4a.png')
    public s4b = new Texture('images/s4b.jpg')
    public s4c = new Texture('images/s4c.jpg')
    public s4d = new Texture('images/s4d.jpg')
    public myVideoClip = new VideoClip('https://player.vimeo.com/external/758721453.m3u8?s=3eee1b4838d00f66b90e22dad00c764c5624a801')
    public myVideoTexture = new VideoTexture(this.myVideoClip)
    public myMaterial = new Material()


    constructor() {
        super()

        this.myMaterial.albedoTexture = this.s4a
        this.addComponent(new PlaneShape())
        this.addComponent(new Transform())
        this.addComponent(this.myMaterial)



    }

}
export class ScreenEmp extends Entity {

    public semp = new Texture('images/employeesCover.jpeg')
    public myMaterial = new Material()


    constructor() {
        super()
        this.myMaterial.albedoTexture = this.semp
        this.addComponent(new PlaneShape())
        this.addComponent(new Transform())
        this.addComponent(this.myMaterial)
    }
}
export class Cinema extends Entity {
   
    public myVideoClip = new VideoClip('https://player.vimeo.com/external/758745843.m3u8?s=2e31be9a87462e92d5755365a85c5be8f2c379fd')
    public myVideoTexture = new VideoTexture(this.myVideoClip)
    public myMaterial = new Material()


    constructor() {
        super()
        this.myMaterial.albedoTexture = this.myVideoTexture
        this.addComponent(new PlaneShape())
        this.addComponent(new Transform())
        this.addComponent(this.myMaterial)

    }
}

