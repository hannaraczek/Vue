export interface WorkoutRecord {
  id: string;
  day: number;
  exercises: ExerciseRecord[];
}

export interface ExerciseRecord {
  exercise: Exercise;
  firstTapOutTime: number;
  tapOutNumber: number;
  notes: string;
}

export interface Exercise {
  id: string;
  type: ExerciseArea;
  videoUrl: string;
  exerciseLength: string;
}

export enum ExerciseArea {
  ARM = 'arm',
  LEG = 'leg',
}
