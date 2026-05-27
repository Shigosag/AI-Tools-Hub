import { Request, Response, NextFunction } from 'express';
import { generateMockText } from '../services/tool.service';

export async function generateText(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { prompt } = req.body;

    const result = await generateMockText(prompt);

    res.status(200).json({
      success: true,
      data: result
    });
  } catch (error) {
    next(error);
  }
}