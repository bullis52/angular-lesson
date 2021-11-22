import {environment} from '../../environments/environment'

const basicUrl = environment.API;

export const urls = {
  users:`${basicUrl}/users`,
  posts:`${basicUrl}/posts`,
  comments:`${basicUrl}/comments`
}
