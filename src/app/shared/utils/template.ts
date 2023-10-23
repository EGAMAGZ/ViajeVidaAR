import { renderString, configure } from "nunjucks";

configure(
  {
    autoescape: false
  }
)

// TODO: Sustituir a-image (2D) por a-entity (3D)
const njkTemplate = `<!DOCTYPE html>
<html>
<script src="/assets/scripts/aframe.min.js"></script>
<script src="/assets/scripts/aframe-ar.js"></script>
<!--<script src=”https://rawgit.com/donmccurdy/aframe-extras/master/dist/aframe-extras.loaders.min.js"></script>-->

<body style="margin: 0px; overflow: hidden;">
<a-scene embedded arjs="debugUIEnabled: {{ debug }};" vr-mode-ui="enabled: {{ vrModeUI }}; trackingMethod: best;">
  <a-assets>
    <img id="frame" src="assets/textures/wood.jpg">
  </a-assets>
    <a-marker preset="hiro">
    <a-box src="#frame" position="0 0 0" width="5" height="0.1" depth="5" color="#231709"></a-box>
      <a-image src="{{ modelPath }}" position="0 0.3 0" rotation="-90 0 0" width="4" height="4"></a-image>
      <!--<a-entity gltf-model="url(assets/models/low_poly_rabbit/scene.gltf)" position="0 1 0"></a-entity>-->
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
