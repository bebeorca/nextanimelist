import NextAuth from "next-auth";
import githubAuth from "next-auth/providers/github"

export const Options = {
    providers: [
        githubAuth({
            clientId: process.env.GITHUB_CLIENT,
            clientSecret: process.env.GITHUB_SECRET,
        })
    ],
    secret: process.env.NEXTAUTH_SECRET
}

const handler = NextAuth(Options)

export { handler as GET, handler as POST }