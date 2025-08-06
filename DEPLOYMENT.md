# Deployment Guide

This guide will help you deploy your vacation comparison tool so you can share it with family and friends.

## Quick Deployment Options

### Option 1: Netlify (Recommended - Free)

1. **Build your project:**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify:**
   - Go to [netlify.com](https://netlify.com) and sign up/login
   - Drag and drop the `dist` folder from your project to the Netlify dashboard
   - Your site will be live instantly with a URL like `https://random-name.netlify.app`

3. **Custom domain (optional):**
   - In your Netlify dashboard, go to "Domain settings"
   - Add your custom domain or use a free Netlify subdomain

### Option 2: Vercel (Free)

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Follow the prompts** and your site will be live

### Option 3: GitHub Pages (Free)

1. **Create a GitHub repository** and push your code

2. **Add this to your `package.json`:**
   ```json
   {
     "homepage": "https://yourusername.github.io/your-repo-name",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Install gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

4. **Deploy:**
   ```bash
   npm run deploy
   ```

### Option 4: Firebase Hosting (Free)

1. **Install Firebase CLI:**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login and initialize:**
   ```bash
   firebase login
   firebase init hosting
   ```

3. **Build and deploy:**
   ```bash
   npm run build
   firebase deploy
   ```

## Mobile Sharing Features

Once deployed, your vacation comparison tool includes several mobile-friendly features:

### Mobile View Mode
- Click the "Mobile View" button to enter full-screen mobile mode
- Swipe left/right to navigate between vacation options
- Tap the dots at the top to jump to any option
- Use the share button to share individual vacation details

### Native Sharing
- On mobile devices, the share button uses the native share sheet
- On desktop, it copies vacation details to clipboard
- Share specific vacation options with family members

### Responsive Design
- Automatically adapts to any screen size
- Touch-friendly interface
- Optimized for mobile browsers

## Sharing Your Vacation Options

### Method 1: Share the Link
1. Deploy your site using one of the methods above
2. Share the URL with your family and friends
3. They can view all vacation options and use mobile view

### Method 2: Share Individual Options
1. In mobile view, tap the share button on any vacation
2. Use your device's native sharing (WhatsApp, email, etc.)
3. Recipients get a direct link to your comparison tool

### Method 3: Screenshots
- The mobile view is perfect for taking screenshots
- Share individual vacation cards via messaging apps
- Great for quick comparisons

## Customization Before Sharing

Before sharing, you might want to:

1. **Add your vacation options:**
   - Click "Add New Option" to add your destinations
   - Include real flight prices and accommodation details
   - Add beautiful images from Unsplash or your own photos

2. **Edit the title and description:**
   - Modify the header in `src/App.jsx`
   - Add your family's name or trip details

3. **Customize colors (optional):**
   - Edit the gradient in `src/index.css`
   - Change the color scheme to match your preferences

## Tips for Better Sharing

1. **Use descriptive titles** for each vacation option
2. **Include real prices** when possible
3. **Add high-quality images** that showcase each destination
4. **Be specific about activities** and highlights
5. **Consider adding dates** if you have specific travel windows

## Troubleshooting

### Images not loading?
- Make sure image URLs are accessible
- Use HTTPS URLs for better compatibility
- Consider hosting images on a CDN

### Mobile view not working?
- Ensure you're using a modern browser
- Check that touch events are enabled
- Try refreshing the page

### Sharing not working?
- Make sure you're using HTTPS (required for Web Share API)
- Check browser compatibility
- The clipboard fallback will work on most browsers

## Security Notes

- The app runs entirely in the browser
- No data is stored on servers
- Vacation data is only stored locally in the browser
- Perfect for sharing sensitive travel information with family

## Support

If you need help with deployment or have questions:
- Check the browser console for errors
- Ensure all dependencies are installed
- Try building locally first with `npm run build` 