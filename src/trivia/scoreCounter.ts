import { UICounter } from "@dcl/ui-scene-utils"

export let credits = 0
export function addCoin(amount: number) {
    scoreCounter.increase(amount)
    log('valor de credits',credits)
}
const canvas = new UICanvas()
export const scoreCounter = new UICounter(credits, -500, 400, Color4.White(), 200, true)
scoreCounter.hide()
