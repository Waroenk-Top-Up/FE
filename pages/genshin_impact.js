import { React } from "react";
import Head from "next/head";
import styles from "../styles/GenshinImpact.module.css";
import Image from "next/image";
import { Form, Input } from "antd";
const handleFinish = (data) => {
  console.log(data);
};
export default function Payment() {
  return (
    <>
      {/* head */}
      <Head>
        <title> Waroenk Top Up</title>
        <link rel="icon" href="/logo.svg"></link>
      </Head>

      {/* navbar */}
      <nav className={styles.navbar}>
        <div className={styles.image}>
          <Image src={"/logo.svg"} width={130} height={130} />
        </div>
        <div>
          <a href="home">HOME</a>
        </div>
      </nav>

      {/* payment  */}
      <div className={styles.wrapper}>
        <div className={styles.container1}>
          <div className={styles.coloumn1}>
            <p>Masukkan ID Game Anda</p>
            <div className={styles.id}>
              <Form onFinish={handleFinish} autoComplete="off">
                <Form.Item
                  name="id"
                  size="70px"
                  rules={[
                    {
                      required: true,
                      message: "ID is not filled yet!",
                    },
                    { min: 8 },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item>
                  <button className={styles.buttonid} type="submit">
                    OKE
                  </button>
                </Form.Item>
              </Form>
            </div>
            <div className={styles.note1}>
              <p>*ID yang tertera pada profil game Anda</p>
            </div>
          </div>

          <div className={styles.coloumn2}>
            <p>Pilih sesuai yang Anda inginkan</p>
            <main className={styles.container3}>
              <div className={styles.diamond1}>
                <div className={styles.diamond}>
                  <Image src={"/gi1.svg"} fill className={styles.diamondA} />
                  <p>5 Genesis Crystals</p>
                </div>
              </div>

              <div className={styles.diamond1}>
                <div className={styles.diamond}>
                  <Image src={"/gi1.svg"} fill className={styles.diamondA} />
                  <p>10 Genesis Crystals</p>
                </div>
              </div>

              <div className={styles.diamond1}>
                <div className={styles.diamond}>
                  <Image src={"/gi4.svg"} fill className={styles.diamondA} />
                  <p>20 Genesis Crystals</p>
                </div>
              </div>

              <div className={styles.diamond1}>
                <div className={styles.diamond}>
                  <Image src={"/gi4.svg"} fill className={styles.diamondA} />
                  <p>30 Genesis Crystals</p>
                </div>
              </div>

              <div className={styles.diamond1}>
                <div className={styles.diamond}>
                  <Image src={"/gi2.svg"} fill className={styles.diamondA} />
                  <p>40 Genesis Crystals</p>
                </div>
              </div>

              <div className={styles.diamond1}>
                <div className={styles.diamond}>
                  <Image src={"/gi2.svg"} fill className={styles.diamondA} />
                  <p>60 Genesis Crystals</p>
                </div>
              </div>

              <div className={styles.diamond1}>
                <div className={styles.diamond}>
                  <Image src={"/gi3.svg"} fill className={styles.diamondA} />
                  <p>120 Genesis Crystals</p>
                </div>
              </div>

              <div className={styles.diamond1}>
                <div className={styles.diamond}>
                  <Image src={"/gi3.svg"} fill className={styles.diamondA} />
                  <p>200 Genesis Crystals</p>
                </div>
              </div>
            </main>
          </div>

          <div className={styles.coloumn3}>
            <p>Pilih metode pembayaran</p>
            <main className={styles.container4}>
              <div className={styles.bank}>
                <Image src={"/bri.svg"} fill className={styles.bri} />
              </div>

              <div className={styles.bank}>
                <Image src={"/bca.svg"} fill className={styles.bva} />
              </div>
            </main>
          </div>
        </div>

        <div className={styles.container2}>
          <div className={styles.game1}>
            <div className={styles.content}>
              <Image src={"/genshin.svg"} fill className={styles.genshin} />
            </div>
            <h1>GENSHIN IMPACT</h1>
            <p>
              Genshin Impact adalah gim open-world yang dikembangkan oleh
              pengembang asal China, miHoYo. Dalam gameplay-nya, Genshin Impact
              memiliki arena dunia fantasi terbuka. Gim ini juga hanya bisa
              dimainkan secara online saja dengan fitur mode multiplayer yang
              memungkinkan kamu untuk bermain dengan maksimal empat orang
              sekaligus. 
              <br></br>
              <br></br>
              Dalam gim Genshin Impact, terdapat 7 elemen yang akan dimiliki
              oleh karakter yakni Pyro (Fire), Hydro (Water), Anemo (Wind),
              Electro (Lightning), Dendro (Grass), Cryo (Ice), dan Geo (Rock).
              Saat ini terdapat 23 karakter yang dapat dimainkan, setiap
              karakter memiliki kekuatan, dan skill unik mereka sendiri. Setiap
              karakter telah dilengkapi dengan Normal Attack, Elemental Skill,
              Elemental Burst, Passive Talent 1, Passive Talent 2 dan Passive
              Talent 3. Beberapa kemampuan tersebut dapat dimaksimalkan untuk
              setiap karakter. Kalian bisa mengeksplorasi terlebih dahulu setiap
              karakter untuk menemukan yang terbaik.
            </p>
          </div>
          <div>
            <Form.Item>
              <button className={styles.button} type="submit">
                <Image
                  src={"/cart.svg"}
                  width={60}
                  height={60}
                  className={styles.cart}
                />
                <p><a href="lastpayment">Beli sekarang!</a></p>
              </button>
            </Form.Item>
          </div>
        </div>
      </div>
    </>
  );
}
