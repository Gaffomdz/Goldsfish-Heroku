import * as ui from '@dcl/ui-scene-utils'
import { ShowOption1Prompt1 } from './option1Prompt1'
import { ShowOption1Prompt2 } from './option1Prompt2'
import { ShowOption1Prompt3 } from './option1Prompt3'
import { ShowOption1Prompt4 } from './option1Prompt4'

export let welcomePrompt = new ui.CustomPrompt(ui.PromptStyles.DARKLARGE, 500, 380)
welcomePrompt.canvas = new UICanvas()
welcomePrompt.addText('Welcome to Trilligent!', 0, 150, Color4.White(), 30)
welcomePrompt.addText('How can I help you?', 0, 110, Color4.White(), 30)

welcomePrompt.closeIcon.onClick = new OnPointerDown(() => {
    welcomePrompt.hide()
    button1.visible = false
    button2.visible = false
    button3.visible = false
    button4.visible = false
})

let button1 = new UIImage(welcomePrompt.canvas, new Texture('images/welcomePrompt/1.png'))
button1.width = "376px"
button1.height = "60"
button1.sourceHeight = 70
button1.sourceWidth = 376
button1.positionX = "0"
button1.positionY = "50"
button1.isPointerBlocker = true
button1.onClick = new OnPointerDown(() => {
    ShowOption1Prompt1()
    welcomePrompt.hide()
    button1.visible = false
    button2.visible = false
    button3.visible = false
    button4.visible = false
})
let button2 = new UIImage(welcomePrompt.canvas, new Texture('images/welcomePrompt/3.png'))
button2.width = "376px"
button2.height = "60"
button2.sourceHeight = 70
button2.sourceWidth = 376
button2.positionX = "0"
button2.positionY = "-10"
button2.isPointerBlocker = true
button2.onClick = new OnPointerDown(() => {
    ShowOption1Prompt2()
    welcomePrompt.hide()
    button1.visible = false
    button2.visible = false
    button3.visible = false
    button4.visible = false
})
let button3 = new UIImage(welcomePrompt.canvas, new Texture('images/welcomePrompt/2.png'))
button3.width = "376px"
button3.height = "60"
button3.sourceHeight = 70
button3.sourceWidth = 376
button3.positionX = "0"
button3.positionY = "-70"
button3.isPointerBlocker = true
button3.onClick = new OnPointerDown(() => {
    ShowOption1Prompt3()
    welcomePrompt.hide()
    button1.visible = false
    button2.visible = false
    button3.visible = false
    button4.visible = false
})
let button4 = new UIImage(welcomePrompt.canvas, new Texture('images/welcomePrompt/4.png'))
button4.width = "376px"
button4.height = "60"
button4.sourceHeight = 70
button4.sourceWidth = 376
button4.positionX = "0"
button4.positionY = "-130"
button4.isPointerBlocker = true
button4.onClick = new OnPointerDown(() => {
    ShowOption1Prompt4()
    welcomePrompt.hide()
    button1.visible = false
    button2.visible = false
    button3.visible = false
    button4.visible = false
})
welcomePrompt.hide()
button1.visible = false
button2.visible = false
button3.visible = false
button4.visible = false

export function ShowWelcomePrompt() {
    welcomePrompt.show()
    button1.visible = true
    button2.visible = true
    button3.visible = true
    button4.visible = true
}



