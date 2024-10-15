import { URL } from "../app/(home)/page";

async function getVideos(id: string) {
  console.log(`fetching videos: ${Date.now()}`);
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
  const res = await fetch(`${URL}/${id}/videos`);
  throw new Error("someting broke..");
  return res.json();
}

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);
  return <h6>{JSON.stringify(videos)}</h6>;
}
