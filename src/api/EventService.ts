import instanceAxios from "./http-common";

const url = '/event';


export const eventPost = (data: any) => {
  return instanceAxios.post(url, data);
};





