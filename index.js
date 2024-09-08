const clickToReslove = new Promise((resolve, reject) => {
  const button = document.getElementById("btn");
  const button2 = document.getElementById("btn1");

  button.addEventListener("click", () => {
    resolve("Resolve");
  });

  button2.addEventListener("click", () => {
    reject("Reject");
  });
});

clickToReslove
  .then((resolve) => {
    console.log(resolve);
  })
  .catch((err) => console.log(err));
