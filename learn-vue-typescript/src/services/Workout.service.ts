import { Api } from '@/services/Api.service'
import { WorkoutRecord } from '@/data/WorkoutRecord.interface'
import { workoutsURL } from '@/services/Constants'

export class WorkoutService extends Api {
  getEvents(): Promise<WorkoutRecord[]> {
    return this.get<WorkoutRecord[]>(workoutsURL)
      .then(resp => resp.data)
  }

  getEvent(id: string): Promise<WorkoutRecord> {
    return this.get<WorkoutRecord>(`${workoutsURL}/${id}`)
      .then(resp => resp.data)
  }
}
