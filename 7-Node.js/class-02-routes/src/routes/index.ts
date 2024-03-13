import { Router, Request, Response } from "express";

export const router = Router();

router.get("/", (_req: Request, res: Response) => {
  res.send({ className: "Class 02 Routes" });
});

router.get("/users", (_req: Request, res: Response) => {
  res.send([
    { id: 1, name: "Goku" },
    { id: 2, name: "Gohan" },
    { id: 3, name: "Bulma" },
  ]);
});

// route params
// query params
// body params
