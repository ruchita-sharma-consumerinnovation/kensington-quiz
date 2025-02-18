INVESTMENT QUIZ - INSTALLATION AND CONFIGURATION GUIDE
====================================================

QUICK START
-----------
1. Upload all files to your website using FTP
2. Access the quiz at: yourdomain.com/quiz
3. Test the quiz to ensure it works properly

FOLDER STRUCTURE
---------------
quiz/
  ├── index.html         (main quiz page)
  ├── css/
  │   └── styles.css     (styling)
  ├── js/
  │   ├── config.js      (edit URLs and settings here)
  │   ├── questions.js   (quiz content)
  │   └── quiz.js        (quiz logic)
  └── README.txt         (this file)

HOW TO INSTALL
-------------
1. Create a folder called 'quiz' on your web server
2. Upload all files maintaining the folder structure above
3. Make sure all files are readable (usually 644 permission)
4. That's it! No database or special setup needed

HOW TO EDIT CHECKOUT URLS
------------------------
1. Open the file 'js/config.js' in any text editor
2. Find the 'checkoutUrls' section near the top
3. Edit the URLs between the quotes for each price point:

   checkoutUrls: {
       price197: "https://example.com/checkout-197",  // For scores above 55 points
       price97: "https://example.com/checkout-97",    // For scores 45-54 points
       price67: "https://example.com/checkout-67",    // For scores 35-44 points
       price47: "https://example.com/checkout-47",    // For scores 25-34 points
       price27: "https://example.com/checkout-27",    // For scores 15-24 points
       price17: "https://example.com/checkout-17",    // For scores below 15 points
   }

4. Save the file and upload it back to your server

HOW TO EDIT CURRENCY CONVERSION RATES
-----------------------------------
1. Open 'js/config.js' in any text editor
2. Find the 'currencies' section
3. Update the 'multiplier' value for each currency to match current rates
4. Save and upload the file

Example:
   GBP: {
       multiplier: 0.79,  // Change this number to update conversion rate
   }

TROUBLESHOOTING
--------------
If the quiz isn't working:

1. Make sure all files are uploaded in the correct folders
2. Check that your web server supports JavaScript
3. Verify that no JavaScript errors appear in your browser's console
4. Ensure all files have proper read permissions
5. Test the quiz in different browsers

Common Issues:

- Blank Page: Check that all .js files are uploaded correctly
- Styling Missing: Verify css/styles.css is in the correct folder
- Not Redirecting: Check URLs in config.js are correct
- Currency Wrong: Verify currency multipliers in config.js

BACKUP RECOMMENDATION
-------------------
Before making any changes:
1. Download a copy of your working files
2. Make changes to the copy first
3. Test the changes locally if possible
4. Upload only after confirming changes work

NEED HELP?
---------
If you need assistance:
1. Double-check this README
2. Verify all files are in their correct locations
3. Make sure no files were modified except config.js
4. Contact technical support with specific error details

MAINTENANCE
----------
Regular tasks:
1. Update currency conversion rates as needed
2. Verify checkout URLs are still valid
3. Keep a backup of your working configuration

SECURITY NOTE
------------
The quiz is client-side only, meaning:
- No sensitive data is stored
- No database access required
- No special server permissions needed
- Everything runs in the user's browser

This makes the quiz very secure and simple to maintain, but remember:
- Don't put sensitive information in any of the files
- Keep backup copies of your configuration
- Regularly verify your checkout URLs are correct

END OF README
============