import Image from "next/image";

import styles from "../styles/about.module.css";

export default function About() {
  return (
    <div className={styles.about}>
      <div>
        <h1>Sobre o projeto</h1>
        <p>
          O projeto PokeNext foi construido com o intuito de iniciar os
          aprendizado no framework NextJS.
        </p>
        <p>
          Foi utilizado neste projeto o framework NextJS para construção.
          Estilização foi usado Module.CSS e para deploy foi utilizado o
          ambiente da Vercel.
        </p>
      </div>
      <Image
        src={
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/143.gif" ||
          "/images/about.png"
        }
        width="264"
        height="264"
        alt="Pokemon Snorlax em Pixel"
      />
    </div>
  );
}
