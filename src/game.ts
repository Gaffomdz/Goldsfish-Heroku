import { SceneController } from "./congif/core/sceneController"
import { SceneLocations } from "./congif/enums"
import { SceneEntities } from "./congif/scenes"
import { Employees } from "./enviroment/employees"
import { Exterior } from "./enviroment/exterior"
import { sceneMessageBus } from "./utils/messageBus"


class GameController {
  private scenes = SceneEntities

  constructor() {
    SceneController.loadScene(SceneLocations.Exterior)
    Employees.preload()
  }

}
// sceneMessageBus.on('play', () => {
//   Exterior.cine.myVideoTexture.play()
// })

new GameController()



