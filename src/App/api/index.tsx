import { API } from "aws-amplify";

export async function getData(): Promise<any> {
  return await API.get("server", "/server", "");
}
