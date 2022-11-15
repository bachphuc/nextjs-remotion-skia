// @ts-expect-error
import { WithSkiaWeb } from "@shopify/react-native-skia/lib/module/web";

export function SkiaPlayer(){
  return (
    <WithSkiaWeb
      getComponent={() => import("./MyPlayer")}
      fallback={<div>Loading Skia...</div>}
    />
  );
}