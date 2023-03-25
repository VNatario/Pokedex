import Image from "next/image";
import Router from "next/router";

import styles from "./Card.module.css";

export function Card({ pokemon }) {
  return (
    <div
      className={styles.card}
      onClick={(e) => {
        e.preventDefault();
        Router.push(`/pokemon/${pokemon.id}`);
      }}
    >
      <p className={styles.id}>#{pokemon.id}</p>
      <h3 className={styles.name}>{pokemon.name}</h3>
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemon.id}.gif`}
        width="128"
        height="128"
        alt="Pokemon"
      />
    </div>
  );
}
