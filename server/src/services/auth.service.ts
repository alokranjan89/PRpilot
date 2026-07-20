import prisma from "../prisma/prisma";

export const findOrCreateUser = async (profile: any) => {
  const githubId = profile.id.toString();

  let user = await prisma.user.findUnique({
    where: {
      githubId,
    },
  });

  if (user) {
    return user;
  }

  user = await prisma.user.create({
    data: {
      githubId,
      name: profile.displayName,
      email: profile.emails?.[0]?.value ?? `${githubId}@users.noreply.github.com`,
      avatarUrl: profile.photos?.[0]?.value,
    },
  });

  return user;
};