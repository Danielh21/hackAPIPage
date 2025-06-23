import { StoryModel } from "@/models/storyModel";
import React from "react";
import styles from "../style.module.scss";
import Image from "next/image";
import StoryAttribute from "./storyAttribute";
import { TryConvertDate } from "@/services/dateConvert";

interface StoryCardProps {
  story: StoryModel;
}

const StoryCard = ({ story }: StoryCardProps) => {
  return (
    <a target="_blank" href={story.url}>
      <div className={styles.storyCard}>
        <Image
          src="/hacker.png"
          height={200}
          width={200}
          alt="Picture of a hacker."
        />

        <div>
          <h4 className={styles.storyCardTitle}>{story.title}</h4>
        </div>
        <div className={styles.attributeContainer}>
          <StoryAttribute AtrributeKey="Score" AtrributeValue={story.score} />
          <StoryAttribute
            AtrributeKey="Timestamp"
            AtrributeValue={TryConvertDate(story.time)}
          />
          <StoryAttribute
            AtrributeKey="Id of Author"
            AtrributeValue={story.userModel.id}
          />
          <StoryAttribute
            AtrributeKey="Karma Score"
            AtrributeValue={story.userModel.karma}
          />
        </div>
      </div>
    </a>
  );
};

export default StoryCard;
