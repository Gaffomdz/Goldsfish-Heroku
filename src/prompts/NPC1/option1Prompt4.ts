import * as ui from '@dcl/ui-scene-utils'
import { ShowWelcomePrompt } from './welcomePrompt'




export let option1Prompt4 = new ui.CustomPrompt(ui.PromptStyles.DARKLARGE, 500, 380)
option1Prompt4.addText('', 0, 130, Color4.White(), 12)
option1Prompt4.canvas = new UICanvas()
option1Prompt4.closeIcon.onClick = new OnPointerDown(() => {
    option1Prompt4.hide()
    inventoryContainer2.visible = false
    myText2.visible = false
    button3.visible = false
    button4.visible = false
    button5.visible = false
    button6.visible = false
})

const inventoryContainer2 = new UIContainerStack(option1Prompt4.canvas)
inventoryContainer2.adaptWidth = true
inventoryContainer2.width = 470
inventoryContainer2.height = 100
inventoryContainer2.positionY = 0
inventoryContainer2.positionX = 0
inventoryContainer2.color = Color4.White()
inventoryContainer2.hAlign = "center"
inventoryContainer2.vAlign = "center"
inventoryContainer2.adaptHeight
inventoryContainer2.adaptWidth
inventoryContainer2.stackOrientation = UIStackOrientation.HORIZONTAL

const myText2 = new UIText(option1Prompt4.canvas)
myText2.value =
    "Follow Trilligent on social media and visit our\nwebsite at trilligent.com."
myText2.fontSize = 20
myText2.font = new Font(Fonts.SansSerif)
myText2.fontSize = 20
myText2.color = Color4.Black()
myText2.adaptHeight
myText2.adaptWidth
myText2.positionX = -170
myText2.positionY = 0

let button3 = new UIImage(option1Prompt4.canvas, new Texture('images/block1/instagram_Button.png'))
button3.width = "376px"
button3.height = "60"
button3.sourceHeight = 70
button3.sourceWidth = 376
button3.positionX = "0"
button3.positionY = "-120"
button3.isPointerBlocker = true
button3.onClick = new OnPointerDown(() => {
    //link to instagram
    option1Prompt4.hide()
    inventoryContainer2.visible = false
    myText2.visible = false
    button3.visible = false
    button4.visible = false
    button5.visible = false
    button6.visible = false
    openExternalURL("https://www.instagram.com/iamtrilligent/")
})
let button4 = new UIImage(option1Prompt4.canvas, new Texture('images/block1/linkedin_Button.png'))
button4.width = "376px"
button4.height = "60"
button4.sourceHeight = 70
button4.sourceWidth = 376
button4.positionX = "150"
button4.positionY = "-120"
button4.isPointerBlocker = true
button4.onClick = new OnPointerDown(() => {
    //link to linkedin
    option1Prompt4.hide()
    inventoryContainer2.visible = false
    myText2.visible = false
    button3.visible = false
    button4.visible = false
    button5.visible = false
    button6.visible = false
    openExternalURL("https://www.linkedin.com/company/iamtrilligent/")
})
let button5 = new UIImage(option1Prompt4.canvas, new Texture('images/block1/website_Button.png'))
button5.width = "376px"
button5.height = "60"
button5.sourceHeight = 70
button5.sourceWidth = 376
button5.positionX = "-150"
button5.positionY = "-120"
button5.isPointerBlocker = true
button5.onClick = new OnPointerDown(() => {
    //link to website
    option1Prompt4.hide()
    inventoryContainer2.visible = false
    myText2.visible = false
    button3.visible = false
    button4.visible = false
    button5.visible = false
    button6.visible = false
    openExternalURL("https://trilligent.com/")
})
let button6 = new UIImage(option1Prompt4.canvas, new Texture('images/block1/backbutton.png'))
button6.width = 36
button6.height = 36
button6.sourceHeight = 36
button6.sourceWidth = 36
button6.positionX = "-218"
button6.positionY = "163"
button6.isPointerBlocker = true
button6.onClick = new OnPointerDown(() => {
    //trigger contact entry form
    option1Prompt4.hide()
    button3.visible = false
    button4.visible = false
    button5.visible = false
    button6.visible = false
    inventoryContainer2.visible = false
    myText2.visible = false
    ShowWelcomePrompt()
})

option1Prompt4.hide()
inventoryContainer2.visible = false
myText2.visible = false
button3.visible = false
button4.visible = false
button5.visible = false
button6.visible = false


export function ShowOption1Prompt4() {
    option1Prompt4.show()
    inventoryContainer2.visible = true
    myText2.visible = true
    button3.visible = true
    button4.visible = true
    button5.visible = true
    button6.visible = true
}