export interface WorkoutRecord {
    day: Number,
    exercises: ExerciseRecord[]
}

export interface ExerciseRecord  {
    type: ExerciseType,
    firstTapOutTime: Number,
    tapOutNumber: Number,
    notes: String
}

export enum ExerciseType {
    ARM = 'arm',
    LEG = 'leg'
}
