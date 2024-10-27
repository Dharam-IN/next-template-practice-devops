import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import Apilist from ".."; // Adjust the import path
import Constant from "@/config/constant";
import GoogleProvider from 'next-auth/providers/google';
import {getCookie, setCookie} from 'cookies-next'

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET
    }),
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials;
        const req = {
          data: {
            email: email,
            password: password
          }
        };
        const response = await new Apilist().userLogin(req);
        console.log("Response Login----", response);

        if (response?.status === "success") {
          return {email: response.result.email,brand_name: response.result.brand_name, _id: response.result._id, full_name: response.result.full_name, user_type: response.result.user_type, slug: response.result.slug, token: response.token, username: response.result.unique_user_name};
        } else {
          throw new Error(response.message || "Invalid credentials");
        }
      },
    }),
    // Additional Providers
    CredentialsProvider({
      id: "socialcredentials",
      name: "socialcredentials",
      credentials: {
        email: { label: "Email", type: "text" },
        name: { label: "Name", type: "text" },
        social_id: { label: "Social id", type: "text" },
        user_type: { label: "User Type", type: "text" },
      },
      async authorize(credentials) {
        const { email, name, social_id, user_type } = credentials;
        const data = {
          data: {
            email: email,
            full_name: name,
            social_id: social_id,
            user_type: user_type,
            social_type: Constant.SOCIAL_TYPE_GOOGLE,
          }
        };
        const response = await new Apilist().SocialLogin(data);
        
        console.log("RESPONSE CONSOLE ====>", response)
        if (response?.status === "success") {
          return {email: response.result.email,brand_name: response?.result?.brand_name, _id: response.result._id, full_name: response.result.full_name, user_type: response.result.user_type, slug: response.result.slug, token: response.token,username: response.result.unique_user_name};
        } else {
          throw new Error(response.message || "Invalid credentials");
        }
      },
    }),
    CredentialsProvider({
      id: "OtpVerifyLogin",
      name: "OtpVerifyLogin",
      credentials: {
        email: { label: "Email", type: "text" },
        otp: { label: "OTP", type: "text" }
      },
      async authorize(credentials) {
        const { email, otp } = credentials;
        try {
          const req = {
            data: {
              email: email,
              otp: otp,
            }
          };
          const response = await new Apilist().verifyOTP(req);
          console.log("OTP Verify", response)
          if (response?.status === "success") {
            return {email: response.result.email,brand_name: response.result.brand_name, _id: response.result._id, full_name: response.result.full_name, user_type: response.result.user_type, slug: response.result.slug, token: response.token,username: response.result.unique_user_name};
          } else {
            throw new Error(response.message || "Invalid OTP verification.");
          }
        } catch (error) {
          throw new Error(error.message || "An error occurred during OTP verification.");
        }
      }
    }),
    CredentialsProvider({
      id: "ViaAdminLogin",
      name: "ViaAdminLogin",
      credentials: {
        login_crediantials: { label: "Login Credentials", type: "text" }
      },
      async authorize(credentials) {
        const { login_crediantials } = credentials;
        const req = {
          data: {
            login_crediantials: login_crediantials
          }
        };
        const api = new Apilist();
        const response = await api.viaAdminLogin(req);
        console.log("Admin Loginnn respo", response)
        if (response?.status === "success") {
          if(response?.result?.is_email_verified){
            return {email: response.result.email,brand_name: response.result.brand_name, _id: response.result._id, full_name: response.result.full_name, user_type: response.result.user_type, slug: response.result.slug, token: response.token,username: response.result.unique_user_name};
          }else if(!response?.result?.is_email_verified){
            throw new Error(response.message || response?.message);
          }
        } else {
          throw new Error(response.message || "Error in Admin Login.");
        }
      }
    }),
    CredentialsProvider({
      id: "updateSession",
      name: "updateSession",
      credentials: {},
      async authorize(credentials) {
        const { email, user_id, full_name, token } = credentials;
        const req = {
          data: {
            email: email,
            user_id: user_id,
            full_name: full_name,
            token: token
          }
        };

        const response = await new Apilist().updateSession(req);
        if (response.status === "success") {
          return {email: response.result.email,brand_name: response.result.brand_name, _id: response.result._id, full_name: response.result.full_name, user_type: response.result.user_type, slug: response.result.slug, token: response.token,username: response.result.unique_user_name};
        } else {
          throw new Error(
            `${response?.message || "Unknown error"}`
          );
        }
      },
    }),
  ],
  pages: {     
  	signIn: '/auth/signin'
  },
 
  session: {
    jwt: true
  },
  jwt: {
    secret: Constant?.JWT_SECRET,
    encryption: true,
    maxAge: 60 * 3660,
  },
  callbacks: {

    async signIn({ user, account, profile}) {

      if (account.provider === "google") {
        setCookie('temp_user', JSON.stringify({
          email: user.email,
          full_name: user.name,
          social_id: user.id,
          social_type: user.id,
        }), { path: '/', maxAge: 60 * 5 });

        const jsonData = JSON.stringify(user);
        const req = Buffer.from(jsonData, "binary").toString("base64");
        return `/verify-user?userdetails=${req}`;
      }
      return true;
    },

    async redirect({ url, baseUrl }) {
      if (url.startsWith("/")) return url;
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
    async session({ session, token }) {
      session.user = token.user;
      return session;
    },
    async jwt({ token, user}) {

      if (user) {
        token.user = user;
      }
      return token;
    },
  },
  secret: 'test',
});
