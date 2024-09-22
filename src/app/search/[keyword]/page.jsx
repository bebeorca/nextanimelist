import { getAnimeResponse } from "@/app/libs/api-libs";
import AnimeList from "@/Components/Anime List";
import Header from "@/Components/Anime List/Header";

export default async function Page({ params }) {

    const { keyword } = params
    const decodedkeyword = decodeURI(keyword)
    const searchAnime = await getAnimeResponse("anime", `q=${keyword}`)

    return (
        <>
            <section>
                <Header title={`Pencarian untuk ${decodedkeyword}...`} />
                <AnimeList api={searchAnime} />
            </section>
        </>
    );
}
