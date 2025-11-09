# Portfolio Frontend Deployment Guide

## 🚀 Deployment Status

### Live URLs
- **Portfolio Website**: https://kapilkaushal.netlify.app/
- **Admin Dashboard**: https://admin-kapil.netlify.app/login/
- **Backend API**: https://backend-portfolio-lpjj.onrender.com/swagger/index.html

## ✅ Configuration Complete

Your portfolio is now configured to use the production backend API. All environment variables and CORS settings are properly configured.

### Changes Made

1. **Environment Configuration**
   - Updated `.env` with production backend URL
   - Created `.env.production` for production builds
   - Updated fallback URL in `portfolioApiService.js`

2. **Netlify Configuration**
   - Created `netlify.toml` with proper build settings
   - Configured SPA redirect rules
   - Added security headers
   - Configured asset caching

3. **Backend CORS**
   - Fixed trailing slash in portfolio domain
   - Verified all domains are whitelisted

## 📋 Deployment Checklist

### For Portfolio Website (Netlify)

1. **Environment Variables in Netlify**
   - Go to: Site Settings → Environment Variables
   - Add: `VITE_API_URL` = `https://backend-portfolio-lpjj.onrender.com/api`

2. **Deploy Latest Changes**
   ```bash
   cd 01-portfolio-website
   npm run build
   ```
   - Push to GitHub (if using Git deployment)
   - Or drag & drop `dist` folder to Netlify

3. **Verify Deployment**
   - Visit: https://kapilkaushal.netlify.app/
   - Check browser console for errors
   - Test API integration with Health Check component

### For Backend (Render) - If Needed

If you need to redeploy the backend with the CORS fix:

1. **Push Changes to Repository**
   ```bash
   git add 02-admin-backend-dotnet/PortfolioAdmin.Api/Program.cs
   git commit -m "fix: Remove trailing slash from portfolio CORS domain"
   git push
   ```

2. **Render Auto-Deploy**
   - Render will automatically redeploy
   - Wait 2-3 minutes for deployment to complete

3. **Verify Backend**
   - Visit: https://backend-portfolio-lpjj.onrender.com/swagger/index.html
   - Test `/api/cors-test` endpoint

## 🧪 Testing Your Deployment

### 1. Test API Connection
Visit your portfolio and open browser DevTools (F12):
- Check Console for API errors
- Check Network tab for API calls
- Verify data loads correctly

### 2. Test CORS
Open browser console on your portfolio site:
```javascript
fetch('https://backend-portfolio-lpjj.onrender.com/api/cors-test')
  .then(r => r.json())
  .then(data => console.log('CORS Test:', data))
  .catch(e => console.error('CORS Error:', e));
```

### 3. Test All Features
- Hero section loads
- About section displays
- Projects load from API
- Experience timeline works
- Skills/Technologies display
- Contact form works (if implemented)

## 🔧 Troubleshooting

### Issue: API Calls Failing

**Check:**
1. Backend is running: Visit swagger endpoint
2. CORS headers in browser DevTools Network tab
3. Environment variable is set in Netlify

**Fix:**
- Verify `VITE_API_URL` in Netlify settings
- Clear Netlify cache and redeploy
- Check backend logs in Render dashboard

### Issue: Old Data Showing

**Fix:**
```bash
# Clear browser cache
Ctrl+Shift+Delete (Chrome/Edge)

# Hard refresh
Ctrl+F5 or Ctrl+Shift+R

# Or clear cache in Netlify
netlify-cli: netlify build --clear-cache
```

### Issue: Build Fails

**Check:**
1. All dependencies installed: `npm install`
2. Build works locally: `npm run build`
3. Node version matches (18.x)

**Fix:**
- Update `package.json` engines field
- Check Netlify build logs
- Verify all imports are correct

## 🚀 Quick Deploy Commands

### Full Deployment
```bash
# 1. Install dependencies
cd 01-portfolio-website
npm install

# 2. Test build locally
npm run build
npm run preview

# 3. Deploy to Netlify (if using CLI)
netlify deploy --prod
```

### Manual Netlify Deploy
```bash
# Build locally
npm run build

# Deploy via UI
# Drag & drop the 'dist' folder to Netlify dashboard
```

## 📝 Environment Variables Reference

### Portfolio Website (.env.production)
```env
VITE_API_URL=https://backend-portfolio-lpjj.onrender.com/api
```

### Backend (Render Environment Variables)
```env
JWT_SECRET_KEY=<your-secure-jwt-key>
ASPNETCORE_ENVIRONMENT=Production
ConnectionStrings__DefaultConnection=<your-db-connection>
```

### Admin Frontend (Netlify)
```env
NEXT_PUBLIC_API_URL=https://backend-portfolio-lpjj.onrender.com/api
```

## ✨ Best Practices

1. **Always test locally first**
   ```bash
   npm run build
   npm run preview
   ```

2. **Use environment-specific configs**
   - `.env` for development
   - `.env.production` for production builds

3. **Monitor backend performance**
   - Render free tier spins down after inactivity
   - First request may be slow (cold start)
   - Consider upgrading if needed

4. **Keep dependencies updated**
   ```bash
   npm outdated
   npm update
   ```

5. **Monitor errors**
   - Check Netlify logs
   - Check Render logs
   - Use browser DevTools

## 🎉 Your Stack is Now Live!

- ✅ Portfolio: React + Vite on Netlify
- ✅ Admin Frontend: Next.js on Netlify
- ✅ Backend API: .NET 9 on Render
- ✅ All CORS configured
- ✅ All environment variables set
- ✅ Ready for production use!

## 📞 Need Help?

If you encounter issues:
1. Check browser console for errors
2. Check Netlify deploy logs
3. Check Render backend logs
4. Verify all environment variables
5. Test API endpoints in Swagger

Happy deploying! 🚀
