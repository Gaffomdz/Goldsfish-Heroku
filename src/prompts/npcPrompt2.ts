import * as ui from '@dcl/ui-scene-utils'

//npc second image

export let npcPrompt2 = new ui.CustomPrompt(ui.PromptStyles.LIGHTLARGE, 760, 628)
npcPrompt2.canvas = new UICanvas()
npcPrompt2.background.source = (new Texture("images/prompts/CaveElements-07.png"))
npcPrompt2.background.height = 628
npcPrompt2.background.width = 760
npcPrompt2.background.hAlign = 'center'
npcPrompt2.background.vAlign = 'center'
npcPrompt2.background.sourceHeight = 2514
npcPrompt2.background.sourceWidth = 3041
npcPrompt2.closeIcon.visible = true
npcPrompt2.closeIcon.positionX = 320
npcPrompt2.closeIcon.positionY = 200
npcPrompt2.hide()
