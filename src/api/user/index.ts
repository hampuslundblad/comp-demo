import { apiClient } from "../axios";

type User = {
  name: string;
  groups: Group[];
};

export type Group = {
  groupName: string;
  players: Player[];
};
type Player = {
  name: string;
  totalExperience: number;
  experienceGainedLast24H: number;
  experienceGainedLastWeek: number;
};

export async function fetchUser(name: string): Promise<User> {
  const response = await apiClient.get(`user/${name}`);
  return response.data;
}

export async function createGroupOnUser(
  username: string,
  groupName: string
): Promise<void> {
  await apiClient.put(`user/${username}/${groupName}`, {
    groupName,
  });
}
