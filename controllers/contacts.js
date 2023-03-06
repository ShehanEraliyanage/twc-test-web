import axios from "axios";

import { baseURL } from "@/config";

export const addContact = async (details) => {
  const { data } = await axios.post(baseURL + "/contacts/new/", details);
  return data;
};

export const getAllContact = async () => {
  const { data } = await axios.get(baseURL + "/contacts/all");
  return data;
};
export const deleteContact = async (id) => {
  const { data } = await axios.post(baseURL + "/contacts/delete/", { id });
  return data;
};
export const updateContact = async (details) => {
  const { data } = await axios.post(
    baseURL + "/contacts/updateContact/",
    details
  );
  return data;
};
