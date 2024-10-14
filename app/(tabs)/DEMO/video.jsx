import React, { useRef, useState } from 'react';
import { View, Button, StyleSheet, Alert } from 'react-native';
import { Video, VideoFullscreenUpdate } from 'expo-av';

const videoSource =
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

export default function VideoScreen() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const handleFullscreenUpdate = (event) => {
    if (event.fullscreenUpdate === VideoFullscreenUpdate.PLAYER_DID_PRESENT) {
      Alert.alert('Entered Fullscreen');
    } else if (event.fullscreenUpdate === VideoFullscreenUpdate.PLAYER_DID_DISMISS) {
      Alert.alert('Exited Fullscreen');
    }
  };

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pauseAsync();
    } else {
      videoRef.current.playAsync();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <View style={styles.container}>
      <Video
        ref={videoRef}
        style={styles.video}
        source={{ uri: videoSource }}
        useNativeControls
        resizeMode="contain"
        shouldPlay={isPlaying}
        isLooping
        onFullscreenUpdate={handleFullscreenUpdate}
      />
      <View style={styles.controlsContainer}>
        <Button title={isPlaying ? 'Pause' : 'Play'} onPress={handlePlayPause} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  video: {
    width: 350,
    height: 275,
  },
  controlsContainer: {
    padding: 10,
  },
});
