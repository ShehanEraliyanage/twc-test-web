import axios from "axios";

import { baseURL } from "@/config";

export const RegisterUser = async (details) => {
  const { data } = await axios.post(baseURL + "/users/register/", details);
  return data;
};
