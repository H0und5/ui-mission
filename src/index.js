import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// Don't fucking look at this shitty code

// Pls

// Don't do it, there's nothing here.

// gg

const daRay = {
  platform: [
    "iOS 13 Safari Mobile Web 1",
    "iOS 13 Safari Mobile Web 2",
    "iOS 13 Safari Mobile Web 3",
    "iOS 13 Safari Mobile Web 4",
    "iOS 13 Safari Mobile Web 5",
    "iOS 13 Safari Mobile Web 6",
    "iOS 13 Safari Mobile Web 7",
    "iOS 13 Safari Mobile Web 8",
    "iOS 13 Safari Mobile Web 9",
    "iOS 13 Safari Mobile Web 10",
    "iOS 13 Safari Mobile Web 11",
    "iOS 13 Safari Mobile Web 12"
  ],
  company: [
    "Food Ordering app",
    "Video Streaming app",
    "Fashion e-Commerce app",
    "Stock trading app",
    "Fitness tracking app",
    "Music streaming app",
    "News aggregator app",
    "Image sharing app",
    "Slide Deck Builder app",
    "Book reader app",
    "Travel app",
    "Racecar Game app"
  ],
  pattern: [
    "Launch Screen",
    "Welcome & Get Started Screen",
    "Walkthrough Flow",
    "Sign Up Screen",
    "Login Screen",
    "Verification Screen",
    "Account Setup Flow",
    "Guided Tour & Tutorial Flow",
    "Help & Support Screen",
    "Cart & Bag Screen",
    "Checkout & Order Review Screen",
    "Payment Method Screen",
    "Order History Screen",
    "Successful Order Confirmation Screen",
    "Pricing Screen",
    "Wallet & Balance Screen",
    "Promotion & Rewards Screen",
    "Profile & Account Screen",
    "Notification Banner Screen",
    "Share Screen",
  ],
  device: [
    {
      id: 1,
      name: "Android phone",
      resource: "Google's Material",
      link: "https://material.io/"
    },
    {
      id: 2,
      name: "iPhone",
      resource: "Apple's HIG for iOS",
      link: "https://developer.apple.com/design/human-interface-guidelines/ios/overview/themes/"
    },
    {
      id: 3,
      name: "Windows 10",
      resource: "Microsoft's Fluent",
      link: "https://www.microsoft.com/design/fluent/#/windows"
    },
    {
      id: 4,
      name: "macOS",
      resource: "Apple's HIG for macOS",
      link: "https://developer.apple.com/design/human-interface-guidelines/macos/overview/themes/"
    }
  ]
};

const resources = {
  apple: [
    {
      id: 1,
      name: "Apple's Human Interface Guidelines",
      link: "www.google.com"
    },
    {
      id: 1,
      name: "Apple's Human Interface Guidelines",
      link: "www.google.com"
    },
    {
      id: 1,
      name: "Apple's Human Interface Guidelines",
      link: "www.google.com"
    },
    {
      id: 1,
      name: "Apple's Human Interface Guidelines",
      link: "www.google.com"
    },
    {
      id: 1,
      name: "Apple's Human Interface Guidelines",
      link: "www.google.com"
    },
    {
      id: 1,
      name: "Apple's Human Interface Guidelines",
      link: "www.google.com"
    }
  ],

  android: [
    {
      id: 1,
      name: "Google's Material",
      link: "www.google.com"
    },
    {
      id: 1,
      name: "Google's Material",
      link: "www.google.com"
    },
    {
      id: 1,
      name: "Google's Material",
      link: "www.google.com"
    },
    {
      id: 1,
      name: "Google's Material",
      link: "www.google.com"
    },
    {
      id: 1,
      name: "Google's Material",
      link: "www.google.com"
    },
    {
      id: 1,
      name: "Google's Material",
      link: "www.google.com"
    }
  ],

  other: [
    {
      id: 1,
      name: "How to design a checkout flow",
      link: "www.medium.com"
    },
    {
      id: 1,
      name: "How to design a checkout flow",
      link: "www.medium.com"
    },
    {
      id: 1,
      name: "How to design a checkout flow",
      link: "www.medium.com"
    },
    {
      id: 1,
      name: "How to design a checkout flow",
      link: "www.medium.com"
    },
    {
      id: 1,
      name: "How to design a checkout flow",
      link: "www.medium.com"
    }
  ]
};

console.log(resources);

ReactDOM.render(<App props={daRay} />, document.getElementById("root"));
