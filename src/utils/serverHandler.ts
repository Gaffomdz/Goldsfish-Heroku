

export const fireBaseServer =
  'https://us-central1-trilligent-ec9df.cloudfunctions.net/app'

// get latest scoreboard data from server
export async function getGuestBook() {
  try {
    const url = fireBaseServer + '/get-signatures'
    const response = await fetch(url)
    const json = await response.json()
    log(json)
    return json
  } catch (e) {
    log('error fetching scores from server ', e)
  }
}

// Sign the guest book
export async function signGuestBook(firma: string) {
  try {
    const url = fireBaseServer + '/add-signature'
    const body = JSON.stringify({
      "sig": firma
    })
    log(body)
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: body
    })
    return response.json()
  } catch (e) {
    log('error posting to server ', e)
  }
}

//Get the top 10 Scores
export async function getScoreBoard() {
  try {
    const url = fireBaseServer + '/get-scores'
    const response = await fetch(url)
    const json = await response.json()
    log(json)
    return json
  } catch (e) {
    log('error fetching scores from server ', e)
  }
}


// //Publish new scrore in db

export async function publishScore(score: number, name: string) {
 
  try {
    const url = fireBaseServer + '/publish-scores'
    const body = JSON.stringify({
      "name": name,
      "score": score
    })
    log(body)
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: body
    })
    return response.json()
  } catch (e) {
    log('error posting to server ', e)
  }
}
