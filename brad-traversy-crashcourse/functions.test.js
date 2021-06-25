const functions = require("./functions");

// const initDatabase = () => console.log("Database initialized...");
// const closeDatabase = () => console.log("Database closed...");

// beforeEach(() => initDatabase());
// afterEach(() => closeDatabase());

// beforeAll(() => initDatabase());
// afterAll(() => closeDatabase());

const nameCheck = () => {
  console.log("Checking name ...");
};

describe("Checking names", () => {
  beforeEach(() => nameCheck());

  test("User is Jeff", () => {
    const user = "Jeff";
    expect(user).toBe("Jeff");
  });

  test("User is Karen", () => {
    const user = "Karen";
    expect(user).toBe("Karen");
  });
});

test("Adds 2+2 to equal 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

test("Adds 2+2 to NOT equal 5", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

test("Should be null", () => {
  expect(functions.isNull()).toBeNull();
});

test("Should be falsy", () => {
  expect(functions.checkValue(null)).toBeFalsy(); //also: toBeTruthy
});

test("User should be Brad Traversy object", () => {
  expect(functions.createUser()).toEqual({
    firstName: "Brad",
    lastName: "Traversy",
  });
});

test("Shuold be under 1600", () => {
  const load1 = 800;
  const load2 = 700;
  expect(load1 + load2).toBeLessThan(1600); //toBeLessThankOrEqueal
});

test("There is no I in team", () => {
  expect("tieam").not.toMatch(/I/);
});

test("Admi should be in usernames", () => {
  usernames = ["John", "Karen", "admin"];
  expect(usernames).toContain("admin");
});

//Working with async data - Promise
test("User fetched name should be Leanne Graham", () => {
  expect.assertions(1);
  return functions.fetchUser().then((data) => {
    expect(data.name).toEqual("Leanne Graham");
  });
});

//Working with async data - Async await
test("User fetched name should be Leanne Graham", async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toEqual("Leanne Graham");
});
