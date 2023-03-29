import { axiosInstance } from './axiosInstance'

export const uploadImagesApi = async (images: any[]) => {
  await axiosInstance.post(`api/images/upload`, {
    images,
  })
}
