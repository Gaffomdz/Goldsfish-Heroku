import { SceneController } from "./congif/core/sceneController"
import { SceneLocations } from "./congif/enums"
import { SceneEntities } from "./congif/scenes"
import { Interior } from "./enviroment/interior"
import { welcomePrompt } from "./prompts/welcomePrompt"

class GameController {
  private scenes = SceneEntities

  constructor() {
    SceneController.loadScene(SceneLocations.Exterior)
    Interior.preload()
  }

}
welcomePrompt.show()
new GameController()









