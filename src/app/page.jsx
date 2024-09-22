import AnimeList from "@/Components/Anime List";
import Header from "@/Components/Anime List/Header";
import { getAnimeResponse } from "./libs/api-libs";

export default async function Page() {

  const topAnime = await getAnimeResponse("top/anime", "limit=8")

  return (
    <>
      <section>
        <Header title={"Paling populer"} link={"/populer"} linkTitle={"Lihat selengkapnya"}/>
        <AnimeList api={topAnime} />
      </section>
    </>
  );
}
