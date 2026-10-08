# Mahalaxmi Mahila Mandali — Clean Website Structure

## 1. Keep these common files unchanged
- `style.css` — one shared stylesheet for every page.
- `script.js` — one shared JavaScript file for every page.
- The header/navigation and footer in every HTML page are intentionally identical.

## 2. Official logo
Put the approved logo here:
`images/logo/logo.png`

Do not change the path in individual pages.

## 3. Main photos
Recommended paths:
- `images/organization.jpg`
- `images/old-age-home.jpg`
- `images/gallery/photo-1.jpg` through `photo-6.jpg`

If a photo is not ready, the site shows a designed placeholder instead of a broken image icon.

## 4. When creating a NEW page
Copy any existing inner page, preferably `about.html`.

Change ONLY:
1. `<title>`
2. `<meta name="description">`
3. `<body class="...">` if desired
4. `<main id="main">` content
5. `aria-current="page"` on the correct navigation link
6. Page-specific comments/content/images.

Do NOT change:
- Header navigation structure
- Header class names
- Footer structure
- `style.css` link
- `script.js` link
- file/folder naming scheme

## 5. Navigation file names
- Home -> `index.html`
- About Us -> `about.html`
- Team -> `team.html`
- Facilities -> `facilities.html`
- Old Age Home Overview -> `old-age-home.html`
- Staff List -> `staff.html`
- Beneficiary List -> `beneficiary.html`
- Menu List -> `menu.html`
- Assets List -> `assets.html`
- Gallery -> `gallery.html`
- News & Updates -> `news-updates.html`
- Welfare Activities -> `welfare-activities.html`
- Live Feed -> `live-feed.html`
- Contact -> `contact.html`
- CCTV -> external URL `https://175.101.25.237/`
- Donate -> `contact.html#donate`

## 6. Important content rule
Do not repeat full history, staff, beneficiary, menu, assets, facilities, gallery or news content on every page.
Keep one page as the main source for each subject and link to it.

## 7. Sensitive records
Beneficiary information should only be published if the organisation has approved public disclosure. Use approved identifiers if required.

## 8. Donation
No unverified UPI ID or QR code is included. Add the official verified payment information only after it is supplied.

## 9. Running in VS Code
Open the folder in VS Code and open `index.html` with Live Server. All HTML files must stay in the project root beside `style.css` and `script.js`.
