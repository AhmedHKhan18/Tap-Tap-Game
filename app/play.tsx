import { View, Text, TouchableOpacity } from "react-native";
import { LottieBox } from "~/components/LottieBox";
import { useEffect, useRef, useState } from "react";
import ConfettiCannon from 'react-native-confetti-cannon';
import { useLocalSearchParams } from "expo-router";


export default function Play(){
    const explosionRef = useRef<ConfettiCannon | null>(null);
    const animageRef1:any = useRef(null);
    const animageRef:any = useRef(null);
    const [count, setCount] = useState(25)
    const [timeover, setTimeover] = useState(false)
    const { item }:any = useLocalSearchParams();
    console.log("🚀 ~ Play ~ item:", item)


    const handleExplosion = () => {
        if (explosionRef.current) {
            explosionRef.current.start();
        }
    };
    
useEffect(()=>{
    if(count == 0 && !timeover){
        handleExplosion()
        alert('You Won!')
    }else{
        setTimeout(()=>{
            setTimeover(true)
        },12000)
    }
    // setTimeout(()=>{
    //     animageRef1.current?.play();
    // },3000)
},[count])

    return(
        <View className="flex-1 bg-[rgb(240,222,61)] justify-around items-center">
            <Text className="text-3xl font-bold text-white">{item.name}</Text>
        <LottieBox src={item.time} animate={animageRef1}
        loop={false}
        type="Circle Animation"
        style={{width: 300, height: 300}}
        />
        <Text className="text-5xl font-bold text-white mb-40">{count}</Text>
        <View className="flex-row gap-20 justify-center items-center">
        <TouchableOpacity className="h-32 w-32 border-4 border-gray-400 rounded-full bg-white" onPress={()=>setCount(count>0?count-1 : 0)}></TouchableOpacity>
        <TouchableOpacity className="h-32 w-32 border-4 border-gray-400 rounded-full bg-white" onPress={()=>setCount(count>0?count-1 : 0)}></TouchableOpacity>
        </View>
        <ConfettiCannon count={20} origin={{x: -10, y: 0}} autoStart={false} ref={explosionRef}/>
        </View>
    )
}