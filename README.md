# Vacation Comparison Tool

A sleek, modern web application for comparing multiple vacation options. Perfect for presenting travel plans to family and friends with an easy-to-compare format.

## Features

- **Side-by-side comparison** of vacation options
- **Mobile-optimized experience** with swipe navigation
- **Responsive design** that works perfectly on desktop and mobile
- **Easy editing** - add, edit, or remove options at any time
- **Beautiful UI** with Borda font and see-through monitoring theme
- **Image support** for each destination
- **Comprehensive details** including location, flight prices, accommodation, activities, weather, and highlights
- **Native sharing** on mobile devices
- **Touch-friendly interface** with swipe gestures

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser** and navigate to `http://localhost:3000`

## Usage

### Adding Vacation Options

1. Click the "Add New Option" button
2. Fill in the details:
   - **Title**: A catchy name for your vacation (e.g., "Bali Paradise")
   - **Subtitle**: Country or region (e.g., "Indonesia")
   - **Image URL**: Link to a beautiful image of the destination
   - **Location**: Specific location (e.g., "Bali, Indonesia")
   - **Trip Dates**: When you plan to travel (e.g., "June 15-25, 2024")
   - **Flight Price**: Estimated flight cost (e.g., "$1,200")
   - **Other Cost Considerations**: Add additional costs like:
     - Car rentals, ski passes, ferry tickets, etc.
   - **Accommodations**: Add multiple accommodation options with:
     - Name and price
     - Thumbnail image
     - Booking URL (Airbnb, Booking.com, etc.)
     - Click to select and see cost breakdown
   - **Activities & Attractions**: Add multiple activities with:
     - Name and description
     - Thumbnail image
   - **Weather**: Detailed weather information:
     - Day and evening temperatures
     - Rain chance percentage
     - Weather description
   - **Notes & Other**: Additional information and highlights

### Editing Options

- Click the edit icon (pencil) on any vacation card to modify its details
- Click the trash icon to remove an option
- Click on any accommodation to select it and see cost breakdown per person

### Mobile Experience

- **Mobile View Mode**: Click the "Mobile View" button to enter full-screen mobile mode
- **Swipe Navigation**: Swipe left/right to navigate between vacation options
- **Touch Controls**: Tap dots to jump to any option, use arrow buttons for navigation
- **Native Sharing**: Share individual vacation options using your device's native share sheet
- **Responsive Design**: Automatically adapts to any screen size

### Sharing

Once you've set up your vacation options, you can:

1. **Build for production:**
   ```bash
   npm run build
   ```

2. **Deploy to any static hosting service** like:
   - Netlify (recommended - see DEPLOYMENT.md)
   - Vercel
   - GitHub Pages
   - Firebase Hosting

3. **Share the link** with your family and friends

**For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md)**

## Sample Data

The app comes with three sample vacation options to get you started:
- Bali Paradise (Indonesia)
- Swiss Alps Adventure (Switzerland)
- Greek Island Hopping (Greece)

You can edit or remove these and add your own options.

## Customization

### Styling
The app uses a clean, modern design with:
- Borda font family
- See-through monitoring theme
- Gradient backgrounds
- Glassmorphism effects
- Responsive grid layout

### Adding More Fields
To add additional comparison fields, modify the `VacationOption` component and the form in `AddOptionModal`.

## Technical Details

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: CSS with custom properties
- **Icons**: Lucide React
- **Images**: Uses Unsplash for sample images

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

MIT License - feel free to use and modify as needed. 