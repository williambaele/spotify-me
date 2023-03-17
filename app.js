function getUserData() {
  const username = document.getElementById("username").value;
  const url = `https://api.spotify.com/v1/users/${username}`;
  const accessToken = "BQCSOxa_oirAauvxMQqUJvVuopP6uhYsk3f39Mp0Iugr8CYEk-7ZexBsv8vrKltSdjxApMK1UvzcSWZbybBCAFmDXSK8opTdJJNkj9HCsLS9UocteaG1fodKP_5Dm5X5Cry-N5EUbKe9SGKOJ2PnoRqFTLGboyX5aZb5Tz6nQlW6f8rYvKEhT9cAvtUdcR4Ny-Lz";

  fetch(url, {
    headers: {
      'Authorization': 'Bearer ' + accessToken
    }
  })
  .then(response => {
    if (response.ok) {
      return response.json();
    } else if (response.status === 404) {
      throw new Error("User not found");
    } else {
      throw new Error("Request failed");
    }
  })
  .then(data => {
    // Do something with the user data
    console.log(data);
    let name = data.display_name;
    document.querySelector('#username2').textContent = name;
    console.log(name);
  })
  .catch(error => {
    console.log('Error:', error);
    if (error.message === "User not found") {
      document.querySelector('#searchbtn').textContent = "Error";
      document.querySelector('#searchbtn').classList.add('bg-[#FF0000]');
    }
  });
}
