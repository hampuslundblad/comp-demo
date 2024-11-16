import { useQuery } from "@tanstack/react-query";
import axiosClient from "../api/client";

const usePlayerHiscore = (name: string) => {
  return useQuery({
    queryKey: ["test", name],
    queryFn: () => fetchPlayerHiscore(name),
    enabled: !!name,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

const skillNames = [
  "Overall",
  "Attack",
  "Defence",
  "Strength",
  "Hitpoints",
  "Ranged",
  "Prayer",
  "Magic",
  "Cooking",
  "Woodcutting",
  "Fletching",
  "Fishing",
  "Firemaking",
  "Crafting",
  "Smithing",
  "Mining",
  "Herblore",
  "Agility",
  "Thieving",
  "Slayer",
  "Farming",
  "Runecrafting",
  "Hunter",
  "Construction",
];

const fetchPlayerHiscore = async (name: string) => {
  const response = await axiosClient.get(`osrs?player=${name}`);
  if (response.status !== 200) {
    throw new Error("Network response was not ok");
  }
  return mapHiscoreData(response.data);
};

const mapHiscoreData = (data: string) => {
  return data
    .split("\n")
    .filter((row, index) => row && skillNames[index])
    .map((row: string, index: number) => {
      const [rank, level, experience] = row.split(",");
      return {
        skill: skillNames[index],
        level: level,
        experience: experience,
      };
    });
};

export default usePlayerHiscore;
