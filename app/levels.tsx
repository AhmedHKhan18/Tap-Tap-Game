import { router } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";

export default function Levels(){
const levels:any[] = [{name: 'Level 1', time: require('../assets/lottiefiles/Animation - 1732079174133.json')},{name: 'Level 2', time: require('../assets/lottiefiles/Animation - 1732079174133 (1).json')},{name: 'Level 3', time: require('../assets/lottiefiles/Animation - 1732079174133 (2).json')},{name: 'Level 4', time: require('../assets/lottiefiles/Animation - 1732079174133 (3).json')}]

    return(
        <View className="bg-slate-600 flex-1 items-center justify-around">
            <Text className="text-5xl font-bold text-white">Select Level</Text>
            <View className="gap-10">
            {levels.map((item, index):any=>{
                return(
                    <TouchableOpacity onPress={()=>router.push('/loading', item)}>
                <View className="bg-yellow-500 p-4 w-80 items-center rounded-2xl">
                    <Text className="text-white font-bold">{item.name}</Text>
                    </View>
                    </TouchableOpacity>
                )})}
            </View>
        </View>
    )
}