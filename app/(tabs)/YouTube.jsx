import React, { useCallback, useState } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import YoutubeIframe from 'react-native-youtube-iframe';

const YouTubePlayer = () => {
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === 'ended') {
      setPlaying(false);
      alert('Video has finished playing!');
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  return (
    <View style={styles.container}>
      <YoutubeIframe
        height={300}
        play={playing}
        videoId="dQw4w9WgXcQ"  // Replace with your video ID
        onChangeState={onStateChange}
      />
      <View style={styles.buttonContainer}>
        <Button title={playing ? "Pause" : "Play"} onPress={togglePlaying} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    marginTop: 20,
  },
});

export default YouTubePlayer;
