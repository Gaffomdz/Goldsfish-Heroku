import { NPC, NPCDelay } from '@dcl/npc-scene-utils'
import { ShowWelcomePromptNPC2 } from 'src/prompts/NPC2/welcomePrompt2'

export const myNPC2 = new NPC({
  position: new Vector3(12.550, 0.000, 22.720),
  scale: new Vector3(1.000, 1.000, 1.000),
  rotation: new Quaternion().setEuler(0.000, 66.439, 0.000),
}, 'models/npc/trilligent_npc.glb',


  () => {
    myNPC2.playAnimation('Idle')
    // animation
    const dummyent = new Entity()
    dummyent.addComponent(
      new NPCDelay(0.5, () => {
        myNPC2.playAnimation('Talking')
        ShowWelcomePromptNPC2()
      })
    )
    engine.addEntity(dummyent)

  },
  {
    faceUser: true,
    reactDistance:2,
    hoverText:'Talk',
    onWalkAway: () => {
      myNPC2.playAnimation('Idle', true, 2)
    }
  }


)