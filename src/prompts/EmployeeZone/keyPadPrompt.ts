
import * as ui from '@dcl/ui-scene-utils'
import { SceneController } from 'src/congif/core/sceneController'
import { SceneLocations } from 'src/congif/enums'
import { Employees } from 'src/enviroment/employees'
import { movePlayerToVector3 } from 'src/utils/movePlayerToVector3'
import { employeeEnterZone } from './employeeEnterPrompt'

export let keyPadPrompt = new ui.CustomPrompt(ui.PromptStyles.DARKLARGE, 500, 380)
keyPadPrompt.canvas = new UICanvas()
keyPadPrompt.addText('EMPLOYEES ONLY', 0, 150, Color4.White(), 30)
keyPadPrompt.addText('Enter the Password', 0, 110, Color4.White(), 30)
keyPadPrompt.closeIcon.visible = false
keyPadPrompt.closeIcon.onClick = new OnPointerDown(() => {
    keyPadPrompt.hide()
    passwortd1Input.visible = false
    passwortd2Input.visible = false
    passwortd3Input.visible = false

})

let button1 = keyPadPrompt.addButton(
    'Enter',
    -100,
    -90,
    () => {
        passwortd1Input.focusedBackground = Color4.Gray()
        passwortd2Input.focusedBackground = Color4.Gray()
        passwortd3Input.focusedBackground = Color4.Gray()
        passwortd1Input.placeholder = "dd"
        passwortd2Input.placeholder = "mm"
        passwortd3Input.placeholder = "yyyy"
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
            keyPadPrompt.hide()
            passwortd1Input.visible = false
            passwortd2Input.visible = false
            passwortd3Input.visible = false
            SceneController.loadScene(SceneLocations.Employees)
            movePlayerToVector3(
                new Vector3(15.86, 0.88, 31.58),
                new Vector3(20.73, 0.98, 23.61)
            )
            Employees.modify2()
            employeeEnterZone.show()

        }



    },
    ui.ButtonStyles.ROUNDWHITE
)
let button2 = keyPadPrompt.addButton('Exit',
    100,
    -90,
    () => {
        passwortd1Input.visible = false
        passwortd2Input.visible = false
        passwortd3Input.visible = false
        keyPadPrompt.hide()
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
keyPadPrompt.hide()
passwortd1Input.visible = false
passwortd2Input.visible = false
passwortd3Input.visible = false