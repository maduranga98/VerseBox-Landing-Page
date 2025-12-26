const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = './public/features';
const outputDir = './public/features/optimized';

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.readdirSync(inputDir).forEach(file => {
  if (file.match(/\.(jpg|jpeg|png)$/)) {
    const inputPath = path.join(inputDir, file);
    const baseName = file.replace(/\.(jpg|jpeg|png)$/, '');

    // Generate WebP version
    sharp(inputPath)
      .resize(1200, null, { withoutEnlargement: true })
      .webp({ quality: 85 })
      .toFile(path.join(outputDir, `${baseName}.webp`))
      .then(() => console.log(`✓ Generated WebP: ${baseName}.webp`))
      .catch(err => console.error(`✗ Error generating WebP for ${file}:`, err));

    // Generate AVIF version
    sharp(inputPath)
      .resize(1200, null, { withoutEnlargement: true })
      .avif({ quality: 80 })
      .toFile(path.join(outputDir, `${baseName}.avif`))
      .then(() => console.log(`✓ Generated AVIF: ${baseName}.avif`))
      .catch(err => console.error(`✗ Error generating AVIF for ${file}:`, err));
  }
});

console.log('\n🎨 Image optimization started! Check the output directory for results.');
