import { View, Text, FlatList, Dimensions, Image } from 'react-native'
import React from 'react'
import Animated, {
    Extrapolation,
    interpolate,
    useAnimatedScrollHandler,
    useAnimatedStyle,
    useSharedValue
} from 'react-native-reanimated'
const { width, height } = Dimensions.get('window')

const data = new Array(10).fill(0).map((_, index) => ({
    id: index,
    name: "Burj Khlifa",
    imgUrl: "https://i.pinimg.com/474x/41/a6/77/41a67797522716a317a1377a708a4308.jpg",
    about: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas blanditiis quaerat minima dolor aut iure laudantium placeat molestias assumenda quam tempora sequi hic rem esse, sunt maxime, nobis praesentium dolore!"
}))

const Test = () => {
    const scrollX = useSharedValue(0);
    const onScrollHandle = useAnimatedScrollHandler({
        onScroll: e => {
            scrollX.value = e.contentOffset.x;
        }
    })
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white'
        }}>
            <View>
                <Animated.FlatList
                    ListHeaderComponent={<ListHeader />}
                    horizontal
                    data={data}
                    pagingEnabled
                    removeClippedSubviews={false}
                    onScroll={onScrollHandle}
                    renderItem={({ item, index }) => {
                        return (
                            <Card
                                item={item}
                                index={index}
                                scrollX={scrollX}
                            />
                        )
                    }}
                />
            </View>
        </View>
    )
}

export default Test


const Card = ({ item, index, scrollX }) => {
    const rStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateX: interpolate(
                        scrollX.value,
                        [(index - 1) * width, index * width, (index + 1) * width],
                        [-width * 0.30, 0, width * 0.30],
                        Extrapolation.CLAMP
                    )
                },
                {
                    scale: interpolate(
                        scrollX.value,
                        [(index - 1) * width, index * width, (index + 1) * width],
                        [0.9, 1, 0.9],
                        Extrapolation.CLAMP
                    )
                },
            ]
        }
    })
    return (
        <Animated.View style={[{
            width: width,
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 50
        }, rStyle]}>
            <Image source={{ uri: item.imgUrl }} style={{
                width: width * 0.65,
                height: height * 0.5,
                borderRadius: 10
            }} />
        </Animated.View>
    )
}


const ListHeader = () => (
    <View style={{
        justifyContent: 'center',
        alignItems: 'center',
        width: 150, // Set the width of each item in the horizontal FlatList
        padding: 20,
        marginHorizontal: 5,
        backgroundColor: '#ddd',
        position:'absolute',
        marginHorizontal:'auto'
    }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>List Header</Text>
    </View>
);