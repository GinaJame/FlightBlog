import Head from 'next/head'
import Itinerary from "../components/Itinerary";
import {itinerary} from "../data/itinerary.json";
import styles from "./styles.module.css"
export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Major League Packing</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main>
                <h1 className={styles.title}>
                    Welcome to <a href="https://mlh.io">Major League Packing</a>!
                </h1>

                <Itinerary itinerary={itinerary} />
            </main>

            <footer>
          <span>
            Powered by{' '}<a href="https://robbie.dev" target="_blank" rel="noreferrer">Robbie from MLH</a>.
          </span>
          <span>
            Version {' '}<a href="https://robbie.dev" target="_blank" rel="noreferrer">Gina</a>.
          </span>
            </footer>
        </div>
    )
}