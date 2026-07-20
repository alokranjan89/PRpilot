import prisma from "../prisma/prisma";

export const findOrCreateUser = async (
  profile: any,
  accessToken: string
) => {
  const githubId = profile.id.toString();

  let user = await prisma.user.findUnique({
    where: {
      githubId,
    },
  });

  // Existing user
  if (user) {
    user = await prisma.user.update({
      where: {
        githubId,
      },
      data: {
        accessToken,
      },
    });

    return user;
  }

  // New user
  user = await prisma.user.create({
    data: {
      githubId,
      name: profile.displayName,
      email:
        profile.emails?.[0]?.value ??
        `${githubId}@users.noreply.github.com`,
      avatarUrl: profile.photos?.[0]?.value,
      accessToken,
    },
  });

  return user;
};