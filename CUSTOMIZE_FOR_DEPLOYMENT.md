# Customizing Vacation Options for Deployment

## How to Add Your Custom Vacation Options

Since localStorage is browser-specific, you need to edit the sample data **before** deploying to Netlify so others can see your custom options.

### Step 1: Edit the Sample Data

Open `src/App.jsx` and find the `sampleVacations` array (around line 20). Replace the sample data with your custom vacation options.

### Example Custom Vacation Option:

```javascript
const sampleVacations = [
  {
    id: 1,
    title: "Your Custom Vacation",
    subtitle: "Your Destination",
    image: "https://your-image-url.com/image.jpg",
    location: "Your Location",
    tripDates: "Your Trip Dates",
    flightPrice: "$Your Flight Price",
    flightDuration: "Your Flight Duration",
    flightNotes: "Your Flight Notes",
    accommodations: [
      {
        id: 1,
        name: "Your Accommodation Name",
        image: "https://your-accommodation-image.com/image.jpg",
        price: "$Your Price/night",
        url: "https://your-booking-link.com",
        selected: true  // Set to true for default selection
      },
      // Add more accommodations as needed
    ],
    activities: [
      {
        id: 1,
        name: "Your Activity Name",
        image: "https://your-activity-image.com/image.jpg",
        description: "Your activity description"
      },
      // Add more activities as needed
    ],
    weather: {
      day: "Your Day Weather",
      evening: "Your Evening Weather",
      rainChance: "Your Rain Chance",
      description: "Your weather description"
    },
    notes: "Your notes and other information"
  },
  // Add more vacation options as needed
]
```

### Step 2: Test Your Changes

1. Run `npm run dev` to test locally
2. Make sure your custom data displays correctly
3. Test the cost calculations and selection functionality

### Step 3: Deploy to Netlify

1. Commit your changes: `git add . && git commit -m "Add custom vacation options"`
2. Push to GitHub: `git push origin main`
3. Deploy to Netlify (your GitHub repo will auto-deploy)

### Step 4: Share Your Link

Once deployed, share your Netlify URL with friends/family. They will see your custom vacation options as the default data.

## Tips for Custom Data:

- **Images**: Use high-quality images from Unsplash or similar services
- **Prices**: Use realistic prices for accurate cost calculations
- **URLs**: Include booking links for accommodations
- **Descriptions**: Make them engaging and informative
- **Weather**: Use realistic weather data for the trip dates

## Alternative: Backend Solution

If you want true data sharing across different devices/browsers, consider adding a simple backend:

- **Firebase**: Free tier with real-time database
- **Supabase**: Free tier with PostgreSQL database
- **Netlify Functions**: Serverless functions for data storage

This would allow you to edit data on the live site and have it persist for all users. 