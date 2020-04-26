import { Api } from '@/services/Api.service'
import { usersUrl } from '@/services/Constants'
import { AxiosResponse } from 'axios'
import { WorkoutLog, WorkoutRecord } from '@/data/WorkoutLog.interface'

export class WorkoutService extends Api {
  getWorkoutLogs(userId: string): Promise<AxiosResponse<WorkoutLog[]>> {
    return this.get(`${usersUrl}/${userId}/workoutLogs`)
  }

  // TODO: figure out how to get a particular workout log
  getWorkoutById(userId: number, workoutId: string): Promise<AxiosResponse<WorkoutRecord>> {
    return this.get<WorkoutRecord>(`${usersUrl}/${userId}/workoutLogs?id=${workoutId}`)
  }

  // TODO: test/fix this guy
  updateWorkouts(userId: string, workouts: WorkoutRecord[]): Promise<AxiosResponse> {
    return this.patch(`${usersUrl}/${userId}`, { workouts })
  }
}
