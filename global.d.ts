declare module '*.css';
declare module 'nativewind' {
  // Add typings for className
  import { ReactNode } from 'react';
  import { ViewStyle, TextStyle, ImageStyle } from 'react-native';

  type ClassNameProp<T> = string | T | Array<string | T>;

  interface NativeWindComponent<T> {
    className?: ClassNameProp<T>;
    children?: ReactNode;
    style?: ViewStyle | TextStyle | ImageStyle;
  }

  export function styled<T>(Component: React.ComponentType<T>): React.ComponentType<T & NativeWindComponent<T>>;
}
