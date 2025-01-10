import { fetchHiscoreByName, Skill } from "@/api/osrs/index.ts";
import { useQuery } from "@tanstack/react-query";

const usePlayerHiscore = (name: string) => {
  return useQuery({
    queryKey: ["test", name],
    queryFn: () => fetch(name),
    enabled: !!name,
    retry: 0,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

const fetch = async (name: string) => {
  const response = await fetchHiscoreByName(name);
  return {
    ...response,
    skills: response.skills.map((skill: Skill) => ({
      name: skill.name,
      level: skill.level,
      experience: skill.experience,
      rank: skill.rank,
    })),
  };
};

export default usePlayerHiscore;
