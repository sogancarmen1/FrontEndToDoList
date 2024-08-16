import axios from "axios";
import Cookies from "js-cookie";
import { ref } from "vue";

export async function getData(route: string, paramsValue?: any) {
  var data = null;
  const reponse = await axios.get(route, {
    params: { id: paramsValue },
    withCredentials: true,
  });
  if (reponse.data.sucess == true) {
    data = reponse.data;
    return data;
  } else {
    return reponse.data;
  }
}

export async function postData(route: string, dataEntered?: any) {
  const reponse = await axios.post(route, dataEntered, {
    withCredentials: true,
  });
  return reponse;
}

export async function deleteData(route: string) {
  await axios.delete(route);
}

export function isAuthenticated() {
  const authToken = Cookies.get("Authorization");
  const result = ref(false);
  authToken != undefined ? (result.value = true) : (result.value = false);
  return result.value;
}
