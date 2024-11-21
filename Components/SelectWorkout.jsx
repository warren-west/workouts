import workoutArray from '../workouts.js'
import mobilityArray from '../mobility.js'
import SelectWorkoutItem from './SelectWorkoutItem'
import { Text } from 'react-native'
import { styles } from '../styling.js'

export default function SelectWorkout() {

    const sortedCombinedArray = [
        ...workoutArray,
        ...mobilityArray,
    ].sort((a, b) => b.title - a.title)


    const renderWorkoutItems = () => sortedCombinedArray.map((item) => <SelectWorkoutItem workoutObj={item} key={item.id} />)

    return (
        <>
            <Text style={styles.headerText}>Select a workout:</Text>
            {renderWorkoutItems()}
        </>
    )
}