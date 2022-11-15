import { SkiaCanvas } from "@remotion/skia";
import { AbsoluteFill } from "remotion";
import { Circle, Group, Rect, Text, useFont } from "@shopify/react-native-skia";

const width = 1920;
const height = 1080;

export default function SkiaComp(){
  return (
    <AbsoluteFill>
      <SkiaCanvas width={width} height={height}>
        <Rect width={width} height={height} color={'green'} x={0} y={0}></Rect>
      </SkiaCanvas>
    </AbsoluteFill>
  )
}