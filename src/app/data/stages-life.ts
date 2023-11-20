import { Artwork, adolescenceArtworks, adulthoodArtworks, chilhoodArtworks, oldAgeArtworks } from "./artworks"

export interface StageOfLife {
  name: string
  artworks: Artwork[]
}

const childhood: StageOfLife = {
  name: "Niñez",
  artworks: chilhoodArtworks
}

const adolescence: StageOfLife = {
  name: "Adolescencia",
  artworks: adolescenceArtworks
}

const adulthood: StageOfLife = {
  name: "Adultez",
  artworks: adulthoodArtworks
}

const oldAge: StageOfLife = {
  name: "Vejez",
  artworks: oldAgeArtworks
}
const stagesOfLife: StageOfLife[] = [
  childhood,
  adolescence,
  adulthood,
  oldAge
]
export default stagesOfLife
