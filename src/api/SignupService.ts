import instanceAxios from "./http-common";

const url = "/signup";

export const signupPost = (data: any) => {
  console.log(data);
  return instanceAxios.post(url, data);
};
