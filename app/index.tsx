import { router, Stack } from 'expo-router';
import { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';


export default function Home() {

  useEffect(()=>{
    setTimeout(() => {
      router.push('/home')
    }, 5000);
  },[])

  return (
    <View style={styles.container}>
      <Animated.View key={'uniqueKey'}
      entering={FadeIn.duration(400)}
      exiting={FadeOut.duration(400)} 
      className='bg-gray-500 h-20 w-72 items-center justify-center rounded-2xl'>
      <Text className='text-white text-3xl font-bold'>Created By Ahmed</Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
});
