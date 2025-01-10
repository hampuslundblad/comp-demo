import axios, { AxiosResponse } from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:5173/.api/",
});

export type HiscoreByNameResposne = {
  name: string;
  rank: number;
  totalExperience: number;
  totalLevel: number;
  skills: Skill[];
};

export type Skill = {
  name: string;
  level: number;
  experience: number;
  rank: number;
};

export async function fetchHiscoreByName(
  name: string,
): Promise<HiscoreByNameResposne> {
  try {
    const response: AxiosResponse = await axiosClient.get(
      `player/hiscore?name=${name}`,
    );
    return response.data;
  } catch (e: unknown) {
    throw e;
  }
}
