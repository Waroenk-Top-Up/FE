import { React } from 'react';
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import Footer from "../components/Footer";

export default function Home() {
  return ( 
    <> 
    {/* HOME */}
      <Head>
        <title> Waroenk Top Up</title>
        <link rel="icon" href="/logo.svg"></link>
      </Head>

{/* HOME */}
      <div className={styles.image}>
            <Image src={"/logo.svg"} width={200} height={120}/>
            <div className={styles.navbar}>
              <ul>
                <a href='#'>HOME</a>
                <a href='#'>GAMES</a>
                <a href='#'>HOW TO BUY?</a>
              </ul>
            </div>
      </div>
      <div className={styles.title1}>
        <p>HALO GAMERS!</p>
      </div>
      <div className={styles.title2}>
        <p>Ayo beli diamond sesuai yang Anda butuhkan sekarang!!</p>
      </div>

{/* 3 GAMES */}
      <div className={styles.container1}>
      <div className={styles.title3}><p>3 GAMES</p></div>









</div>

{/* HOW TO BUY */}
      <div className={styles.container2}>
          <div className={styles.title4}><p>Cara Pembelian</p></div>
        <div className={styles.howtobuy}>
          <ul>
              <li>
                <p>Anda bisa langsung menekan link “GAMES” untuk melihat 3 GAMES khusus yang telah kami sediakan.</p>
              </li>
              <li>
                <p>Lalu Anda bisa langsung melengkapi kolom ID, lalu isi jumlah diamond sesuai yang Anda inginkan, lalu Anda isi ATM mana yang ingin Anda jadikan sebagai metode pembayaran.</p>
              </li>
              <li>
                <p>Jika Anda sudah yakin dengan seluruh yang Anda pilih, Anda bisa langsung tekan tombol “Beli sekarang” atau tekan tombol “Kembali” jika Anda tidak yakin dengan yang Anda pilih.</p>
              </li>
              <li>
                <p>
Proses pembayaran hampir selesai, tahap selanjutnya anda harus menunggu sebentar lalu setelah muncul pernyataan bahwa pembayaran berhasil Anda bisa klik “Oke, kembali ke Home” untuk mengakhiri proses pembayaran dan Selamat Anda telah mendapatkan Diamond sesuai dengan yang Anda inginkan !!</p>
              </li>
          </ul>
        </div>
      </div>

{/* FOOTER */}
      <div className={styles.footer}>
      <footer
            style={{ textAlign: 'center', fontSize: "15px",  }}
          >
            <Footer />
          </footer>
      </div>
      

    </> 
    )
  }
   
  


