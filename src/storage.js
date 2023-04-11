let json_url = "data.json";

fetch(json_url)
  .then((Response) => Response.json())
  .then((data) => {
    // console.log(data);
    let webAppDb = [];
    for (let i = 0; i < data.length; i++) {
      webAppDb.push(data[i]);
    }
    localStorage.setItem("showDb", JSON.stringify(webAppDb));
  });
