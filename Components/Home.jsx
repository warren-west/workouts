import { ScrollView } from "react-native"
import SelectWorkout from "./SelectWorkout.jsx"
import { styles } from "../styling.js"

export default function Home() {

    return (
        <ScrollView style={styles.workoutContainer}>
            <SelectWorkout />
        </ScrollView>
    )
}