import axios from "axios";

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