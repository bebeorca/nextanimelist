import AnimeList from "@/Components/Anime List";
import Header from "@/Components/Anime List/Header";
import { getAnimeResponse, getNestedAnimeResponse, reproduce } from "../libs/api-libs";

export default async function Page() {

  const topAnime = await getAnimeResponse("top/anime", "limit=8")
  let rekomendasiAnime = await getNestedAnimeResponse("recommendations/anime", "entry")
  rekomendasiAnime = reproduce(rekomendasiAnime, 8)

  return (
    <>
      <section>
        <Header title={"Paling populer"} link={"/populer"} linkTitle={"Lihat selengkapnya"} />
        <AnimeList api={topAnime} />
      </section>
      <section>
        <Header title={"Rekomendasi"} />
        <AnimeList api={rekomendasiAnime} />
      </section>
    </>
  );
}
