import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

const logoPath = join(rootDir, 'public', 'modulab-logo.png');

// Favicon sizes to generate (8px radius for all sizes)
const sizes = [
  { size: 16, radius: 6, name: 'favicon-16x16.png' },   // Standard favicon
  { size: 32, radius: 6, name: 'favicon-32x32.png' },   // High-DPI favicon
  { size: 180, radius: 6, name: 'apple-touch-icon.png' } // Apple touch icon
];

async function createRoundedFavicon(size, radius, filename) {
  const outputPath = join(rootDir, 'public', filename);
  
  // Create a mask with rounded corners
  const roundedCorners = Buffer.from(
    `<svg><rect x="0" y="0" width="${size}" height="${size}" rx="${radius}" ry="${radius}"/></svg>`
  );

  await sharp(logoPath)
    .resize(size, size, {
      fit: 'contain',
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .composite([
      {
        input: roundedCorners,
        blend: 'dest-in'
      }
    ])
    .png()
    .toFile(outputPath);

  console.log(`✅ Created ${filename} (${size}x${size}px, ${radius}px radius)`);
}

try {
  for (const { size, radius, name } of sizes) {
    await createRoundedFavicon(size, radius, name);
  }
  console.log('\n✅ All rounded favicons created successfully!');
} catch (error) {
  console.error('Error creating favicon:', error);
  process.exit(1);
}
