import * as ui from '@dcl/ui-scene-utils'
import { scoreCounter } from 'src/trivia/scoreCounter'
import { publishScore } from 'src/utils/serverHandler'
import { name1 } from './nameInput'


//your score is :
export let playerScore = new ui.CustomPrompt(ui.PromptStyles.DARKLARGE, 600, 380)
playerScore.canvas = new UICanvas()
playerScore.addText('CONGRATULATIONS', 0, 150, Color4.White(), 30)
playerScore.addText(name1, 0, 150, Color4.White(), 30)
playerScore.addText('Your Score is:', 0, 110, Color4.White(), 30)
playerScore.addText(scoreCounter.valueAsNum.toString(), 0, 17, Color4.White(), 50)
playerScore.closeIcon.visible = false
let button1 = playerScore.addButton(
    'Exit',
    0,
    -90,
    () => {
        scoreCounter.hide()
        playerScore.hide()
        log('save name',name1,'score',scoreCounter.valueAsNum)
        publishScore(scoreCounter.valueAsNum,name1)
    },
    ui.ButtonStyles.RED
)
playerScore.hide()
