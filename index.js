const form = document.querySelector('signup');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = {};
  for (const [key, value] of formData.entries()) {
    data[key] = value;
  }
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://github.com/budi-team/profile/blob/master/submit-form.php'); // Update to the name of your PHP file
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = () => {
    if (xhr.status === 200) {
      console.log(xhr.responseText);
    } else {
      console.error(xhr.statusText);
    }
  };
  xhr.onerror = () => {
    console.error(xhr.statusText);
  };
  xhr.send(JSON.stringify(data));
});

