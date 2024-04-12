export default defineEventHandler(async (event) => {
  const session = await useSession(event, {
      password: "80d42cfb-1cd2-462c-8f17-e3237d9027e9",
    });

    const count = (session.data.count || 0) + 1;
    await session.update({
      count: count,
    });

    console.log("Hello world", count)
  })
