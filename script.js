document.getElementById('validationForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const fullName = document.getElementById('fullName').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const gender = document.getElementById('gender').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  if (fullName === '' || email === '' || phone === '' || gender === '' || password === '' || confirmPassword === '') {
      alert('Please fill all the fields.');
      return;
  }

  if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
  }

  alert('Form submitted successfully!');
});
