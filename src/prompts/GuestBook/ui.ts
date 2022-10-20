import { getGuestBook, signGuestBook } from "src/utils/serverHandler"
import * as ui from '@dcl/ui-scene-utils'
import { ConfirmMode } from "node_modules/@dcl/npc-scene-utils/dist/ui/index"


export const screenSpaceUI = new UICanvas()
screenSpaceUI.visible = true

let UIOpenTime: number

const imageTexture = new Texture('images/UI_Guestbook.png')
const scaleMultiplier = 0.7

const linesPerGuestBookPage = 12

export async function openUI(event: string) {
  code1Input.visible = true
  button4.visible = true
  UIOpenTime = +Date.now()
  background.visible = true
  background.isPointerBlocker = true
  let guestBookPage = 1

  let allSignatures = await getGuestBook()
  const totalPages = displaySignatures(allSignatures, guestBookPage)
  SignButton.onClick = new OnPointerDown(async () => {
    if (code1Input.value =='Write something..'){
      log('no se mando nada')
      closeUI()
      code1Input.visible = false
    }else{
      signGuestBook(code1Input.value).catch((error) => log(error))
      closeUI()
      log('signed guestbook', code1Input.value)
      code1Input.visible = false
    }

  })

  log('On page ', guestBookPage, ' of ', totalPages)

  if (totalPages < 2) {
    LastButton.visible = false
    NextButton.visible = false
  } else {
    LastButton.visible = false
    NextButton.visible = true
  }

  NextButton.onClick = new OnPointerDown(async () => {
    guestBookPage += 1

    allSignatures = await getGuestBook()
    displaySignatures(allSignatures, guestBookPage)
    LastButton.visible = true
    if (guestBookPage >= totalPages) {
      NextButton.visible = false
    }
  })

  LastButton.onClick = new OnPointerDown(async () => {
    guestBookPage -= 1
    if (guestBookPage < 1) {
      guestBookPage = 1
    }
    allSignatures = await getGuestBook()
    displaySignatures(allSignatures, guestBookPage)
    NextButton.visible = true
    if (guestBookPage === 1) {
      LastButton.visible = false
    }
  })
}

export function closeUI() {
  background.visible = false
  background.isPointerBlocker = false
  code1Input.visible = false
}

export const background = new UIImage(screenSpaceUI, imageTexture)
background.name = 'background'
background.width = 1024 * scaleMultiplier
background.height = 921 * scaleMultiplier
background.hAlign = 'center'
background.vAlign = 'center'
background.sourceLeft = 0
background.sourceTop = 76
background.sourceWidth = 1024
background.sourceHeight = 921
background.visible = false
background.isPointerBlocker = false
background.onClick = new OnPointerDown(() => { code1Input.visible = false })

export const headerText = new UIText(background)
headerText.value = 'Thanks for visiting Trilligent!\nPlease leave a message in our guestbook.'
headerText.name = 'header'
headerText.width = '650px'
headerText.height = '800px'
headerText.hAlign = 'center'
headerText.vAlign = 'center'
headerText.positionY = 230
headerText.positionX = 0
headerText.fontSize = 25
headerText.vTextAlign = 'center'
headerText.hTextAlign = 'center'
headerText.color = Color4.Black()

export const signaturesUI = new UIText(background)
signaturesUI.value = 'Fetching signatures'
signaturesUI.name = 'signatures'
signaturesUI.width = '650px'
signaturesUI.height = '800px'
signaturesUI.hAlign = 'center'
signaturesUI.vAlign = 'center'
signaturesUI.positionY = 0
signaturesUI.positionX = 0
signaturesUI.fontSize = 15
signaturesUI.vTextAlign = 'center'
signaturesUI.hTextAlign = 'center'
signaturesUI.color = Color4.FromHexString('#53508F88')

export const SignButton = new UIImage(background, imageTexture)
SignButton.name = 'SignButton'
SignButton.width = 460 * scaleMultiplier
SignButton.height = 75 * scaleMultiplier
SignButton.hAlign = 'center'
SignButton.vAlign = 'center'
SignButton.positionY = (-839 + 921 / 2) * scaleMultiplier
SignButton.positionX = 0
SignButton.sourceLeft = 76
SignButton.sourceTop = 0
SignButton.sourceWidth = 460
SignButton.sourceHeight = 75

export const NextButton = new UIImage(background, imageTexture)
NextButton.name = 'NextButton'
NextButton.width = 76 * scaleMultiplier
NextButton.height = 76 * scaleMultiplier
NextButton.hAlign = 'center'
NextButton.vAlign = 'center'
NextButton.positionY = 0
NextButton.positionX = 300
NextButton.sourceLeft = 537
NextButton.sourceTop = 0
NextButton.sourceWidth = 75
NextButton.sourceHeight = 75

export const LastButton = new UIImage(background, imageTexture)
LastButton.name = 'LastButton'
LastButton.width = 76 * scaleMultiplier
LastButton.height = 76 * scaleMultiplier
LastButton.hAlign = 'center'
LastButton.vAlign = 'center'
LastButton.positionY = 0
LastButton.positionX = -300
LastButton.sourceLeft = 0
LastButton.sourceTop = 0
LastButton.sourceWidth = 75
LastButton.sourceHeight = 75

const canvas = new UICanvas()
export const code1Input = new UIInputText(canvas)
code1Input.width = "200px"
code1Input.height = "40px"
code1Input.vAlign = "center"
code1Input.hAlign = "center"
code1Input.fontSize = 15
code1Input.placeholder = "Write something.."
code1Input.positionY = "-210px"
code1Input.positionX = "0px"
code1Input.isPointerBlocker = true
code1Input.textWrapping = true
code1Input.hTextAlign = 'center'
code1Input.vTextAlign = 'center'
code1Input.focusedBackground = Color4.Gray()
code1Input.visible = false

let button4 = new UIImage(canvas, new Texture('images/block1/backbutton.png'))
button4.visible = false
button4.width = 36
button4.height = 36
button4.sourceHeight = 36
button4.sourceWidth = 36
button4.positionX = "-320"
button4.positionY = "290"
button4.isPointerBlocker = true
button4.onClick = new OnPointerDown(() => {
  button4.visible = false
  closeUI()
})

// arrange all signatures into pages
function displaySignatures(allSignatures: any[], guestBookPage: number) {
  let signaturePage = 0
  const signatureList = ['']
  for (let i = 0; i < allSignatures.length; i++) {
    signatureList[signaturePage] = signatureList[signaturePage].concat(
      allSignatures[i].sig
    )
    signatureList[signaturePage] = signatureList[signaturePage].concat(' - ')
    const lines = signatureList[signaturePage].split('\n')
    if (lines[lines.length - 1].length > 25) {
      signatureList[signaturePage] = signatureList[signaturePage].concat('\n')
    }

    if (lines.length >= linesPerGuestBookPage) {
      signaturePage += 1
      signatureList.push('')
      //guestBookPage
    }
  }
  //signaturesUI.value = allSignatures[0].sig
  signaturesUI.value = signatureList[guestBookPage - 1]
  log(
    'signature to show from page ',
    guestBookPage,
    ' :',
    signatureList[guestBookPage - 1]
  )

  return signatureList.length
}

// Instance the input object
const input = Input.instance

//button down event
input.subscribe('BUTTON_DOWN', ActionButton.POINTER, false, (e) => {
  const currentTime = +Date.now()
  let isOpen: boolean
  if (background.visible) {
    isOpen = true
  } else {
    isOpen = false
  }

  if (isOpen && currentTime - UIOpenTime > 100) {
    closeUI()
  }
})