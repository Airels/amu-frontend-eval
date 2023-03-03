import { environment } from '../src/environments/environment';
import { createClient } from "@supabase/supabase-js";

// L'URL sur laquelle votre application web est visitable (à changer si nécessaire)
export const BASE_URL = environment.BASE_URL;
// L'URL de l'API Supabase à mettre à jour absolument
export const API_URL = environment.API_URL;
// La clé d'API de votre compte Supabase à mettre à jour absolument
export const API_KEY = environment.API_KEY;

/**
 * Petite fonction utilitaire qui permet de supprimer tout ce qui se trouve dans les tables customers et invoices
 * de l'API SupaBase
 */
export const resetDatabase = () => {
  cy.request({
    method: "DELETE",
    url: API_URL + "/invoices?id=gt.0",
    headers: {
      apiKey: API_KEY,
    },
  });

  cy.request({
    method: "DELETE",
    url: API_URL + "/customers?id=gt.0",
    headers: {
      apiKey: API_KEY,
    },
  });
};
