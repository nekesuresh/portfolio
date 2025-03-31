// This script modifies the build process for Netlify deployment
import fs from 'fs';
import { execSync } from 'child_process';

// Run Vite build for the frontend only using the Netlify config
console.log('Building frontend for Netlify...');
execSync('vite build --config vite.netlify.config.js', { stdio: 'inherit' });

// Copy the netlify redirects to the output directory
console.log('Setting up Netlify redirects...');
fs.writeFileSync('./dist/_redirects', '/* /index.html 200');

console.log('Build complete!');