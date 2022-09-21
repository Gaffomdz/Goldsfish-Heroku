import * as ui from '@dcl/ui-scene-utils'

//Struck goldfish prompt

export let fishPrompt1 = new ui.CustomPrompt(ui.PromptStyles.LIGHTLARGE, 1067, 533)
fishPrompt1.canvas = new UICanvas()
fishPrompt1.background.source = (new Texture("images/prompts/CaveElements-06.png"))
fishPrompt1.background.height = 533
fishPrompt1.background.width = 1067
fishPrompt1.background.hAlign = 'center'
fishPrompt1.background.vAlign = 'center'
fishPrompt1.background.sourceHeight = 2134
fishPrompt1.background.sourceWidth = 4267
fishPrompt1.closeIcon.visible = true
fishPrompt1.closeIcon.positionX = 450
fishPrompt1.closeIcon.positionY = 180
fishPrompt1.hide()
