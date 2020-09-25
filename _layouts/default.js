//define layout for static pages like index, about

import Header from "../_includes/NavBar"
import Footer from "../_includes/footer"
import Head from "next/head"


export default function DefaultLayout(props) {
    return (
        <main>
            <Head>
                <title>{props.title}</title>
                <meta name='description' content={props.description} />
                <link rel="icon" href="/icons8-food-100.png" />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <Header />
            {props.children}
            <Footer />
        </main>

    )
}