import { query } from "$app/server";

export const getTest1 = query(async () => {
  return false;
});


export const getTest2 = query(async () => {
  return "Hello World! 2";
});