import Animated, { useAnimatedKeyboard, useAnimatedStyle } from "react-native-reanimated";
import { Dimensions, ScrollView, TextInput } from "react-native";

import {
  BaseButton,
  BorderlessButton,
  Directions,
  FlingGestureHandler,
  ForceTouchGestureHandler,
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
  HoverEffect,
  LongPressGestureHandler,
  MouseButton,
  NativeViewGestureHandler,
  PanGestureHandler,
  PinchGestureHandler,
  PointerType,
  PureNativeButton,
  RawButton,
  RectButton,
  RotationGestureHandler,
  Swipeable,
  TapGestureHandler,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';

import {
  DrawerLayoutAndroid,
  FlatList,
  RefreshControl,
  Switch,
} from 'react-native';
// import { GestureObjects } from "react-native-gesture-handler/lib/typescript/handlers/gestures/gestureObjects";
// import { GestureStateManager } from "react-native-gesture-handler/lib/typescript/handlers/gestures/gestureStateManager";


export default function AnimatedKeyboardExample() {
  const keyboard = useAnimatedKeyboard();
  const translateStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: -keyboard.height.value }],
    };
  });

// const Tap = Gesture.Tap()

  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'white'
      }}>
      <Animated.View style={translateStyle}>
        <TextInput style={{ backgroundColor: 'gray', width: Dimensions.get('window').width - 50, height: 50, marginBottom: 5 }} />
      </Animated.View>
    </ScrollView>
  );
}