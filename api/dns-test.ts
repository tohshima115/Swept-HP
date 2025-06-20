import type { VercelRequest, VercelResponse } from '@vercel/node';
import dns from 'dns';

export default function handler(_req: VercelRequest, res: VercelResponse) {
  dns.lookup('api.resend.com', { all: true }, (err, addresses) => {
    if (err) {
      console.error('DNS Lookup Error from API:', err);
      return res.status(500).json({
        error: 'DNS lookup failed within the Node.js process.',
        details: err,
      });
    }
    console.log('DNS Lookup Success from API:', addresses);
    return res.status(200).json({
      success: true,
      message: 'DNS lookup from Node.js process was successful.',
      addresses,
    });
  });
} 