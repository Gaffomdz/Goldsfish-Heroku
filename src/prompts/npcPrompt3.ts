import * as ui from '@dcl/ui-scene-utils'

//npc 3 image

export let npcPrompt3 = new ui.CustomPrompt(ui.PromptStyles.LIGHTLARGE, 760, 370)
npcPrompt3.canvas = new UICanvas()
npcPrompt3.background.source = (new Texture("images/prompts/CaveElements-03.png"))
npcPrompt3.background.height = 370
npcPrompt3.background.width = 760
npcPrompt3.background.hAlign = 'center'
npcPrompt3.background.vAlign = 'center'
npcPrompt3.background.sourceHeight = 1480
npcPrompt3.background.sourceWidth = 3041
npcPrompt3.closeIcon.visible = true
npcPrompt3.closeIcon.positionX = 310
npcPrompt3.closeIcon.positionY = 70
let button1 = npcPrompt3.addButton(
    'Claim',
    0,
    -105,
    () => {
        log('Yes')
        npcPrompt3.hide()
        //enter the bonus code
    },
    ui.ButtonStyles.E
)
npcPrompt3.hide()