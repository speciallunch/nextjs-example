import { Metadata } from "next";
import Link from "next/link";

export const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

export const metadata: Metadata = {
  title: "Home",
};

async function getMovies() {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  }); // 이 로딩은 백엔드에서 일어나게 됨

  console.log("im fetching in Backend");
  const res = await fetch(URL);
  const json = await res.json();
  return json;
}

export default async function HomePage() {
  const movies = await getMovies(); // Next.js가 fetch된 data를 캐싱해준다.
  // 브라우저에서 api를 통해 데이터를 가져오지도 않는다! 백엔드에서 data fetching!
  // (네트워크 탭으로 확인가능)
  return (
    <div>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </div>
  );
}
