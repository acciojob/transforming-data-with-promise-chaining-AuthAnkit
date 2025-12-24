//your JS code here. If required.
const input = document.getElementById("ip");
const button = document.getElementById("btn");
const output = document.getElementById("output");

button.onclick = function () {
  const value = Number(input.value);

  // Initial Promise
  new Promise((resolve) => {
    setTimeout(() => {
      output.textContent = `Result: ${value}`;
      resolve(value);
    }, 2000);
  })

    // Multiply by 2
    .then((num) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const result = num * 2;
          output.textContent = `Result: ${result}`;
          resolve(result);
        }, 2000);
      });
    })

    // Subtract 3
    .then((num) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const result = num - 3;
          output.textContent = `Result: ${result}`;
          resolve(result);
        }, 1000);
      });
    })

    // Divide by 2
    .then((num) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const result = num / 2;
          output.textContent = `Result: ${result}`;
          resolve(result);
        }, 1000);
      });
    })

    // Add 10 (Final)
    .then((num) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const finalResult = num + 10;
          output.textContent = `Final Result: ${finalResult}`;
          resolve(finalResult);
        }, 1000);
      });
    });
};
