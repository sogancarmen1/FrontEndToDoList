import axios from "axios";

export async function getData(route: string, paramsValue: any) {
  var data = null;
  const reponse = await axios.get(route, { params: { id: paramsValue } });
  if (reponse.data.sucess == true) {
    data = reponse.data.data;
    return data;
  }
}

export async function postData(route: string, dataEntered: any) {
  await axios.post(route, dataEntered);
}

export async function deleteData(route: string) {
  await axios.delete(route);
}
