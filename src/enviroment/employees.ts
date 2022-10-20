import { Scene } from "src/congif/core/scene"
import { SceneLocations } from "src/congif/enums"
import { ScreenEmp } from "src/utils/videoScreen"
import { Dash_Material, Dash_Wait } from "dcldash"
import { ExitPlane } from "src/utils/exitPlane"
import { TriggerBox } from "src/utils/triggerBox"
import { TickerGraphic } from "../utils/tickerGraphic"
import { myNPC2 } from "src/npc/npcEmployees"
import { SceneController } from "src/congif/core/sceneController"
import { movePlayerToVector3 } from "src/utils/movePlayerToVector3"
import { GuestBook } from "src/utils/guestBook"
import { inputPrompt, name1Input } from "src/prompts/Trivia/nameInput"

class EmployeesInstance extends Scene {

    //geo
    private mainGeoDark = new Entity()
    private guestBook = new GuestBook({
        position: new Vector3(17.600, 0.000, 11.200),
        rotation: Quaternion.Euler(360.000, 135.000, 360.000)
    }, 'test')
    private instagramEmployees = new Entity()
    private logo = new Entity()
    private linkedin = new Entity()
    private tickerGraphic = new TickerGraphic()
    private tickerGraphic2 = new TickerGraphic()
    private keypad = new Entity()
    //screens
    private s1 = new ScreenEmp()
    private s2 = new ScreenEmp()
    private s3 = new ScreenEmp()
    private s4 = new ScreenEmp()
    private s1current = 1
    private s2current = 1
    private s3current = 1
    private s4current = 1
    //utils
    private tentCard1 = new ExitPlane()
    private tentCard2 = new ExitPlane()
    private tentCard3 = new ExitPlane()
    private triggerBoxScreen1 = new TriggerBox()
    private triggerBoxScreen2 = new TriggerBox()
    private triggerBoxScreen3 = new TriggerBox()
    private triggerBoxScreen4 = new TriggerBox()
    private keyPadTrigger = new ExitPlane()
    // private zone1 = new Dash_Zone('zone1', new Transform({
    //     position: new Vector3(16, 0, 16),
    //     scale: new Vector3(29, 4, 29)
    // }))



    constructor() {
        super(SceneLocations.Employees)
        this.addComponent(new GLTFShape('models/trilligent_main_col_1.glb'))
        this.mainGeoDark.addComponent(new GLTFShape('models/trilligent_Main_geo_dark.glb'))
        this.instagramEmployees.addComponent(new GLTFShape('models/trilligent_instagram_1.glb'))
        this.logo.addComponent(new GLTFShape('models/trilligent_Logo_1.glb'))
        this.linkedin.addComponent(new GLTFShape('models/trilligent_linkedin_1.glb'))
        this.keypad.addComponent(new GLTFShape('models/Trilligent_keypad.glb'))

        this.mainGeoDark.setParent(this)
        this.guestBook.setParent(this)
        this.instagramEmployees.setParent(this)
        this.logo.setParent(this)
        this.linkedin.setParent(this)
        this.keypad.setParent(this)
        // this.zone1.setParent(this)

        this.createNPC()
        this.createTentCards()
        this.createTriggerBoxesForScreens()
        this.createS1()
        this.createS2()
        this.createS3()
        this.createS4()
        this.createTickerGraphic()
        this.createKeyPadTrigger()
    }
    // modify2() {
    //     this.zone1.enable()
    // }
    createKeyPadTrigger() {
        this.keyPadTrigger.setParent(this)
        this.keyPadTrigger.addComponent(Dash_Material.transparent())
        this.keyPadTrigger.setMessage('Exit')
        this.keyPadTrigger.addComponentOrReplace(new Transform({
            position: new Vector3(20.600, 0.800, 22.600),
            scale: new Vector3(0.800, 1.500, 0.700),
            rotation: new Quaternion().setEuler(0.000, 90.000, 0.000),
        }))
        this.keyPadTrigger.onClick = () => this.keyPadPrompt(
            new Vector3(32.06, 0.88, 52.29),
            new Vector3(32.06, 0.88, 51.29),
        )
    }
    keyPadPrompt(position: Vector3, direction: Vector3) {
        SceneController.loadScene(SceneLocations.Exterior)
        movePlayerToVector3(position, direction)
        // this.zone1.disable()
    }
    preload() {
        engine.addEntity(this)
        log('Employees zone Preloaded!')
        this.addComponent(new Transform({ scale: new Vector3(0.0001, 0.0001, 0.0001) }))
        Dash_Wait(() => {
            engine.removeEntity(this)
            log('Employees zone Removed')
            this.removeComponent(Transform)
            this.addComponent(new Transform({
                position: new Vector3(0, 0, 0),
                scale: new Vector3(1, 1, 1)
            }))
        }, 5)
    }
    createNPC() {
        engine.addEntity(myNPC2)
        myNPC2.setParent(this)
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
            inputPrompt.show()
            name1Input.visible = true
        }, {
            hoverText: 'Trivia'
        }))


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
            inputPrompt.show()
            name1Input.visible = true

        }, {
            hoverText: 'Interact'
        }))

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
            inputPrompt.show()
            name1Input.visible = true
        }, {
            hoverText: 'Interact'
        }))


    }

    createS4() {
        this.s4.setParent(this)
        this.s4.addComponentOrReplace(new PlaneShape())
        this.s4.addComponentOrReplace(new Transform({
            position: new Vector3(22.080, 2.500, 12.320),
            scale: new Vector3(3.950, 1.603, 8.213),
            rotation: new Quaternion().setEuler(0.000, 90.000, 180.000),
        }))
        this.s4.addComponentOrReplace(new OnPointerDown(() => {
            inputPrompt.show()
            name1Input.visible = true

        }, {
            hoverText: 'Interact'
        }))


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
        engine.addEntity(this.s1)
    }
    deleteTriggerBox1() {
        engine.removeEntity(this.s1)
    }
    showTriggerBox2() {
        engine.addEntity(this.s2)
    }
    deleteTriggerBox2() {
        engine.removeEntity(this.s2)
    }
    showTriggerBox3() {
        engine.addEntity(this.s3)
    }
    deleteTriggerBox3() {
        engine.removeEntity(this.s3)
    }
    showTriggerBox4() {
        engine.addEntity(this.s4)
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
    // createEmployeesZone() {
    //     this.modArea.addComponent(
    //         new AvatarModifierArea({
    //             area: { box: new Vector3(32, 4, 32) },
    //             modifiers: [AvatarModifiers.HIDE_AVATARS],
    //         })
    //     )
    //     this.modArea.addComponent(
    //         new Transform({
    //             position: new Vector3(16, 0, 16),
    //             scale: new Vector3(16, 4, 16)
    //         })
    //     )
    //     engine.addEntity(this.modArea)
    //     this.modArea.setParent(this)

    // }

}

export const Employees = new EmployeesInstance()