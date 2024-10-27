const Constant = Object.freeze({
  BASE_IMAGE_URL: "/images",
  BASE_JS_URL: "/js",
  BASE_CSS_URL: "/css",
  DEFAULT_SITE_TITLE: process.env.NEXT_PUBLIC_SITE_TITLE,
  DEFAULT_SITE_DESCRIPTION: process.env.NEXT_PUBLIC__SITE_DESCRIPTION,
  DEFALLT_KEYWORDS: process.env.NEXT_PUBLIC__KEYWORDS,
  WEBSITE_URL: process.env.NEXT_PUBLIC_WEBSITE_URL,
  LOGIN_MOBILE: process.env.NEXT_PUBLIC_LOGIN_MOBILE,
  LOGIN_PASSWORD: process.env.NEXT_PUBLIC_LOGIN_PASSWORD,
  FACEBOOK_CLIENT_ID: process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_ID,
  FACEBOOK_CLIENT_SECRET: process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_SECRET,
  GOOGLE_CLIENT_ID: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
  NEXTAUTH_URL: process.env.NEXT_PUBLIC_NEXTAUTH_URL,
  AUTHKEY: process.env.NEXT_PUBLIC_AUTHKEY,
  API_URL: process.env.NEXTAUTH_URL,
  SITE_KEY: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
  USER_TYPE_BRAND: "brand",
  USER_TYPE_INFLUINCER: "influencer",
  JWT_SECRET: process.env.NEXT_PUBLIC_JWT_SECRET,
  UPDATE_TYPE_MOBILE: "mobile_number",
  UPDATE_TYPE_EMAIL: "email",
  MOBILE_OTP: "mobile_otp",
  EMAIL_OTP: "email_otp",
  STATUS_SUCCESS: "success",
  STATUS_ERROR: "error",
  SOCIAL_TYPE_FACEBOOK: "facebook",
  SOCIAL_TYPE_GOOGLE: "google",
  INSTAGRAM_PHOTO_FEED_POST: 1,
  INSTAGRAM_REEL: 2,
  INSTAGRAM_STORY: 3,
  PACKAGE_CATEGORY_DROPDOWN: [
      {
          category_id: 1,
          category_name: "Instagram Photo Feed Post"
      },
      {
          category_id: 2,
          category_name: "Instagram Reel"
      },
      {
          category_id: 3,
          category_name: "Instagram Story"
      }
  ],
  CONTENT_ONLY: "content_only",
  CONTENT_AND_POSTING: "content_and_posting"
});

export default Constant;
