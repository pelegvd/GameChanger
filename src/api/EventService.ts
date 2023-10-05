import instanceAxios from "./http-common";

const url = "/events";

export const eventPost = (data: any) => {
  return instanceAxios.post(url, data);
};

export const eventDelete = (data: any) => {
  return instanceAxios.delete(`/events/${data}`);
};
