import { Scene } from "src/congif/core/scene"
import { SceneLocations } from "src/congif/enums"
import { Cinema, Screen1, Screen2, Screen3, Screen4 } from "src/utils/videoScreen"
import { myNPC } from "../npc/npc"
import { Dash_Material, Dash_Tweaker } from "dcldash"
import { ExitPlane } from "src/utils/exitPlane"
import { TriggerBox } from "src/utils/triggerBox"
import { TickerGraphic } from "../utils/tickerGraphic"
import { keyPadPrompt, passwortd1Input, passwortd2Input, passwortd3Input } from "src/prompts/EmployeeZone/keyPadPrompt"
import { GuestBook } from "src/utils/guestBook"
import { correctCode, showKeyPadCinema } from "src/prompts/cinemaKeyPadPrompt"
import { sceneMessageBus } from "src/utils/messageBus"


let x = 0
class ExteriorInstance extends Scene {
    //geo
    private exteriorEntity = new Entity()
    private instagram = new Entity()
    private logo = new Entity()
    private linkedin = new Entity()
    private tickerGraphic = new TickerGraphic()
    private tickerGraphic2 = new TickerGraphic()
    private keypad = new Entity()
    private guestBook = new GuestBook({
        position: new Vector3(17.600, 0.000, 11.200),
        rotation: Quaternion.Euler(360.000, 135.000, 360.000)
    }, 'test')
    //screens
    private s1 = new Screen1()
    private s2 = new Screen2()
    private s3 = new Screen3()
    private s4 = new Screen4()
    private s1current = 1
    private s2current = 1
    private s3current = 1
    private s4current = 1
    public cine = new Cinema()
    //utils
    private tentCard1 = new ExitPlane()
    private tentCard2 = new ExitPlane()
    private tentCard3 = new ExitPlane()
    private triggerBoxScreen1 = new TriggerBox()
    private triggerBoxScreen2 = new TriggerBox()
    private triggerBoxScreen3 = new TriggerBox()
    private triggerBoxScreen4 = new TriggerBox()
    private keyPadTrigger = new ExitPlane()


    constructor() {
        super(SceneLocations.Exterior)
        this.addComponent(new GLTFShape('models/trilligent_main_col_1.glb'))
        this.exteriorEntity.addComponent(new GLTFShape('models/trilligent_main_geo_1.glb'))
        this.instagram.addComponent(new GLTFShape('models/trilligent_instagram_1.glb'))
        this.logo.addComponent(new GLTFShape('models/trilligent_Logo_1.glb'))
        this.linkedin.addComponent(new GLTFShape('models/trilligent_linkedin_1.glb'))
        this.keypad.addComponent(new GLTFShape('models/Trilligent_keypad.glb'))

        this.exteriorEntity.setParent(this)
        this.instagram.setParent(this)
        this.logo.setParent(this)
        this.linkedin.setParent(this)
        this.keypad.setParent(this)
        this.guestBook.setParent(this)

        this.createNPC()
        this.createTentCards()
        this.createTriggerBoxesForScreens()
        this.createTickerGraphic()
        this.createKeyPadTrigger()
        this.createCinema()

    }
    createKeyPadTrigger() {
        this.keyPadTrigger.setParent(this)
        this.keyPadTrigger.addComponent(Dash_Material.transparent())
        this.keyPadTrigger.addComponentOrReplace(new Transform({
            position: new Vector3(20.600, 0.800, 22.600),
            scale: new Vector3(0.800, 1.500, 0.700),
            rotation: new Quaternion().setEuler(0.000, 90.000, 0.000),
        }))
        this.keyPadTrigger.onClick = () => this.keyPadPrompt(
        )
    }
    keyPadPrompt() {
        keyPadPrompt.show()
        passwortd1Input.visible = true
        passwortd2Input.visible = true
        passwortd3Input.visible = true
    }
    createNPC() {
        engine.addEntity(myNPC)
        myNPC.setParent(this)
    }
    createCinema() {
        this.cine.setParent(this)
        this.cine.addComponentOrReplace(new PlaneShape())
        this.cine.addComponentOrReplace(new Transform({
            position: new Vector3(15.880, 3.720, 0.270),
            scale: new Vector3(16.950, 7.603, 13.213),
            rotation: new Quaternion().setEuler(360.000, 360.000, 360.000),
        }))
        this.cine.addComponentOrReplace(new OnPointerDown(() => {
            if (x == 0) {
                x = x + 1
                showKeyPadCinema()
                return
            }
            if (correctCode == true) {
                sceneMessageBus.emit('play', {})
                sceneMessageBus.on('play', () => {
                    this.cine.myVideoTexture.play()
                })
            }


        }, {
            hoverText: 'PlayVideo'
        }))

    }
    createS1() {
        this.s1.setParent(this)
        this.s1.addComponentOrReplace(new PlaneShape())
        this.s1.addComponentOrReplace(new Transform({
            position: new Vector3(9.380, 2.720, 13.270),
            scale: new Vector3(3.950, 1.603, 8.213),
            rotation: new Quaternion().setEuler(360.000, 270.000, 180.000),
        }))
        this.s1.addComponentOrReplace(new OnPointerDown(() => {
            if (this.s1current == 1) {
                this.s1.addComponentOrReplace(new Transform({
                    position: new Vector3(9.380, 2.720, 13.270),
                    scale: new Vector3(3.950, 1.603, 8.213),
                    rotation: new Quaternion().setEuler(360.000, 90.000, 0.000),
                })),
                    this.s1.myMaterial.albedoTexture = this.s1.myVideoTexture
                this.s1.myVideoTexture.play()
                this.s1current = 2
                return
            }

            if (this.s1current == 2) {
                this.s1.addComponentOrReplace(new Transform({
                    position: new Vector3(9.380, 2.720, 13.270),
                    scale: new Vector3(3.950, 1.603, 8.213),
                    rotation: new Quaternion().setEuler(360.000, 270.000, 180.000),
                })),
                    this.s1.myVideoTexture.reset()
                this.s1.myMaterial.albedoTexture = this.s1.s1
                this.s1current = 1
                return
            }

        }, {
            hoverText: 'Interact'
        }))
        engine.addEntity(this.s1)


    }
    createS2() {
        this.s2.setParent(this)
        this.s2.addComponentOrReplace(new PlaneShape())
        this.s2.addComponentOrReplace(new Transform({
            position: new Vector3(9.380, 2.720, 17.910),
            scale: new Vector3(3.950, 1.603, 8.213),
            rotation: new Quaternion().setEuler(360.000, 270.000, 180.000),
        }))
        this.s2.addComponentOrReplace(new OnPointerDown(() => {
            if (this.s2current == 1) {
                this.s2.myMaterial.albedoTexture = this.s2.s2b
                this.s2current = 2
                return
            }
            if (this.s2current == 2) {
                this.s2.myMaterial.albedoTexture = this.s2.s2c
                this.s2current = 3
                return
            }
            if (this.s2current == 3) {
                this.s2.myMaterial.albedoTexture = this.s2.s2a
                this.s2current = 1
                return
            }

        }, {
            hoverText: 'Interact'
        }))
        engine.addEntity(this.s2)


    }
    createS3() {
        this.s3.setParent(this)
        this.s3.addComponentOrReplace(new PlaneShape())
        this.s3.addComponentOrReplace(new Transform({
            position: new Vector3(22.080, 2.500, 19.200),
            scale: new Vector3(3.950, 1.603, 8.213),
            rotation: new Quaternion().setEuler(0.000, 90.000, 180.000),
        }))
        this.s3.addComponentOrReplace(new OnPointerDown(() => {
            if (this.s3current == 1) {
                this.s3.myMaterial.albedoTexture = this.s3.s3b
                this.s3current = 2
                return
            }
            if (this.s3current == 2) {
                this.s3.myMaterial.albedoTexture = this.s3.s3c
                this.s3current = 3
                return
            }
            if (this.s3current == 3) {
                this.s3.myMaterial.albedoTexture = this.s3.s3d
                this.s3current = 4
                return
            }
            if (this.s3current == 4) {
                this.s3.myMaterial.albedoTexture = this.s3.s3e
                this.s3current = 5
                return
            }
            if (this.s3current == 5) {
                this.s3.myMaterial.albedoTexture = this.s3.s3a
                this.s3current = 1
                return
            }

        }, {
            hoverText: 'Interact'
        }))
        engine.addEntity(this.s3)



    }
    createS4() {
        this.s4.setParent(this)
        this.s4.addComponentOrReplace(new PlaneShape())
        this.s4.addComponentOrReplace(new Transform({
            position: new Vector3(22.080, 2.500, 12.320),
            scale: new Vector3(3.950, 1.603, 8.213),
            rotation: new Quaternion().setEuler(0.000, 90.000, 180.000),
        })
        )
        this.s4.addComponentOrReplace(new OnPointerDown(() => {
            if (this.s4current == 1) {
                this.s4.myMaterial.albedoTexture = this.s4.s4b
                this.s4current = 2
                return
            }
            if (this.s4current == 2) {
                this.s4.myMaterial.albedoTexture = this.s4.s4c
                this.s4current = 3
                return
            }
            if (this.s4current == 3) {
                this.s4.myMaterial.albedoTexture = this.s4.s4d
                this.s4current = 4
                return
            }
            if (this.s4current == 4) {
                this.s4.addComponentOrReplace(new Transform({
                    position: new Vector3(22.080, 2.500, 12.320),
                    scale: new Vector3(3.950, 1.603, 8.213),
                    rotation: new Quaternion().setEuler(360.000, 270.000, 360.000),
                })),
                    this.s4.myMaterial.albedoTexture = this.s4.myVideoTexture
                this.s4.myVideoTexture.play()
                this.s4current = 5
                return
            }
            if (this.s4current == 5) {
                this.s4.addComponentOrReplace(new Transform({
                    position: new Vector3(22.080, 2.500, 12.320),
                    scale: new Vector3(3.950, 1.603, 8.213),
                    rotation: new Quaternion().setEuler(0.000, 90.000, 180.000),
                })),
                    this.s4.myVideoTexture.reset()
                this.s4.myMaterial.albedoTexture = this.s4.s4a
                this.s4current = 1
                return
            }

        }, {
            hoverText: 'Interact'
        }))
        engine.addEntity(this.s4)


    }
    createTentCards() {
        [this.tentCard1, this.tentCard2, this.tentCard3].forEach(cards => {
            cards.addComponent(Dash_Material.transparent())
            cards.setParent(this)
        })
        this.tentCard1.addComponentOrReplace(new Transform({
            position: new Vector3(15.980, 1.280, 12.790),
            scale: new Vector3(0.200, -0.600, 0.400),
            rotation: new Quaternion().setEuler(1.000, 140.000, 2.000),
        }))
        this.tentCard1.onClick = () => this.goToLink1()
        this.tentCard2.addComponentOrReplace(new Transform({
            position: new Vector3(15.980, 1.280, 15.690),
            scale: new Vector3(0.200, -0.600, 0.400),
            rotation: new Quaternion().setEuler(1.000, 140.000, 2.000),
        }))
        this.tentCard2.onClick = () => this.goToLink2()
        this.tentCard3.addComponentOrReplace(new Transform({
            position: new Vector3(15.980, 1.280, 18.590),
            scale: new Vector3(0.200, -0.600, 0.400),
            rotation: new Quaternion().setEuler(1.000, 140.000, 2.000),
        }))
        this.tentCard3.onClick = () => this.goToLink2()

    }
    goToLink1() {
        openExternalURL("https://www.linkedin.com/company/iamtrilligent/")
    }
    goToLink2() {
        openExternalURL("https://trilligent.com/")
    }
    goToLink3() {
        openExternalURL("https://www.instagram.com/iamtrilligent/")
    }
    createTriggerBoxesForScreens() {
        [this.triggerBoxScreen1, this.triggerBoxScreen2, this.triggerBoxScreen3, this.triggerBoxScreen4].forEach(tbScreens => {
            tbScreens.addComponent(Dash_Material.transparent())
            tbScreens.setParent(this)
        })
        this.triggerBoxScreen1.addComponentOrReplace(new Transform({
            position: new Vector3(9.900, 0.100, 13.300),
            scale: new Vector3(1.200, 1.000, 3.300),
            rotation: new Quaternion().setEuler(0.000, 0.000, 0.000),
        }))
        this.triggerBoxScreen2.addComponentOrReplace(new Transform({
            position: new Vector3(9.900, 0.100, 18.000),
            scale: new Vector3(1.200, 1.000, 3.300),
            rotation: new Quaternion().setEuler(0.000, 0.000, 0.000),
        }))
        this.triggerBoxScreen3.addComponentOrReplace(new Transform({
            position: new Vector3(21.900, 0.100, 12.300),
            scale: new Vector3(1.200, 1.000, 3.300),
            rotation: new Quaternion().setEuler(0.000, 0.000, 0.000),
        }))
        this.triggerBoxScreen4.addComponentOrReplace(new Transform({
            position: new Vector3(22.200, 0.100, 19.100),
            scale: new Vector3(1.200, 1.000, 4.400),
            rotation: new Quaternion().setEuler(0.000, 0.000, 0.000),
        }))

        this.triggerBoxScreen1.onCameraEnter = () => this.showTriggerBox1()
        this.triggerBoxScreen1.onCameraExit = () => this.deleteTriggerBox1()

        this.triggerBoxScreen2.onCameraEnter = () => this.showTriggerBox2()
        this.triggerBoxScreen2.onCameraExit = () => this.deleteTriggerBox2()

        this.triggerBoxScreen3.onCameraEnter = () => this.showTriggerBox3()
        this.triggerBoxScreen3.onCameraExit = () => this.deleteTriggerBox3()

        this.triggerBoxScreen4.onCameraEnter = () => this.showTriggerBox4()
        this.triggerBoxScreen4.onCameraExit = () => this.deleteTriggerBox4()

    }
    showTriggerBox1() {
        this.createS1()
    }
    deleteTriggerBox1() {
        engine.removeEntity(this.s1)
    }
    showTriggerBox2() {
        this.createS2()
    }
    deleteTriggerBox2() {
        engine.removeEntity(this.s2)
    }
    showTriggerBox3() {
        this.createS3()
    }
    deleteTriggerBox3() {
        engine.removeEntity(this.s3)
    }
    showTriggerBox4() {
        this.createS4()
    }
    deleteTriggerBox4() {
        engine.removeEntity(this.s4)
    }
    createTickerGraphic() {
        this.tickerGraphic.addComponentOrReplace(new PlaneShape())
        this.tickerGraphic.addComponentOrReplace(new Transform({
            position: new Vector3(23.206, 4.844, 15.200),
            scale: new Vector3(8.040, -0.158, 2.713),
            rotation: new Quaternion().setEuler(1.000, 89.900, 180.000),
        }))
        this.tickerGraphic.setParent(this)
        this.tickerGraphic2.addComponentOrReplace(new PlaneShape())
        this.tickerGraphic2.addComponentOrReplace(new Transform({
            position: new Vector3(9.242, 4.844, 15.200),
            scale: new Vector3(8.040, -0.158, 2.713),
            rotation: new Quaternion().setEuler(1.000, 269.900, 180.000),
        }))
        this.tickerGraphic2.setParent(this)
        this.tickerGraphic.myMaterial.albedoTexture = this.tickerGraphic.myVideoTexture
        this.tickerGraphic.myVideoTexture.play()
        this.tickerGraphic.myVideoTexture.loop = true
        this.tickerGraphic2.myMaterial.albedoTexture = this.tickerGraphic2.myVideoTexture
        this.tickerGraphic2.myVideoTexture.play()
        this.tickerGraphic2.myVideoTexture.loop = true
    }

}
export const Exterior = new ExteriorInstance()
