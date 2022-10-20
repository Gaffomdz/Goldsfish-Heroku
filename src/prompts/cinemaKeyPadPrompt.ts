import * as ui from '@dcl/ui-scene-utils'
import { Exterior } from 'src/enviroment/exterior'
import { sceneMessageBus } from 'src/utils/messageBus'

let x = 0
export let correctCode = false
export let cinemaKeyPadPrompt = new ui.CustomPrompt(ui.PromptStyles.DARKLARGE, 500, 380)
cinemaKeyPadPrompt.canvas = new UICanvas()
cinemaKeyPadPrompt.addText('PLAY VIDEO', 0, 150, Color4.White(), 30)
cinemaKeyPadPrompt.addText('Enter the Password', 0, 110, Color4.White(), 30)
cinemaKeyPadPrompt.closeIcon.visible = false
cinemaKeyPadPrompt.closeIcon.onClick = new OnPointerDown(() => {
    cinemaKeyPadPrompt.hide()
    passwortd1Input.visible = false
    passwortd2Input.visible = false
    passwortd3Input.visible = false
})

let button1 = cinemaKeyPadPrompt.addButton(
    'UNLOCK',
    -100,
    -90,
    () => {
        passwortd1Input.focusedBackground = Color4.Gray()
        passwortd2Input.focusedBackground = Color4.Gray()
        passwortd3Input.focusedBackground = Color4.Gray()
        passwortd1Input.placeholder = ""
        passwortd2Input.placeholder = ""
        passwortd3Input.placeholder = ""
        let code1 = +passwortd1Input.value
        let code2 = +passwortd2Input.value
        let code3 = +passwortd3Input.value
        let code1Check = true
        let code2Check = true
        let code3Check = true
        //1
        if ((code1 < 0) || (code1 > 9)) {
            passwortd1Input.focusedBackground = Color4.Red()
            passwortd2Input.focusedBackground = Color4.Red()
            passwortd3Input.focusedBackground = Color4.Red()
            passwortd1Input.placeholder = "Wrong"
            passwortd2Input.placeholder = "Wrong"
            passwortd3Input.placeholder = "Wrong"
            code1Check = false
        }
        if (code1 == 9) {
            code1Check = true
        } else {
            passwortd1Input.focusedBackground = Color4.Red()
            passwortd2Input.focusedBackground = Color4.Red()
            passwortd3Input.focusedBackground = Color4.Red()
            passwortd1Input.placeholder = "Wrong"
            passwortd2Input.placeholder = "Wrong"
            passwortd3Input.placeholder = "Wrong"
            code1Check = false
        }
        //2
        if ((code2 < 0) || (code2 > 9)) {
            passwortd1Input.focusedBackground = Color4.Red()
            passwortd2Input.focusedBackground = Color4.Red()
            passwortd3Input.focusedBackground = Color4.Red()
            passwortd1Input.placeholder = "Wrong"
            passwortd2Input.placeholder = "Wrong"
            passwortd3Input.placeholder = "Wrong"
            code2Check = false
        }
        if (code2 == 2) {
            code2Check = true
        } else {
            passwortd1Input.focusedBackground = Color4.Red()
            passwortd2Input.focusedBackground = Color4.Red()
            passwortd3Input.focusedBackground = Color4.Red()
            passwortd1Input.placeholder = "Wrong"
            passwortd2Input.placeholder = "Wrong"
            passwortd3Input.placeholder = "Wrong"
            code2Check = false
        }
        //3
        if ((code3 < 0) || (code3 > 9)) {
            passwortd1Input.focusedBackground = Color4.Red()
            passwortd2Input.focusedBackground = Color4.Red()
            passwortd3Input.focusedBackground = Color4.Red()
            passwortd1Input.placeholder = "Wrong"
            passwortd2Input.placeholder = "Wrong"
            passwortd3Input.placeholder = "Wrong"
            code2Check = false
        }
        if (code3 == 1) {
            code3Check = true
        } else {
            passwortd1Input.focusedBackground = Color4.Red()
            passwortd2Input.focusedBackground = Color4.Red()
            passwortd3Input.focusedBackground = Color4.Red()
            passwortd1Input.placeholder = "Wrong"
            passwortd2Input.placeholder = "Wrong"
            passwortd3Input.placeholder = "Wrong"
            code3Check = false
        }
        if ((code1Check == true) && (code2Check == true) && (code3Check == true)) {
            cinemaKeyPadPrompt.hide()
            passwortd1Input.visible = false
            passwortd2Input.visible = false
            passwortd3Input.visible = false
            correctCode = true
        }

    },
    ui.ButtonStyles.ROUNDWHITE
)
let button2 = cinemaKeyPadPrompt.addButton('Exit',
    100,
    -90,
    () => {
        passwortd1Input.visible = false
        passwortd2Input.visible = false
        passwortd3Input.visible = false
        cinemaKeyPadPrompt.hide()
    },
    ui.ButtonStyles.RED
)
const canvas = new UICanvas()
export const passwortd1Input = new UIInputText(canvas)
passwortd1Input.width = "5%"
passwortd1Input.height = "25px"
passwortd1Input.vAlign = "center"
passwortd1Input.hAlign = "center"
passwortd1Input.fontSize = 15
passwortd1Input.placeholder = "0"
passwortd1Input.positionY = "10px"
passwortd1Input.positionX = "-100px"
passwortd1Input.isPointerBlocker = true
passwortd1Input.textWrapping = true
passwortd1Input.hTextAlign = 'center'
passwortd1Input.vTextAlign = 'center'
passwortd1Input.focusedBackground = Color4.Gray()


export const passwortd2Input = new UIInputText(canvas)
passwortd2Input.width = "5%"
passwortd2Input.height = "25px"
passwortd2Input.vAlign = "center"
passwortd2Input.hAlign = "center"
passwortd2Input.fontSize = 15
passwortd2Input.placeholder = "0"
passwortd2Input.positionY = "10px"
passwortd2Input.isPointerBlocker = true
passwortd2Input.textWrapping = true
passwortd2Input.hTextAlign = 'center'
passwortd2Input.vTextAlign = 'center'
passwortd2Input.focusedBackground = Color4.Gray()



export const passwortd3Input = new UIInputText(canvas)
passwortd3Input.width = "5%"
passwortd3Input.height = "25px"
passwortd3Input.vAlign = "center"
passwortd3Input.hAlign = "center"
passwortd3Input.fontSize = 15
passwortd3Input.placeholder = "0"
passwortd3Input.positionY = "10px"
passwortd3Input.positionX = "100px"
passwortd3Input.isPointerBlocker = true
passwortd3Input.textWrapping = true
passwortd3Input.hTextAlign = 'center'
passwortd3Input.vTextAlign = 'center'
passwortd3Input.focusedBackground = Color4.Gray()




passwortd1Input.onBlur = new OnBlur((e) => {
    const day = new UIText(passwortd1Input)
    log('day onblur ' + passwortd1Input.value)
})
passwortd2Input.onBlur = new OnBlur((e) => {
    const month = new UIText(passwortd2Input)
    log('month onblur ' + passwortd2Input.value)
})
passwortd3Input.onBlur = new OnBlur((e) => {
    const year = new UIText(passwortd3Input)
    log('year onblur ' + passwortd3Input.value)
})
cinemaKeyPadPrompt.hide()
passwortd1Input.visible = false
passwortd2Input.visible = false
passwortd3Input.visible = false

// export function showKeyPadCinema() {
//     cinemaKeyPadPrompt.show()
//     passwortd1Input.visible = true
//     passwortd2Input.visible = true
//     passwortd3Input.visible = true
// }