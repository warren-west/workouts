import { useNavigation } from "@react-navigation/native"
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native"
import { MOBILITY_SUFFIX } from "../utils"
import { styles } from "../styling"

export default function SelectWorkoutItem({ workoutObj }) {

    const navigation = useNavigation()

    const handleWorkoutSelected = () => {
        if (workoutObj.title.endsWith(MOBILITY_SUFFIX))
            navigation.navigate('MobilityList', { selectedMobility: workoutObj, name: `Mobility: ${workoutObj.title}` })
        else
            navigation.navigate('WorkoutList', { selectedWorkout: workoutObj, name: `Workout: ${workoutObj.title}` })
    }

    return (
        <TouchableOpacity style={_styles.container} onPress={() => handleWorkoutSelected()}>
            <Image source={workoutObj.picture} style={styles.workoutItemImage} />
            <Text style={styles.lightText} onPress={() => handleWorkoutSelected()}>
                {workoutObj.title}
            </Text>
        </TouchableOpacity>
    )
}

const _styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 10,
        marginBottom: 8,
    }
})