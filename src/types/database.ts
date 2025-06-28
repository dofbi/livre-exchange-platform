export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          nom: string
          prenom: string
          points: number
          created_at: string
        }
        Insert: {
          id?: string
          email: string
          nom: string
          prenom: string
          points?: number
          created_at?: string
        }
        Update: {
          id?: string
          email?: string
          nom?: string
          prenom?: string
          points?: number
          created_at?: string
        }
      }
      books: {
        Row: {
          id: string
          isbn: string
          titre: string
          auteur: string
          niveau_scolaire: string
          matiere: string
        }
        Insert: {
          id?: string
          isbn: string
          titre: string
          auteur: string
          niveau_scolaire: string
          matiere: string
        }
        Update: {
          id?: string
          isbn?: string
          titre?: string
          auteur?: string
          niveau_scolaire?: string
          matiere?: string
        }
      }
      listings: {
        Row: {
          id: string
          book_id: string
          user_id: string
          etat: string
          valeur_points: number
          disponible: boolean
          created_at: string
        }
        Insert: {
          id?: string
          book_id: string
          user_id: string
          etat: string
          valeur_points: number
          disponible?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          book_id?: string
          user_id?: string
          etat?: string
          valeur_points?: number
          disponible?: boolean
          created_at?: string
        }
      }
      exchanges: {
        Row: {
          id: string
          listing_id: string
          demandeur_id: string
          statut: string
          date_demande: string
          date_terminaison: string | null
        }
        Insert: {
          id?: string
          listing_id: string
          demandeur_id: string
          statut: string
          date_demande?: string
          date_terminaison?: string | null
        }
        Update: {
          id?: string
          listing_id?: string
          demandeur_id?: string
          statut?: string
          date_demande?: string
          date_terminaison?: string | null
        }
      }
      reviews: {
        Row: {
          id: string
          exchange_id: string
          note: number
          commentaire: string | null
          created_at: string
        }
        Insert: {
          id?: string
          exchange_id: string
          note: number
          commentaire?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          exchange_id?: string
          note?: number
          commentaire?: string | null
          created_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
