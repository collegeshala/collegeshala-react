import { getToken, parseJwt } from "./auth";

getToken().then((token) => {
  const obj = parseJwt(token);
  console.log(obj);
});
