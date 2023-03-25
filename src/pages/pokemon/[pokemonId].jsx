import { useRouter } from "next/router";
import Image from "next/image";

import styles from "../../styles/pokemon.module.css";

export default function Pokemon({ pokemon }) {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <>
        <Image
          src="/images/pokeballSpin.gif"
          width="200"
          height="200"
          alt="Pokeball spin"
        />
        <h2>Loading...</h2>
      </>
    );
  }
  return (
    <div>
      <p>#{pokemon.id}</p>
      <p>{pokemon.name}</p>
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemon.id}.gif`}
        width="224"
        height="224"
        alt="Pokemon"
      />
      <div>
        <h3>Tipo:</h3>
        <div>
          {pokemon.types.map((item, index) => (
            <span
              key={index}
              className={`${styles.type} ${styles["type_" + item.type.name]}`}
            >
              {item.type.name}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h4>Altura:</h4>
        <p>{pokemon.height / 10}m</p>
      </div>

      <div>
        <h4>Peso:</h4>
        <p>{pokemon.weight / 10}kg</p>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const maxPokemons = 151;
  const api = "https://pokeapi.co/api/v2/pokemon/";

  const res = await fetch(`${api}/?limit=${maxPokemons}`);
  const data = await res.json();

  //params
  const paths = data.results.map((pokemon, index) => {
    return {
      params: {
        pokemonId: (index + 1).toString(),
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
}

//Dentro do meu contexto consigo pegar params por dessestruturação,
// Passado por getStaticPaths
export async function getStaticProps({ params }) {
  try {
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${params.pokemonId}`
    );

    const { id, name, types, height, weight } = await res.json();

    return {
      props: {
        pokemon: {
          id,
          name,
          types,
          height,
          weight,
        },
        revalidate: 10,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}
