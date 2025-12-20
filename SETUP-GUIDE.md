# Google Analytics & Search Console Setup Guide
## For 4D Climate Solutions Website (4dcs.co.za)

---

## PART 1: Google Analytics Setup

### Step 1: Create Google Analytics Account
1. Go to **https://analytics.google.com**
2. Sign in with your Google account (or create one)
3. Click **"Start measuring"**

### Step 2: Set Up Property
1. **Account name**: 4D Climate Solutions
2. Click **Next**
3. **Property name**: 4dcs.co.za
4. **Reporting time zone**: South Africa
5. **Currency**: South African Rand (ZAR) or Lesotho Loti (LSL)
6. Click **Next**

### Step 3: Business Details
1. **Industry category**: Business & Industrial
2. **Business size**: Small
3. Click **Next**

### Step 4: Business Objectives
Select:
- Get baseline reports
- Generate leads
- Examine user behavior

Click **Create**

### Step 5: Data Stream Setup
1. Select **Web**
2. **Website URL**: https://4dcs.co.za
3. **Stream name**: 4D Climate Solutions Website
4. Click **Create stream**

### Step 6: Get Your Measurement ID
You'll see a **Measurement ID** that looks like: `G-XXXXXXXXXX`

**Copy this ID!**

### Step 7: Update Your Website
1. Open each HTML file in your website folder
2. Find this line:
   ```javascript
   gtag('config', 'GA_MEASUREMENT_ID');
   ```
3. Replace `GA_MEASUREMENT_ID` with your actual ID:
   ```javascript
   gtag('config', 'G-XXXXXXXXXX');
   ```
4. Also replace in this line:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
   ```
5. Save and redeploy to Cloudflare

### Files to Update:
- index.html
- about.html
- services.html
- projects.html
- apps.html
- blog.html
- contact.html
- privacy.html

---

## PART 2: Google Search Console Setup

### Step 1: Access Search Console
1. Go to **https://search.google.com/search-console**
2. Sign in with the same Google account

### Step 2: Add Property
1. Click **"Add property"**
2. Select **"URL prefix"** (easier)
3. Enter: `https://4dcs.co.za`
4. Click **Continue**

### Step 3: Verify Ownership

**Option A: HTML Tag (Recommended)**
1. Copy the meta tag provided, looks like:
   ```html
   <meta name="google-site-verification" content="XXXXX" />
   ```
2. Add it to the `<head>` section of **index.html**
3. Redeploy to Cloudflare
4. Click **Verify** in Search Console

**Option B: DNS Verification (Alternative)**
1. Copy the TXT record provided
2. Go to Cloudflare DNS settings
3. Add a TXT record with the value
4. Click **Verify** in Search Console

### Step 4: Submit Sitemap
1. In Search Console, go to **Sitemaps** (left menu)
2. Enter: `sitemap.xml`
3. Click **Submit**

---

## PART 3: Create Sitemap

Create a file called `sitemap.xml` in your website folder:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://4dcs.co.za/</loc>
    <lastmod>2024-12-04</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://4dcs.co.za/about.html</loc>
    <lastmod>2024-12-04</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://4dcs.co.za/services.html</loc>
    <lastmod>2024-12-04</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://4dcs.co.za/projects.html</loc>
    <lastmod>2024-12-04</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://4dcs.co.za/apps.html</loc>
    <lastmod>2024-12-04</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://4dcs.co.za/blog.html</loc>
    <lastmod>2024-12-04</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://4dcs.co.za/contact.html</loc>
    <lastmod>2024-12-04</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.6</priority>
  </url>
</urlset>
```

Deploy this with your website.

---

## PART 4: Robots.txt

Create a file called `robots.txt`:

```
User-agent: *
Allow: /

Sitemap: https://4dcs.co.za/sitemap.xml
```

---

## Quick Checklist

### Google Analytics
- [ ] Created GA4 property
- [ ] Got Measurement ID (G-XXXXXXXXXX)
- [ ] Replaced GA_MEASUREMENT_ID in all HTML files
- [ ] Redeployed website

### Google Search Console
- [ ] Added property for 4dcs.co.za
- [ ] Verified ownership (HTML tag or DNS)
- [ ] Created sitemap.xml
- [ ] Submitted sitemap to Search Console
- [ ] Created robots.txt

---

## Expected Results

**After 24-48 hours:**
- Google Analytics will show visitor data
- Search Console will show indexing status

**After 1-2 weeks:**
- Site will appear in Google search results
- Search Console will show search queries

**Tips for Better SEO:**
1. Write 2-3 blog posts per month
2. Get backlinks from partner websites
3. Share content on LinkedIn
4. Add alt text to all images
5. Keep page load times fast

---

## Need Help?

If you get stuck, contact Claude with:
- Your GA Measurement ID
- Any error messages
- Screenshots of the issue

