import Image from "next/image";

import styles from "../styles/404.module.css";

export default function NotFound() {
  return (
    <div className={styles.error}>
      <div>
        <p>Erro 404</p>
        <p>A página que você procura não foi encontrada</p>
      </div>
      <Image
        src={
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/54.gif" ||
          "/images/page-404.png"
        }
        width="164"
        height="256"
        alt="Pokemon Psyduck em pixel"
      />
    </div>
  );
}
