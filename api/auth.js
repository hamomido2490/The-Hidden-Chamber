// ═══════════════════════════════════════════════════════════
// AUTHENTICATION API - Secure Dashboard Access
// ═══════════════════════════════════════════════════════════

export default async function handler(req, res) {
    // CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Handle preflight requests
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ 
            success: false, 
            error: 'Method not allowed' 
        });
    }

    try {
        // Parse request body
        const { password } = req.body;

        // Get correct password from environment variables
        const correctPassword = process.env.DASHBOARD_PASSWORD;

        // Check if password is provided and matches
        if (!password) {
            return res.status(400).json({ 
                success: false, 
                error: 'Password is required' 
            });
        }

        if (!correctPassword) {
            console.error('DASHBOARD_PASSWORD environment variable is not set');
            return res.status(500).json({ 
                success: false, 
                error: 'Server configuration error' 
            });
        }

        // Compare passwords securely (using strict equality)
        if (password === correctPassword) {
            return res.status(200).json({ 
                success: true 
            });
        } else {
            return res.status(401).json({ 
                success: false, 
                error: 'Invalid password' 
            });
        }
    } catch (error) {
        console.error('Authentication error:', error);
        return res.status(500).json({ 
            success: false, 
            error: 'Internal server error' 
        });
    }
}