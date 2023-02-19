document.getElementById("mySearch").size = "50";
document.getElementById("region").size = "50";
const data = { username: 'example' };

fetch('https://restcountries.com/v3.1/all', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
  .then((response) => response.json())
  .then((data) => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });