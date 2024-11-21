import MaterialIcons from "@expo/vector-icons/MaterialIcons"
import * as Font from "expo-font"
import * as SplashScreen from 'expo-splash-screen'
import { useCallback, useEffect, useState } from "react"
import Home from "./Components/Home"
import WorkoutList from "./Components/WorkoutList"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import MobilityList from "./Components/MobilityList"

// Set up navigation stack
const Stack = createNativeStackNavigator()

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false)

  useEffect(() => {
    async function prepare() {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync()
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync(MaterialIcons.font)
      } catch (e) {
        console.warn(e)
      } finally {
        // Tell the application to render
        setAppIsReady(true)
      }
    }

    prepare()
  }, [])

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync()
    }
  }, [appIsReady])

  if (!appIsReady) {
    return null
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen
          name="WorkoutList"
          component={WorkoutList}
          options={({route}) => ({ title: route.params.name })}
        />
        <Stack.Screen
          name="MobilityList"
          component={MobilityList}
          options={({route}) => ({ title: route.params.name })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}