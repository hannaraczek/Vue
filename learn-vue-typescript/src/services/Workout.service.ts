import { Api } from '@/services/Api'
import { WorkoutRecord } from '@/data/WorkoutRecord.interface'

export class WorkoutService extends Api {
  getEvents(): Promise<WorkoutRecord[]> {
    return this.get<WorkoutRecord[]>('/workouts')
      .then(resp => resp.data)
  }
}
