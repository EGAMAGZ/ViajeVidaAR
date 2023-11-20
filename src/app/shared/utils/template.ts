import { renderString, configure } from "nunjucks";

configure(
  {
    autoescape: false
  }
)

type ArTemplateParams = {
  debug: boolean;
  vrModeUI: boolean;
  modelPath: string;
  name: string;
  description: string;
}

export function generateArTemplate(template: string, params: ArTemplateParams): string {
  return renderString(template, params);
}
