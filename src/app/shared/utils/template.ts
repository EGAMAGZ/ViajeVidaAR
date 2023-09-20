import { renderString, configure } from "nunjucks";

configure(
  {
    autoescape: false
  }
)

const njkTemplate = `
<!DOCTYPE html>
<html>
<script src="/assets/scripts/aframe.min.js"></script>
<script src="/assets/scripts/aframe-ar.js"></script>

<body style="margin: 0px; overflow: hidden;">
  <a-scene embedded arjs="debugUIEnabled: {{ debug }};" vr-mode-ui="enabled: {{ vrModeUI }};">
    <a-marker preset="hiro">
      <a-image src="/assets/bunny.png" rotation="0 0 0" width="3" height="4"></a-image>
    </a-marker>
    <a-entity camera></a-entity>
  </a-scene>
</body>

</html>`;

type ArTemplateParams = {
  debug: boolean;
  vrModeUI: boolean;
}

export function generateArTemplate(params: ArTemplateParams): string {
  return renderString(njkTemplate, params);
}
