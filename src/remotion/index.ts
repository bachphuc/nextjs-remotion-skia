import { registerRoot } from "remotion";
// @ts-expect-error disable error
import { LoadSkiaWeb } from "@shopify/react-native-skia/lib/module/web";

(async () => {
  await LoadSkiaWeb();
  console.log(`LoadSkiaWeb success`)
  const { MyVideo } = await import("./Root");
  registerRoot(MyVideo);
})();
