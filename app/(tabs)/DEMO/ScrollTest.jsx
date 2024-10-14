import { View, Text, ScrollView, Image, Dimensions, ImageBackground } from 'react-native'
import React from 'react'
import Animated, { useAnimatedScrollHandler, interpolate, Extrapolation, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
// import LinearGradient from 'react-native-linear-gradient';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
// import { ImageBackground } from 'react-native-web';
const data = new Array(10).fill(0).map((_, index) => (
    {
        id: index,
        name: "Burj Khlifa",
        imgUrl: "https://i.pinimg.com/736x/3c/ca/75/3cca7522a6419b6d999eb6e2588ebd4c.jpg",
        about: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas blanditiis quaerat minima dolor aut iure laudantium placeat molestias assumenda quam tempora sequi hic rem esse, sunt maxime, nobis praesentium dolore!"
    }
))

const { width, height } = Dimensions.get('window')
const ScrollTest = () => {
    const scrollX = useSharedValue(0);
    const handleScroller = useAnimatedScrollHandler({
        onScroll: (e) => {
            scrollX.value = e.contentOffset.x;
        }
    })
    return (
        <View style={{ flex: 1, backgroundColor: 'white', paddingVertical: 50 }}>
            <StatusBar style='dark' />
            <View style={{
                flex:1
            }}>
                <Animated.ScrollView
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}
                    horizontal
                    pagingEnabled
                    onScroll={handleScroller}
                    
                >
                    {
                        data.map((item, index) => {
                            const rStyle = useAnimatedStyle(() => {
                                return {
                                    transform: [
                                        {
                                            translateX: interpolate(
                                                scrollX.value,
                                                [(index - 1) * width, index * width, (index + 1) * width],
                                                [-width * 0.25, 0, width * 0.25],
                                                Extrapolation.CLAMP
                                            ),
                                        },
                                        // {
                                        //     translateY: interpolate(
                                        //         scrollX.value,
                                        //         [(index - 1) * width, index * width, (index + 1) * width],
                                        //         [width * 0.25, 0, width * 0.25],
                                        //         Extrapolation.CLAMP
                                        //     ),
                                        // },
                                        {
                                            scale: interpolate(
                                                scrollX.value,
                                                [(index - 1) * width, index * width, (index + 1) * width],
                                                [0.8, 1, 0.8],
                                                Extrapolation.CLAMP
                                            )
                                        }
                                    ],
                                }
                            })

                            const imageStyle = useAnimatedStyle(() => {
                                return{
                                    transform:[
                                        {
                                            translateX : interpolate(
                                                scrollX.value,
                                                [(index - 1) * width, index * width, (index + 1) * width],
                                                [-width * 0.25, 0, width * 0.25],
                                                Extrapolation.CLAMP
                                            )
                                        }
                                    ]
                                }
                            })
                            return (
                                <Animated.View key={index} style={[{
                                    width: width,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    overflow: 'hidden'
                                }, rStyle]}>
                                    <View style={{
                                        width: width * 0.8,
                                        height: height * 0.6,
                                        borderRadius: 15,
                                        // padding:5,
                                        overflow:'hidden'
                                    }}>
                                        <Animated.Image style={[{
                                            width: "100%",
                                            height: "100%",
                                            borderRadius: 15,
                                            transform:[{translateX:50}]
                                        }, imageStyle]} source={{ uri: item.imgUrl }} />
                                    </View>
                                    <LinearGradient colors={['rgba(0,0,0,0.1)', 'rgba(0,0,0,0.1)', "#000"]} style={{
                                        width: width * 0.8,
                                        height: height * 0.6,
                                        position: 'absolute',
                                        borderRadius: 15,
                                        padding: 20,
                                        justifyContent: 'flex-end'
                                    }}>
                                        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>{item.name}</Text>
                                        <Text style={{ color: 'white' }}>{item.about}</Text>
                                    </LinearGradient>
                                </Animated.View>
                            )
                        })
                    }
                </Animated.ScrollView>
            </View>
            <View style={{
                justifyContent: 'center',
                flexDirection: 'row',
                gap: 5,
                paddingVertical: 20,
                alignItems: 'center',
                height: height * 0.1,
                transform:[{translateY : -60}]
            }}>
                {
                    data.map((item, index) => {
                        const dotStyle = useAnimatedStyle(() => {
                            return {
                                width: interpolate(
                                    scrollX.value,
                                    [(index - 1) * width, index * width, (index + 1) * width],
                                    [4, 6, 4],
                                    Extrapolation.CLAMP
                                ),
                                height: interpolate(
                                    scrollX.value,
                                    [(index - 1) * width, index * width, (index + 1) * width],
                                    [4, 6, 4],
                                    Extrapolation.CLAMP
                                ),
                                opacity: interpolate(
                                    scrollX.value,
                                    [(index - 1) * width, index * width, (index + 1) * width],
                                    [0.2, 1, 0.2],
                                    Extrapolation.CLAMP
                                ),
                            }
                        })
                        return (
                            <Animated.View key={index} style={[{
                                height: 7,
                                backgroundColor: '#000',
                                borderRadius: 50,
                                opacity: 0,
                                elevation :3
                            }, dotStyle]}
                            />)
                    })
                }
            </View>
        </View >
    )
}

export default ScrollTest