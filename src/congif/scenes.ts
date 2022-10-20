import { Employees } from "src/enviroment/employees"
import { Exterior } from "src/enviroment/exterior"
import { Scene } from "./core/scene"
import { SceneLocations } from "./enums"


export const SceneEntities: {[key: number] : Scene } = {
    [SceneLocations.Exterior]: Exterior,
    [SceneLocations.Employees]: Employees,
}

export const getSceneEntityFromLocation = (location: SceneLocations) : (Scene | undefined) => {
    return SceneEntities[location]
}