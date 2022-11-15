import { Player } from '@remotion/player'
import { SkiaPlayer } from '../src/components/SkiaPlayer'
import MyComp from '../src/remotion/MyComp'
import SkiaComp from '../src/remotion/SkiaComp'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>

      {/* <SkiaPlayer /> */}

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

    </div>
  )
}
