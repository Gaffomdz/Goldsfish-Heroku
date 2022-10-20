import * as ui from '@dcl/ui-scene-utils'
import { questionN1 } from './questionN1'

export let name1 = ''
export let inputPrompt = new ui.CustomPrompt(ui.PromptStyles.DARKLARGE, 500, 380)
inputPrompt.canvas = new UICanvas()
inputPrompt.addText('Welcome to the Trivia Game', 0, 150, Color4.White(), 30)
inputPrompt.addText('Enter your name', 0, 110, Color4.White(), 30)
inputPrompt.closeIcon.visible = false


let button1 = inputPrompt.addButton(
    'Submit',
    0,
    -90,
    () => {
        name1Input.focusedBackground = Color4.Gray()
        name1 = name1Input.value
        inputPrompt.hide()
        name1Input.visible = false
        questionN1.show()
    },
    ui.ButtonStyles.ROUNDWHITE
)
const canvas = new UICanvas()
export const name1Input = new UIInputText(canvas)
name1Input.width = "20%"
name1Input.height = "25px"
name1Input.vAlign = "center"
name1Input.hAlign = "center"
name1Input.fontSize = 15
name1Input.placeholder = "Enter your Name"
name1Input.positionY = "10px"
name1Input.positionX = "0px"
name1Input.isPointerBlocker = true
name1Input.textWrapping = true
name1Input.hTextAlign = 'center'
name1Input.vTextAlign = 'center'
name1Input.focusedBackground = Color4.Gray()


name1Input.onBlur = new OnBlur((e) => {
    const day = new UIText(name1Input)
    log('day onblur ' + name1Input.value)
})

name1Input.visible = false
inputPrompt.hide()
