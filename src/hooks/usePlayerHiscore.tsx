import { useQuery } from "@tanstack/react-query";
import axiosClient from "../api/client";

type PlayerHiscoreResponse = {
  name: string;
  skill: string;
  level: string;
  experience: string;
}[];

type Skills = {
  name: string;
  level: number;
  experience: number;
  rank: number;
}[];

const usePlayerHiscore = (name: string) => {
  return useQuery({
    queryKey: ["test", name],
    queryFn: () => fetchPlayerHiscore(name),
    enabled: !!name,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

const fetchPlayerHiscore = async (name: string): Promise<Skills> => {
  const response = await axiosClient.get(`osrs/hiscore?name=${name}`);
  if (response.status !== 200) {
    throw new Error("Network response was not ok");
  }
  return response.data.skills.map(
    (skill: {
      name: string;
      level: number;
      experience: number;
      rank: number;
    }) => ({
      name: skill.name,
      level: skill.level,
      experience: skill.experience,
      rank: skill.rank,
    })
  );
};

export default usePlayerHiscore;
