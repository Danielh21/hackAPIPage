import React from "react";
import { StoryModel } from "@/models/storyModel";
import StoryCard from "./storyCard";

interface StoryListProps {
  list: StoryModel[];
}


const StoryList = ({list} : StoryListProps) => {

   const sortedList = [...list].sort((a,b) => a.score - b.score);

  return (
    <div>
      {sortedList.map((story) => (
        <StoryCard key={story.id} story={story} />
      ))}
    </div>
  );
};

export default StoryList;
