const { Redis } = require('@upstash/redis');
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();

  try {
    const visitorId = req.body?.visitorId || 'unknown';
    const added = await redis.sadd('hidden_chamber:unique_visitors', visitorId);
    if (added) await redis.incr('hidden_chamber:visitors');
    const count = await redis.scard('hidden_chamber:unique_visitors');
    res.status(200).json({ success: true, count });
  } catch (error) {
    res.status(500).json({ success: false, count: 0 });
  }
}
