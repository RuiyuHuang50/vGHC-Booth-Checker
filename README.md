# Grace Hopper Celebration Booth Meeting Checker

A Node.js tool that automatically monitors sponsor booth availability at Grace Hopper Celebration 2025 and alerts you when meeting request slots open up.

## Why This Tool?

Getting meetings with top tech companies at GHC can be competitive. This tool continuously monitors all sponsor booths and notifies you the moment a "Request Meeting" slot becomes available, so you don't have to manually check dozens of company pages throughout the day.

## Features

- **Automatic Login**: Set your credentials once and the script handles authentication
- **Headless Operation**: Runs quietly in the background without browser windows
- **Desktop Notifications**: Instant alerts when meeting slots become available
- **Cycle Tracking**: Clear timestamps and cycle numbers so you know exactly when checks happen
- **Professional Logging**: Clean, organized output with progress indicators
- **Continuous Monitoring**: Checks all 47+ sponsor booths every 15 minutes
- **Detailed Results**: Saves comprehensive booth status data to JSON file

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

4. **Configure your login** - Open `checkRequestMeeting_fixed.js` and update your credentials:
   ```javascript
   const GHC_LOGIN = {
     email: "your-email@example.com",    // Your GHC email
     password: "your-password"           // Your GHC password
   };
   ```

## Usage

Run the script:
```bash
node checkRequestMeeting_fixed.js
```

You'll see output like this:
```
============================================================
== GHC BOOTH MEETING MONITOR STARTED ==
============================================================
== Monitoring 47 sponsor booths
== Checking every 15 minutes for available meeting slots
== You'll get desktop notifications when booths open up
== Press Ctrl+C anytime to stop
============================================================

============================================================
🔄 CYCLE #1 STARTING
📅 Time: 8/29/2025, 2:30:45 PM
============================================================
🔑 Attempting automatic login...
✅ Already logged in or no login required
Checking: Crown Equipment Corporation -> https://...
Checking: Wayfair -> https://...
[continues checking all booths...]
Done! Results saved to request_meeting_results.json

------------------------------------------------------------
✅ Cycle #1 completed at 8/29/2025, 2:33:12 PM
⏰ Next check will start in 15 minutes (Cycle #2)
🛑 Press Ctrl+C to stop monitoring
------------------------------------------------------------
```

When a booth becomes available, you'll get a desktop notification and see:
```
🎉 BOOTH AVAILABLE: [Company Name] is open for meeting requests!
```

To stop monitoring, press `Ctrl+C`.

## Understanding the Output

- **Cycle Numbers**: Each 15-minute check cycle is numbered and timestamped
- **enabled: true** = Meeting requests are open for this booth
- **enabled: false** = No slots currently available
- **Desktop Notifications**: Popup alerts appear when booths become available
- **JSON Results**: Detailed status saved to `request_meeting_results.json`

## Important Notes

- Keep your login credentials secure and don't share them
- The tool respects the website by checking every 15 minutes (not constantly)
- Your browser session is saved so you won't need to re-login frequently
- Runs completely in the background - no browser windows will appear
- Works best when run from a computer you can leave running

## Troubleshooting

- If login fails, double-check your email and password in the script
- Make sure you have a stable internet connection
- The tool will continue working even if auto-login fails (you might need to login manually once)
- If you see login errors but booth checking continues, that's normal - your session is likely still valid

---

Built for the GHC community. Good luck with your booth meetings!

## Credits

This project is based on the original GHC booth checker by [aaditree](https://github.com/aaditree/vGHC-Slot-Checker). 

**Enhancements in this version:**
- Automatic login functionality
- Headless browser operation (no popup windows)
- Desktop notifications for available slots
- Professional logging with cycle tracking and timestamps
- Improved error handling and stability
- Enhanced documentation and user experience
