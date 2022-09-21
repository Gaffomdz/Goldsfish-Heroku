import { SceneController } from "src/congif/core/sceneController"
import { SceneLocations } from "src/congif/enums"
import { Interior } from "src/enviroment/interior"
import { movePlayerToVector3 } from "src/utils/movePlayerToVector3"
import * as ui from '@dcl/ui-scene-utils'
import { npcPrompt2 } from "./npcPrompt2"
import { npcPrompt3 } from "./npcPrompt3"

//npc firsh chat

export let npcFirstPrompt = new ui.CustomPrompt(ui.PromptStyles.LIGHTLARGE, 1024, 617)
npcFirstPrompt.canvas = new UICanvas()
npcFirstPrompt.background.source = (new Texture("images/prompts/CaveElements-02.png"))
npcFirstPrompt.background.height = 617
npcFirstPrompt.background.width = 1024
npcFirstPrompt.background.hAlign = 'center'
npcFirstPrompt.background.vAlign = 'center'
npcFirstPrompt.background.sourceHeight = 617
npcFirstPrompt.background.sourceWidth = 1024
npcFirstPrompt.closeIcon.visible = true
npcFirstPrompt.closeIcon.positionX = 420
npcFirstPrompt.closeIcon.positionY = 220

let button1 = npcFirstPrompt.addButton(
    'Play',
    170,
    -170,
    () => {
        log('Yes')
        npcFirstPrompt.hide()
        SceneController.loadScene(SceneLocations.Interior)
        Interior.createPickaxe()
        movePlayerToVector3(
            new Vector3(2.58, 0.88, 35.51),
            new Vector3(5.28, 0.88, 36.07),)
        npcPrompt2.show()
    },
    ui.ButtonStyles.E
)

let button2 = npcFirstPrompt.addButton(
    'Leave',
    -170,
    -170,
    () => {
        log('No')
        npcFirstPrompt.hide()
        npcPrompt3.show()
    },
    ui.ButtonStyles.F
)
npcFirstPrompt.hide()