import * as ui from '@dcl/ui-scene-utils'
import { SceneController } from 'src/congif/core/sceneController'
import { SceneLocations } from 'src/congif/enums'
import { movePlayerToVector3 } from 'src/utils/movePlayerToVector3'



export let welcomePrompt2 = new ui.CustomPrompt(ui.PromptStyles.DARKLARGE, 500, 380)
welcomePrompt2.canvas = new UICanvas()
welcomePrompt2.addText('Welcome to the Trilligent employee space!', 0, 140, Color4.White(), 20)
welcomePrompt2.addText('What would you like to do here?', 0, 110, Color4.White(), 20)

welcomePrompt2.closeIcon.onClick = new OnPointerDown(() => {
    welcomePrompt2.hide()
    button1.visible = false
    button2.visible = false
    button3.visible = false
})

let button1 = new UIImage(welcomePrompt2.canvas, new Texture('images/block2/NPC2_1.png'))
button1.width = "376px"
button1.height = "60"
button1.sourceHeight = 70
button1.sourceWidth = 376
button1.positionX = "0"
button1.positionY = "40"
button1.isPointerBlocker = true
button1.onClick = new OnPointerDown(() => {
    //sign the guestbook
    welcomePrompt2.hide()
    button1.visible = false
    button2.visible = false
    button3.visible = false
    movePlayerToVector3(new Vector3(15.77, 0.98, 10.55), new Vector3(15.90, 0.98, 15.02))
})
let button2 = new UIImage(welcomePrompt2.canvas, new Texture('images/block2/NPC2_2.png'))
button2.width = "376px"
button2.height = "60"
button2.sourceHeight = 70
button2.sourceWidth = 376
button2.positionX = "0"
button2.positionY = "-20"
button2.isPointerBlocker = true
button2.onClick = new OnPointerDown(() => {
    //play the trivia
    welcomePrompt2.hide()
    button1.visible = false
    button2.visible = false
    button3.visible = false
    movePlayerToVector3(new Vector3(12.09, 0.98, 13.12), new Vector3(9.900, 0.100, 13.300))
})
let button3 = new UIImage(welcomePrompt2.canvas, new Texture('images/block2/NPC2_3.png'))
button3.width = "376px"
button3.height = "60"
button3.sourceHeight = 70
button3.sourceWidth = 376
button3.positionX = "0"
button3.positionY = "-80"
button3.isPointerBlocker = true
button3.onClick = new OnPointerDown(() => {
    //Return to the trilligen pavillion
    // new Vector3(32.06, 0.88, 52.29),
    // new Vector3(32.06, 0.88, 51.29),
    welcomePrompt2.hide()
    button1.visible = false
    button2.visible = false
    button3.visible = false
    SceneController.loadScene(SceneLocations.Exterior)
    movePlayerToVector3(
        new Vector3(32.06, 0.88, 52.29),
        new Vector3(32.06, 0.88, 51.29),
    )
})
welcomePrompt2.hide()
button1.visible = false
button2.visible = false
button3.visible = false

export function ShowWelcomePromptNPC2() {
    welcomePrompt2.show()
    button1.visible = true
    button2.visible = true
    button3.visible = true
}


