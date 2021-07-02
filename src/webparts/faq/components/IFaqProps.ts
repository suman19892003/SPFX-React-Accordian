import { WebPartContext } from "@microsoft/sp-webpart-base";

export interface IFaqProps {
  description: string;
  listName: string;
  context: WebPartContext;
}
