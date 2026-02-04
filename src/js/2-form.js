console.log('Form');

const formData = {
    email: '',
    message: '',
};

const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageTextarea = form.elements.message;

const STORAGE_KEY = 'feedback-form-state';

function saveToStorage() {
    formData.email = emailInput.value.trim();
    formData.message = messageTextarea.value.trim();

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function loadFromStorage() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return;

    const parsed = JSON.parse(saved);

    formData.email = parsed.email || '';
    formData.message = parsed.message || '';

    emailInput.value = formData.email;
    messageTextarea.value = formData.message;
}

loadFromStorage();

form.addEventListener('input', () => {
    saveToStorage();
});

form.addEventListener('submit', event => {
    event.preventDefault();

    formData.email = emailInput.value.trim();
    formData.message = messageTextarea.value.trim();

    if (!formData.email || !formData.message) {
        alert('Fill please all fields');
        return;
    }

    console.log(formData);

    localStorage.removeItem(STORAGE_KEY);
    formData.email = '';
    formData.message = '';
    form.reset();
});
