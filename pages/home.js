import { React } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title> Waroenk Top Up</title>
        <link rel="icon" href="/logo.svg"></link>
      </Head>

      <nav className={styles.navbar}>
        <div className={styles.image}>
          <Image src={"/logo.svg"} width={130} height={130} />
        </div>
        <div>
          <ul>
            <a href="#">HOME</a>
            <a href="#2">GAMES</a>
            <a href="#3">HOW TO BUY?</a>
          </ul>
        </div>
      </nav>
      <div className={styles.title1}>
        <p>HALO GAMERS!</p>
      </div>
      <div className={styles.title2}>
        <p>Mari beli Diamond sekarang!!</p>
      </div>
      <section className={styles.character}>
        <div>
          <Image src={"/m1.svg"} fill className={styles.m1} />
        </div>
        <div>
          <Image src={"/m2.svg"} fill className={styles.m2} />
        </div>
        <div>
          <Image src={"/m3.svg"} fill className={styles.m3} />
        </div>
        <div>
          <Image src={"/g1.svg"} fill className={styles.g1} />
        </div>
        <div>
          <Image src={"/g2.svg"} fill className={styles.g2} />
        </div>
        <div>
          <Image src={"/g3.svg"} fill className={styles.g3} />
        </div>
        <div>
          <Image src={"/v1.svg"} fill className={styles.v1} />
        </div>
        <div>
          <Image src={"/v2.svg"} fill className={styles.v2} />
        </div>
        <div>
          <Image src={"/v3.svg"} fill className={styles.v3} />
        </div>
      </section>

      <div id="2" className={styles.container}>
        <header className={styles.title3}>
          <p>3 GAMES</p>
        </header>
        <main className={styles.wrapper}>
          <section>
            <div className={styles.content}>
              <Link href={"/mobile_legends"}>
                  <Image src={"/ml.svg"} fill className={styles.ml} />
              </Link>
            </div>
          </section>
          <section>
            <div className={styles.content}>
              <Link href={"/genshin_impact"}>
                  <Image src={"/genshin.svg"} fill className={styles.pubg} />
              </Link>
            </div>
          </section>
          <section>
            <div className={styles.content}>
              <Link href={"/valorant"}>
                  <Image src={"/valo.svg"} fill className={styles.valo} />
              </Link>
            </div>
          </section>
        </main>
      </div>

      <div id="3" className={styles.container}>
        <header className={styles.title3}>
          <p>HOW TO BUY</p>
        </header>
        <div className={styles.border}>
          <div className={styles.title4}>
            <p>Cara Pembelian</p>
          </div>
          <div className={styles.howtobuy}>
            <ul>
              <li>
                <p>
                  Anda bisa langsung menekan link “GAMES” untuk melihat 3 GAMES
                  khusus yang telah kami sediakan. Lalu pilih satu Games yang
                  Anda ingin Top-Up kan.
                </p>
              </li>
              <li>
                <p>
                  Selanjutnya Anda bisa langsung melengkapi kolom ID, lalu isi
                  jumlah diamond sesuai yang Anda inginkan, lalu Anda isi ATM
                  mana yang ingin Anda jadikan sebagai metode pembayaran.
                </p>
              </li>
              <li>
                <p>
                  Jika Anda sudah yakin dengan seluruh yang Anda pilih, Anda
                  bisa langsung tekan tombol “Beli sekarang” atau tekan tombol
                  “Kembali” jika Anda tidak yakin dengan yang Anda pilih.
                </p>
              </li>
              <li>
                <p>
                  Proses pembayaran hampir selesai, tahap selanjutnya anda harus
                  menunggu sebentar lalu setelah muncul pernyataan bahwa
                  pembayaran berhasil Anda bisa klik “Oke, kembali ke Home”
                  untuk mengakhiri proses pembayaran dan Selamat Anda telah
                  mendapatkan Diamond sesuai dengan yang Anda inginkan !!
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <footer style={{ textAlign: "center", fontSize: "15px" }}>
          <Footer />
        </footer>
      </div>
    </>
  );
}
