import { Suspense } from "react";
import { URL } from "../../../(home)/page";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

// async function getMovie(id: string) {
//   console.log(`fetching moviews: ${Date.now()}`);
//   await new Promise((resolve) => {
//     setTimeout(resolve, 5000);
//   });
//   const res = await fetch(`${URL}/${id}`);
//   return res.json();
// }

// async function getVideos(id: string) {
//   console.log(`fetching videos: ${Date.now()}`);
//   await new Promise((resolve) => {
//     setTimeout(resolve, 2000);
//   });
//   const res = await fetch(`${URL}/${id}/videos`);
//   return res.json();
// }

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  // console.log("start fetching");
  // const movie = await getMovie(id);
  // const videos = await getVideos(id); // 직렬적으로 fetch하지말고 병렬적으로 가져오고싶다!
  // 병렬적 fetching은 Promise.all
  // const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);
  // 이렇게 구현하면, movie랑 vidoes가 모두 도착해야 UI를 render한다는 점
  // 동시에 가져오되, fetch 함수를 분리할 수 있을까???
  // => "Suspense"
  // console.log("end fetching");

  return (
    <div>
      <h3>Movie Detail</h3>
      <Suspense fallback={<h1>Loading movie Info</h1>}>
        <MovieVideos id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie vidoes</h1>}>
        <MovieInfo id={id} />
      </Suspense>
    </div>
  );
}
