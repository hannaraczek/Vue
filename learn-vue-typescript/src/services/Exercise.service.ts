import { Api } from '@/services/Api.service'
import { Exercise } from '@/data/WorkoutRecord.interface'
import { exercisesUrl } from '@/services/Constants'
import { AxiosResponse } from 'axios'

export class ExerciseService extends Api {
  getExercises(): Promise<AxiosResponse<Exercise[]>> {
    return this.get<Exercise[]>(`${exercisesUrl}`)
  }

  getExercise(id: string): Promise<AxiosResponse<Exercise>> {
    return this.get<Exercise>(`${exercisesUrl}/${id}`)
  }
}
