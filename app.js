function getUserData() {
  const username = document.getElementById("username").value;
  const url = `https://api.spotify.com/v1/users/${username}`;
  const accessToken = "BQAyeKQmBuD4Og-Ia6utzC-V4I8sj69V7idlSzEEgGbDkIXSrieQBJ-Vs4m7CK2i-TjAzsD9AvAI_orzX5Ym6agnEWiE7_CZ2JNuQ-FRTXDscvPIyhXASK6J9JrwbfoPkPkiQo7mIjL5s5p3ly75EwBPGhU9q5YGD5kDWNg8QQmLvJhTWCE1DwOA"; // Replace with your own access token

  fetch(url, {
    headers: {
      'Authorization': 'Bearer ' + accessToken
    }
  })
  .then(response => response.json())
  .then(data => {
    // Do something with the user data, such as display it on the page
    console.log(data);
    console.log("User well loaded")
  })
  .catch(error => console.error(error));
}
