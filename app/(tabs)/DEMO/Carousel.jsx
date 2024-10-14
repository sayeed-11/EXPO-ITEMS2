import { View, Text, Image, Dimensions, FlatList, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import Animated, { Extrapolation, interpolate, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue } from 'react-native-reanimated'

const data = new Array(10).fill(0).map((_, index) => ({
    id: index,
    name: "Burj Khlifa",
    imgUrl: "https://i.pinimg.com/474x/41/a6/77/41a67797522716a317a1377a708a4308.jpg",
    about: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas blanditiis quaerat minima dolor aut iure laudantium placeat molestias assumenda quam tempora sequi hic rem esse, sunt maxime, nobis praesentium dolore!"
}))

const ITEM_WIDTH = 280;

// data = [{id: 'left'}, ...data];

const Carousel = () => {
    const [myData, setMyData] = useState(data);
    useEffect(() => {
        setMyData([{ id: 'left' }, ...data, {id:'right'}]);
    }, [])
    const scrollX = useSharedValue(0);
    const onScrollHandler = useAnimatedScrollHandler({
        onScroll: (e) => {
            scrollX.value = e.contentOffset.x;
        }
    })
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#FFF',
        }}>
            <Animated.FlatList
                contentContainerStyle={{alignItems:"center"}}
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                data={myData}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                onScroll={onScrollHandler}
                snapToInterval={ITEM_WIDTH}
                scrollEventThrottle={16}
                // decelerationRate={0}
                bounces={false}
                renderItem={({ item, index }) => <Card item={item} index={index} scrollX={scrollX} />}
            />
        </View>
    )
}

export default Carousel

const { width, height } = Dimensions.get('window')
const Card = ({ item, index, scrollX }) => {
    if (!item.name) {
        return (
            <View style={{
                width:((width - ITEM_WIDTH)/2),
                backgroundColor:'red',
                height:300
            }}></View>
        )
    }

    const rStyle = useAnimatedStyle(() => {
        return {
            transform: [
                // {
                //     translateY: interpolate(
                //         scrollX.value,
                //         [(index - 2) * 300,(index - 1) * 300, index *300],
                //         [0, -20, 0],
                //         Extrapolation.CLAMP
                //     ),
                // },
                {
                    scale: interpolate(
                        scrollX.value,
                        [(index - 2) * ITEM_WIDTH, (index -1) * ITEM_WIDTH, index * ITEM_WIDTH],
                        [0.9, 1, 0.9],
                        Extrapolation.CLAMP
                    )
                }
            ]
        }
    })
    return (
        <Animated.View style={[{
            width: ITEM_WIDTH,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10,
            backgroundColor:'pink',
            borderRadius: 15,
        }, rStyle]}>
            <Animated.Image style={[{
                width: '100%',
                height: 400,
                borderRadius: 15,

            }]} source={{ uri: item.imgUrl }} />
            <View style={{
                width: '100%',
                height: 400,
                position: 'absolute',
                backgroundColor: 'rgba(0,0,0,0.5)',
                borderRadius: 15,
                padding: 20,
                justifyContent: 'flex-end'
            }}>
                <Text style={{ color: 'white' }}>{item.name}</Text>
                <Text style={{ color: 'white' }}>{item.about}</Text>
            </View>
        </Animated.View>
    )
}

// const styles = StyleSheet.create({
//     container: {
//         width: width,
//         justifyContent: 'center',
//         alignItems: 'center',
//     }
// })