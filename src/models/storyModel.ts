import { UserModel } from "./userModel"

export interface StoryModel {
  by: string
  descendants: number
  id: number
  kids: number[]
  score: number
  time: string;
  title: string
  type: string
  url: string
  userModel: UserModel;
}
