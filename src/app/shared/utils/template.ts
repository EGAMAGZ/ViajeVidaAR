import { read } from "fs";
import { renderString, render } from "nunjucks";

type ARTemplateParams = {
  debug: boolean;
  vrModeUi: boolean;
}

const njkTemplate = `<!DOCTYPE html>
<html>
<!-- include A-Frame -->
<script src="https://aframe.io/releases/0.6.1/aframe.min.js"></script>
<!-- include ar.js for A-Frame -->
<script src="https://cdn.rawgit.com/jeromeetienne/AR.js/1.5.0/aframe/build/aframe-ar.js"></script>

<body style="margin: 0px; overflow: hidden;">
  <a-scene embedded arjs="debugUIEnabled: {{ debug }};" vr-mode-ui="enabled: {{ vrModeUi }};">
    <a-marker preset="hiro">
      <a-image src="./../bunny.png" rotation="0 0 0" width="3" height="4"></a-image>
    </a-marker>
    <a-entity camera></a-entity>
  </a-scene>
</body>

</html>
`

export function generateARTemplate(path: string, params: ARTemplateParams): string {
  // return __dirname;
  return renderString(njkTemplate, params);
}
