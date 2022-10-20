import * as ui from '@dcl/ui-scene-utils'
import { bubblesTexture } from 'node_modules/@dcl/npc-scene-utils/dist/utils/default-ui-components'
import { movePlayerToVector3 } from 'src/utils/movePlayerToVector3'
import { ShowOption2Prompt2 } from './option2Prompt2'
import { ShowWelcomePrompt, welcomePrompt } from './welcomePrompt'


export let option1Prompt2 = new ui.CustomPrompt(ui.PromptStyles.DARKLARGE, 500, 380)
option1Prompt2.addText('', 0, 130, Color4.White(), 12)
option1Prompt2.canvas = new UICanvas()
option1Prompt2.closeIcon.onClick = new OnPointerDown(() => {
    option1Prompt2.hide()
    button1.visible = false
    button2.visible = false
    button3.visible = false
    button4.visible = false
    inventoryContainer.visible = false
    myText.visible = false
})

const inventoryContainer = new UIContainerStack(option1Prompt2.canvas)
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


const myText = new UIText(option1Prompt2.canvas)
myText.value =
    "Visit the stations within our pavilion to learn\nabout Trilligent’s services, team, and culture,\nand to hear directly from some of our\ncolleagues.\n\nCheck back or leave your contact details with\nme to stay up to date on upcoming Trilligent\nevents in Decentraland. To learn more about\nDecentraland, visit a few of the Trilligent staff’s\nfavorite spots."
myText.fontSize = 20
myText.font = new Font(Fonts.SansSerif)
myText.color = Color4.Black()
myText.adaptHeight
myText.adaptWidth
myText.positionX = -170
myText.positionY = -80

let button1 = new UIImage(option1Prompt2.canvas, new Texture('images/block1/button1_small.png'))
button1.width = "171px"
button1.height = "49"
button1.sourceHeight = 49
button1.sourceWidth = 171
button1.positionX = "-1"
button1.positionY = "-150"
button1.isPointerBlocker = true
button1.onClick = new OnPointerDown(() => {
    movePlayerToVector3(new Vector3(12.09, 0.98, 13.12), new Vector3(9.900, 0.100, 13.300))
    //telepor user to screen 1 about us video
    option1Prompt2.hide()
    button1.visible = false
    button2.visible = false
    button3.visible = false
    button4.visible = false
    inventoryContainer.visible = false
    myText.visible = false
})
let button2 = new UIImage(option1Prompt2.canvas, new Texture('images/block1/button2_small.png'))
button2.width = "171px"
button2.height = "49"
button2.sourceHeight = 49
button2.sourceWidth = 171
button2.positionX = "165"
button2.positionY = "-150"
button2.isPointerBlocker = true
button2.onClick = new OnPointerDown(() => {
    //link teleport to staff favorite spots in DCL
    option1Prompt2.hide()
    button1.visible = false
    button2.visible = false
    button3.visible = false
    button4.visible = false
    inventoryContainer.visible = false
    myText.visible = false
    ShowOption2Prompt2()
})
let button3 = new UIImage(option1Prompt2.canvas, new Texture('images/block1/button3_small.png'))
button3.width = "171px"
button3.height = "49"
button3.sourceHeight = 49
button3.sourceWidth = 171
button3.positionX = "-165"
button3.positionY = "-150"
button3.isPointerBlocker = true
button3.onClick = new OnPointerDown(() => {
    //trigger contact entry form
    option1Prompt2.hide()
    button1.visible = false
    button2.visible = false
    button3.visible = false
    button4.visible = false
    inventoryContainer.visible = false
    myText.visible = false
    openExternalURL("https://www.surveymonkey.com/r/5CSDK25")
})
let button4 = new UIImage(option1Prompt2.canvas, new Texture('images/block1/backbutton.png'))
button4.width = 36
button4.height = 36
button4.sourceHeight = 36
button4.sourceWidth = 36
button4.positionX = "-218"
button4.positionY = "163"
button4.isPointerBlocker = true
button4.onClick = new OnPointerDown(() => {
    //trigger contact entry form
    option1Prompt2.hide()
    button1.visible = false
    button2.visible = false
    button3.visible = false
    button4.visible = false
    inventoryContainer.visible = false
    myText.visible = false
    ShowWelcomePrompt()
})

option1Prompt2.hide()
button1.visible = false
button2.visible = false
button3.visible = false
button4.visible = false
inventoryContainer.visible = false
myText.visible = false


export function ShowOption1Prompt2() {
    option1Prompt2.show()
    button1.visible = true
    button2.visible = true
    button3.visible = true
    button4.visible = true
    inventoryContainer.visible = true
    myText.visible = true
}

