import { Composition } from "remotion";
import MyComp from "./MyComp";
import SkiaComp from "./SkiaComp";
 
export const MyVideo = () => {
  return (
    <>
      <Composition
        component={SkiaComp}
        durationInFrames={120}
        width={1920}
        height={1080}
        fps={30}
        id="my-comp"
        defaultProps={{ text: "World" }}
      />
    </>
  );
};