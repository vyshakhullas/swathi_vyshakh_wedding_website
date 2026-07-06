# RSVP → Google Sheet

This makes the RSVP form on the site write directly into your Google Sheet:
https://docs.google.com/spreadsheets/d/1Wk9rNBPe2T3hW_Z4yWfIcOONJkB7IUv9pRode_nkTYM/edit

A static site can't write to a Sheet on its own — it needs a small script tied to your
Google account that accepts the submission and appends a row. Google Apps Script does this
for free, with no server to run or maintain.

## One-time setup (~5 minutes)

1. Open the Sheet, then **Extensions → Apps Script**.
2. Delete anything in the default `Code.gs` editor and paste in the contents of
   [`Code.gs`](./Code.gs) from this folder.
3. In the function dropdown at the top (next to Debug/Run), select **`setup`**, then click
   **Run**. The first time, it'll ask you to authorize the script — click through (it's just
   asking permission to edit your own Sheet). This creates and formats the **RSVPs** tab.
4. Click **Deploy → New deployment**.
   - Click the gear icon next to "Select type" and choose **Web app**.
   - **Execute as:** Me
   - **Who has access:** Anyone
   - Click **Deploy**, authorize again if asked.
5. Copy the **Web app URL** it gives you (looks like
   `https://script.google.com/macros/s/AKfycb.../exec`).
6. Send me that URL and I'll wire it into the site — or you can paste it in yourself:
   in `js/main.js`, replace the placeholder in `const RSVP_ENDPOINT = '...'` with your URL.

## Updating the script later

If you ever change `Code.gs` (e.g. add a column), you need to create a **new deployment**
(Deploy → Manage deployments → pencil icon → New version) for the changes to go live — editing
the file alone doesn't update the running Web App.

## What lands in the Sheet

Each RSVP submission appends a row to the **RSVPs** tab: Timestamp, Name, Attending Wedding,
Attending Reception, Guests, Contact, Message. The header row is bold with a green background
matching the site, and frozen so it stays visible while you scroll.
