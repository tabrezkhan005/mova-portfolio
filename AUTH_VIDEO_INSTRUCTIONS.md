# Authentication Background Video Setup

## Video Requirements

To add a background video to the authentication page, please follow these steps:

### 1. Video File
- **File Name**: `auth-background.mp4`
- **Location**: Place the video file in the `public/` directory
- **Format**: MP4 (recommended for web compatibility)
- **Size**: Optimize for web (recommended: 5-15MB for better loading performance)

### 2. Video Content Suggestions
For the best aesthetic experience, consider using:
- Car rental/luxury car footage
- Scenic driving routes
- Premium vehicle showcases
- Smooth, slow-motion shots
- High-quality, professional footage

### 3. Video Specifications
- **Resolution**: 1920x1080 (Full HD) or higher
- **Duration**: 10-30 seconds (will loop automatically)
- **Frame Rate**: 24-30 fps
- **Codec**: H.264 for best compatibility

### 4. Implementation
The video is already configured in the authentication page at:
```
src/app/auth/page.tsx
```

The video will automatically:
- Play in the background
- Loop continuously
- Be muted (required for autoplay)
- Have a dark overlay for better text readability
- Be responsive across all devices

### 5. Fallback
If no video is provided, the page will show a beautiful gradient background as a fallback.

## Current Status
- ✅ Authentication system created
- ✅ Background video support implemented
- ✅ MOVA logo integration complete
- ⏳ Waiting for video file to be added

Once you add the video file to `public/auth-background.mp4`, the authentication page will be complete and ready to use!
