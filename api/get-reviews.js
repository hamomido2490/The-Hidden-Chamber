const { Redis } = require('@upstash/redis');
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  try {
    const reviews = await redis.lrange('hidden_chamber:reviews', 0, 19);
    const parsed = reviews.map(r => JSON.parse(r));
    res.status(200).json(parsed);
  } catch (error) {
    res.status(200).json([]);
  }
}
