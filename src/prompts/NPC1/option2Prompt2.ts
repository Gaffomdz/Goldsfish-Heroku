import * as ui from '@dcl/ui-scene-utils'
import { ShowWelcomePrompt } from './welcomePrompt'



export let option2Prompt2 = new ui.CustomPrompt(ui.PromptStyles.DARKLARGE, 500, 380)
option2Prompt2.canvas = new UICanvas()
option2Prompt2.addText('Visit Our Favourite Places\nIn DCL', 0, 100, Color4.White(), 30)

option2Prompt2.closeIcon.onClick = new OnPointerDown(() => {
    option2Prompt2.hide()
    button1.visible = false
    button2.visible = false
    button3.visible = false
    button4.visible = false
})

let button1 = new UIImage(option2Prompt2.canvas, new Texture('images/block1/option2prompt2_1.png'))
button1.width = "376px"
button1.height = "60"
button1.sourceHeight = 70
button1.sourceWidth = 376
button1.positionX = "0"
button1.positionY = "30"
button1.isPointerBlocker = true
button1.onClick = new OnPointerDown(() => {
    option2Prompt2.hide()
    button1.visible = false
    button2.visible = false
    button3.visible = false
    button4.visible = false
    //teleport to museum
    teleportTo('11,52')

})
let button2 = new UIImage(option2Prompt2.canvas, new Texture('images/block1/option2prompt2_2.png'))
button2.width = "376px"
button2.height = "60"
button2.sourceHeight = 70
button2.sourceWidth = 376
button2.positionX = "0"
button2.positionY = "-30"
button2.isPointerBlocker = true
button2.onClick = new OnPointerDown(() => {
    option2Prompt2.hide()
    button1.visible = false
    button2.visible = false
    button3.visible = false
    button4.visible = false
    teleportTo('-78,52')
    //Rizk Amusement Park

})
let button3 = new UIImage(option2Prompt2.canvas, new Texture('images/block1/option2prompt2_3.png'))
button3.width = "376px"
button3.height = "60"
button3.sourceHeight = 70
button3.sourceWidth = 376
button3.positionX = "0"
button3.positionY = "-90"
button3.isPointerBlocker = true
button3.onClick = new OnPointerDown(() => {
    option2Prompt2.hide()
    button1.visible = false
    button2.visible = false
    button3.visible = false
    button4.visible = false
    teleportTo('52,83')
    //Sothebys Musuem
})
let button4 = new UIImage(option2Prompt2.canvas, new Texture('images/block1/backbutton.png'))
button4.width = 36
button4.height = 36
button4.sourceHeight = 36
button4.sourceWidth = 36
button4.positionX = "-218"
button4.positionY = "163"
button4.isPointerBlocker = true
button4.onClick = new OnPointerDown(() => {
    //trigger contact entry form
    option2Prompt2.hide()
    button1.visible = false
    button2.visible = false
    button3.visible = false
    button4.visible = false
    ShowWelcomePrompt()
})

option2Prompt2.hide()
button1.visible = false
button2.visible = false
button3.visible = false
button4.visible = false


export function ShowOption2Prompt2() {
    option2Prompt2.show()
    button1.visible = true
    button2.visible = true
    button3.visible = true
    button4.visible = true
}


