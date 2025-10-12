# Power Automate Setup Guide for Timepot Landing Page

This guide will help you set up a Power Automate flow to collect pricing reservation data from your landing page.

## What You'll Achieve
- Capture pricing tier selections and custom prices
- Save data to Excel Online automatically
- Get email notifications for new reservations
- All data stored in your Microsoft 365 account

---

## Step 1: Create an Excel File in OneDrive

1. Go to [OneDrive](https://onedrive.live.com)
2. Create a new Excel file called **"Timepot_Pricing_Data.xlsx"**
3. In Sheet1, create the following headers in row 1:
   - Column A: **Timestamp**
   - Column B: **Email**
   - Column C: **Name**
   - Column D: **Tier**
   - Column E: **Price**
   - Column F: **Source**

4. Format the sheet:
   - Select row 1 and make it **bold**
   - Optional: Add filters (Data → Filter)
   - Save the file

---

## Step 2: Create a Power Automate Flow

1. Go to [Power Automate](https://make.powerautomate.com)
2. Click **"+ Create"** → **"Automated cloud flow"**
3. Give it a name: **"Timepot Pricing Submissions"**
4. Search for and select trigger: **"When a HTTP request is received"**
5. Click **"Create"**

---

## Step 3: Configure the HTTP Trigger

1. In the "When a HTTP request is received" step, click **"Use sample payload to generate schema"**
2. Paste this JSON sample:

```json
{
  "tier": "family",
  "price": "9.99",
  "email": "user@example.com",
  "name": "John Doe",
  "timestamp": "2025-10-12T10:30:00Z",
  "source": "Reservation Form"
}
```

3. Click **"Done"** - this will generate the schema automatically

---

## Step 4: Add Excel Action

1. Click **"+ New step"**
2. Search for **"Excel Online (Business)"**
3. Select action: **"Add a row into a table"**
4. Configure:
   - **Location**: OneDrive
   - **Document Library**: OneDrive
   - **File**: Browse and select your "Timepot_Pricing_Data.xlsx"
   - **Table**: Click "Create table" if prompted, or select existing table

5. If you need to create a table:
   - Go back to your Excel file
   - Select cells A1:F1 (your headers)
   - Click **Insert → Table**
   - Check "My table has headers"
   - Click OK
   - Come back to Power Automate and refresh to see the table

6. Map the fields:
   - **Timestamp**: Click in field → Select "timestamp" from Dynamic content
   - **Email**: Select "email"
   - **Name**: Select "name"
   - **Tier**: Select "tier"
   - **Price**: Select "price"
   - **Source**: Select "source"

---

## Step 5: (Optional) Add Email Notification

1. Click **"+ New step"**
2. Search for **"Send an email (V2)"** (Office 365 Outlook)
3. Configure:
   - **To**: Your email address
   - **Subject**: `New Timepot Pricing Reservation - @{triggerBody()?['tier']}`
   - **Body**: 
   ```
   New pricing reservation received!
   
   Tier: @{triggerBody()?['tier']}
   Price: $@{triggerBody()?['price']}/month
   Email: @{triggerBody()?['email']}
   Name: @{triggerBody()?['name']}
   Source: @{triggerBody()?['source']}
   Time: @{triggerBody()?['timestamp']}
   ```

---

## Step 6: Get Your Flow URL

1. Click **"Save"** at the top of your flow
2. Go back to the **"When a HTTP request is received"** step
3. You'll now see a **"HTTP POST URL"** - it will look like:
   ```
   https://prod-XX.westeurope.logic.azure.com:443/workflows/xxxxx/triggers/manual/paths/invoke?api-version=2016&sp=xxxxx&sv=xxxxx&sig=xxxxx
   ```
4. **Copy this entire URL** - you'll need it for the next step

---

## Step 7: Update Your Landing Page

1. Open your `index.html` file
2. Find **both** occurrences of:
   ```javascript
   const powerAutomateUrl = 'YOUR_POWER_AUTOMATE_URL_HERE';
   ```
3. Replace with your actual URL:
   ```javascript
   const powerAutomateUrl = 'https://prod-XX.westeurope.logic.azure.com:443/workflows/xxxxx...';
   ```

4. Save the file and push to GitHub:
   ```bash
   git add index.html
   git commit -m "Added Power Automate integration for pricing forms"
   git push
   ```

---

## Step 8: Test It!

1. Visit your deployed landing page
2. Scroll to the pricing section
3. Click "I'd Pay This" on any pricing tier
4. Fill in the form and submit
5. Check your Excel file in OneDrive - the data should appear!
6. Check your email (if you set up notifications)

---

## Troubleshooting

### Data not appearing in Excel?
- Make sure your Excel table is properly formatted
- Check that column names match exactly (case-sensitive)
- Verify the flow ran successfully in Power Automate (check Run history)

### Getting CORS errors?
- Power Automate HTTP triggers should handle CORS automatically
- Make sure you're using the full URL including all parameters

### Flow not triggering?
- Check the Run history in Power Automate
- Look for errors in browser console (F12 → Console tab)
- Verify the URL is copied correctly

---

## What Data You'll Collect

For each submission, you'll capture:
- **Timestamp**: When they submitted
- **Email**: User's email address
- **Name**: Optional first name
- **Tier**: supporter / family / extended / Custom
- **Price**: The price point they selected ($4.99, $9.99, $14.99, or custom)
- **Source**: Whether from "Reservation Form" or "Custom Price Form"

---

## Next Steps

Once you have data flowing:
1. **Analyze price sensitivity**: Which tiers get most selections?
2. **Calculate average WTP**: Especially from custom prices
3. **Track conversion funnel**: Compare pricing clicks to actual reservations
4. **Follow up**: Email people who showed interest at specific price points

---

## Security Note

The HTTP URL contains authentication tokens. **Keep it private!** Don't commit it to public repositories. Consider:
- Using environment variables
- Adding the URL to `.gitignore` if you create a config file
- Regenerating the URL if it gets exposed

---

## Questions?

If you run into issues:
1. Check Power Automate's **Run history** to see what's failing
2. Look at browser console for JavaScript errors
3. Verify your Excel table structure matches the field names

Good luck! 🚀
