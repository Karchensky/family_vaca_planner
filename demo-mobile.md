# Mobile Demo Guide

## Testing Mobile Features Locally

### 1. Start the Development Server
```bash
npm run dev
```

### 2. Test Mobile View
1. Open your browser and go to `http://localhost:3000`
2. Click the "Mobile View" button
3. You'll see the full-screen mobile interface

### 3. Test Swipe Navigation
**On Desktop:**
- Use arrow keys (← →) to navigate
- Click the arrow buttons on the sides
- Click the dots at the top to jump to any option

**On Mobile Device:**
- Swipe left/right on the screen
- Tap the arrow buttons
- Tap the dots to jump to specific options

### 4. Test Sharing
- Click the share button (📤) in the mobile view
- On mobile: Uses native share sheet
- On desktop: Copies to clipboard

### 5. Test Responsive Design
- Resize your browser window to see how it adapts
- Use browser dev tools to simulate mobile devices
- Test on actual mobile devices for best experience

## Mobile Features Demo

### Swipe Navigation
- **Swipe Left**: Go to next vacation option
- **Swipe Right**: Go to previous vacation option
- **Minimum Swipe Distance**: 50px to trigger navigation

### Touch Controls
- **Tap Dots**: Jump to specific vacation option
- **Tap Arrows**: Navigate one option at a time
- **Tap Share**: Share current vacation option
- **Tap Close**: Exit mobile view

### Visual Indicators
- **Progress Dots**: Show current position and total options
- **Navigation Arrows**: Appear only when navigation is possible
- **Swipe Hints**: Fade out after first interaction

## Browser Compatibility

### Mobile Browsers
- ✅ iOS Safari
- ✅ Chrome Mobile
- ✅ Firefox Mobile
- ✅ Samsung Internet
- ✅ Edge Mobile

### Desktop Browsers
- ✅ Chrome
- ✅ Firefox
- ✅ Safari
- ✅ Edge

## Troubleshooting Mobile View

### Swipe Not Working?
- Ensure you're using a modern browser
- Check that touch events are enabled
- Try refreshing the page
- Test on actual mobile device

### Share Button Not Working?
- HTTPS is required for Web Share API
- Use localhost for testing (works in development)
- Clipboard fallback works on most browsers

### Performance Issues?
- Images are optimized for mobile
- Touch events are debounced
- Smooth animations are hardware-accelerated

## Quick Test Checklist

- [ ] Mobile view opens correctly
- [ ] Swipe navigation works
- [ ] Arrow buttons work
- [ ] Dot navigation works
- [ ] Share button works
- [ ] Close button works
- [ ] Responsive design adapts
- [ ] Images load properly
- [ ] Touch feedback is smooth
- [ ] No console errors

## Next Steps

1. **Add your vacation options** using the form
2. **Test on actual mobile devices**
3. **Deploy to share with family** (see DEPLOYMENT.md)
4. **Customize colors and styling** if desired 