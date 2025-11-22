# INKWINGS Landing Page - Deployment Guide

This guide covers deploying the INKWINGS landing page to production.

## 🚀 Quick Deploy

The site is built as a static export and can be deployed to any static hosting platform:

- **Netlify**: Drop the `out` folder or connect your repository
- **Vercel**: Deploy with zero configuration
- **Cloudflare Pages**: Upload the `out` folder
- **GitHub Pages**: Serve the `out` folder
- **AWS S3 + CloudFront**: Upload to S3 bucket
- **Firebase Hosting**: Deploy using Firebase CLI

## 📦 Build Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# The static files will be in the `out` directory
```

## 🔧 Environment Variables

Copy `.env.example` to `.env.local` and configure:

```bash
cp .env.example .env.local
```

Update the values in `.env.local` with your actual URLs and configuration.

## 🌐 Deployment Platforms

### Netlify

1. **Via Git Integration** (Recommended)
   - Connect your GitHub repository
   - Build command: `npm run build`
   - Publish directory: `out`

2. **Manual Deploy**
   ```bash
   npm run build
   # Drag and drop the `out` folder to Netlify
   ```

**netlify.toml** (optional):
```toml
[build]
  command = "npm run build"
  publish = "out"

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    X-XSS-Protection = "1; mode=block"
```

### Vercel

1. **Via Git Integration**
   - Import your repository
   - Vercel auto-detects Next.js configuration
   - Deploy!

2. **Via CLI**
   ```bash
   npm install -g vercel
   vercel --prod
   ```

### Cloudflare Pages

1. Connect your GitHub repository
2. Build settings:
   - Build command: `npm run build`
   - Build output directory: `out`
3. Deploy!

### Firebase Hosting

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login to Firebase
firebase login

# Build the site
npm run build

# Deploy
firebase deploy --only hosting
```

## 🔐 Security Headers

The `public/_headers` file contains security headers for platforms that support it (Netlify, Cloudflare Pages).

For other platforms, configure headers in your hosting platform settings:

- **X-Frame-Options**: DENY
- **X-Content-Type-Options**: nosniff
- **X-XSS-Protection**: 1; mode=block
- **Referrer-Policy**: strict-origin-when-cross-origin
- **Content-Security-Policy**: (see `_headers` file)

## 📊 SEO & Performance

### Included Optimizations

✅ **SEO**
- Meta tags (title, description, keywords)
- Open Graph tags for social sharing
- Twitter Card tags
- Structured data (JSON-LD)
- Canonical URLs
- Robots.txt
- Sitemap.xml

✅ **Performance**
- React Compiler enabled
- Optimized package imports (lucide-react)
- Image optimization configuration
- Static export for fast loading
- Compression enabled
- ETag generation

✅ **PWA Ready**
- manifest.json for installable app
- Theme color configuration
- Mobile-optimized viewport

### Post-Deployment Checklist

After deploying, verify:

1. **SEO**
   - [ ] Test with Google Search Console
   - [ ] Verify sitemap at `/sitemap.xml`
   - [ ] Check robots.txt at `/robots.txt`
   - [ ] Test social sharing preview

2. **Performance**
   - [ ] Run Lighthouse audit (target: 90+ on all metrics)
   - [ ] Test on multiple devices
   - [ ] Verify image loading
   - [ ] Check page load speed

3. **Functionality**
   - [ ] All links working
   - [ ] Navigation smooth
   - [ ] Forms working (if any)
   - [ ] Mobile responsiveness
   - [ ] Cross-browser compatibility

## 🔍 Monitoring & Analytics

Consider adding:

- **Google Analytics**: Add `NEXT_PUBLIC_GA_ID` to environment
- **Google Tag Manager**: Add `NEXT_PUBLIC_GTM_ID` to environment
- **Sentry**: For error tracking
- **Hotjar**: For user behavior analytics

## 📱 Custom Domain

After deployment:

1. Configure your custom domain in hosting platform settings
2. Update `NEXT_PUBLIC_APP_URL` in environment variables
3. Update sitemap URLs
4. Configure SSL/TLS (usually automatic)
5. Set up domain redirects (www to non-www or vice versa)

## 🚦 Continuous Deployment

For automated deployments:

1. **Main Branch**: Auto-deploy to production
2. **Development Branch**: Auto-deploy to staging/preview
3. **Pull Requests**: Generate preview deployments

## 📞 Support

For deployment issues:
- Check hosting platform documentation
- Review build logs
- Ensure all dependencies are in `package.json`
- Verify Node.js version compatibility

## 🎉 Production Launch Checklist

- [ ] Build completes successfully
- [ ] All environment variables configured
- [ ] Custom domain configured
- [ ] SSL certificate active
- [ ] SEO meta tags verified
- [ ] Analytics configured
- [ ] Social sharing tested
- [ ] Performance audit passed
- [ ] Mobile responsiveness verified
- [ ] Cross-browser testing complete
- [ ] Security headers configured
- [ ] Sitemap submitted to search engines
- [ ] 404 page working
- [ ] Legal pages accessible (Privacy, Terms, Copyright)

---

**Version**: 1.0.0
**Last Updated**: November 2025
**Built with**: Next.js 16, React 19, Tailwind CSS 4
