export interface WorkoutRecord {
  id: string;
  day: number;
  exercises: ExerciseRecord[];
}

export interface ExerciseRecord {
  type: ExerciseType;
  firstTapOutTime: number;
  tapOutNumber: number;
  notes: string;
}

export enum ExerciseType {
  ARM = 'arm',
  LEG = 'leg',
}
