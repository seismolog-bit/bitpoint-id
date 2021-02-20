import Header from './header'
import Footer from './footer'
import Head from 'next/head'

function Layout({children, title = 'Home'}) {
    return (
        <div>
            <Head>
                <title>{title} | BitPoint ID</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff"></meta>

                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href= '/favicon-32x32.png'  />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
            </Head>
            <div className="relative bg-white overflow-hidden">
                <Header />
                {children}
                <Footer />
            </div>
        </div>
    )
}

export default Layout