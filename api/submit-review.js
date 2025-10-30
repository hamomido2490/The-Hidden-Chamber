const { Redis } = require('@upstash/redis');
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method !== 'POST') return res.status(405).end();

  try {
    const { alias, rating, comment } = req.body;
    
    // التحقق من الصحة
    if (!comment || comment.length < 5 || comment.length > 200) {
      return res.status(400).json({ error: 'التعليق يجب أن يكون بين 5-200 حرف' });
    }
    if (rating < 1 || rating > 5) {
      return res.status(400).json({ error: 'التقييم غير صالح' });
    }

    const review = {
      id: Date.now().toString(),
      alias: alias || 'زائر غامض',
      rating: parseInt(rating),
      comment: comment.trim(),
      timestamp: new Date().toISOString()
    };

    // حفظ في قائمة Redis
    await redis.lpush('hidden_chamber:reviews', JSON.stringify(review));
    await redis.ltrim('hidden_chamber:reviews', 0, 99); // احتفظ بآخر 100 تقييم

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Review error:', error);
    return res.status(500).json({ error: 'فشل الحفظ' });
  }
}