import express from 'express';
import fs from 'fs'
const router = express.Router();


// Define the route to serve the sitemap.xml file
router.get('/sitemap.xml', (req, res) => {
  try {
    const sitemap = fs.readFileSync('sitemap.xml', 'utf-8');
    res.setHeader('Content-Type', 'application/xml');
    res.send(sitemap);
  } catch (error) {
    console.error('Error reading sitemap:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

export default router