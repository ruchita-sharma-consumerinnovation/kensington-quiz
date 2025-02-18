// quiz.js

document.addEventListener("DOMContentLoaded", function () {
  // Cache DOM elements
  const quizForm = document.getElementById("quizForm");
  const step1 = document.getElementById("step1");
  const step2 = document.getElementById("step2");
  const step3 = document.getElementById("step3");
  const step4 = document.getElementById("step4");
  const step5 = document.getElementById("step5");
  const prevButton = document.getElementById("prevButton");
  const nextButton = document.getElementById("nextButton");
  const progressFill = document.getElementById("progressFill");
  const progressSteps = document.querySelectorAll(".step-indicator");

  // Quiz state
  let currentStep = 1;
  let quizData = {
    step1: {},
    step2: {},
    step3: {},
    step4: {},
    step5: {},
  };

  // Define a setter for selectedCurrency
  let selectedCurrency = "USD";
  let selectedCountry = "US";

  function setSelectedCurrency(currency) {
    if (selectedCurrency !== currency) {
      selectedCurrency = currency;

      // Regenerate questions that need currency conversion
      if (currentStep === 4) {
        generateStep4Questions(); // Previously step2
      } else if (currentStep === 5) {
        generateStep5Questions(); // Previously step3
      }
    }
  }

  // Initialize quiz
  function initializeQuiz() {
    // Populate country dropdown
    const countrySelect = document.getElementById("country");
    QUIZ_QUESTIONS.step1.questions[0].options.forEach((option) => {
      const optionElement = document.createElement("option");
      optionElement.value = option.value;
      optionElement.textContent = option.label;
      countrySelect.appendChild(optionElement);
    });

    // Populate age dropdown
    const ageSelect = document.getElementById("age");
    QUIZ_QUESTIONS.step1.questions[1].options.forEach((option) => {
      const optionElement = document.createElement("option");
      optionElement.value = option.value;
      optionElement.textContent = option.label;
      ageSelect.appendChild(optionElement);
    });

    // Set up event listeners
    countrySelect.addEventListener("change", handleCountryChange);
    setupNavigationButtons();

    // Generate initial questions for steps 2-5
    generateStep1Questions();
    generateStep2Questions();
    generateStep3Questions();
    generateStep4Questions();
    generateStep5Questions();
  }

  // Handle country selection
  function handleCountryChange(event) {
    const country = event.target.value;
    selectedCountry = country;
    const newCurrency = determineCountryCurrency(country);
    setSelectedCurrency(newCurrency);

    generateStep2Questions();
    generateStep4Questions();
    generateStep5Questions();

    const countryError = document.getElementById("countryError");
    if (countryError) {
      countryError.style.display = "none";
    }

    if (!quizData.step1) quizData.step1 = {};
    quizData.step1.country = country;

    try {
      validateCurrentStep();
    } catch (error) {
      console.error("Error updating questions after country change:", error);
      selectedCurrency = "USD";
    }
  }

  // Determine currency based on country
  function determineCountryCurrency(country) {
    const currencyMap = {
      US: "USD",
      GB: "GBP",
      CH: "CHF",
      SG: "SGD",
      CA: "CAD",
      AU: "AUD",
      NZ: "NZD",
      NO: "NOK",
      AE: "AED",
      JP: "JPY",
      DE: "EUR",
      FR: "EUR",
      IT: "EUR",
      ES: "EUR",
      NL: "EUR",
    };
    return currencyMap[country] || "USD";
  }

  function generateStep1Questions() {
    step1.innerHTML = "";

    QUIZ_QUESTIONS.step1.questions.forEach((question, index) => {
      const questionGroup = document.createElement("div");
      questionGroup.className = "question-group";

      const questionLabel = document.createElement("label");
      questionLabel.className = "question-label";
      questionLabel.textContent = question.label;

      const select = document.createElement("select");
      select.id = question.id;
      select.name = question.id;
      select.required = question.required;

      // Add default empty option
      const defaultOption = document.createElement("option");
      defaultOption.value = "";
      defaultOption.textContent = `Please select your ${question.id}`;
      defaultOption.disabled = true;
      defaultOption.selected = true;
      select.appendChild(defaultOption);

      // Add options
      question.options.forEach((option) => {
        const optionElement = document.createElement("option");
        optionElement.value = option.value;
        optionElement.textContent = option.label;

        // Restore previous selection if exists
        if (quizData.step1 && quizData.step1[question.id] === option.value) {
          optionElement.selected = true;
          defaultOption.selected = false;
        }

        select.appendChild(optionElement);
      });

      // Create error message container
      const errorMessage = document.createElement("div");
      errorMessage.className = "error-message";
      errorMessage.id = `${question.id}Error`;
      errorMessage.style.display = "none";
      errorMessage.textContent = `Please select your ${question.id}`;

      // Add change event listener
      select.addEventListener("change", (event) => {
        if (!quizData.step1) quizData.step1 = {};
        quizData.step1[question.id] = event.target.value;

        // Hide error message when selection is made
        errorMessage.style.display = "none";

        // Handle country change specifically
        if (question.id === "country") {
          handleCountryChange(event);
        }

        validateCurrentStep();
      });

      questionGroup.appendChild(questionLabel);
      questionGroup.appendChild(select);
      questionGroup.appendChild(errorMessage);
      step1.appendChild(questionGroup);
    });
  }

  //Generate step 2 questions
  function generateStep2Questions() {
    // Clear existing content
    step2.innerHTML = "";

    QUIZ_QUESTIONS.step2.questions.forEach((question) => {
      const questionGroup = document.createElement("div");
      questionGroup.className = "question-group";

      const questionLabel = document.createElement("label");
      questionLabel.className = "question-label";
      questionLabel.textContent = question.label;

      const inputGroup = document.createElement("div");
      inputGroup.className =
        question.type === "checkbox" ? "checkbox-group" : "radio-group";

      const errorMessage = document.createElement("div");
      errorMessage.className = "error-message";
      errorMessage.id = `${question.id}Error`;
      errorMessage.style.display = "none";

      question.options.forEach((option, optIndex) => {
        const optionLabel = document.createElement("label");
        optionLabel.className =
          question.type === "checkbox" ? "checkbox-option" : "radio-option";

        const input = document.createElement("input");
        input.type = question.type;
        input.name = question.id;
        input.value = option.value;
        input.required = question.required;
        input.id = `${question.id}_${optIndex}`;

        // Restore previous selection if exists
        if (quizData.step2 && quizData.step2[question.id]) {
          if (question.type === "checkbox") {
            input.checked = quizData.step2[question.id].includes(option.value);
          } else {
            input.checked = quizData.step2[question.id] === option.value;
          }
        }

        const labelText = document.createElement("span");

        // Update labels for currency
        const currencyConfig =
          QUIZ_CONFIG.currencies[selectedCurrency] ||
          QUIZ_CONFIG.currencies.USD;

        if (question.id === "missedOpportunity") {
          const currencyConfig =
            QUIZ_CONFIG.currencies[selectedCurrency] ||
            QUIZ_CONFIG.currencies.USD;

          // Specifically target "missed2" option, as it has an amount to convert
          if (option.value === "missed2") {
            option.label = option.label.replace(/\$([\d,]+)/g, (match, p1) => {
              // Parse the amount correctly
              const amount = parseFloat(p1.replace(/,/g, ""));
              console.log("Original Amount:", amount);

              if (!isNaN(amount) && amount > 0) {
                // Calculate the converted amount
                let convertedAmount =
                  Math.round(
                    (amount * currencyConfig.multiplier) /
                      currencyConfig.roundTo
                  ) * currencyConfig.roundTo;

                console.log("Rounded Converted Amount:", convertedAmount);

                // If the rounded amount is zero, use the original converted value
                if (convertedAmount === 0) {
                  convertedAmount = amount * currencyConfig.multiplier;
                  console.log(
                    "Using Original Converted Amount:",
                    convertedAmount
                  );
                }

                console.log("Currency Symbol:", currencyConfig.symbol);

                return currencyConfig.position === "before"
                  ? `${
                      currencyConfig.symbol
                    }${convertedAmount.toLocaleString()}`
                  : `${convertedAmount.toLocaleString()} ${
                      currencyConfig.symbol
                    }`;
              }
              // Fallback in case parsing fails
              return match;
            });
          }

          // Set the text content for the label
          labelText.textContent = option.label;
        } else {
          labelText.textContent = option.label;
        }

        if (question.id === "targetGain") {
          const updatedLabel = option.label.replace(
            /\$([\d,]+)/g,
            (match, p1) => {
              const amount = parseFloat(p1.replace(/,/g, ""));
              if (!isNaN(amount)) {
                const convertedAmount =
                  Math.round(
                    (amount * currencyConfig.multiplier) /
                      currencyConfig.roundTo
                  ) * currencyConfig.roundTo;

                return currencyConfig.position === "before"
                  ? `${
                      currencyConfig.symbol
                    }${convertedAmount.toLocaleString()}`
                  : `${convertedAmount.toLocaleString()} ${
                      currencyConfig.symbol
                    }`;
              }
              return match; // Fallback
            }
          );

          labelText.textContent = updatedLabel;
        } else {
          labelText.textContent = option.label;
        }

        optionLabel.appendChild(input);
        optionLabel.appendChild(labelText);
        inputGroup.appendChild(optionLabel);

        input.addEventListener("change", () => {
          handleInputChange(question.id, question.type);
        });
      });

      questionGroup.appendChild(questionLabel);
      questionGroup.appendChild(inputGroup);
      questionGroup.appendChild(errorMessage);
      step2.appendChild(questionGroup);
    });
  }

  // Handle input changes for radio and checkbox
  function handleInputChange(questionId, type) {
    const errorElement = document.getElementById(`${questionId}Error`);
    if (errorElement) {
      errorElement.style.display = "none";
    }

    if (!quizData[`step${currentStep}`]) {
      quizData[`step${currentStep}`] = {};
    }

    const selectedValues = getSelectedValues(questionId, type);
    if (type === "checkbox") {
      quizData[`step${currentStep}`][questionId] = selectedValues;
    } else {
      quizData[`step${currentStep}`][questionId] = selectedValues[0];
    }

    validateCurrentStep();
  }

  // Generate questions for Step 3 (new)
  function generateStep3Questions() {
    step3.innerHTML = "";

    QUIZ_QUESTIONS.step3.questions.forEach((question, index) => {
      const questionGroup = document.createElement("div");
      questionGroup.className = "question-group";

      const questionLabel = document.createElement("label");
      questionLabel.className = "question-label";
      questionLabel.textContent = question.label;

      const inputGroup = document.createElement("div");
      inputGroup.className =
        question.type === "checkbox" ? "checkbox-group" : "radio-group";

      const errorMessage = document.createElement("div");
      errorMessage.className = "error-message";
      errorMessage.id = `${question.id}Error`;
      errorMessage.style.display = "none";

      question.options.forEach((option, optIndex) => {
        const optionLabel = document.createElement("label");
        optionLabel.className =
          question.type === "checkbox" ? "checkbox-option" : "radio-option";

        const input = document.createElement("input");
        input.type = question.type;
        input.name = question.id;
        input.value = option.value;
        input.required = question.required;
        input.id = `${question.id}_${optIndex}`;

        if (quizData.step3 && quizData.step3[question.id]) {
          if (question.type === "checkbox") {
            input.checked = quizData.step3[question.id].includes(option.value);
          } else {
            input.checked = quizData.step3[question.id] === option.value;
          }
        }

        const labelText = document.createElement("span");
        labelText.textContent = option.label;

        optionLabel.appendChild(input);
        optionLabel.appendChild(labelText);
        inputGroup.appendChild(optionLabel);

        input.addEventListener("change", () => {
          handleInputChange(question.id, question.type);
        });
      });

      questionGroup.appendChild(questionLabel);
      questionGroup.appendChild(inputGroup);
      questionGroup.appendChild(errorMessage);
      step3.appendChild(questionGroup);
    });
  }

  // Generate Step 4 questions (previously Step 2)
  function generateStep4Questions() {
    step4.innerHTML = "";

    QUIZ_QUESTIONS.step4.questions.forEach((question, index) => {
      const questionGroup = document.createElement("div");
      questionGroup.className = "question-group";

      const questionLabel = document.createElement("label");
      questionLabel.className = "question-label";
      questionLabel.textContent = question.label;

      const radioGroup = document.createElement("div");
      radioGroup.className = "radio-group";

      const errorMessage = document.createElement("div");
      errorMessage.className = "error-message";
      errorMessage.id = `${question.id}Error`;
      errorMessage.style.display = "none";

      question.options.forEach((option, optIndex) => {
        const radioOption = document.createElement("label");
        radioOption.className = "radio-option";

        const input = document.createElement("input");
        input.type = "radio";
        input.name = question.id;
        input.value = option.value;
        input.required = true;

        if (quizData.step4 && quizData.step4[question.id] === option.value) {
          input.checked = true;
        }

        const labelText = document.createElement("span");

        if (
          question.id === "largestInvestment" &&
          option.amount !== undefined
        ) {
          const currencyConfig =
            QUIZ_CONFIG.currencies[selectedCurrency] ||
            QUIZ_CONFIG.currencies.USD;

          // Calculate the converted amount
          let convertedAmount =
            Math.round(
              (option.amount * currencyConfig.multiplier) /
                currencyConfig.roundTo
            ) * currencyConfig.roundTo;

          // If rounded amount is zero, use original converted value
          if (convertedAmount === 0) {
            convertedAmount = option.amount * currencyConfig.multiplier;
            console.log("Using Original Converted Amount:", convertedAmount);
          }

          let formattedAmount =
            currencyConfig.position === "before"
              ? `${currencyConfig.symbol}${convertedAmount.toLocaleString()}`
              : `${convertedAmount.toLocaleString()} ${currencyConfig.symbol}`;

          if (option.value === "0") {
            labelText.textContent = `Less than ${formattedAmount}`;
          } else if (option.value === "3") {
            labelText.textContent = `More than ${formattedAmount}`;
          } else {
            // Calculate the lower amount
            let lowerAmount =
              Math.round(
                ((option.amount / 5) * currencyConfig.multiplier) /
                  currencyConfig.roundTo
              ) * currencyConfig.roundTo;

            // If rounded lower amount is zero, use original value
            if (lowerAmount === 0) {
              lowerAmount = (option.amount / 5) * currencyConfig.multiplier;
              console.log("Using Original Lower Amount:", lowerAmount);
            }

            let formattedLowerAmount =
              currencyConfig.position === "before"
                ? `${currencyConfig.symbol}${lowerAmount.toLocaleString()}`
                : `${lowerAmount.toLocaleString()} ${currencyConfig.symbol}`;

            labelText.textContent = `${formattedLowerAmount} - ${formattedAmount}`;
          }
        } else {
          labelText.textContent = option.label;
        }

        radioOption.appendChild(input);
        radioOption.appendChild(labelText);
        radioGroup.appendChild(radioOption);

        input.addEventListener("change", () => {
          handleInputChange(question.id, "radio");
        });
      });

      questionGroup.appendChild(questionLabel);
      questionGroup.appendChild(radioGroup);
      questionGroup.appendChild(errorMessage);
      step4.appendChild(questionGroup);
    });
  }

  // Generate Step 5 questions (previously Step 3)
  function generateStep5Questions() {
    step5.innerHTML = "";

    const currencyConfig =
      QUIZ_CONFIG.currencies[selectedCurrency] || QUIZ_CONFIG.currencies.USD;

    QUIZ_QUESTIONS.step5.questions.forEach((question, index) => {
      const questionGroup = document.createElement("div");
      questionGroup.className = "question-group";

      const questionLabel = document.createElement("label");
      questionLabel.className = "question-label";
      questionLabel.textContent = question.label;

      const radioGroup = document.createElement("div");
      radioGroup.className = "radio-group";

      const ranges =
        question.id === "income"
          ? currencyConfig.incomeRanges
          : currencyConfig.netWorthRanges;

      ranges.forEach((range, idx) => {
        const radioOption = document.createElement("label");
        radioOption.className = "radio-option";

        const input = document.createElement("input");
        input.type = "radio";
        input.name = question.id;
        input.value = idx;
        input.required = true;

        if (quizData.step5 && quizData.step5[question.id] === idx.toString()) {
          input.checked = true;
        }

        const labelText = document.createElement("span");
        labelText.textContent = range;

        radioOption.appendChild(input);
        radioOption.appendChild(labelText);
        radioGroup.appendChild(radioOption);

        input.addEventListener("change", () => {
          handleInputChange(question.id, "radio");
        });
      });

      const errorMessage = document.createElement("div");
      errorMessage.className = "error-message";
      errorMessage.id = `${question.id}Error`;
      errorMessage.style.display = "none";

      questionGroup.appendChild(questionLabel);
      questionGroup.appendChild(radioGroup);
      questionGroup.appendChild(errorMessage);
      step5.appendChild(questionGroup);
    });
  }

  // Update progress bar
  function updateProgress() {
    const progress = ((currentStep - 1) / 4) * 100;
    progressFill.style.width = `${progress}%`;

    progressSteps.forEach((step, index) => {
      step.classList.toggle("active", index + 1 <= currentStep);
    });
  }

  // Navigation handlers
  function setupNavigationButtons() {
    prevButton.addEventListener("click", goToPreviousStep);
    nextButton.addEventListener("click", goToNextStep);
  }

  function goToPreviousStep() {
    if (currentStep > 1) {
      currentStep--;
      showCurrentStep();
    }
  }

  async function goToNextStep() {
    // Validate the current step
    const isValid = validateCurrentStep(true); // Pass a flag to indicate the source of the call
    if (isValid) {
      console.log(currentStep);

      const state = `step${currentStep}`;
      try {
        const visitorResponse = await fetch(
          "https://profile-ai-power-dashboard.vercel.app/api/save-visitor-data",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              state: state,
            }),
          }
        );

        if (visitorResponse.ok) {
          console.log("Visitor data submitted successfully.");
        } else {
          console.error("Failed to submit visitor data.");
        }
      } catch (error) {
        console.error("Error:", error);
      }

      if (currentStep < 5) {
        currentStep++;
        showCurrentStep();
      } else {
        submitQuiz();
      }
    }
  }

  window.onload = function () {
    sendInitialData();
  };

  function sendInitialData() {
    fetch("https://profile-ai-power-dashboard.vercel.app/api/save-visitor-data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        state: "initial",
      }),
    }).catch((error) => {
      console.error("Error:", error);
    });
  }

  function validateCurrentStep(shouldScroll = false) {
    const currentStepData = quizData[`step${currentStep}`];
    let isValid = true;
    let firstInvalidElement = null;

    // Validate step answers
    if (currentStep === 1) {
      if (!currentStepData.country) {
        const countryError = document.getElementById("countryError");
        countryError.style.display = "block";
        if (!firstInvalidElement) firstInvalidElement = countryError;
        isValid = false;
      }
      if (!currentStepData.age) {
        const ageError = document.getElementById("ageError");
        ageError.style.display = "block";
        if (!firstInvalidElement) firstInvalidElement = ageError;
        isValid = false;
      }
    } else {
      const questions = QUIZ_QUESTIONS[`step${currentStep}`].questions;
      questions.forEach((question) => {
        const selected = currentStepData[question.id];
        if (!selected || (Array.isArray(selected) && selected.length === 0)) {
          const errorElement = document.getElementById(`${question.id}Error`);
          if (errorElement) {
            errorElement.textContent = `Please select ${
              question.type === "checkbox" ? "at least one option" : "an option"
            }`;
            errorElement.style.display = "block";
            if (!firstInvalidElement) firstInvalidElement = errorElement;
          }
          isValid = false;
        }
      });
    }

    // Scroll to the first invalid question only if shouldScroll is true
    if (shouldScroll && firstInvalidElement) {
      firstInvalidElement.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }

    return isValid;
  }

  // Show/hide steps
  function showCurrentStep() {
    [step1, step2, step3, step4, step5].forEach((step, index) => {
      step.style.display = currentStep === index + 1 ? "block" : "none";
    });
    prevButton.style.display = currentStep === 1 ? "none" : "block";
    nextButton.textContent = currentStep === 5 ? "Complete Quiz" : "Next";
    // Scroll to top after updating the DOM
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 0);

    updateProgress();
  }

  // Calculate final score
  function calculateScore() {
    let totalScore = 0;

    // Step 1 scoring
    const ageScoring = QUIZ_CONFIG.ageScoring;
    totalScore += ageScoring[quizData.step1.age]?.points || 0;

    // Country scoring
    if (QUIZ_CONFIG.countryTiers.tier1.includes(quizData.step1.country)) {
      totalScore += 6;
    } else if (
      QUIZ_CONFIG.countryTiers.tier2.includes(quizData.step1.country)
    ) {
      totalScore += 4;
    } else if (
      QUIZ_CONFIG.countryTiers.tier3.includes(quizData.step1.country)
    ) {
      totalScore += 2;
    }

    // Step 4 scoring (previously step 2)
    Object.values(quizData.step4).forEach((answer) => {
      totalScore += parseInt(answer);
    });

    // Step 5 scoring (previously step 3)
    const incomeScore =
      QUIZ_QUESTIONS.step5.questions[0].scoring[quizData.step5.income];
    const netWorthScore =
      QUIZ_QUESTIONS.step5.questions[1].scoring[quizData.step5.netWorth];
    totalScore += incomeScore + netWorthScore;

    return totalScore;
  }

  function determineRedirectURL(score) {
    let baseUrl;

    if (score > SCORING_THRESHOLDS.price197) {
      baseUrl = QUIZ_CONFIG.checkoutUrls.price197;
    } else if (score >= SCORING_THRESHOLDS.price97) {
      baseUrl = QUIZ_CONFIG.checkoutUrls.price97;
    } else if (score >= SCORING_THRESHOLDS.price67) {
      baseUrl = QUIZ_CONFIG.checkoutUrls.price67;
    } else if (score >= SCORING_THRESHOLDS.price47) {
      baseUrl = QUIZ_CONFIG.checkoutUrls.price47;
    } else if (score >= SCORING_THRESHOLDS.price27) {
      baseUrl = QUIZ_CONFIG.checkoutUrls.price27;
    } else {
      baseUrl = QUIZ_CONFIG.checkoutUrls.price17;
    }

    const options = [
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
      { value: "NL", label: "Netherlands" },
    ];

    const selectedOption = options.find(
      (option) => option.value === selectedCountry
    );

    const redirectUrl = `${baseUrl}?country=${selectedOption.label}&currency=${selectedCurrency}`;

    console.log("Redirect URL:", redirectUrl);

    return redirectUrl;
  }

  // Function to format quiz responses
  function formatQuizResponses(quizData) {
    const getOptionLabel = (stepNumber, questionId, value) => {
      try {
        // Early return if value is undefined or null
        if (value == null) {
          console.log(
            `No value provided for question ${questionId} in step ${stepNumber}`
          );
          return { value: null, label: "No answer" };
        }

        // Safely get the questions array
        const stepQuestions = QUIZ_QUESTIONS[`step${stepNumber}`]?.questions;
        if (!stepQuestions) {
          console.log(`No questions found for step ${stepNumber}`);
          return Array.isArray(value)
            ? value.map((v) => ({ value: v, label: v }))
            : { value, label: value };
        }

        // Safely find the question
        const question = stepQuestions.find((q) => q.id === questionId);
        if (!question) {
          console.log(`Question ${questionId} not found in step ${stepNumber}`);
          return Array.isArray(value)
            ? value.map((v) => ({ value: v, label: v }))
            : { value, label: value };
        }

        // Safely access options
        const options = question.options || [];

        if (Array.isArray(value)) {
          // Handle checkbox responses (multiple selections)
          return value.map((v) => {
            const option = options.find((opt) => opt.value === v);
            return {
              value: v,
              label: option ? option.label : v,
            };
          });
        } else {
          // Handle radio and select responses (single selection)
          const option = options.find((opt) => opt.value === value);
          return {
            value: value,
            label: option ? option.label : value,
          };
        }
      } catch (error) {
        console.error("Error in getOptionLabel:", {
          stepNumber,
          questionId,
          value,
          error: error.message,
        });
        // Return a safe fallback value
        return Array.isArray(value)
          ? value.map((v) => ({ value: v, label: v }))
          : { value, label: value };
      }
    };

    try {
      // Format the responses
      const formattedResponses = {
        timestamp: new Date().toISOString(),
        quiz_version: "1.0",
        meta: {
          selected_country: selectedCountry || "US",
          selected_currency: selectedCurrency || "USD",
          final_score: calculateScore(),
        },
        responses: {},
      };

      // Safely add each step
      for (let stepNum = 1; stepNum <= 5; stepNum++) {
        const stepKey = `step${stepNum}`;
        const stepQuestions = QUIZ_QUESTIONS[stepKey]?.questions || [];
        const stepData = quizData[stepKey] || {};

        formattedResponses.responses[stepKey] = {
          title: {
            1: "Basic Information",
            2: "Goals and Motivations",
            3: "Investor Profile",
            4: "Investment Experience",
            5: "Financial Profile",
          }[stepNum],
          questions: stepQuestions.map((q) => ({
            question_id: q.id,
            question_text: q.label,
            question_type: q.type,
            answer: getOptionLabel(stepNum, q.id, stepData[q.id]),
          })),
        };
      }

      return formattedResponses;
    } catch (error) {
      console.error("Error formatting quiz responses:", error);
      // Return a minimal valid response in case of error
      return {
        timestamp: new Date().toISOString(),
        quiz_version: "1.0",
        meta: {
          selected_country: selectedCountry || "US",
          selected_currency: selectedCurrency || "USD",
          final_score: 0,
        },
        responses: {},
        error: error.message,
      };
    }
  }

  async function submitQuiz() {
    const score = calculateScore();
    const redirectURL = determineRedirectURL(score);

    // Get UTM parameters from the URL
    const utmParams = getUTMParameters();

    // Format all responses
    const formattedResponses = formatQuizResponses(quizData);

    // Add UTM parameters to the meta section of the body
    const requestData = {
      ...formattedResponses,
      meta: {
        ...formattedResponses.meta,
        utm_source: utmParams.utm_source,
        utm_adid: utmParams.utm_adid,
        utm_campaign: utmParams.utm_campaign,
        utm_adset: utmParams.utm_adset,
      },
    };

    try {
      // Send the responses to your backend
      const response = await fetch(
        "https://profile-ai-power-dashboard.vercel.app/api/save-quiz-submission",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestData),
        }
      );

      if (!response.ok) {
        console.error("Failed to save quiz responses");
      }

      const responseData = await response.json();

      // Extract the uuid from the response
      const uuid = responseData.data.uuid;

      const finalRedirectURL = `${redirectURL}&response_uuid=${uuid}`;

      console.log("Final Redirect URL:", finalRedirectURL);

      // Redirect to the appropriate URL
      window.location.href = finalRedirectURL;
    } catch (error) {
      console.error("Error saving quiz responses:", error);
      // Still redirect even if saving responses fails
      window.location.href = redirectURL;
    }
  }

  function getUTMParameters() {
    const params = new URLSearchParams(window.location.search);
    return {
      utm_source: params.get("utm_source"),
      utm_adid: params.get("utm_adid"),
      utm_campaign: params.get("utm_campaign"),
      utm_adset: params.get("utm_adset"),
    };
  }

  // Initialize the quiz
  initializeQuiz();
});
