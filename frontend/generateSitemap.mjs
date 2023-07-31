import { SitemapStream, streamToPromise } from 'sitemap';
import fs from 'fs';
import {Readable} from 'stream';
const hostname = 'https://wwww.raffasports.com/'; // Replace with your website URL

const frontendRoutes = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/shop', changefreq: 'daily', priority: 0.8 },
  { url: '/search', changefreq: 'daily', priority: 0.7 },
  { url: '/category', changefreq: 'daily', priority: 0.7 },
  { url: '/product/:productId', changefreq: 'daily', priority: 0.6 },
  { url: '/login', changefreq: 'daily', priority: 0.8 },
  { url: '/user/*', changefreq: 'daily', priority: 0.8 },
  { url: '/register', changefreq: 'daily', priority: 0.8 },
  { url: '/forgot-password', changefreq: 'daily', priority: 0.8 },
];

const generateSitemap = async () => {
  const sitemapStream = new SitemapStream({ hostname });
  const readableStream = Readable.from(frontendRoutes);

  // Pipe the routes to the sitemap stream
  readableStream.pipe(sitemapStream);

  // Convert the sitemap stream to a string
  const sitemap = await streamToPromise(sitemapStream);

  // Save the sitemap to a file
  fs.writeFileSync('sitemap.xml', sitemap);
};

generateSitemap();

export default generateSitemap;



