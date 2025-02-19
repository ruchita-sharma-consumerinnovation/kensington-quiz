// questions.js

const QUIZ_QUESTIONS = {
    // Step 1: Country and Age (unchanged)
    step1: {
        questions: [
            {
                id: "country",
                type: "select",
                label: "",
                required: false,
                options: [
                    { value: "US", label: "United States" },
                    { value: "GB", label: "United Kingdom" },
                    { value: "CH", label: "Switzerland" },
                    { value: "SG", label: "Singapore" },
                    { value: "CA", label: "Canada" },
                    { value: "AU", label: "Australia" },
                    { value: "NZ", label: "New Zealand" },
                    { value: "NO", label: "Norway" },
                    { value: "AE", label: "United Arab Emirates" },
                    { value: "JP", label: "Japan" },
                    { value: "DE", label: "Germany" },
                    { value: "FR", label: "France" },
                    { value: "IT", label: "Italy" },
                    { value: "ES", label: "Spain" },
                    { value: "NL", label: "Netherlands" }
                ]
            },
            {
                id: "age",
                type: "select",
                label: "What is your age?",
                required: true,
                options: [
                    { value: "under25", label: "Under 25" },
                    { value: "25-35", label: "25-35" },
                    { value: "36-50", label: "36-50" },
                    { value: "51-65", label: "51-65" },
                    { value: "over65", label: "Over 65" }
                ]
            }
        ]
    },

    // New Step 2: Goals and Motivations
    step2: {
        questions: [
            {
                id: "aiReasons",
                type: "checkbox",
                label: "Why do you want to buy the Great AI Power Crisis Report?",
                required: true,
                options: [
                    { value: "reason1", label: "To secure my financial future with proven AI investments" },
                    { value: "reason2", label: "To generate substantial returns from early AI opportunities" },
                    { value: "reason3", label: "To build lasting wealth for my family's future" },
                    { value: "reason4", label: "To earn extra income through smart AI investments" },
                    { value: "reason5", label: "To achieve financial independence sooner" },
                    { value: "reason6", label: "To make my money work harder for me" },
                    { value: "reason7", label: "To create a reliable additional income stream" },
                    { value: "reason8", label: "To retire comfortably ahead of schedule" },
                    { value: "reason9", label: "To grow my wealth systematically and safely" },
                    { value: "reason10", label: "To maximize my investment returns with expert guidance" }
                ]
            },
            {
                id: "challenges",
                type: "checkbox",
                label: "What are your biggest challenges with AI investing?",
                required: true,
                options: [
                    { value: "challenge1", label: "Too much conflicting information" },
                    { value: "challenge2", label: "Difficulty identifying legitimate opportunities" },
                    { value: "challenge3", label: "Lack of expert guidance" },
                    { value: "challenge4", label: "Need for a proven system" }
                ]
            },
            {
                id: "aiSigns",
                type: "checkbox",
                label: "Which signs convince you AI will transform investing?",
                required: true,
                options: [
                    { value: "sign1", label: "I see AI technology being adopted everywhere in daily life" },
                    { value: "sign2", label: "I notice major companies like Microsoft and Google betting big on AI" },
                    { value: "sign3", label: "I watch AI tools and services getting better at incredible speed" },
                    { value: "sign4", label: "I observe how AI is creating new jobs while replacing others" }
                ]
            },
            {
                id: "missedOpportunity",
                type: "radio",
                label: "Which missed investment opportunity do you most regret?",
                required: true,
                options: [
                    { value: "missed1", label: "Not buying Amazon in the 90s" },
                    { value: "missed2", label: "Missing Bitcoin under $1000" },
                    { value: "missed3", label: "Passing on Tesla pre-split" },
                    { value: "missed4", label: "Avoiding Nvidia before AI boom" }
                ]
            },
            {
                id: "valueClarity",
                type: "checkbox",
                label: "Which aspects of AI investing would you most value having clarity on?",
                required: true,
                options: [
                    { value: "clarity1", label: "How to identify AI companies with strong potential" },
                    { value: "clarity2", label: "When to add AI investments to my existing portfolio" },
                    { value: "clarity3", label: "Which AI companies have proven business models" },
                    { value: "clarity4", label: "How to evaluate different AI investment opportunities" }
                ]
            },
            {
                id: "futureVision",
                type: "checkbox",
                label: "Where do you see yourself in the AI revolution?",
                required: true,
                options: [
                    { value: "vision1", label: "Making smart investment moves ahead of the crowd" },
                    { value: "vision2", label: "Growing my wealth by spotting AI opportunities early" },
                    { value: "vision3", label: "Following a proven system for AI investing success" },
                    { value: "vision4", label: "Building financial security through informed AI investments" }
                ]
            },
            {
                id: "incomeUse",
                type: "checkbox",
                label: "What would you do with your additional investment income?",
                required: true,
                options: [
                    { value: "use1", label: "Travel more frequently" },
                    { value: "use2", label: "Spend more time with family" },
                    { value: "use3", label: "Achieve financial independence" },
                    { value: "use4", label: "Start my own business" },
                    { value: "use5", label: "Support charitable causes" },
                    { value: "use6", label: "Leave a legacy for my children" },
                    { value: "use7", label: "Freedom to pursue any opportunity" },
                    { value: "use8", label: "Confidence in my financial future" },
                    { value: "use9", label: "Control over my career choices" },
                    { value: "use10", label: "Independence from financial stress" }
                ]
            },
            {
                id: "lifeChange",
                type: "checkbox",
                label: "How would achieving your investment goals change your life?",
                required: true,
                options: [
                    { value: "change1", label: "More time freedom" },
                    { value: "change2", label: "Enhanced financial security" },
                    { value: "change3", label: "Better work-life balance" },
                    { value: "change4", label: "Greater peace of mind" },
                    { value: "change5", label: "Pay for children's education" },
                    { value: "change6", label: "Retire years ahead of schedule" },
                    { value: "change7", label: "Buy my dream home" },
                    { value: "change8", label: "Invest in my health and wellness" },
                    { value: "change9", label: "Help parents retire comfortably" },
                    { value: "change10", label: "Pursue passions without money stress" }
                ]
            },
            {
                id: "targetGain",
                type: "radio",
                label: "What's your target gain from AI investments in the next 12 months?",
                required: true,
                options: [
                    { value: "gain1", label: "$2,000 - $10,000 in gains" },
                    { value: "gain2", label: "$10,000 - $50,000 in gains" },
                    { value: "gain3", label: "$50,000 - $250,000 in gains" },
                    { value: "gain4", label: "Over $250,000 in gains" }
                ]
            }
        ]
    },

    // New Step 3: Investor Profile
    step3: {
        questions: [
            {
                id: "investorQualities",
                type: "checkbox",
                label: "As an investor, which of these qualities do you identify with most?",
                required: true,
                options: [
                    { value: "quality1", label: "I'm quick to spot opportunities but want proven research to confirm my instincts" },
                    { value: "quality2", label: "I do thorough research and look for systematic approaches that remove guesswork" },
                    { value: "quality3", label: "I value expert insights but like to understand the reasoning behind recommendations" },
                    { value: "quality4", label: "I focus on protecting and growing wealth through well-researched opportunities" },
                    { value: "quality5", label: "I learn from past investment experiences and adapt my strategy based on what works" }
                ]
            },
            {
                id: "investingStrengths",
                type: "checkbox",
                label: "Which of these investing strengths best describes you?",
                required: true,
                options: [
                    { value: "strength1", label: "Seeing big tech changes before most people" },
                    { value: "strength2", label: "Following step-by-step plans that work" },
                    { value: "strength3", label: "Understanding what really moves markets" },
                    { value: "strength4", label: "Being smart about risks and rewards" },
                    { value: "strength5", label: "Taking action when you see solid proof" }
                ]
            },
            {
                id: "investingApproach",
                type: "checkbox",
                label: "How would you describe your approach to investing?",
                required: true,
                options: [
                    { value: "approach1", label: "I like to make smart moves based on what big investors are doing" },
                    { value: "approach2", label: "I look for special opportunities that have solid proof behind them" },
                    { value: "approach3", label: "I try to get in early when I see big market changes coming" },
                    { value: "approach4", label: "I prefer using proven systems instead of gut feelings" },
                    { value: "approach5", label: "I learn from missed opportunities to make better choices" }
                ]
            }
        ]
    },

    // Original Step 2 (now Step 4): Investment Experience
    step4: {
        questions: [
            {
                id: "stockExperience",
                type: "radio",
                label: "What's your experience level with buying stocks?",
                required: true,
                options: [
                    { value: "0", label: "I'm completely new to this" },
                    { value: "1", label: "I've bought a few stocks before" },
                    { value: "2", label: "I buy stocks regularly" },
                    { value: "3", label: "I'm very experienced" }
                ]
            },
            {
                id: "techStockExperience",
                type: "radio",
                label: "Have you ever purchased technology stocks before?",
                required: true,
                options: [
                    { value: "0", label: "No, this would be my first time" },
                    { value: "1", label: "Yes, 1-2 tech stocks" },
                    { value: "2", label: "Yes, several tech stocks" },
                    { value: "3", label: "Yes, I buy them often" }
                ]
            },
            {
                id: "largestInvestment",
                type: "radio",
                label: "What's the most you've ever invested in a single stock?",
                required: true,
                options: [
                    { value: "0", label: "Less than $500", amount: 500 },
                    { value: "1", label: "$500 - $2,500", amount: 2500 },
                    { value: "2", label: "$2,500 - $10,000", amount: 10000 },
                    { value: "3", label: "More than $10,000", amount: 10000 }
                ]
            },
            {
                id: "aiInterest",
                type: "radio",
                label: "Which best describes your interest in AI investing?",
                required: true,
                options: [
                    { value: "0", label: "I want to test it with a small amount" },
                    { value: "1", label: "I'm ready to make a moderate investment" },
                    { value: "2", label: "I want to make AI a major part of my portfolio" },
                    { value: "3", label: "I want to go all-in on AI opportunities" }
                ]
            },
            {
                id: "timeline",
                type: "radio",
                label: "How soon are you looking to start investing in AI stocks?",
                required: true,
                options: [
                    { value: "0", label: "I'm just researching for now" },
                    { value: "1", label: "Within the next few months" },
                    { value: "2", label: "Within the next few weeks" },
                    { value: "3", label: "I want to start immediately" }
                ]
            },
            {
                id: "newsletterExperience",
                type: "radio",
                label: "Have you ever subscribed to any investment newsletters or stock picking services?",
                required: true,
                options: [
                    { value: "0", label: "No, this would be my first" },
                    { value: "1", label: "Yes, one before" },
                    { value: "2", label: "Yes, a few different ones" },
                    { value: "3", label: "Yes, I use them regularly" }
                ]
            },
            {
                id: "decisionMaking",
                type: "radio",
                label: "When you find a good investment opportunity, how do you usually act?",
                required: true,
                options: [
                    { value: "0", label: "I need lots of time to think it over" },
                    { value: "1", label: "I take a few days to decide" },
                    { value: "2", label: "I usually decide within 24 hours" },
                    { value: "3", label: "I act right away on good opportunities" }
                ]
            }
        ]
    },

    // Original Step 3 (now Step 5): Financial Profile
    step5: {
        questions: [
            {
                id: "income",
                type: "radio",
                label: "Which range best describes your total household income per year? (Optional but recommended)",
                required: true,
                scoring: {
                    "0": 0,      // Under $50,000
                    "1": 5,      // $50,000 - $100,000
                    "2": 10,     // $100,000 - $200,000
                    "3": 15,     // Over $200,000
                    "4": 5       // Prefer not to say
                }
            },
            {
                id: "netWorth",
                type: "radio",
                label: "Which range best describes your total household net worth? (Optional but recommended)",
                required: true,
                scoring: {
                    "0": 0,      // Under $50,000
                    "1": 5,      // $50,000 - $250,000
                    "2": 10,     // $250,000 - $500,000
                    "3": 15,     // $500,000 - $1,000,000
                    "4": 20,     // $1,000,000 - $2,500,000
                    "5": 25,     // Over $2,500,000
                    "6": 5       // Prefer not to say
                }
            }
        ]
    }
};

// Scoring thresholds for price determination
const SCORING_THRESHOLDS = {
    price197: 55,  // Above 55 points
    price97: 45,   // 45-54 points
    price67: 35,   // 35-44 points
    price47: 25,   // 25-34 points
    price27: 15,   // 15-24 points
    price17: 0     // Below 15 points
};

// Validation configuration for multiple choice questions
const VALIDATION_CONFIG = {
    step2: {
        aiReasons: { min: 1, max: 10 },
        challenges: { min: 1, max: 4 },
        aiSigns: { min: 1, max: 4 },
        missedOpportunity: { exact: 1 },  // radio button requires exactly 1
        valueClarity: { min: 1, max: 4 },
        futureVision: { min: 1, max: 4 },
        aiSecrets: { min: 1, max: 4 },
        incomeUse: { min: 1, max: 10 },
        lifeChange: { min: 1, max: 10 },
        targetGain: { exact: 1 }  // radio button requires exactly 1
    },
    step3: {
        investorQualities: { min: 1, max: 5 },
        investingStrengths: { min: 1, max: 5 },
        investingApproach: { min: 1, max: 5 }
    }
};

// Helper function to get selected values for a question
function getSelectedValues(questionId, type) {
    if (type === 'radio') {
        const selected = document.querySelector(`input[name="${questionId}"]:checked`);
        return selected ? [selected.value] : [];
    } else if (type === 'checkbox') {
        const selected = Array.from(document.querySelectorAll(`input[name="${questionId}"]:checked`));
        return selected.map(input => input.value);
    }
    return [];
}

// Helper function to check if a step's answers are valid
// Helper function to get selected values for a question
function getSelectedValues(questionId, type) {
    if (type === 'radio') {
        const selected = document.querySelector(`input[name="${questionId}"]:checked`);
        return selected ? [selected.value] : [];
    } else if (type === 'checkbox') {
        const selected = Array.from(document.querySelectorAll(`input[name="${questionId}"]:checked`));
        return selected.map(input => input.value);
    }
    return [];
}

// Helper function to check if a step's answers are valid
function validateStepAnswers(stepNumber, answers) {
    // Step 1 validation (country and age)
    if (stepNumber === 1) {
        return answers.country && answers.age;
    }
    
    // Step 2 validation (multiple choice questions)
    if (stepNumber === 2) {
        const step2Questions = QUIZ_QUESTIONS.step2.questions;
        return step2Questions.every(question => {
            const selectedValues = getSelectedValues(question.id, question.type);
            const rules = VALIDATION_CONFIG.step2[question.id];
            
            if (!rules) return true; // Skip if no validation rules
            
            if (rules.exact) {
                return selectedValues.length === rules.exact;
            }
            return selectedValues.length >= rules.min && selectedValues.length <= rules.max;
        });
    }
    
    // Step 3 validation (multiple choice questions)
    if (stepNumber === 3) {
        const step3Questions = QUIZ_QUESTIONS.step3.questions;
        return step3Questions.every(question => {
            const selectedValues = getSelectedValues(question.id, question.type);
            const rules = VALIDATION_CONFIG.step3[question.id];
            
            if (!rules) return true; // Skip if no validation rules
            
            if (rules.exact) {
                return selectedValues.length === rules.exact;
            }
            return selectedValues.length >= rules.min && selectedValues.length <= rules.max;
        });
    }
    
    // Step 4 validation (original step 2 - all radio buttons)
    if (stepNumber === 4) {
        const requiredFields = [
            'stockExperience',
            'techStockExperience',
            'largestInvestment',
            'aiInterest',
            'timeline',
            'newsletterExperience',
            'decisionMaking'
        ];
        return requiredFields.every(field => answers[field] !== undefined);
    }
    
    // Step 5 validation (original step 3 - financial profile)
    if (stepNumber === 5) {
        return answers.income !== undefined && answers.netWorth !== undefined;
    }
    
    return false;
}

// Helper function to show error messages
function showErrorMessage(questionId, message) {
    const errorElement = document.querySelector(`#${questionId}Error`) || 
                        document.createElement('div');
    errorElement.className = 'error-message';
    errorElement.textContent = message;
    errorElement.style.display = 'block';
    
    const questionGroup = document.querySelector(`#${questionId}`).closest('.question-group');
    if (!document.querySelector(`#${questionId}Error`)) {
        questionGroup.appendChild(errorElement);
    }
}

// Export for use by quiz
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { 
        QUIZ_QUESTIONS, 
        SCORING_THRESHOLDS,
        VALIDATION_CONFIG,
        validateStepAnswers,
        getSelectedValues,
        showErrorMessage
    };
} else {
    window.QUIZ_QUESTIONS = QUIZ_QUESTIONS;
    window.SCORING_THRESHOLDS = SCORING_THRESHOLDS;
    window.VALIDATION_CONFIG = VALIDATION_CONFIG;
    window.validateStepAnswers = validateStepAnswers;
    window.getSelectedValues = getSelectedValues;
    window.showErrorMessage = showErrorMessage;
}