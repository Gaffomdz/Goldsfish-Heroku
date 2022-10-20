import * as ui from '@dcl/ui-scene-utils'
import { movePlayerToVector3 } from 'src/utils/movePlayerToVector3'
import { ShowWelcomePrompt, welcomePrompt } from './welcomePrompt'



export let option1Prompt1 = new ui.CustomPrompt(ui.PromptStyles.DARKLARGE, 500, 380)
option1Prompt1.addText('', 0, 130, Color4.White(), 12)
option1Prompt1.canvas = new UICanvas()
option1Prompt1.closeIcon.onClick = new OnPointerDown(() => {
    option1Prompt1.hide()
    button1.visible = false
    button2.visible = false
    button3.visible = false
    inventoryContainer.visible = false
    myText.visible = false
})

const inventoryContainer = new UIContainerStack(option1Prompt1.canvas)
inventoryContainer.adaptWidth = true
inventoryContainer.width = 470
inventoryContainer.height = 250
inventoryContainer.positionY = 10
inventoryContainer.positionX = 0
inventoryContainer.color = Color4.White()
inventoryContainer.hAlign = "center"
inventoryContainer.vAlign = "center"
inventoryContainer.adaptHeight
inventoryContainer.adaptWidth
inventoryContainer.stackOrientation = UIStackOrientation.HORIZONTAL


const myText = new UIText(option1Prompt1.canvas)
myText.value =
    "Trilligent is a global advisory and strategic\ncommunications firm. We help fast-moving,\ndisruptive clients bring their ideas to market\nand to acceptance. We work to make sure good\nideas don’t fail needlessly.\n\nTo learn more about Trilligent’s services, team,\nand culture, walk through our information\npavilion and leave your contact details with me\nto request a personal follow-up."
myText.fontSize = 20
myText.font = new Font(Fonts.SansSerif)
myText.fontSize = 20
myText.color = Color4.Black()
myText.adaptHeight
myText.adaptWidth
myText.positionX = -170
myText.positionY = -80

let button1 = new UIImage(option1Prompt1.canvas, new Texture('images/block1/option1Prompt1_button1.png'))
button1.width = "376px"
button1.height = "60"
button1.sourceHeight = 70
button1.sourceWidth = 376
button1.positionX = "-130"
button1.positionY = "-150"
button1.isPointerBlocker = true
button1.onClick = new OnPointerDown(() => {
    movePlayerToVector3(new Vector3(12.09, 0.98, 13.12), new Vector3(9.900, 0.100, 13.300))
    //telepor user to screen 1 about us video
    option1Prompt1.hide()
    button1.visible = false
    button2.visible = false
    button3.visible = false
    inventoryContainer.visible = false
    myText.visible = false
})
let button2 = new UIImage(option1Prompt1.canvas, new Texture('images/block1/option1Prompt1_button2.png'))
button2.width = "376px"
button2.height = "60"
button2.sourceHeight = 70
button2.sourceWidth = 376
button2.positionX = "120"
button2.positionY = "-150"
button2.isPointerBlocker = true
button2.onClick = new OnPointerDown(() => {
    //trigger contact entry form
    openExternalURL("https://www.surveymonkey.com/r/5CSDK25")
    option1Prompt1.hide()
    button1.visible = false
    button2.visible = false
    button3.visible = false
    inventoryContainer.visible = false
    myText.visible = false
})
let button3 = new UIImage(option1Prompt1.canvas, new Texture('images/block1/backbutton.png'))
button3.width = 36
button3.height = 36
button3.sourceHeight = 36
button3.sourceWidth = 36
button3.positionX = "-218"
button3.positionY = "163"
button3.isPointerBlocker = true
button3.onClick = new OnPointerDown(() => {
    //goback
    option1Prompt1.hide()
    button1.visible = false
    button2.visible = false
    button3.visible = false
    inventoryContainer.visible = false
    myText.visible = false
    ShowWelcomePrompt()
})

option1Prompt1.hide()
button1.visible = false
button2.visible = false
button3.visible = false
inventoryContainer.visible = false
myText.visible = false


export function ShowOption1Prompt1() {
    option1Prompt1.show()
    button1.visible = true
    button2.visible = true
    button3.visible = true
    inventoryContainer.visible = true
    myText.visible = true
}