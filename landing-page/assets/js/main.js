/* Sehatmand Gul Ahmed 2026 – landing page behaviour
 *
 * Configuration (edit these before go-live):
 *   PULSE_ENDPOINT    – URL that receives pulse responses (POST, JSON).
 *                       Leave empty until the programme team confirms where data is stored (REQUIREMENTS.md R-12, open question 9).
 *   FEEDBACK_URL      – feedback form link (open question 9). Left empty, the link is hidden.
 */
(function () {
  "use strict";

  var PULSE_ENDPOINT = "";
  var FEEDBACK_URL = "";

  var form = document.getElementById("pulse-form");
  var errorBox = document.getElementById("form-error");
  var thanks = document.getElementById("pulse-thanks");

  // Feedback link: hide the button until a real URL is set.
  var feedbackLink = document.querySelector("[data-feedback-link]");
  if (feedbackLink) {
    if (FEEDBACK_URL) {
      feedbackLink.setAttribute("href", FEEDBACK_URL);
    } else {
      feedbackLink.closest(".feedback__card").querySelector("p.small").textContent =
        "The feedback form will open here once the programme team confirms the link.";
      feedbackLink.hidden = true;
    }
  }

  if (!form) return;

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    var answers = {};
    var missing = false;
    for (var i = 1; i <= 5; i++) {
      var checked = form.querySelector('input[name="q' + i + '"]:checked');
      if (!checked) {
        missing = true;
        break;
      }
      answers["q" + i] = checked.value;
    }

    if (missing) {
      errorBox.hidden = false;
      errorBox.focus && errorBox.setAttribute("tabindex", "-1");
      return;
    }
    errorBox.hidden = true;

    // Only a timestamp and the five answers are sent. No names, emails or IDs.
    var payload = {
      submittedAt: new Date().toISOString(),
      source: "qr-wellness-pulse",
      answers: answers
    };

    function showThanks() {
      form.hidden = true;
      thanks.hidden = false;
      thanks.focus && thanks.setAttribute("tabindex", "-1");
      thanks.focus && thanks.focus();
    }

    if (!PULSE_ENDPOINT) {
      // No backend connected yet: show the confirmation so the page can be tested.
      // Nothing is stored in this browser.
      console.info("Pulse endpoint not set. Payload not sent:", payload);
      showThanks();
      return;
    }

    fetch(PULSE_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    })
      .then(function (res) {
        if (!res.ok) throw new Error("HTTP " + res.status);
        showThanks();
      })
      .catch(function () {
        errorBox.textContent = "Sorry, your answers could not be sent. Please try again.";
        errorBox.hidden = false;
      });
  });
})();
