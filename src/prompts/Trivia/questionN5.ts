import * as ui from '@dcl/ui-scene-utils'
import { Dash_Wait } from 'dcldash'
import { AnswerSystem } from 'src/trivia/answers'
import { QuestionAnswerSystem } from 'src/trivia/questions'
import { addCoin } from 'src/trivia/scoreCounter'
import { getRandomInt } from 'src/utils/random'
import { playerScore } from './playerScore'

let randomizer = getRandomInt(25, 27)
let randomizer2 = getRandomInt(0, 28)
let randomizer3 = getRandomInt(0, 28)
let randomizer4 = getRandomInt(0, 28)
let randomQuestion1 = QuestionAnswerSystem[randomizer].list[0]
randomizer = randomizer
let correctAnswer1 = QuestionAnswerSystem[randomizer].list[1]

let randomAnswer1 = AnswerSystem[0].list[randomizer2]
let randomAnswer2 = AnswerSystem[0].list[randomizer3]
let randomAnswer3 = AnswerSystem[0].list[randomizer4]

while ((randomAnswer1 == randomAnswer2) || (randomAnswer1 == randomAnswer3) || (randomAnswer2 == randomAnswer3)
    || (correctAnswer1 == randomAnswer1) || (correctAnswer1 == randomAnswer2) || (correctAnswer1 == randomAnswer3)) {
    randomAnswer1 = AnswerSystem[0].list[randomizer2]
    randomAnswer2 = AnswerSystem[0].list[randomizer3]
    randomAnswer3 = AnswerSystem[0].list[randomizer4]
}

export let questionN5 = new ui.CustomPrompt(ui.PromptStyles.DARKLARGE, 600, 380)
questionN5.canvas = new UICanvas()
questionN5.addText(randomQuestion1, 0, 80, Color4.White(), 20)
questionN5.closeIcon.visible = false


let button1 = questionN5.addButton(
    randomAnswer1,
    -120,
    -20,
    () => {
        wrongAnswer.visible = true
        button1.hide()
        button2.hide()
        button3.hide()
        button4.hide()
        Dash_Wait(() => {
            wrongAnswer.visible=false
            questionN5.hide()
            playerScore.show()
        }, 1.2)

    },
    ui.ButtonStyles.ROUNDWHITE
)
let button2 = questionN5.addButton(
    randomAnswer2,
    -120,
    -90,
    () => {
        wrongAnswer.visible = true
        button1.hide()
        button2.hide()
        button3.hide()
        button4.hide()
        Dash_Wait(() => {
            wrongAnswer.visible=false
            questionN5.hide()
            playerScore.show()
        }, 1.2)

    },
    ui.ButtonStyles.ROUNDWHITE
)
let button3 = questionN5.addButton(
    correctAnswer1,
    120,
    -20,
    () => {
        addCoin(1)
        button1.hide()
        button2.hide()
        button3.hide()
        button4.hide()
        Dash_Wait(() => {
            wrongAnswer.visible=false
            questionN5.hide()
            playerScore.show()

        }, 1.2)

    },
    ui.ButtonStyles.ROUNDWHITE
)
let button4 = questionN5.addButton(
    randomAnswer3,
    120,
    -90,
    () => {
        wrongAnswer.visible=true 
        button1.hide()
        button2.hide()
        button3.hide()
        button4.hide()
        Dash_Wait(() => {
            wrongAnswer.visible=false
            questionN5.hide()
            playerScore.show()

        }, 1.2)
    },
    ui.ButtonStyles.ROUNDWHITE
)
let wrongAnswer = new UIImage(questionN5.canvas, new Texture('images/trivia/wronganswer.png'))
wrongAnswer.width = "784px"
wrongAnswer.height = "146"
wrongAnswer.sourceHeight = 293
wrongAnswer.sourceWidth = 1568
wrongAnswer.positionX = "0"
wrongAnswer.positionY = "-40"
wrongAnswer.isPointerBlocker = true
wrongAnswer.visible = false

questionN5.hide()