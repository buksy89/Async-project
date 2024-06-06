// Async
async function asyncFunction1() {
  await new Promise((resolve) =>
    setTimeout(() => {
      console.log("Async Function 1 executed");
      resolve();
    }, 1000)
  );
}

async function asyncFunction2() {
  await new Promise((resolve) =>
    setTimeout(() => {
      console.log("Async Function 2 executed");
      resolve();
    }, 1000)
  );
}

async function asyncFunction3() {
  await new Promise((resolve) =>
    setTimeout(() => {
      console.log("Async Function 3 executed");
      resolve();
    }, 1000)
  );
}

async function chainedAsyncFunctions() {
  await asyncFunction1();
  await asyncFunction2();
  await asyncFunction3();
}

chainedAsyncFunctions();

async function iterateWithAsyncAwait(arr) {
  for (const value of arr) {
    console.log(value);
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
}
