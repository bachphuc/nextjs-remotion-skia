import { AbsoluteFill, useCurrentFrame } from "remotion";

export default function MyComp() {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill style={{
      backgroundColor: '#fff',
      display: 'flex',
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        fontSize: 96,
        fontFamily: 'Arial, sans-serif',
        color: '#000'
      }}>Good Morning {frame}</div>
    </AbsoluteFill>
  )
}