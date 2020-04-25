import { Api } from '@/services/Api.service'
import { usersUrl } from '@/services/Constants'
import { AxiosResponse } from 'axios'
import { User } from '@/models/User.interface'

export class UserSerivce extends Api {
  getUser(id: number): Promise<AxiosResponse<User>> {
    return this.get<User>(`${usersUrl}/${id}`)
  }
}
