import Document, { Html, Head, Main, NextScript } from "next/document"
import Favicon from "../components/Favicon"

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <meta charSet="utf-8" />
                    <link rel="icon" href="../static/favicon.ico" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
