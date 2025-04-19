import { NextFunction, Request, Response } from "express";

import { memes } from "./data/data";
import Meme, { IMeme } from "./memeModel";

class Controller {
  addMemsToDb = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<IMeme[] | void> => {
    try {
      await Meme.insertMany(memes);
      const data = await this.getAllMemes(req, res, next);
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  };

  cleanDb = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<IMeme[] | void> => {
    try {
      await Meme.deleteMany();
      res.status(200).json({ message: "All memes deleted successfully!" });
    } catch (error) {
      next(error);
    }
  };

  getAllMemes = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<IMeme[] | void> => {
    try {
      const data = await Meme.find().sort({ id: 1 });
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  };
  updateMeme = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<IMeme[] | void> => {
    try {
      const { id } = req.params;
      const { datameme } = req.body;
      await Meme.findByIdAndUpdate(id, datameme);
      const data = await this.getAllMemes(req, res, next);
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  };
}

export default new Controller();
