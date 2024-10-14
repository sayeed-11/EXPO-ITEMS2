import { View, Text, FlatList, Dimensions, Image, StyleSheet } from 'react-native'
import React from 'react'
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';

const data = new Array(50).fill(0).map((_, index) => ({ 
    id: index,
    name : "Rose Taisy",
    email : "rosetaisy.gmail.com",
    jobTitle : "Software Engineering",
    imgURL : "https://i.pinimg.com/736x/8c/d9/68/8cd968a3ad45263909263947e2805ac7.jpg"
 }))

const FlatListAnim = () => {
    const { width, height } = Dimensions.get("window");
    const viewableItems = useSharedValue([]);
    return (
        <View style={{ flex: 1 }}>
            <Image
            // source={{uri : "https://i.pinimg.com/474x/5d/54/bc/5d54bc497616f06e46ebaa1737060a55.jpg"}}
            // source={{uri : "https://i.pinimg.com/564x/f2/4e/ea/f24eea313bd10f228e306d00346c4c65.jpg"}}
            // source={{uri : "https://i.pinimg.com/564x/a4/cd/ca/a4cdca353b5df7d72e77e6d433bd5948.jpg"}}
            src='https://i.pinimg.com/564x/a4/cd/ca/a4cdca353b5df7d72e77e6d433bd5948.jpg'
            style={StyleSheet.absoluteFillObject}
            blurRadius={15}
            />
            <View>
                <FlatList
                    contentContainerStyle={{ paddingTop: 30 }}
                    data={data}
                    onViewableItemsChanged={({ viewableItems: vItems }) => {
                        viewableItems.value = vItems;
                    }}
                    renderItem={({ item }) => {
                        return (
                            <Card item={item} viewableItems={viewableItems}/>
                        )
                    }}
                />
            </View>
        </View>
    )
}

export default FlatListAnim

const Card = ({item, viewableItems}) => {
    const { width, height } = Dimensions.get("window");
    const rStyle = useAnimatedStyle(() => {
        const isVisible = Boolean(
            viewableItems.value.
            filter((item) => item.isViewable).
            find((viewableItem) => viewableItem.item.id === item.id)
        )
        return {
            opacity: withTiming(isVisible ? 1: 0),
            transform : [
                {scale : withSpring(isVisible ? 1: 0.6)},
                // {translateX :  withSpring(isVisible ? 0: 50)},
            ] 
        }
    }, [])
    return (
        <Animated.View

        className="bg-white/[0.3] border-[1.5px] border-white/[0.5]"
            style={[{
                width: width * 0.9,
                // height: 70,
                // backgroundColor: '#FFAF20',
                marginHorizontal: 'auto',
                marginVertical: 5,
                borderRadius: 15,
                flexDirection:'row',
                paddingHorizontal:10,
                paddingVertical:5,
                gap:10,
                // elevation:5,
                alignItems:'center'
            }, rStyle]} >
                <View >
                    <Image style={{
                        width:70,
                        height:70,
                        borderRadius:50
                    }} 
                    source={{uri : item.imgURL}}
                    alt='image'
                    />
                </View>
                <View style={{
                    flex:1
                }}>
                    <Text className="text-black text-xl font-semibold">{item.name}</Text>
                    <Text className="text-black">{item.jobTitle}</Text>
                    <Text className="text-black text-xs">{item.email}</Text>
                </View>
                <View>
                    <Text className="text-xl italic text-black/[0.1]">{item.id}</Text>
                </View>
            </Animated.View>
    )
}