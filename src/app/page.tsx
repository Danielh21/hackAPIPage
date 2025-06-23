import Footer from "@/components/footer";
import Header from "@/components/header";
import StoryList from "@/components/storyList";
import StoryListSWR from "@/components/storyListSWR";
import { baseAPI } from "@/const";
import { StoryModel } from "@/models/storyModel";
import { UserModel } from "@/models/userModel";

export default async function Home() {
  const reponse = await fetch(`${baseAPI}/topstories.json`);
  const responseJSON = (await reponse.json()) as string[];

  const random = [...responseJSON].sort(() => 0.5 - Math.random()).slice(0, 10);

  const storyModels: StoryModel[] = await Promise.all(
    random.map(async (id) => {
      const storyResponse = await fetch(`${baseAPI}/item/${id}.json`);
      const storyModel = (await storyResponse.json()) as StoryModel;
      const storyUserResponse = await fetch(
        `${baseAPI}/user/${storyModel.by}.json`
      );
      storyModel.userModel = (await storyUserResponse.json()) as UserModel;
      return storyModel;
    })
  );

  return (
    <div className="">
      {/* Example using Server side rendered content */}
      {/* <StoryList list={storyModels} /> */}

      {/* Example using SWR Lib */}
      <Header />
      <StoryListSWR />
      <Footer />
    </div>
  );
}
