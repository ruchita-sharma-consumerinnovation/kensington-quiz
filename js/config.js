// config.js

const QUIZ_CONFIG = {
    // Checkout URLs for each price point
    checkoutUrls: {
        price197:"https://order.kensingtonresearchreports.com/checkout/12?currency=USD&country=United%20States&s[…]ad8190de5e549aceccb9c124517e4122a9154457a959f6c7eee",   // For scores above 55 points
        price97: "https://order.kensingtonresearchreports.com/checkout/13?currency=USD&country=United%20States&s[…]ad8190de5e549aceccb9c124517e4122a9154457a959f6c7eee",   // For scores 45-54 points
        price67: "https://order.kensingtonresearchreports.com/checkout/14?currency=USD&country=United%20States&s[…]ad8190de5e549aceccb9c124517e4122a9154457a959f6c7eee",   // For scores 35-44 points
        price47: "https://order.kensingtonresearchreports.com/checkout/15?currency=USD&country=United%20States&s[…]ad8190de5e549aceccb9c124517e4122a9154457a959f6c7eee",   // For scores 25-34 points
        price27: "https://order.kensingtonresearchreports.com/checkout/16?currency=USD&country=United%20States&s[…]ad8190de5e549aceccb9c124517e4122a9154457a959f6c7eee",   // For scores 15-24 points
        price17: "https://order.kensingtonresearchreports.com/checkout/17?currency=USD&country=United%20States&s[…]ad8190de5e549aceccb9c124517e4122a9154457a959f6c7eee",   // For scores below 15 points
    },

    // Currency conversion and formatting settings
    currencies: {
        USD: {
            symbol: "$",
            multiplier: 1,
            roundTo: 1000,
            position: "before",
            incomeRanges: [
                "Under $50,000",
                "$50,000 - $100,000",
                "$100,000 - $200,000",
                "Over $200,000",
                "Prefer not to say"
            ],
            netWorthRanges: [
                "Under $50,000",
                "$50,000 - $250,000",
                "$250,000 - $500,000",
                "$500,000 - $1,000,000",
                "$1,000,000 - $2,500,000",
                "Over $2,500,000",
                "Prefer not to say"
            ]
        },
        CAD: {
            symbol: "CAD",
            multiplier: 1.35,
            roundTo: 1000,
            position: "before",
            incomeRanges: [
                "Under CAD 65,000",
                "CAD 65,000 - CAD 135,000",
                "CAD 135,000 - CAD 270,000",
                "Over CAD 270,000",
                "Prefer not to say"
            ],
            netWorthRanges: [
                "Under CAD 65,000",
                "CAD 65,000 - CAD 335,000",
                "CAD 335,000 - CAD 675,000",
                "CAD 675,000 - CAD 1,350,000",
                "CAD 1,350,000 - CAD 3,375,000",
                "Over CAD 3,375,000",
                "Prefer not to say"
            ]
        },
        AUD: {
            symbol: "AUD",
            multiplier: 1.52,
            roundTo: 1000,
            position: "before",
            incomeRanges: [
                "Under AUD 75,000",
                "AUD 75,000 - AUD 150,000",
                "AUD 150,000 - AUD 300,000",
                "Over AUD 300,000",
                "Prefer not to say"
            ],
            netWorthRanges: [
                "Under AUD 75,000",
                "AUD 75,000 - AUD 375,000",
                "AUD 375,000 - AUD 750,000",
                "AUD 750,000 - AUD 1,500,000",
                "AUD 1,500,000 - AUD 3,750,000",
                "Over AUD 3,750,000",
                "Prefer not to say"
            ]
        },
        NZD: {
            symbol: "NZD",
            multiplier: 1.65,
            roundTo: 1000,
            position: "before",
            incomeRanges: [
                "Under NZD 80,000",
                "NZD 80,000 - NZD 165,000",
                "NZD 165,000 - NZD 330,000",
                "Over NZD 330,000",
                "Prefer not to say"
            ],
            netWorthRanges: [
                "Under NZD 80,000",
                "NZD 80,000 - NZD 410,000",
                "NZD 410,000 - NZD 825,000",
                "NZD 825,000 - NZD 1,650,000",
                "NZD 1,650,000 - NZD 4,125,000",
                "Over NZD 4,125,000",
                "Prefer not to say"
            ]
        },
        EUR: {
            symbol: "€",
            multiplier: 0.91,
            roundTo: 1000,
            position: "before",
            incomeRanges: [
                "Under €45,000",
                "€45,000 - €90,000",
                "€90,000 - €180,000",
                "Over €180,000",
                "Prefer not to say"
            ],
            netWorthRanges: [
                "Under €45,000",
                "€45,000 - €225,000",
                "€225,000 - €450,000",
                "€450,000 - €900,000",
                "€900,000 - €2,250,000",
                "Over €2,250,000",
                "Prefer not to say"
            ]
        },
        NOK: {
            symbol: "kr",
            multiplier: 10.5,
            roundTo: 10000,
            position: "after",
            incomeRanges: [
                "Under 525,000 kr",
                "525,000 kr - 1,050,000 kr",
                "1,050,000 kr - 2,100,000 kr",
                "Over 2,100,000 kr",
                "Prefer not to say"
            ],
            netWorthRanges: [
                "Under 525,000 kr",
                "525,000 kr - 2,625,000 kr",
                "2,625,000 kr - 5,250,000 kr",
                "5,250,000 kr - 10,500,000 kr",
                "10,500,000 kr - 26,250,000 kr",
                "Over 26,250,000 kr",
                "Prefer not to say"
            ]
        },
        GBP: {
            symbol: "£",
            multiplier: 0.79,
            roundTo: 1000,
            position: "before",
            incomeRanges: [
                "Under £40,000",
                "£40,000 - £80,000",
                "£80,000 - £160,000",
                "Over £160,000",
                "Prefer not to say"
            ],
            netWorthRanges: [
                "Under £40,000",
                "£40,000 - £200,000",
                "£200,000 - £400,000",
                "£400,000 - £800,000",
                "£800,000 - £2,000,000",
                "Over £2,000,000",
                "Prefer not to say"
            ]
        },
        AED: {
            symbol: "AED",
            multiplier: 3.67,
            roundTo: 1000,
            position: "before",
            incomeRanges: [
                "Under AED 185,000",
                "AED 185,000 - AED 370,000",
                "AED 370,000 - AED 740,000",
                "Over AED 740,000",
                "Prefer not to say"
            ],
            netWorthRanges: [
                "Under AED 185,000",
                "AED 185,000 - AED 920,000",
                "AED 920,000 - AED 1,835,000",
                "AED 1,835,000 - AED 3,670,000",
                "AED 3,670,000 - AED 9,175,000",
                "Over AED 9,175,000",
                "Prefer not to say"
            ]
        },
        SGD: {
            symbol: "SGD",
            multiplier: 1.34,
            roundTo: 1000,
            position: "before",
            incomeRanges: [
                "Under SGD 67,000",
                "SGD 67,000 - SGD 134,000",
                "SGD 134,000 - SGD 268,000",
                "Over SGD 268,000",
                "Prefer not to say"
            ],
            netWorthRanges: [
                "Under SGD 67,000",
                "SGD 67,000 - SGD 335,000",
                "SGD 335,000 - SGD 670,000",
                "SGD 670,000 - SGD 1,340,000",
                "SGD 1,340,000 - SGD 3,350,000",
                "Over SGD 3,350,000",
                "Prefer not to say"
            ]
        },
        JPY: {
            symbol: "¥",
            multiplier: 150,
            roundTo: 10000,
            position: "before",
            incomeRanges: [
                "Under ¥7,500,000",
                "¥7,500,000 - ¥15,000,000",
                "¥15,000,000 - ¥30,000,000",
                "Over ¥30,000,000",
                "Prefer not to say"
            ],
            netWorthRanges: [
                "Under ¥7,500,000",
                "¥7,500,000 - ¥37,500,000",
                "¥37,500,000 - ¥75,000,000",
                "¥75,000,000 - ¥150,000,000",
                "¥150,000,000 - ¥375,000,000",
                "Over ¥375,000,000",
                "Prefer not to say"
            ]
        },
        CHF: {
            symbol: "CHF",
            multiplier: 0.88,
            roundTo: 1000,
            position: "before",
            incomeRanges: [
                "Under CHF 44,000",
                "CHF 44,000 - CHF 88,000",
                "CHF 88,000 - CHF 176,000",
                "Over CHF 176,000",
                "Prefer not to say"
            ],
            netWorthRanges: [
                "Under CHF 44,000",
                "CHF 44,000 - CHF 220,000",
                "CHF 220,000 - CHF 440,000",
                "CHF 440,000 - CHF 880,000",
                "CHF 880,000 - CHF 2,200,000",
                "Over CHF 2,200,000",
                "Prefer not to say"
            ]
        }
    },

    // Country tiers for scoring
    countryTiers: {
        tier1: ["US", "GB", "CH", "SG"],  // 6 points
        tier2: ["CA", "AU", "NZ", "NO"],  // 4 points
        tier3: ["AE", "JP"],              // 2 points
    },

    // Age scoring brackets
    ageScoring: {
        under25: { max: 24, points: 0 },
        age25to35: { min: 25, max: 35, points: 3 },
        age36to50: { min: 36, max: 50, points: 4 },
        age51to65: { min: 51, max: 65, points: 3 },
        over65: { min: 66, points: 2 }
    },
};

// DO NOT EDIT BELOW THIS LINE
// Export configuration for use by quiz
if (typeof module !== 'undefined' && module.exports) {
    module.exports = QUIZ_CONFIG;
} else {
    window.QUIZ_CONFIG = QUIZ_CONFIG;
}