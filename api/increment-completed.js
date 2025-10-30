// ═══════════════════════════════════════════════════════════
// COMPLETION COUNTER - Upstash Redis Integration (Vercel Compatible)
// ═══════════════════════════════════════════════════════════

const { Redis } = require('@upstash/redis');

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const count = await redis.incr('hidden_chamber:completed');
    
    return res.status(200).json({
      success: true,
      count: count,
      message: 'Completion counted'
    });
  } catch (error) {
    console.error('Redis error:', error);
    return res.status(500).json({
      success: false,
      error: 'Failed to increment counter',
      count: 0
    });
  }
}