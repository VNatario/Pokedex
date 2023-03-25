import Link from "next/link";
import Image from "next/image";
import Router from "next/router";

import styles from "./Navbar.module.css";

export function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div
        className={styles.logo}
        onClick={(e) => {
          e.preventDefault();
          Router.push("/");
        }}
      >
        <Image
          src="/images/pokeball.png"
          width="64"
          height="72"
          alt="Pokebola com estilo de Pixel Art"
        />
        <h1>PokeNext</h1>
      </div>

      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">Sobre</Link>
        </li>
        <li>
          <Link href="/contact">Contato</Link>
        </li>
      </ul>
    </nav>
  );
}
