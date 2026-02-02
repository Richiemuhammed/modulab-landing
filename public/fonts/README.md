# Satoshi Font Files

Place your Satoshi font files in this directory.

## Required Files

You need the following Satoshi font files (supports `.woff2`, `.woff`, `.otf`, or `.ttf` formats):

- `Satoshi-Regular.*` - weight 400 (Regular)
- `Satoshi-Medium.*` - weight 500 (Medium)
- `Satoshi-Semibold.*` - weight 600 (Semibold)
- `Satoshi-Bold.*` - weight 700 (Bold)

**Supported formats (in order of preference):**
1. `.woff2` (best for web - smallest file size)
2. `.woff` (good for web)
3. `.otf` (OpenType - will work)
4. `.ttf` (TrueType - will work, but larger files)

## Where to Get Satoshi

Satoshi is a premium font available from:
- [Fontshare](https://www.fontshare.com/fonts/satoshi) (free)
- [Satoshi Font Family](https://www.fonts.com/font/satoshi) (commercial)

## File Structure

```
public/
  fonts/
    Satoshi-Regular.woff2  (or .woff, .otf, .ttf)
    Satoshi-Medium.woff2    (or .woff, .otf, .ttf)
    Satoshi-Semibold.woff2 (or .woff, .otf, .ttf)
    Satoshi-Bold.woff2     (or .woff, .otf, .ttf)
```

**Note:** If your downloaded files have different names (e.g., `Satoshi-Regular.otf`), you can use them as-is. The CSS will automatically detect the format.

The font-face declarations are already set up in `src/index.css`. Once you add the font files here, Satoshi will automatically be available throughout the app.
