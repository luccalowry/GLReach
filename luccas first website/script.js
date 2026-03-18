const themeToggle = document.querySelector("#theme-toggle");
const promptButtons = document.querySelectorAll(".prompt-chip");
const promptOutput = document.querySelector("#prompt-output");

themeToggle?.addEventListener("click", () => {
  document.body.classList.toggle("night-mode");
});

promptButtons.forEach((button) => {
  button.addEventListener("click", async () => {
    const prompt = button.textContent.trim();

    try {
      await navigator.clipboard.writeText(prompt);
      promptOutput.textContent = `Copied: "${prompt}"`;
    } catch (error) {
      promptOutput.textContent = `Try this prompt next: "${prompt}"`;
    }
  });
});
