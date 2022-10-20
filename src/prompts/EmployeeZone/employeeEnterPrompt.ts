
import * as ui from '@dcl/ui-scene-utils'
export let employeeEnterZone = new ui.CustomPrompt(ui.PromptStyles.DARKLARGE, 500, 300)
employeeEnterZone .canvas = new UICanvas()
employeeEnterZone .addText('Welcome!', 0, 80, Color4.White(), 40)
employeeEnterZone .addText('You’ve just entered\nthe Trilligent employee space.', 0, 10, Color4.White(), 20)

let button1 = employeeEnterZone.addButton(
    'Close',
    0,
    -90,
    () => {
        employeeEnterZone.hide()
    },
    ui.ButtonStyles.ROUNDWHITE
)
employeeEnterZone.hide()