import passport from "passport";
import { Strategy as GitHubStrategy } from "passport-github2";

import { findOrCreateUser } from "../services/auth.service";
import { generateToken } from "../utils/jwt";

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
      callbackURL: process.env.GITHUB_CALLBACK_URL!,
    },
    async (
      accessToken,
      refreshToken,
      profile,
      done
    ) => {
      try {
        const user = await findOrCreateUser(profile);

        const token = generateToken(user.id);

        return done(null, {
          user,
          token,
        });
      } catch (error) {
        return done(error as Error, false);
      }
    }
  )
);

export default passport;