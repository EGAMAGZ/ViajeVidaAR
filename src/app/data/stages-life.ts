import { Paint, adolescencePaints, adulthoodPaints, chilhoodPaints, oldAgePaints } from "./paints"

export interface StageOfLife {
  name: string
  paints: Paint[]
}

const childhood: StageOfLife = {
  name: "Niñez",
  paints: chilhoodPaints
}

const adolescence: StageOfLife = {
  name: "Adolescencia",
  paints: adolescencePaints
}

const adulthood: StageOfLife = {
  name: "Adultez",
  paints: adulthoodPaints
}

const oldAge: StageOfLife = {
  name: "Vejez",
  paints: oldAgePaints
}
const stagesOfLife: StageOfLife[] = [
  childhood,
  adolescence,
  adulthood,
  oldAge
]
export default stagesOfLife
