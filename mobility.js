// mobility schema:
// [ { mobTitle: string, duration: number, isDouble: boolean }, {...}, ...]

const PULL_MOB = {
    id: 5,
    title: "Pull mobility",
    picture:"https://images.pexels.com/photos/2157885/pexels-photo-2157885.jpeg?auto=compress&cs=tinysrgb&w=150",
    exerciseList: [
        {
            mobTitle: "Child pose",
            picture: "./assets/images/exercises/child.webp",
            duration: 60,
            isDouble: false
        },
        {
            mobTitle: "Deep squat",
            picture: "./assets/images/exercises/deep-squat.webp",
            duration: 60,
            isDouble: false
        },
        {
            mobTitle: "Shoulder flexion w/ stick",
            picture: "./assets/images/exercises/.webp",
            duration: 60,
            isDouble: false
        },
        {
            mobTitle: "Shoulder stand",
            picture: "./assets/images/exercises/shoulder-stand.webp",
            duration: 60,
            isDouble: false
        },
        {
            mobTitle: "Lat stretch",
            picture: [
                "./assets/images/exercises/lat-stretch.webp",
                "./assets/images/exercises/lat-stretch2.webp",
            ],
            duration: 60,
            isDouble: true
        },
        {
            mobTitle: "Pigeon pose",
            picture: "./assets/images/exercises/pigeon.webp",
            duration: 60,
            isDouble: true
        },
        {
            mobTitle: "Pistol stretch",
            picture: "./assets/images/exercises/.webp",
            duration: 60,
            isDouble: true
        },
        {
            mobTitle: "Frog pose",
            picture: "./assets/images/exercises/frog.webp",
            duration: 60,
            isDouble: false
        },
        {
            mobTitle: "Forward roll",
            picture: "./assets/images/exercises/forward-roll.webp",
            duration: 60,
            isDouble: false
        },
        {
            mobTitle: "Wrist extension & flexion",
            picture: "./assets/images/exercises/wrist-extension.webp",
            duration: 60,
            isDouble: true
        }
    ]
}

const PUSH_MOB = {
    id: 6,
    title: "Push mobility",
    picture:"https://images.pexels.com/photos/5374862/pexels-photo-5374862.jpeg?auto=compress&cs=tinysrgb&w=150",
    exerciseList: [
        {
            mobTitle: "Deep squat",
            duration: 60,
            isDouble: false
        },
        {
            mobTitle: "Child pose",
            duration: 60,
            isDouble: false
        },
        {
            mobTitle: "Supinated hang",
            duration: 60,
            isDouble: false
        },
        {
            mobTitle: "Table top",
            duration: 60,
            isDouble: false
        },
        {
            mobTitle: "Triceps stretch",
            duration: 60,
            isDouble: true
        },
        {
            mobTitle: "Hip flexion",
            duration: 60,
            isDouble: true
        },
        {
            mobTitle: "Supported side split",
            duration: 60,
            isDouble: false
        },
        {
            mobTitle: "Forward roll",
            duration: 60,
            isDouble: false
        },
        {
            mobTitle: "Wrist extension & flexion",
            duration: 60,
            isDouble: true
        }
    ]
}

const LEGS_MOB = {
    id: 7,
    title: "Legs mobility",
    picture:"https://images.pexels.com/photos/2158400/pexels-photo-2158400.jpeg?auto=compress&cs=tinysrgb&w=150",
    exerciseList: [
        {
            mobTitle: "Deep squat",
            duration: 60,
            isDouble: false
        },
        {
            mobTitle: "Child pose",
            duration: 60,
            isDouble: false
        },
        {
            mobTitle: "Laying half spinal twist",
            duration: 60,
            isDouble: false
        },
        {
            mobTitle: "Chest opener",
            duration: 60,
            isDouble: false
        },
        {
            mobTitle: "Shoulder flexion",
            duration: 60,
            isDouble: false
        },
        {
            mobTitle: "Shoulder extension on floor",
            duration: 60,
            isDouble: false
        },
        {
            mobTitle: "Upper back stretch",
            duration: 60,
            isDouble: false
        },
        {
            mobTitle: "Couch stretch",
            duration: 60,
            isDouble: true
        },
        {
            mobTitle: "Forward roll",
            duration: 60,
            isDouble: false
        },
        {
            mobTitle: "Calf stretch",
            duration: 60,
            isDouble: true
        },
        {
            mobTitle: "Wrist extension & flexion",
            duration: 60,
            isDouble: true
        }
    ]
}

const UPPER_BODY_MOB = {
    id: 8,
    title: "Upper body mobility",
    picture:"https://images.pexels.com/photos/25626587/pexels-photo-25626587/free-photo-of-ai-generated-shapes.jpeg?auto=compress&cs=tinysrgb&w=150",
    exerciseList: [
        {
            mobTitle: "Deep squat",
            duration: 60,
            isDouble: false
        },
        {
            mobTitle: "Child pose",
            duration: 60,
            isDouble: false
        },
        {
            mobTitle: "Supinated hang",
            duration: 60,
            isDouble: false
        },
        {
            mobTitle: "Chest opener",
            duration: 60,
            isDouble: false
        },
        {
            mobTitle: "Table top",
            duration: 60,
            isDouble: false
        },
        {
            mobTitle: "Triceps stretch",
            duration: 60,
            isDouble: true
        },
        {
            mobTitle: "Hip flexion",
            duration: 60,
            isDouble: true
        },
        {
            mobTitle: "Supported side split",
            duration: 60,
            isDouble: true
        },
        {
            mobTitle: "Forward roll",
            duration: 60,
            isDouble: false
        },
        {
            mobTitle: "Wrist extension & flexion",
            duration: 60,
            isDouble: true
        }
    ]
}

export default [PUSH_MOB, PULL_MOB, LEGS_MOB, UPPER_BODY_MOB]