import { BlockItemProps } from "@/components/Blocks/Blocks.types";
import axios, { AxiosInstance } from "axios";

const baseConfig = {
  baseURL: "https://test-candidaturas-front-end.onrender.com/families",
};

export class BlocksRepositoy {
  private repository: AxiosInstance;

  constructor(httpsInstance = axios.create(baseConfig)) {
    this.repository = httpsInstance;
  }

  async getList(skip: number = 0, take: number = 10) {
    const data = this.repository.get(`?skip=${skip}&take=${take}`);

    return data;
  }

  getImageById(id: string) {
    const imageURL = `https://plugin-storage.nyc3.digitaloceanspaces.com/families/images/${id}.jpg`;
    return imageURL;
  }
}
