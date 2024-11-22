
  import '../global.css';





	import { Stack } from "expo-router";




export const unstable_settings = {
	// Ensure that reloading on `/modal` keeps a back button present.
	initialRouteName: "index",
};

export default function RootLayout() {
  	

  	return (
    	
		<Stack>
			<Stack.Screen name="index" options={{ headerShown: false }} />
			<Stack.Screen name="home" options={{ headerShown: false }} />
			<Stack.Screen name="levels" options={{ headerShown: false }} />
			<Stack.Screen name="loading" options={{ headerShown: false }} />
			<Stack.Screen name="play" options={{ headerShown: false }} />
		</Stack>
		
  	);
}