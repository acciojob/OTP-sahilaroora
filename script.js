//your JS code here. If required.
const inputs = document.querySelectorAll('.code');

inputs[0].focus(); // Auto focus first input

inputs.forEach((input, index) => {
  input.addEventListener('input', (e) => {
    const value = e.target.value;

    // Accept only digits
    if (!/^\d$/.test(value)) {
      e.target.value = '';
      return;
    }

    // Move to next input
    if (index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace') {
      if (input.value === '') {
        if (index > 0) {
          inputs[index - 1].focus();
          inputs[index - 1].value = '';
        }
      } else {
        input.value = '';
      }
    }
  });
});
