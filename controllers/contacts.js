import axios from "axios";

import { baseURL } from "@/config";

export const addContact = async (details) => {
  const { data } = await axios.post(baseURL + "/contacts/new/", details);
  return data;
};
