import dotenv from 'dotenv';

dotenv.config();

export const apiKey = process.env.TRELLO_API_KEY;
export const apiToken = process.env.TRELLO_API_TOKEN;
