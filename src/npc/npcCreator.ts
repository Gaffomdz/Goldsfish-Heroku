import { NPC, NPCDelay } from "@dcl/npc-scene-utils";
import { npcFirstPrompt } from "src/prompts/npcPrompt1";

export const robotNPC = new NPC({
  position: new Vector3(36.76, 0, 57.21),
  rotation: Quaternion.Euler(0, 270, 0),
  scale: new Vector3(1.5,1.5,1.5),
},
  'models/npc/gf_npc_animated.glb',
  () => {
    robotNPC.playAnimation('Idle')
    // animation
    const dummyent = new Entity()
    dummyent.addComponent(
      new NPCDelay(0.5, () => {
        robotNPC.playAnimation('Talking')
        npcFirstPrompt.show()
      })
    )
    engine.addEntity(dummyent)
  },
  {
    faceUser: true,
    hoverText:'Talk',
    onWalkAway: () => {
      robotNPC.playAnimation('Idle', true, 2)
    }
  }
)



