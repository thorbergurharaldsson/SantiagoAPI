login = async () => {
  //Get form
  const form = event.target;

  // console.log(form);
  // Connect to the api
  const conn = await fetch("https://ecuaguia.com/iceland/api-log-in.php", {
    method: "POST",
    // send data to the api (user_name and password)
    body: new FormData(form),
  });
  // Get response back
  const res = await conn.json();
  console.log(res.info);

  // If the response is an error show the error
  if (!conn.ok) {
    alert(res.info);
    return;
  }

  // If the response is ok then show success
  alert("Great, you are logged in!");
};
