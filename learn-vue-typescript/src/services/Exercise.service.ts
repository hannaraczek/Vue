import { Api } from '@/services/Api.service'
import { Exercise } from '@/data/WorkoutRecord.interface'
import { exercisesUrl } from '@/services/Constants'

export class ExerciseService extends Api {
  getExercises(): Promise<Exercise[]> {
    return this.get<Exercise[]>(`${exercisesUrl}`)
      .then(resp => resp.data)
  }

  getExercise(id: string): Promise<Exercise> {
    return this.get<Exercise>(`${exercisesUrl}/${id}`)
      .then(resp => resp.data)
  }
}
