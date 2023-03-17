function getUserData() {
  const username = document.getElementById("username").value;
  const url = `https://api.spotify.com/v1/users/${username}`;
  const accessToken = "BQCnq8UF0iXIdqBc8m7veE16Rh4EPzPnN6uVoTmTo3gK7ze5iSMzI_9UsznFpKlgQuvbNFmN0YEfpprF0o3Ocw4swQ0sPqLYDC6LatBjX0NmWcPVcuO9AmsiBtn5AncgO0n0E0Xywr3b8mZq-D5KrUree19R-jwAQn6Qc9rD-bLoTWbehjKxj6kIRc6cGLX_MiG_";

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
    let nbFollowers = data.followers.total;
    document.querySelector('#username2').textContent = name;
    document.querySelector('#nbfollowers').textContent = nbFollowers;
    console.log(name + ' has' + nbFollowers + ' followers.');
  })
  .catch(error => {
    console.log('Error:', error);
    if (error.message === "User not found") {
      document.querySelector('#searchbtn').classList.remove('bg-[#1ed760]');
      document.querySelector('#searchbtn').classList.add('bg-red-400');
      document.querySelector('#username').classList.add('border-red-400', 'border-2');
      document.querySelector('#searchbtn').textContent = "Error";
    }
  });
}
