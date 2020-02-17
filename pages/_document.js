import Document, {Html, Head, Main, NextScript} from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return {...initialProps};
    }

    render() {
        return (
            <Html>
                <Head />
                <body>
                    <script
                        dangerouslySetInnerHTML={{
                            __html:
                                '</script><link rel="stylesheet" type="text/css" href="https://cloud.typography.com/6189638/7828212/css/fonts.css" /><script>'
                        }}
                    />

                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
