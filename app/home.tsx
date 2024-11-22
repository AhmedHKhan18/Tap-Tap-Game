import { router } from "expo-router";
import { View, Text, Button, TouchableOpacity, BackHandler  } from "react-native";
import RNExitApp from 'react-native-exit-app';
import { useNavigation } from 'expo-router';
import { useEffect } from 'react';



export default function Home(){
    const navigation = useNavigation();

    useEffect(() => { 
        navigation.addListener('beforeRemove', (e) => {
            e.preventDefault();
            console.log('onback');
            // Do your stuff here
            navigation.dispatch(e.data.action);
        });
    }, []);

    return(
        <View className="flex-1 bg-blue-600 justify-around items-center">
            <View className="items-center">
            <Text className="text-5xl font-bold text-white mb-10">Tap Tap Game</Text>
            <Text className="text-4xl font-bold text-white">Main Menu</Text>
            </View>
            <View className="flex gap-10">
                <TouchableOpacity className="bg-green-500 p-4 w-80 items-center rounded-full" onPress={()=>router.push('/levels')}>
                    <Text className="text-white font-bold">Play Now</Text>
                    </TouchableOpacity>
                <TouchableOpacity className="bg-red-500 p-4 items-center rounded-full" onPress={()=>{BackHandler.exitApp()}}>
                    <Text className="text-white font-bold">Exit</Text>
                    </TouchableOpacity>
            </View>
        </View>
    )
}