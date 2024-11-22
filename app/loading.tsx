import { View, Text } from "react-native";
import { useRef } from "react";
import { LottieBox } from "~/components/LottieBox";
import { useEffect } from "react";
import { router } from "expo-router";
import { useLocalSearchParams } from "expo-router";

export default function Loading(){
    const { item }:any = useLocalSearchParams();
    console.log("🚀 ~ Loading ~ item:", item)
    const animageRef1 = useRef(null);

 useEffect(()=>{
    setTimeout(() => {
    router.push('/play', item)
    }, 2000);
},[])
    

    return(
        <View className="bg-black flex-1 justify-center items-center">
            <LottieBox src={require('../assets/lottiefiles/Animation - 1732077186927.json')} animate={animageRef1}
                    loop={false}
                    type="Circle Animation"
                    style={{width: 200, height: 200}}
                     />
            <Text className="text-3xl text-white font-bold">Loading...</Text>
        </View>
    )
}