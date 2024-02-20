import { IPet } from "./IPet";

export type IHealth = Omit<IPet, "id" | "name" | "photo_url" | "description">;
