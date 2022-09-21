import { setCoin } from 'src/coins/coincounter'
import { SceneController } from 'src/congif/core/sceneController'
import { SceneLocations } from 'src/congif/enums'
import { movePlayerToVector3 } from 'src/utils/movePlayerToVector3'
import * as ui from '@dcl/ui-scene-utils'


//Find 22 goldfish

export let finishPrompt = new ui.CustomPrompt(ui.PromptStyles.LIGHTLARGE, 4267, 2134)
finishPrompt.canvas = new UICanvas()
finishPrompt.background.source = (new Texture("images/prompts/CaveElements-04.png"))
finishPrompt.background.height = 533
finishPrompt.background.width = 1067
finishPrompt.background.hAlign = 'center'
finishPrompt.background.vAlign = 'center'
finishPrompt.background.sourceHeight = 2134
finishPrompt.background.sourceWidth = 4267

let button1 = finishPrompt.addButton(
    'Claim',
    170,
    -170,
    () => {
        finishPrompt.hide()
        SceneController.loadScene(SceneLocations.Exterior)
        movePlayerToVector3(
            new Vector3(31.30, 0.88, 78.07),
            new Vector3(31.23, 0.88, 73.62),)
        setCoin(0)
    },
    ui.ButtonStyles.E
)

let button2 = finishPrompt.addButton(
    'Play',
    -170,
    -170,
    () => {
        finishPrompt.hide()
    },
    ui.ButtonStyles.F
)
finishPrompt.hide()









