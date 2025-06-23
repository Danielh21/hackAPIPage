"use client";
import React from "react";
import useSWR from "swr";
import { baseAPI } from "@/const";
import { fetcher } from "@/services/fetcher";
import { StoryModel } from "@/models/storyModel";
import { UserModel } from "@/models/userModel";
import StoryCard from "./storyCard";
import styles from '../style.module.scss'
import { Loading } from "./loading";

const getStoriesWithUsers = async (): Promise<StoryModel[]> => {
  const ids: string[] = await fetcher(`${baseAPI}/topstories.json`);
  const random = [...ids].sort(() => 0.5 - Math.random()).slice(0, 10);

  const stories =  await Promise.all(
    random.map(async (id) => {
      const story: StoryModel = await fetcher(`${baseAPI}/item/${id}.json`);
      const user: UserModel = await fetcher(`${baseAPI}/user/${story.by}.json`);
      story.userModel = user;
      return story;
    })
  );

  return stories.sort((a,b) => a.score - b.score);

};

const StoryListSWR = () => {
  const { data, error, isLoading } = useSWR("stories-with-users", getStoriesWithUsers);

  if (isLoading) return <Loading />;
  if (error) return <div>Sorry, an error happened.</div>;
  if (!data) return null;


  return (
    <section className={styles.storyContainer}>
      {data.map((story) => (
        <StoryCard key={story.id} story={story} />
      ))}
    </section>
  );
};

export default StoryListSWR;