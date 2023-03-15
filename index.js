import getData from "./app.js"

(async () => {
  const data = await getData(1);
  console.log(data);
})();

