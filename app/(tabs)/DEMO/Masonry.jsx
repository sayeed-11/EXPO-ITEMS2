import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import MasonryList from 'react-native-masonry-list';
import { SafeAreaView } from 'react-native-safe-area-context';

const images = [
    { uri: 'https://i.pinimg.com/474x/9e/69/3e/9e693e9267797967db28fd603b50d2b3.jpg', id: '1', title:'img' },
    { uri: 'https://i.pinimg.com/474x/f9/38/11/f938110471d35e82541e8434865d7af2.jpg', id: '2',  title:'img' },
    { uri: 'https://i.pinimg.com/474x/53/be/45/53be45c3d2e09786dc0f7b0cadff33c4.jpg', id: '3', title:'img' },
    { uri: 'https://i.pinimg.com/474x/bd/19/a4/bd19a4fbb2e3f586e066fb7e8de84ff4.jpg', id: '4', title:'img' },
    { uri: 'https://i.pinimg.com/474x/08/ba/d7/08bad70d3a98f4de6daccbd3d1f026c6.jpg', id: '5', title:'img' },
    { uri: 'https://i.pinimg.com/474x/28/d6/9d/28d69dd32a1655a2ac35b4dc2aef5096.jpg', id: '6', title:'img' },
    { uri: 'https://i.pinimg.com/474x/f3/5c/5e/f35c5ed914142cbf6d71dafb6c7edc52.jpg', id: '7', title:'img' },
    { uri: 'https://i.pinimg.com/474x/d7/95/bb/d795bbcf58c72b23839ec08bc2cbd9f9.jpg', id: '8', title:'img' },
    { uri: 'https://i.pinimg.com/474x/21/f9/b3/21f9b3d2ff039cdbc4b39617df2606d8.jpg', id: '9', title:'img' },
    { uri: 'https://i.pinimg.com/474x/52/03/1f/52031fd69fe6b7636f10e298e617ed58.jpg', id: '10', title:'img' },
    { uri: 'https://i.pinimg.com/474x/d6/10/60/d61060ced7a5961580b26a2b8d38859f.jpg', id: '11', title:'img' },
    { uri: 'https://i.pinimg.com/474x/03/93/15/03931503a430a12cabc130b5c8a3b7f8.jpg', id: '12', title:'img' },
    { uri: 'https://i.pinimg.com/474x/03/93/15/03931503a430a12cabc130b5c8a3b7f8.jpg', id: '13', title:'img' },
    { uri: 'https://i.pinimg.com/474x/03/93/15/03931503a430a12cabc130b5c8a3b7f8.jpg', id: '14', title:'img' },
    { uri: 'https://i.pinimg.com/474x/03/93/15/03931503a430a12cabc130b5c8a3b7f8.jpg', id: '15', title:'img' },
];

export default function App() {
    return (
        <View style={{ flex: 1 }}>
            <SafeAreaView>
                <Text className="text-red-500 text-center py-3">Masonry List</Text>
            </SafeAreaView>
            <View style={styles.container}>
                <MasonryList
                    images={images}
                    columns={2} // number of columns
                    imageContainerStyle={{ borderRadius: 10 }}
                    spacing={2} // space between items
                    refreshing={true}
                    backgroundColor={'gray'}
                    showsVerticalScrollIndicator={false}
                    // customImageComponent={() => <CustomImageComponent/>} // Use a custom component to add overlay
                />
            </View>
        </View>
    );
}

const CustomImageComponent = ({ data, imageProps }) => {
    
    return (
      <View style={styles.imageWrapper}>
        <Image
          source={{ uri: "https://i.pinimg.com/474x/9e/69/3e/9e693e9267797967db28fd603b50d2b3.jpg" }}
          style={[styles.image]}
          resizeMode="cover"
        />
        <View style={styles.overlay}>
          <Text style={styles.overlayText}>{"IMAGES"}</Text>
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
    },
    imageWrapper: {
      position: 'relative',
    },
    image: {
      width: '100%',
      height: 100,
      borderRadius: 10,
    },
    overlay: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent overlay
      padding: 10,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
    },
    overlayText: {
      color: 'white',
      fontSize: 16,
      textAlign: 'center',
    },
  });