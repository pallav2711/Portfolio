/**
 * Generates favicons and social preview images from profile.jpg
 */
import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const profilePath = path.join(root, 'client/public/assets/profile.jpg');
const publicDir = path.join(root, 'client/public');

if (!fs.existsSync(profilePath)) {
  console.error('❌ Profile image not found at:', profilePath);
  process.exit(1);
}

const iconSizes = [
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'favicon.png', size: 32 },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'icon-192.png', size: 192 },
  { name: 'icon-512.png', size: 512 },
];

console.log('🖼️  Generating icons from profile photo...');

for (const { name, size } of iconSizes) {
  await sharp(profilePath)
    .resize(size, size, { fit: 'cover', position: 'attention' })
    .png({ quality: 90 })
    .toFile(path.join(publicDir, name));
}

await sharp(profilePath)
  .resize(32, 32, { fit: 'cover', position: 'attention' })
  .toFile(path.join(publicDir, 'favicon.ico'));

await sharp(profilePath)
  .resize(1200, 630, { fit: 'cover', position: 'attention' })
  .jpeg({ quality: 85 })
  .toFile(path.join(publicDir, 'og-image.jpg'));

const manifest = {
  name: 'Pallav Kanani Portfolio',
  short_name: 'Pallav Kanani',
  description: 'MERN Stack Developer — full-stack applications and AI-powered products.',
  start_url: '/',
  display: 'standalone',
  background_color: '#050505',
  theme_color: '#050505',
  icons: [
    { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
    { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
  ],
};

fs.writeFileSync(
  path.join(publicDir, 'site.webmanifest'),
  JSON.stringify(manifest, null, 2)
);

console.log('✅ Icons and manifest saved to client/public/');
