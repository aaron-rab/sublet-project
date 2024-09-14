// writing server side code that the next-auth package will use

import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials"

const authHandler = NextAuth({
    // look at docs for all this stuff so you understand it
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {label: "Email", type: "text"},
                password: {label: "Password", type: "password"}
            },
            // This is the function thats called when user tries to sign in
            async authorize (credentials) {
                try {
                    const response = await
                    fetch(`${process.env.NEXTAUTH_URL}/api/login`, {
                        method: 'POST',
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            email: credentials?.email,
                            password: credentials?.password
                        })
                    })

                    const json = await response.json();

                    if (response.status === 200) {
                        return json.result;
                    }
                    else {
                        throw(JSON.stringify(json));
                    }
                }
                catch (e) {
                   throw new Error(e);
                }
            }
        })
    ],
    //overrrides the default sign in page
    pages: {
        signIn: "/login"
    },
    callbacks: {
        async jwt({token, user}) {
            return({...token, ...user})
        },
        async session({session, token}) {
            session.user = token;
            return session;

        }
    }
});

export default authHandler;
//export {authHandler as GET, authHandler as POST}; //how does this work?