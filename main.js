const notebox = document.getElementById('notebox');
const wordCount = document.getElementById('wordCount');
const charCount = document.getElementById('charCount');
const clearBtn = document.getElementById('clearBtn');

notebox.addEventListener('input', () => {
  const text = notebox.value;
  const words = text.trim().length ? text.trim().split(/\s+/).length : 0;
  wordCount.textContent = words;
  charCount.textContent = text.length;
});

clearBtn.addEventListener('click', () => {
  notebox.value = '';
  wordCount.textContent = 0;
  charCount.textContent = 0;
});