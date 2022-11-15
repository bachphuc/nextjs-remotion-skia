import { Player } from "@remotion/player";
import SkiaComp from "../remotion/SkiaComp";

export default function MyPlayer() {
  return (
    <Player
      component={SkiaComp}
      inputProps={{ text: "World" }}
      durationInFrames={120}
      compositionWidth={1920}
      compositionHeight={1080}
      fps={30}
      style={{
        width: 720,
        height: 480,
      }}
      controls
    />
  )
}