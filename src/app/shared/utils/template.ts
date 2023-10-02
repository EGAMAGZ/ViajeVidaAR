import { renderString, configure } from "nunjucks";

configure(
  {
    autoescape: false
  }
)

// TODO: Sustituir a-image (2D) por a-entity (3D)
const njkTemplate = `
<!DOCTYPE html>
<html>
<script src="/assets/scripts/aframe.min.js"></script>
<script src="/assets/scripts/aframe-ar.js"></script>

<body style="margin: 0px; overflow: hidden;">
  <a-scene embedded arjs="debugUIEnabled: {{ debug }};" vr-mode-ui="enabled: {{ vrModeUI }}; trackingMethod: best;">
    <a-marker preset="hiro">
      <a-image src="{{ modelPath }}" rotation="-90 0 0" width="4" height="4"></a-image>
    </a-marker>
  </a-scene>
</body>

</html>`;
type ArTemplateParams = {
  debug: boolean;
  vrModeUI: boolean;
  modelPath: string;
}

export function generateArTemplate(params: ArTemplateParams): string {
  return renderString(njkTemplate, params);
}
