import { View, Text, ScrollView, FlatList, Image, StatusBar, StyleSheet, Animated } from 'react-native'
import React from 'react'

const users = [
    {
        id: 1,
        img: "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
        name: "person1",
        jobTitle: "Web Development",
        email: 'person@gmail.com'
    },
    {
        id: 2,
        img: "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
        name: "person1",
        jobTitle: "Web Development",
        email: 'person@gmail.com'
    },
    {
        id: 3,
        img: "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
        name: "person1",
        jobTitle: "Web Development",
        email: 'person@gmail.com'
    },
    {
        id: 4,
        img: "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
        name: "person1",
        jobTitle: "Web Development",
        email: 'person@gmail.com'
    },
    {
        id: 5,
        img: "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
        name: "person1",
        jobTitle: "Web Development",
        email: 'person@gmail.com'
    },
    {
        id: 6,
        img: "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
        name: "person1",
        jobTitle: "Web Development",
        email: 'person@gmail.com'
    },
    {
        id: 7,
        img: "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
        name: "person1",
        jobTitle: "Web Development",
        email: 'person@gmail.com'
    },
    {
        id: 8,
        img: "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
        name: "person1",
        jobTitle: "Web Development",
        email: 'person@gmail.com'
    },
    {
        id: 9,
        img: "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
        name: "person1",
        jobTitle: "Web Development",
        email: 'person@gmail.com'
    },
    {
        id: 10,
        img: "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
        name: "person1",
        jobTitle: "Web Development",
        email: 'person@gmail.com'
    },
    {
        id: 11,
        img: "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
        name: "person1",
        jobTitle: "Web Development",
        email: 'person@gmail.com'
    },
    {
        id: 12,
        img: "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
        name: "person1",
        jobTitle: "Web Development",
        email: 'person@gmail.com'
    },
    {
        id: 13,
        img: "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
        name: "person1",
        jobTitle: "Web Development",
        email: 'person@gmail.com'
    },
    {
        id: 14,
        img: "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
        name: "person1",
        jobTitle: "Web Development",
        email: 'person@gmail.com'
    },
    {
        id: 15,
        img: "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
        name: "person1",
        jobTitle: "Web Development",
        email: 'person@gmail.com'
    },
    {
        id: 16,
        img: "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
        name: "person1",
        jobTitle: "Web Development",
        email: 'person@gmail.com'
    },
    {
        id: 17,
        img: "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
        name: "person1",
        jobTitle: "Web Development",
        email: 'person@gmail.com'
    },
    {
        id: 18,
        img: "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
        name: "person1",
        jobTitle: "Web Development",
        email: 'person@gmail.com'
    },
    {
        id: 19,
        img: "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
        name: "person1",
        jobTitle: "Web Development",
        email: 'person@gmail.com'
    },
    {
        id: 20,
        img: "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
        name: "person1",
        jobTitle: "Web Development",
        email: 'person@gmail.com'
    },
    {
        id: 21,
        img: "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
        name: "person1",
        jobTitle: "Web Development",
        email: 'person@gmail.com'
    },
    {
        id: 22,
        img: "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
        name: "person1",
        jobTitle: "Web Development",
        email: 'person@gmail.com'
    },
    {
        id: 23,
        img: "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
        name: "person1",
        jobTitle: "Web Development",
        email: 'person@gmail.com'
    },
    {
        id: 24,
        img: "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
        name: "person1",
        jobTitle: "Web Development",
        email: 'person@gmail.com'
    },
    {
        id: 25,
        img: "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
        name: "person1",
        jobTitle: "Web Development",
        email: 'person@gmail.com'
    },
    {
        id: 26,
        img: "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
        name: "person1",
        jobTitle: "Web Development",
        email: 'person@gmail.com'
    },
    {
        id: 27,
        img: "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
        name: "person1",
        jobTitle: "Web Development",
        email: 'person@gmail.com'
    },
    {
        id: 28,
        img: "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
        name: "person1",
        jobTitle: "Web Development",
        email: 'person@gmail.com'
    },
    {
        id: 29,
        img: "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
        name: "person1",
        jobTitle: "Web Development",
        email: 'person@gmail.com'
    },
    {
        id: 30,
        img: "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
        name: "person1",
        jobTitle: "Web Development",
        email: 'person@gmail.com'
    },
]

const AAVATA_SIZE = 70;
const SPACING = 20;
const ITEM_SIZE = AAVATA_SIZE + (SPACING * 0.5) * 3.099;

const List = () => {
    const scrollY = React.useRef(new Animated.Value(0)).current;

    return (
        <View className="flex-1 bg-white">
            <Image
                // source={{uri : "https://i.pinimg.com/564x/07/93/86/079386c86e5921894032efb813fbad56.jpg"}}
                source={{ uri: "https://i.pinimg.com/564x/8c/f5/44/8cf54416f13eab6fc2a4ed13f432e56a.jpg" }}
                style={StyleSheet.absoluteFillObject}
                blurRadius={20}
            />
            <Animated.FlatList
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                    { useNativeDriver: true }
                )}
                data={users}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    padding: SPACING,
                    paddingTop: StatusBar.currentHeight * 1.5 || 50,
                }}
                keyExtractor={item => item.id}
                renderItem={({ item, index }) => {
                    const inputRange = [-1, 0, ITEM_SIZE * index, ITEM_SIZE * (index + 3)];
                    const inputOpacity = [-1, 0, ITEM_SIZE * index, ITEM_SIZE * (index + 1)];
                    const scale = scrollY.interpolate({
                        inputRange,
                        outputRange: [1, 1, 1, 0],
                        extrapolate: 'clamp',
                    });
                    const opacity = scrollY.interpolate({
                        inputRange: inputOpacity,
                        outputRange: [1, 1, 1, 0],
                        extrapolate: 'clamp',
                    });
                    return (
                        <Animated.View
                            style={[
                                { elevation: 0, marginBottom: SPACING * 0.5, padding: SPACING * 0.5 },
                                {
                                    transform: [{ scale }],
                                    opacity: opacity
                                },
                            ]} className="bg-white/[0.5] flex-row space-x-5 rounded-2xl border-[1px] border-white">
                            <View>
                                <Image style={{ width: AAVATA_SIZE, height: AAVATA_SIZE, borderRadius: AAVATA_SIZE }} source={{ uri: item.img }} />
                            </View>
                            <View>
                                <Text className="text-xl font-semibold">{item.name}</Text>
                                <Text className="text-violet-700">{item.jobTitle}</Text>
                                <Text className="text-xs">{item.email}</Text>
                            </View>
                        </Animated.View>
                    )
                }}
            />
        </View>
    )
}

export default List