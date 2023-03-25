import { Card } from "@/components/Card";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home({ pokemons }) {
  return (
    <>
      <div className={styles.title}>
        <h1>PokeNext</h1>
        <Image
          src="/images/pokeball.png"
          width="96"
          height="112"
          alt="Pokebola em PixelArt"
        />
      </div>
      <div className={styles.pokemonContainer}>
        {pokemons.map((pokemon) => (
          <Card pokemon={pokemon} key={pokemon.id} />
        ))}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const maxPokemons = 151;
  const api = "https://pokeapi.co/api/v2/pokemon/";

  const res = await fetch(`${api}/?limit=${maxPokemons}`);
  const data = await res.json();

  //add pokemon index
  data.results.forEach((item, index) => {
    item.id = index + 1;
  });

  return {
    props: {
      pokemons: data.results,
    },
  };
}
