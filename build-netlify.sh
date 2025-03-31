#!/bin/bash
echo "Building for Netlify deployment..."
echo "Running Vite build with Netlify configuration..."
node netlify-build.js

echo "Build complete! Your site is ready for Netlify."
echo "To deploy to Netlify:"
echo "1. Download the 'dist' folder"
echo "2. Drag and drop it to Netlify's deploy section, or"
echo "3. Connect your GitHub repository and push these changes"