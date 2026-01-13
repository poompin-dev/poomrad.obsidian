# Getting Started with Vercel Web Analytics

This guide will help you get started with using Vercel Web Analytics on your Eleventy-based Obsidian digital garden project, showing you how to enable it, deploy your app to Vercel, and view your data in the dashboard.

## Prerequisites

- A Vercel account. If you don't have one, you can [sign up for free](https://vercel.com/signup).
- A Vercel project. If you don't have one, you can [create a new project](https://vercel.com/new).
- The Vercel CLI installed. If you don't have it, you can install it using the following command:

```bash
npm install vercel
```

Or using your preferred package manager:

```bash
# Using pnpm
pnpm install vercel

# Using yarn
yarn add vercel

# Using bun
bun add vercel
```

## Setup Steps

### 1. Enable Web Analytics in Vercel

On the [Vercel dashboard](/dashboard), select your Project and then click the **Analytics** tab and click **Enable** from the dialog.

> **💡 Note:** Enabling Web Analytics will add new routes (scoped at `/_vercel/insights/*`) after your next deployment.

### 2. Analytics Package Already Installed

The `@vercel/analytics` package has been added to your project's dependencies. You can verify this by checking your `package.json` file.

### 3. Analytics Integration Complete

The Vercel Web Analytics script has been integrated into your Eleventy layouts:

- **Main index layout** (`src/site/_includes/layouts/index.njk`) - Integrated
- **Note layout** (`src/site/_includes/layouts/note.njk`) - Integrated  
- **404 error page** (`src/site/404.njk`) - Integrated

The analytics component (`src/site/_includes/components/vercelAnalytics.njk`) is automatically included in all pages and will track:
- Page views
- Navigation events
- User interactions
- Performance metrics

### 4. Deploy Your App to Vercel

Deploy your app using the Vercel CLI:

```bash
vercel deploy
```

Or if you've connected your Git repository (recommended):

```bash
git push
```

This will trigger an automatic deployment to Vercel.

Once your app is deployed, it will start tracking visitors and page views.

> **💡 Note:** If everything is set up properly, you should be able to see a Fetch/XHR request in your browser's Network tab from `/_vercel/insights/view` when you visit any page.

### 5. View Your Data in the Dashboard

Once your app is deployed and users have visited your site, you can view your data in the dashboard.

To do so:

1. Go to your [Vercel dashboard](https://vercel.com/dashboard)
2. Select your project
3. Click the **Analytics** tab

After a few days of visitors, you'll be able to start exploring your data by viewing and [filtering](/docs/analytics/filtering) the panels.

Users on Pro and Enterprise plans can also add [custom events](/docs/analytics/custom-events) to their data to track user interactions such as button clicks, form submissions, or purchases.

## Implementation Details

### Architecture

For this Eleventy project, the Vercel Web Analytics is implemented using the HTML-based approach:

- A script component is included in all layout files
- The component initializes the analytics tracking queue with `window.va`
- The analytics script is loaded asynchronously from `/_vercel/insights/script.js`
- No dependency on framework-specific analytics packages is required

### Analytics Component

The analytics component is located at: `src/site/_includes/components/vercelAnalytics.njk`

This component is automatically included at the end of every page (before the closing `</body>` tag), ensuring it doesn't block page rendering.

## Next Steps

Now that you have Vercel Web Analytics set up, you can explore the following topics to learn more:

- [Learn about the @vercel/analytics package](https://vercel.com/docs/analytics/package)
- [Learn how to set custom events](https://vercel.com/docs/analytics/custom-events)
- [Learn about filtering data](https://vercel.com/docs/analytics/filtering)
- [Read about privacy and compliance](https://vercel.com/docs/analytics/privacy-policy)
- [Explore pricing and limits](https://vercel.com/docs/analytics/limits-and-pricing)
- [Troubleshooting](https://vercel.com/docs/analytics/troubleshooting)

## Privacy and Compliance

Learn more about how Vercel supports [privacy and data compliance standards](https://vercel.com/docs/analytics/privacy-policy) with Vercel Web Analytics.

For more information, visit the [official Vercel Analytics documentation](https://vercel.com/docs/analytics).
