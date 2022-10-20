import * as ui from '@dcl/ui-scene-utils'
import { ShowWelcomePrompt } from './welcomePrompt'



export let option1Prompt3 = new ui.CustomPrompt(ui.PromptStyles.DARKLARGE, 500, 380)
option1Prompt3.addText('', 0, 130, Color4.White(), 12)
option1Prompt3.canvas = new UICanvas()
option1Prompt3.closeIcon.onClick = new OnPointerDown(() => {
    option1Prompt3.hide()
    button2.visible = false
    button3.visible = false
    button4.visible = false
    button5.visible = false
    button6.visible = false
    inventoryContainer.visible = false
    inventoryContainer2.visible = false
    myText.visible = false
    myText2.visible = false
})

const inventoryContainer = new UIContainerStack(option1Prompt3.canvas)
inventoryContainer.adaptWidth = true
inventoryContainer.width = 470
inventoryContainer.height = 100
inventoryContainer.positionY = 80
inventoryContainer.positionX = 0
inventoryContainer.color = Color4.White()
inventoryContainer.hAlign = "center"
inventoryContainer.vAlign = "center"
inventoryContainer.adaptHeight
inventoryContainer.adaptWidth
inventoryContainer.stackOrientation = UIStackOrientation.HORIZONTAL


const inventoryContainer2 = new UIContainerStack(option1Prompt3.canvas)
inventoryContainer2.adaptWidth = true
inventoryContainer2.width = 470
inventoryContainer2.height = 100
inventoryContainer2.positionY = -80
inventoryContainer2.positionX = 0
inventoryContainer2.color = Color4.White()
inventoryContainer2.hAlign = "center"
inventoryContainer2.vAlign = "center"
inventoryContainer2.adaptHeight
inventoryContainer2.adaptWidth
inventoryContainer2.stackOrientation = UIStackOrientation.HORIZONTAL


const myText = new UIText(option1Prompt3.canvas)
myText.value =
    "You can leave your contact details with me and\nI’ll pass them on to one of my colleagues who\nwill get back to you shortly."
myText.fontSize = 20
myText.font = new Font(Fonts.SansSerif)
myText.fontSize = 20
myText.color = Color4.Black()
myText.adaptHeight
myText.adaptWidth
myText.positionX = -170
myText.positionY = 70

const myText2 = new UIText(option1Prompt3.canvas)
myText2.value =
    "Follow Trilligent on social media and visit\nour website at trilligent.com."
myText2.fontSize = 20
myText2.font = new Font(Fonts.SansSerif)
myText2.fontSize = 20
myText2.color = Color4.Black()
myText2.adaptHeight
myText2.adaptWidth
myText2.positionX = -170
myText2.positionY = -70

let button2 = new UIImage(option1Prompt3.canvas, new Texture('images/block1/option1Prompt1_button2.png'))
button2.width = "376px"
button2.height = "60"
button2.sourceHeight = 70
button2.sourceWidth = 376
button2.positionX = "0"
button2.positionY = "0"
button2.isPointerBlocker = true
button2.onClick = new OnPointerDown(() => {
    //trigger contact entry form
    option1Prompt3.hide()
    button2.visible = false
    button3.visible = false
    button4.visible = false
    button5.visible = false
    button6.visible = false
    inventoryContainer.visible = false
    inventoryContainer2.visible = false
    myText.visible = false
    myText2.visible = false
    openExternalURL("https://www.surveymonkey.com/r/5CSDK25")
})
let button3 = new UIImage(option1Prompt3.canvas, new Texture('images/block1/instagram_Button.png'))
button3.width = "376px"
button3.height = "60"
button3.sourceHeight = 70
button3.sourceWidth = 376
button3.positionX = "0"
button3.positionY = "-159"
button3.isPointerBlocker = true
button3.onClick = new OnPointerDown(() => {
    //link to instagram
    option1Prompt3.hide()
    button2.visible = false
    button3.visible = false
    button4.visible = false
    button5.visible = false
    button6.visible = false
    inventoryContainer.visible = false
    inventoryContainer2.visible = false
    myText.visible = false
    myText2.visible = false
    openExternalURL("https://www.instagram.com/iamtrilligent/")
})
let button4 = new UIImage(option1Prompt3.canvas, new Texture('images/block1/linkedin_Button.png'))
//link to linkedin
button4.width = "376px"
button4.height = "60"
button4.sourceHeight = 70
button4.sourceWidth = 376
button4.positionX = "150"
button4.positionY = "-159"
button4.isPointerBlocker = true
button4.onClick = new OnPointerDown(() => {
    option1Prompt3.hide()
    button2.visible = false
    button3.visible = false
    button4.visible = false
    button5.visible = false
    button6.visible = false
    inventoryContainer.visible = false
    inventoryContainer2.visible = false
    myText.visible = false
    myText2.visible = false
    openExternalURL("https://www.linkedin.com/company/iamtrilligent/")
})
let button5 = new UIImage(option1Prompt3.canvas, new Texture('images/block1/website_Button.png'))
button5.width = "376px"
button5.height = "60"
button5.sourceHeight = 70
button5.sourceWidth = 376
button5.positionX = "-150"
button5.positionY = "-159"
button5.isPointerBlocker = true
button5.onClick = new OnPointerDown(() => {
    //link to website
    option1Prompt3.hide()
    button2.visible = false
    button3.visible = false
    button4.visible = false
    button5.visible = false
    button6.visible = false
    inventoryContainer.visible = false
    inventoryContainer2.visible = false
    myText.visible = false
    myText2.visible = false
    openExternalURL("https://trilligent.com/")
})
let button6 = new UIImage(option1Prompt3.canvas, new Texture('images/block1/backbutton.png'))
button6.width = 36
button6.height = 36
button6.sourceHeight = 36
button6.sourceWidth = 36
button6.positionX = "-218"
button6.positionY = "163"
button6.isPointerBlocker = true
button6.onClick = new OnPointerDown(() => {
    //trigger contact entry form
    option1Prompt3.hide()
    button2.visible = false
    button3.visible = false
    button4.visible = false
    button5.visible = false
    button6.visible = false
    inventoryContainer.visible = false
    inventoryContainer2.visible = false
    myText.visible = false
    myText2.visible = false
    ShowWelcomePrompt()
})


option1Prompt3.hide()
button2.visible = false
button3.visible = false
button4.visible = false
button5.visible = false
button6.visible = false
inventoryContainer.visible = false
inventoryContainer2.visible = false
myText.visible = false
myText2.visible = false


export function ShowOption1Prompt3() {
    option1Prompt3.show()
    button2.visible = true
    button3.visible = true
    button4.visible = true
    button5.visible = true
    button6.visible = true
    inventoryContainer.visible = true
    inventoryContainer2.visible = true
    myText.visible = true
    myText2.visible = true
}