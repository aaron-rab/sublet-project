//import '../styles/global.css';
import '../styles/tailwindglobal.css';
import 'react-day-picker/dist/style.css';
import { SessionProvider } from "next-auth/react";


export default function App({
    Component,
    pageProps: { session, ...pageProps },
}) {
    return (
        <SessionProvider session={session}>
            <Component {...pageProps} />;
        </SessionProvider>
    )
}