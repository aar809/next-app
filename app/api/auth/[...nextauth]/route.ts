import NextAuth from "next-auth";
import { authOptions } from "../authOptions";

const handler = NextAuth(authOptions)

// const handler = NextAuth({
//     adapter: PrismaAdapter(prisma),
//     providers: [
//         CredentialsProvider({
//             name: 'Credentials',
//             credentials: {
//                 email: { label: 'Email', type: 'email', placeholder: 'Email' },
//                 password: { label: 'Password', type: 'password', placeholder: 'Password' }
//             },
//             async authorize(credentials, req) {
//                 if (!credentials?.email || !credentials.password) return null;
//                 const user = await prisma.user.findUnique({
//                     where: { email: credentials.email },
//                 })
//                 if (!user) return null;
//                 const passwordsMatch = await bcrypt.compare(
//                     credentials.password,
//                     user.hashedPassword!
//                 );
//                 return passwordsMatch ? user : null;
//             },
//         }),
//         GoogleProvider({
//             clientId: process.env.GOOGLE_CLIENT_ID!,
//             clientSecret: process.env.GOOGLE_CLIENT_SECRET!
//         })
//     ],
//     session: {
//         strategy: 'jwt',
//     }
// });

// const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

