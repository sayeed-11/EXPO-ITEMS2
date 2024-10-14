import React, { useRef } from 'react';
import { View, Text, FlatList, Image, Dimensions, Animated, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');
const ITEM_WIDTH = width * 0.8; // Width of each item in the carousel
const ITEM_HEIGHT = ITEM_WIDTH * 2; // Height of each item in the carousel

const data = [
    { id: '1', title: 'Image 1', image: 'https://via.placeholder.com/400' },
    { id: '2', title: 'Image 2', image: 'https://via.placeholder.com/400' },
    { id: '3', title: 'Image 3', image: 'https://via.placeholder.com/400' },
    { id: '4', title: 'Image 4', image: 'https://via.placeholder.com/400' },
];

const Carousel = () => {
    const scrollX = useRef(new Animated.Value(0)).current;

    const renderItem = ({ item, index }) => {
        return (
            <View style={styles.itemContainer}>
                <View style={{width : ITEM_WIDTH, height : ITEM_HEIGHT, transform:[{translateX:100}]}}>
                    <Image source={{ uri: item.image }} style={styles.image} />
                    <Text style={styles.title}>{item.title}</Text>
                </View>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <Animated.FlatList
                contentContainerStyle={{
                    // flex:1,
                    alignItems: 'center'
                }}
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                snapToAlignment="center"
                decelerationRate="fast"
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    { useNativeDriver: false }
                )}
            />
            <View style={styles.paginationContainer}>
                {data.map((_, index) => {
                    const inputRange = [(index - 1) * ITEM_WIDTH, index * ITEM_WIDTH, (index + 1) * ITEM_WIDTH];
                    const dotOpacity = scrollX.interpolate({
                        inputRange,
                        outputRange: [0.3, 1, 0.3],
                        extrapolate: 'clamp',
                    });
                    const dotScale = scrollX.interpolate({
                        inputRange,
                        outputRange: [0.8, 1.2, 0.8],
                        extrapolate: 'clamp',
                    });
                    return (
                        <Animated.View
                            key={index.toString()}
                            style={[styles.paginationDot, { opacity: dotOpacity, transform: [{ scale: dotScale }] }]}
                        />
                    );
                })}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'yellow'
    },
    itemContainer: {
        width: width,
        // height: ITEM_HEIGHT,
        alignItems: 'center',
        justifyContent: 'center',
        // marginHorizontal: 10,
        // backgroundColor:'red',
    },
    image: {
        width: '100%',
        height: '80%',
        borderRadius: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
    },
    paginationContainer: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 20
    },
    paginationDot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: 'gray',
        marginHorizontal: 8,
    },
});

export default Carousel;
