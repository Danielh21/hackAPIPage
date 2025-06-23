import React from "react";
import { StoryModel } from "@/models/storyModel";
import StoryCard from "./storyCard";
import styles from "../style.module.scss";

interface StoryListProps {
  list: StoryModel[];
}

const StoryList = ({ list }: StoryListProps) => {
  const sortedList = [...list].sort((a, b) => a.score - b.score);

  return (
    <section className={styles.storyContainer}>
      {sortedList.map((story) => (
        <StoryCard key={story.id} story={story} />
      ))}
    </section>
  );
};

export default StoryList;
