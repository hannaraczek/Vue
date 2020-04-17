import { Api } from '@/services/Api.service'
import { WorkoutRecord } from '@/data/WorkoutRecord.interface'
import { usersUrl } from '@/services/Constants'

export class UserSerivce extends Api {
  getUser(id: number): Promise<User> {
    return this.get<User>(`${usersUrl}/${id}`)
      .then(resp => resp.data)
  }

  // TODO create a PATCH to patch a new workout
}

export interface User {
  id: string;
  name: string;
  workouts: WorkoutRecord[];
}