const PUSH = {
    id: 1,
    title: "Push",
    picture: "https://images.pexels.com/photos/2486792/pexels-photo-2486792.jpeg?auto=compress&cs=tinysrgb&w=150",
    exerciseList: [
        {
            workoutTitle: "Elevated side-to-side pike push ups",
            picture: "./assets/images/exercises/pike-pushups.webp",
            repRangeLo: 3,
            repRangeHi: 5,
            setRangeLo: 3,
            setRangeHi: 5,
            restRangeLo: 120,
            restRangeHi: 240,
        },
        {
            workoutTitle: "Dips",
            picture: "./assets/images/exercises/dips.webp",
            repRangeLo: 5,
            repRangeHi: 8,
            setRangeLo: 4,
            setRangeHi: 5,
            restRangeLo: 120,
            restRangeHi: 180,
        },
        {
            workoutTitle: "Push ups",
            picture: "./assets/images/exercises/pushups.webp",
            repRangeLo: 8,
            repRangeHi: 15,
            setRangeLo: 4,
            setRangeHi: 6,
            restRangeLo: 60,
            restRangeHi: 120,
        },
    ]
}

const PULL = {
    id: 2,
    title: "Pull",
    picture: "https://images.pexels.com/photos/2268516/pexels-photo-2268516.jpeg?auto=compress&cs=tinysrgb&w=150",
    exerciseList: [
        {
            workoutTitle: "10kg pull ups",
            picture: "./assets/images/exercises/pullups.webp",
            repRangeLo: 3,
            repRangeHi: 5,
            setRangeLo: 3,
            setRangeHi: 5,
            restRangeLo: 120,
            restRangeHi: 240,
        },
        {
            workoutTitle: "Band chin ups",
            picture: "./assets/images/exercises/band-pullups.webp",
            repRangeLo: 5,
            repRangeHi: 8,
            setRangeLo: 4,
            setRangeHi: 5,
            restRangeLo: 120,
            restRangeHi: 180,
        },
        {
            workoutTitle: "10kg Australian pull ups",
            picture: "./assets/images/exercises/australian-pullups.webp",
            repRangeLo: 8,
            repRangeHi: 12,
            setRangeLo: 4,
            setRangeHi: 6,
            restRangeLo: 60,
            restRangeHi: 120,
        },
    ]
}

const LEGS = {
    id: 3,
    title: "Legs",
    picture: "https://images.pexels.com/photos/2158550/pexels-photo-2158550.jpeg?auto=compress&cs=tinysrgb&w=150",
    exerciseList: [
        {
            workoutTitle: "10kg pistols to bench",
            picture: "./assets/images/exercises/pistol-squats.webp",
            repRangeLo: 4,
            repRangeHi: 8,
            setRangeLo: 3,
            setRangeHi: 5,
            restRangeLo: 60,
            restRangeHi: 60,
        },
        {
            workoutTitle: "10kg side lunges",
            picture: "./assets/images/exercises/side-squats.webp",
            repRangeLo: 8,
            repRangeHi: 12,
            setRangeLo: 3,
            setRangeHi: 4,
            restRangeLo: 60,
            restRangeHi: 60,
        },
        {
            workoutTitle: "Plyo step ups",
            picture: "./assets/images/exercises/plyo-stepups.webp",
            repRangeLo: 8,
            repRangeHi: 12,
            setRangeLo: 3,
            setRangeHi: 4,
            restRangeLo: 60,
            restRangeHi: 60,
        },
        {
            workoutTitle: "Single leg Romanian deadlifts",
            picture: "./assets/images/exercises/single-leg-romanian-deadlift.webp",
            repRangeLo: 8,
            repRangeHi: 12,
            setRangeLo: 3,
            setRangeHi: 4,
            restRangeLo: 30,
            restRangeHi: 30,
        }
    ]
}

const UPPER_BODY = {
    id: 4,
    title: "Upper body",
    picture: "https://images.pexels.com/photos/2158402/pexels-photo-2158402.jpeg?auto=compress&cs=tinysrgb&w=150",
    exerciseList: [
        {
            workoutTitle: "10kg pull ups",
            picture: "./assets/images/exercises/pullups.webp",
            repRangeLo: 3,
            repRangeHi: 5,
            setRangeLo: 3,
            setRangeHi: 5,
            restRangeLo: 120,
            restRangeHi: 240,
        },
        {
            workoutTitle: "Elevated side-to-side pike push ups",
            picture: "./assets/images/exercises/pike-pushups.webp",
            repRangeLo: 3,
            repRangeHi: 5,
            setRangeLo: 3,
            setRangeHi: 5,
            restRangeLo: 120,
            restRangeHi: 240,
        },
        {
            workoutTitle: "Band chin ups",
            picture: "./assets/images/exercises/band-pullups.webp",
            repRangeLo: 8,
            repRangeHi: 10,
            setRangeLo: 4,
            setRangeHi: 5,
            restRangeLo: 120,
            restRangeHi: 180,
        },
        {
            workoutTitle: "Clap push ups",
            picture: "./assets/images/exercises/clap-pushups.webp",
            repRangeLo: 8,
            repRangeHi: 10,
            setRangeLo: 4,
            setRangeHi: 5,
            restRangeLo: 120,
            restRangeHi: 180,
        },
        {
            workoutTitle: "Australian Pull Ups",
            picture: "./assets/images/exercises/australian-pullups.webp",
            repRangeLo: 8,
            repRangeHi: 12,
            setRangeLo: 5,
            setRangeHi: 8,
            restRangeLo: 60,
            restRangeHi: 120,
        },
        {
            workoutTitle: "Band dips",
            picture: "./assets/images/exercises/dips.webp",
            repRangeLo: 8,
            repRangeHi: 12,
            setRangeLo: 5,
            setRangeHi: 8,
            restRangeLo: 60,
            restRangeHi: 120,
        }
    ]
}

export default [ PUSH, PULL, LEGS, UPPER_BODY]