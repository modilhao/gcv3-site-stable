import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Arquivo reduzido - rotas relacionadas ao blog foram removidas

  const httpServer = createServer(app);

  return httpServer;
}