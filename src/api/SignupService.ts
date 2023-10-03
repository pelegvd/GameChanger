import instanceAxios from "./http-common";

const url = "/signup";

export const signupPost = (data: any) => {
  return instanceAxios.post(url, data);
};
