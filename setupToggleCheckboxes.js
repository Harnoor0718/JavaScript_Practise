function setupToggleCheckboxes(buttonId) {
  const button = document.getElementById(buttonId);
  button.addEventListener("click", () => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(cb => {
      cb.checked = !cb.checked;
    });
  });
}