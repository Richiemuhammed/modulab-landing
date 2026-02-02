import sharp from 'sharp'
import { readdirSync, statSync, mkdirSync, existsSync } from 'fs'
import { join, extname, basename } from 'path'

const ASSETS_DIR = 'src/assets'
const OUTPUT_DIR = 'src/assets/optimized'

// Ensure output directory exists
if (!existsSync(OUTPUT_DIR)) {
  mkdirSync(OUTPUT_DIR, { recursive: true })
}

// Get all image files recursively
function getImageFiles(dir) {
  const files = []
  const items = readdirSync(dir)
  
  for (const item of items) {
    const fullPath = join(dir, item)
    const stat = statSync(fullPath)
    
    if (stat.isDirectory() && item !== 'optimized') {
      files.push(...getImageFiles(fullPath))
    } else if (stat.isFile()) {
      const ext = extname(item).toLowerCase()
      if (['.png', '.jpg', '.jpeg'].includes(ext)) {
        files.push(fullPath)
      }
    }
  }
  
  return files
}

async function optimizeImage(inputPath) {
  const filename = basename(inputPath, extname(inputPath))
  const outputPath = join(OUTPUT_DIR, `${filename}.webp`)
  
  try {
    const metadata = await sharp(inputPath).metadata()
    const originalSize = statSync(inputPath).size
    
    // Resize large images (max 1200px width for most, 800px for mascots)
    let maxWidth = 1200
    if (filename.includes('piggy') || filename.includes('kin-man')) {
      maxWidth = 600 // Mascots don't need to be huge
    } else if (filename.includes('icon') || filename.includes('logo')) {
      maxWidth = 400 // Icons/logos can be smaller
    }
    
    const resizeOptions = metadata.width > maxWidth 
      ? { width: maxWidth, withoutEnlargement: true }
      : {}
    
    await sharp(inputPath)
      .resize(resizeOptions)
      .webp({ quality: 80 })
      .toFile(outputPath)
    
    const newSize = statSync(outputPath).size
    const savings = ((originalSize - newSize) / originalSize * 100).toFixed(1)
    
    console.log(`✓ ${filename}`)
    console.log(`  ${(originalSize / 1024).toFixed(0)}KB → ${(newSize / 1024).toFixed(0)}KB (${savings}% smaller)`)
    
    return { original: originalSize, optimized: newSize }
  } catch (error) {
    console.error(`✗ ${filename}: ${error.message}`)
    return { original: 0, optimized: 0 }
  }
}

async function main() {
  console.log('🖼️  Optimizing images...\n')
  
  const images = getImageFiles(ASSETS_DIR)
  console.log(`Found ${images.length} images\n`)
  
  let totalOriginal = 0
  let totalOptimized = 0
  
  for (const image of images) {
    const result = await optimizeImage(image)
    totalOriginal += result.original
    totalOptimized += result.optimized
  }
  
  console.log('\n📊 Summary:')
  console.log(`  Original: ${(totalOriginal / 1024 / 1024).toFixed(2)} MB`)
  console.log(`  Optimized: ${(totalOptimized / 1024 / 1024).toFixed(2)} MB`)
  console.log(`  Saved: ${((totalOriginal - totalOptimized) / 1024 / 1024).toFixed(2)} MB (${((totalOriginal - totalOptimized) / totalOriginal * 100).toFixed(1)}%)`)
  console.log('\n✅ Done! Optimized images are in src/assets/optimized/')
  console.log('   Update your imports to use .webp versions')
}

main()
