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
    "title": "POSTALMATE - STAMPS.COM ISSUE",
    "message": "June 4 - Please note that Postalmate has identified a issue with printing 4x6 lables for USPS. More information will follow.",
    "buttonText": "Postalmate Support",
    "buttonUrl": "https://www.postalmate.com/support"
  },{
    "title": "Drop Off Pricing Reminder",
    "message": "Review your carrier drop off pricing. FedEx has changed all compensation to 0.83 cents as of June 1.",
    "buttonText": "Open Pricing Help",
    "buttonUrl": "https://www.retailshippingconsultants.com/rsc-blog"
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

window.SSC_MESSAGE_UPDATED = "June 1, 2026";

if (window.SSC_applyMessages) {
  window.SSC_applyMessages();
}
