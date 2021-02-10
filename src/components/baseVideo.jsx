import React, {useState, useEffect, useRef} from 'react'
import {StyleSheet, View} from 'react-native'
import Video from 'react-native-video'
import MediaControls, {PLAYER_STATES} from 'react-native-media-controls'
import {AirbnbRating} from 'react-native-ratings'
import Orientation from 'react-native-orientation-locker'

const BaseVideo = props => {
  // State
  const thisPlayer = useRef(null)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [isFullScreen, setIsFullScreen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [paused, setPaused] = useState(false)
  const [playerState, setPlayerState] = useState(PLAYER_STATES.PLAYING)

  // Add orientation listener
  useEffect(() => {
    Orientation.addOrientationListener(handleOrientation)
    return () => {
      Orientation.removeOrientationListener(handleOrientation)
    }
  }, [])

  // Full screen handler
  const onFullScreen = () => {
    setIsFullScreen(!isFullScreen)
    handleFullscreen()
    console.log('Video in full screen: ', isFullScreen)
  }

  // Device orientation handler: sets screenType in order to change resizeMode as needed
  const handleOrientation = orientation => {
    console.log('Device orientation: ', orientation)
  }

  // Full screen handler: locks orientations when full screen is active
  const handleFullscreen = () => {
    isFullScreen
      ? Orientation.lockToPortrait()
      : Orientation.lockToLandscapeLeft()
    console.log('Full screen video: ', isFullScreen)
  }

  // Seekbar change handler
  const onSeek = seek => {
    thisPlayer.current.seek(seek)
    console.log('Video seek: ', seek)
  }

  // Pause vide handler
  const onPaused = ps => {
    setPaused(!ps)
    setPlayerState(ps)
    console.log('Video pausa: ', ps)
  }

  // Replay handler
  const onReplay = () => {
    setPlayerState(PLAYER_STATES.PLAYING)
    thisPlayer.current.seek(0)
    console.log('Video replay')
  }

  // Video progress handler: it stops when ends
  const onProgress = data => {
    if (!isLoading && playerState !== PLAYER_STATES.ENDED) {
      setCurrentTime(data.currentTime)
      // console.log('Video progress ', data)
    }
  }

  // Loading data handler
  const onLoad = data => {
    setDuration(data.duration)
    setIsLoading(false)
    console.log('Video lodad data: ', data)
  }

  // Start video event handler
  const onLoadStart = data => {
    setIsLoading(true)
    console.log('Video start: ', data)
  }

  // End video event handler
  const onEnd = () => {
    setPlayerState(PLAYER_STATES.ENDED)
    console.log('Video ended')
  }

  // Error loading a video event handler
  const onError = e => {
    console.log('Video error: ', e)
  }

  // Rating results handler
  const ratingCompleted = rating => {
    console.log('User rating is: ' + rating)
  }

  // Exit full screen event handler
  const onFullscreenPlayerDidDismiss = () => {
    console.log('Fullscreen off')
  }

  // Seeking event handler
  const onSeeking = cTime => {
    setCurrentTime(cTime)
    console.log('Seek current time: ', cTime)
  }

  return (
    <>
      <View>
        <Video
          onEnd={onEnd}
          onError={onError}
          onLoad={onLoad}
          onLoadStart={onLoadStart}
          onProgress={onProgress}
          paused={paused}
          ref={thisPlayer}
          resizeMode={'cover'}
          onFullScreen={isFullScreen}
          fullscreenAutorotate={true}
          source={props.source} // TODO: Manage state with Redux
          style={styles.fullScreen}
          volume={10}
          onFullscreenPlayerDidDismiss={onFullscreenPlayerDidDismiss}
          poster="https://i.pinimg.com/originals/be/89/8c/be898cd1192d1f0847a0f4c1bb087fb9.png"
        />
        <MediaControls
          duration={duration}
          isLoading={isLoading}
          mainColor="blue"
          onFullScreen={onFullScreen}
          onPaused={onPaused}
          onReplay={onReplay}
          onSeek={onSeek}
          onSeeking={onSeeking}
          playerState={playerState}
          progress={currentTime}
        />
      </View>
      <View>
        {playerState === PLAYER_STATES.ENDED && (
          <AirbnbRating onFinishRating={ratingCompleted} />
        )}
      </View>
    </>
  )
}

export default BaseVideo

const styles = StyleSheet.create({
  fullScreen: {
    height: 250,
    width: '100%',
  },
  mediaControls: {
    height: '100%',
    flex: 1,
    alignSelf: 'center',
  },
})
