import { Request } from "express";

export type Settings = {
  appSecret?: string;
  protectedPaths?: string[];
  useCookie?: boolean;
  cookieName?: string;
  tokenType?: string;
  verify?: (req: Request) => Promise<any> | any;
};
