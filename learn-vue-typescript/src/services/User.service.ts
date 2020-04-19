import { Api } from '@/services/Api.service'
import { WorkoutRecord } from '@/data/WorkoutRecord.interface'
import { usersUrl } from '@/services/Constants'
import { AxiosResponse } from 'axios'

export class UserSerivce extends Api {
  getUser(id: number): Promise<AxiosResponse<User>> {
    return this.get<User>(`${usersUrl}/${id}`)
  }

  // TODO: test this guy
  updateWorkouts(userId: number, workouts: WorkoutRecord[]): Promise<AxiosResponse> {
    return this.patch(`${usersUrl}/${userId}`, { workouts })
  }
}

export interface User {
  id: string;
  name: string;
  workouts: WorkoutRecord[];
}
