const { Redis } = require('@upstash/redis');
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  try {
    const reviews = await redis.lrange('hidden_chamber:reviews', 0, -1);
    const parsed = reviews.map(r => JSON.parse(r)).slice(0, 20); // آخر 20 تقييم
    return res.status(200).json(parsed);
  } catch (error) {
    return res.status(200).json([]); // أعد مصفوفة فارغة في حالة الخطأ
  }
}