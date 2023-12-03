import { Artwork } from "@/app/data/artworks";
import { renderString, configure } from "nunjucks";

configure(
  {
    autoescape: false
  }
)


type ArTemplateParams = {
  debug: boolean;
  vrModeUI: boolean;
  artwork: Artwork;
}

export function generateArTemplate(template: string, params: ArTemplateParams): string {
  return renderString(template, params);
}
