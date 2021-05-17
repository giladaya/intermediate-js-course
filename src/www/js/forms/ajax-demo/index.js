// Uncontrolled, with FormData
document.querySelector("form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  console.log("Data", data);

  const res = await fetch("/api/issues", {
    method: "POST",
    body: data,
  });

  const resJson = await res.json();
  console.log("Response", resJson);
});

// Uncontrolled, with json, naiive approach
// document.querySelector("form").addEventListener("submit", async (e) => {
//   e.preventDefault();
//   const form = e.target;
//   const data = {};
//   // A *very* naiive approach - don't use it
//   [...form.getElementsByTagName("input")].forEach((input) => {
//     if (input.type !== "checkbox" || input.checked) {
//       data[input.name] = input.value;
//     }
//   });
//   [...form.getElementsByTagName("select")].forEach(
//     (input) => (data[input.name] = input.value)
//   );
//   console.log("Data", data);

//   const res = await fetch("/api/issues", {
//     method: "POST", // *GET, POST, PUT, DELETE, etc.
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data), // body data type must match "Content-Type" header
//   });
//   const resJson = await res.json();

//   console.log(resJson);
// });
