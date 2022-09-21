import * as ui from '@dcl/ui-scene-utils'
//welcome prompt

export let welcomePrompt = new ui.CustomPrompt(ui.PromptStyles.LIGHTLARGE, 4267, 2134)
welcomePrompt.canvas = new UICanvas()
welcomePrompt.background.source = (new Texture("images/Prompts/CaveElements-01.png"))
welcomePrompt.background.height = 533
welcomePrompt.background.width = 1067
welcomePrompt.background.hAlign = 'center'
welcomePrompt.background.vAlign = 'center'
welcomePrompt.background.sourceHeight = 2134
welcomePrompt.background.sourceWidth = 4267

let button1 = welcomePrompt.addButton(
    'Close',
    170,
    -170,
    () => {
        log('Yes')
        welcomePrompt.hide()
    },
    ui.ButtonStyles.E
)

let button2 = welcomePrompt.addButton(
    'Claim',
    -170,
    -170,
    () => {
        log('No')
        welcomePrompt.hide()
    },
    ui.ButtonStyles.F
)
welcomePrompt.hide()