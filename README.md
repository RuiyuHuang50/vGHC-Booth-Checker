# Grace Hopper Celebration Booth Meeting Checker

A simple Node.js tool that monitors sponsor booth availability at Grace Hopper Celebration 2025 and alerts you when meeting request slots open up.

## Why This Tool?

Getting meetings with top tech companies at GHC can be competitive. This tool continuously monitors all sponsor booths and notifies you the moment a "Request Meeting" slot becomes available, so you don't have to manually check dozens of company pages throughout the day.

## What It Does

- Checks 47+ sponsor booths every 15 minutes
- Runs quietly in the background (no browser windows popping up)
- Sends desktop notifications when slots open
- Automatically handles login using your saved credentials
- Saves detailed results to a JSON file for your reference

## Setup

1. **Install Node.js** (if you haven't already) from [nodejs.org](https://nodejs.org)

2. **Download this project** and navigate to the folder:
   ```bash
   cd vGHC-Slot-Checker
   ```

3. **Install dependencies**:
   ```bash
   npm install puppeteer node-notifier
   ```

4. **Add your GHC login info** - Open `checkRequestMeeting_fixed.js` and replace the placeholder credentials:
   ```javascript
   const GHC_LOGIN = {
     email: "your-email@example.com",    // Your actual GHC email
     password: "your-password"           // Your actual GHC password
   };
   ```

## Usage

Run the script:
```bash
node checkRequestMeeting_fixed.js
```

The tool will start monitoring and show you status updates in the terminal. When a booth becomes available, you'll get a desktop notification.

To stop monitoring, press `Ctrl+C`.

## Understanding the Output

Each booth check shows:
- **enabled: true** = Meeting requests are open for this booth
- **enabled: false** = No slots currently available

Results are also saved to `request_meeting_results.json` for detailed review.

## Important Notes

- Keep your login credentials secure and don't share them
- The tool respects the website by checking every 15 minutes (not constantly)
- Your browser session is saved so you won't need to re-login frequently
- This works best when run from a computer you can leave running

## Troubleshooting

- If login fails, double-check your email and password
- Make sure you have a stable internet connection
- The tool will continue working even if login automation fails (you might just need to login manually once)

---

Built for the GHC community. Good luck with your booth meetings!

## Credits

This project is based on the original GHC booth checker by [aaditree](https://github.com/aaditree/vGHC-Slot-Checker). 

**Enhancements in this version:**
- Automatic login functionality
- Headless browser operation (no popup windows)
- Desktop notifications for available slots
- Improved error handling and stability
- Professional documentation
