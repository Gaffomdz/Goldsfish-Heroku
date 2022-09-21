import * as ui from '@dcl/ui-scene-utils'

//Smash boulders prompt

export let fishPrompt2 = new ui.CustomPrompt(ui.PromptStyles.LIGHTLARGE, 760, 628)
fishPrompt2.canvas = new UICanvas()
fishPrompt2.background.source = (new Texture("images/prompts/CaveElements-08.png"))
fishPrompt2.background.height = 628
fishPrompt2.background.width = 760
fishPrompt2.background.hAlign = 'center'
fishPrompt2.background.vAlign = 'center'
fishPrompt2.background.sourceHeight = 2514
fishPrompt2.background.sourceWidth = 3041
fishPrompt2.closeIcon.visible = true
fishPrompt2.closeIcon.positionX = 320
fishPrompt2.closeIcon.positionY = 200
fishPrompt2.hide()
