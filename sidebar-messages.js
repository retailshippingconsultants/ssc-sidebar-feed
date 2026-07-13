/*
Shipping Store Consultants PMSidebar Message Feed
=================================================

Upload this file to your website as something like:

https://www.retailshippingconsultants.com/sidebar-messages.js

To push new reminders to every installed PMSidebar widget, edit this file online.
The widget will reload this file every few minutes.

Keep this old-browser friendly:
- Use normal var syntax
- Use double quotes
- Do not use modern JavaScript features
*/

window.SSC_MESSAGES = [
  {
    "title": "POSTALMATE - 14.7.7.20 - July 13 ISSUES",
    "message": "The latest update will not print USPS Lable Broker QR codes and FedEx HAL is currently not working.",
    "buttonText": "Postalmate Status",
    "buttonUrl": "https://app.getguru.com/card/TMzAeoKc/System-Status"
  },
  {
    "title": "Merchant Services Checkup",
    "message": "Upload or review your processing statement to see whether your store is overpaying on credit card fees.",
    "buttonText": "Review SSC Pay",
    "buttonUrl": "https://www.retailshippingconsultants.com/rscpay"
  },
  {
    "title": "Mailbox Revenue Reminder",
    "message": "Check upcoming mailbox renewals and expired mailbox agreements before month-end.",
    "buttonText": "Open Services",
    "buttonUrl": "https://www.retailshippingconsultants.com/services"
  }
];

window.SSC_MESSAGE_UPDATED = "July 14, 2026";

if (window.SSC_applyMessages) {
  window.SSC_applyMessages();
}
