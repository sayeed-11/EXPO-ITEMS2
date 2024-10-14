import { View, Text, StyleSheet } from 'react-native';
import React, { useRef, useState } from 'react';
import Slider from '@react-native-community/slider';
import { Video } from 'expo-av';

const ExpoSlider = () => {
  const [value, setValue] = useState(0.3);
  const video = useRef(null);
  const [status, setStatus] = useState({});

  return (
    <View style={{ 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: 'white' 
      }}>
      <Text style={{ marginBottom: 20, fontSize: 18, color: '#333' }}>
        Slider Value: {value.toFixed(2)}
      </Text>
      <Slider
        style={{ width: 250, height: 70 }}
        minimumValue={0}
        maximumValue={1}
        minimumTrackTintColor="#1f8ef1"
        maximumTrackTintColor="#e5e5e5"
        thumbTintColor="rgba(0,0,0,0.1)" // Changes thumb color
        value={value}
        onValueChange={(newValue) => setValue(newValue)}
        
      />
      <Text style={{ marginTop: 20, fontSize: 16, color: '#555' }}>
        Adjust the slider to change the value
      </Text>

      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: 'https://www.w3schools.com/html/mov_bbb.mp4', // Replace with your video URI
        }}
        useNativeControls
        resizeMode="contain"
        isLooping={false}
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
    </View>
  );
}

export default ExpoSlider;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    video: {
      width: 320,
      height: 200,
      borderRadius:20,
      overflow:'hidden'
    },
    buttons: {
      marginTop: 10,
    },
  });
