import { Container } from "@/components/container";
import { GameProps } from "@/utils/types/game";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRightSquare } from "react-icons/bs";
import { Input } from "@/components/input";
import { GameCard } from "@/components/game-card";

async function getDalyGame() {
  try {
    const res = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game_day`,
      { next: { revalidate: 320 } }
    );
    return res.json();
  } catch (err) {
    throw new Error("Failed to fetch data");
  }
}

async function getGamesData() {
  try {
    const res = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=games`, {
      next: { revalidate: 320 },
    });
    return res.json();
  } catch (err) {
    throw new Error("Failed to fetch data");
  }
}

export default async function Home() {
  const dalygame: GameProps = await getDalyGame();
  const gamesData: GameProps[] = await getGamesData();

  return (
    <main className="w-full">
      <Container>
        <h1 className="text-center font-bold text-xl mt-8 mb-5">
          Separamos um jogo exclusiso pra você
        </h1>
        <Link href={`/game/${dalygame.id}`}>
          <section className="w-full bg-black rounded-lg">
            <div className="w-full max-h-96 h-96 relative rounded-lg">
              <div className="absolute z-10 flex gap-x-2 items-center bottom-0 p-3 justify-center">
                <p className="font-bold text-xl text-white">{dalygame.title}</p>
                <BsArrowRightSquare size={24} color="#fff" />
              </div>
              <Image
                src={dalygame.image_url}
                alt={dalygame.title}
                priority
                quality={100}
                fill
                className="max-h-96 object-cover rounded-lg opacity-70 hover:opacity-100 transition-opacity"
                sizes="(max-widht: 768px) 100vw, (max-width: 1200px) 33vw"
              />
            </div>
          </section>
        </Link>
        <Input />
        <h2 className="text-lg font-bold mt-8 mb-5">Jogos para conhecer</h2>
        <section className="grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {gamesData.map((item) => (
            <GameCard key={item.id} data={item} />
          ))}
        </section>
      </Container>
    </main>
  );
}
