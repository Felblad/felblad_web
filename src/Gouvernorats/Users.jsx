import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Categories.css';
import Footer from "../Footer";


  const categories ={
    "1": {
      "category": "ÉVÉNEMENTIEL",
      "image": "événementiel.jpg",
      "subcategories": [
        {
          "name": "Salle des fête",
          "image": "salle_des_fête.jpg"
        },
        {
          "name": "Location de costumes et des robes de fête",
          "image": "location_costumes.jpg"
        },
        {
          "name": "Location de matériel de fête",
          "image": "location_matériel.jpg"
        },
        {
          "name": "Animateurs",
          "image": "animateurs.jpg"
        },
        {
          "name": "Foire",
          "image": "foire.jpg"
        },
        {
          "name": "Décoration des fêtes",
          "image": "décoration_fêtes.jpg"
        },
        {
          "name": "Société événementielle",
          "image": "société_événementielle.jpg"
        },
        {
          "name": "Serveurs",
          "image": "serveurs.jpg"
        }
      ]
    },
    "2": {
      "category": "SHOPPING",
      "image": "shopping.jpg",
      "subcategories": [
        {
          "name": "Homme",
          "image": "homme.jpg",
          "subcategories": [
            {
              "name": "Prêt à porter",
              "image": "homme_prêt_a_porter.jpg"
            },
            {
              "name": "Accessoires",
              "image": "homme_accessoires.jpg"
            },
            {
              "name": "Chaussures",
              "image": "homme_chaussures.jpg"
            }
          ]
        },
        {
          "name": "Femme",
          "image": "femme.jpg",
          "subcategories": [
            {
              "name": "Prêt à porter",
              "image": "femme_prêt_a_porter.jpg"
            },
            {
              "name": "Accessoires",
              "image": "femme_accessoires.jpg"
            },
            {
              "name": "Chaussures",
              "image": "femme_chaussures.jpg"
            },
            {
              "name": "Jouets",
              "image": "femme_jouets.jpg"
            }
          ]
        },
        {
          "name": "Enfant",
          "image": "enfant.jpg",
          "subcategories": [
            {
              "name": "Prêt à porter",
              "image": "enfant_prêt_a_porter.jpg"
            },
            {
              "name": "Accessoires",
              "image": "enfant_accessoires.jpg"
            },
            {
              "name": "Chaussures",
              "image": "enfant_chaussures.jpg"
            },
            {
              "name": "Jouets",
              "image": "enfant_jouets.jpg"
            }
          ]
        },
        {
          "name": "Maison",
          "image": "maison.jpg",
          "subcategories": [
            {
              "name": "Cuisine",
              "image": "cuisine.jpg"
            },
            {
              "name": "Tapis et rideaux",
              "image": "tapis_rideaux.jpg"
            },
            {
              "name": "Meuble",
              "image": "meuble.jpg"
            }
          ]
        },
        {
          "name": "Centre commerciaux",
          "image": "centre_commerciaux.jpg"
        },
        {
          "name": "Bijouterie",
          "image": "bijouterie.jpg"
        },
        {
          "name": "Boutique divers",
          "image": "boutique_divers.jpg"
        },
        {
          "name": "Produits cosmétiques",
          "image": "produits_cosmétiques.jpg"
        },
        {
          "name": "Parfumerie",
          "image": "parfumerie.jpg",
          "subcategories": [
            {
              "name": "Handmade",
              "image": "parfumerie_handmade.jpg"
            },
            {
              "name": "Importer",
              "image": "parfumerie_importer.jpg"
            },
            {
              "name": "Artisanat",
              "image": "parfumerie_artisanat.jpg"
            },
            {
              "name": "Super fripe",
              "image": "parfumerie_super_fripe.jpg"
            }
          ]
        }
      ]
    },
    "3": {
      "category": "GROSSISTE - DÉPOT",
      "image": "grossiste.jpg",
      "subcategories": [
        {
          "name": "Agroalimentaire",
          "image": "agroalimentaire.jpg"
        },
        {
          "name": "Construction",
          "image": "construction.jpg"
        },
        {
          "name": "Vêtements",
          "image": "vêtements.jpg"
        },
        {
          "name": "Accessoires",
          "image": "accessoires.jpg"
        },
        {
          "name": "Décoration",
          "image": "décoration.jpg"
        },
        {
          "name": "Lumière et câble",
          "image": "lumière_et_câble.jpg"
        },
        {
          "name": "Maquillage",
          "image": "maquillage.jpg"
        },
        {
          "name": "Fournisseur médical",
          "image": "fournisseur_médical.jpg"
        },
        {
          "name": "Électroménager",
          "image": "électroménager.jpg"
        },
        {
          "name": "Article Bébé et Maman",
          "image": "article_bébé_maman.jpg"
        },
        {
          "name": "Plastique",
          "image": "plastique.jpg"
        },
        {
          "name": "Jouets",
          "image": "jouets.jpg"
        },
        {
          "name": "Informatique",
          "image": "informatique.jpg"
        },
        {
          "name": "Agricole",
          "image": "agricole.jpg"
        },
        {
          "name": "Meuble",
          "image": "meuble.jpg"
        },
        {
          "name": "Fourniture scolaire",
          "image": "fourniture_scolaire.jpg"
        },
        {
          "name": "Eaux minérales et boissons gazeuses",
          "image": "eaux_minerales.jpg"
        }
      ]
    },
    "4": {
      "category": "BÂTIMENT",
      "image": "bâtiment.jpg",
      "subcategories": [
        {
          "name": "Architecte",
          "image": "architecte.jpg"
        },
        {
          "name": "Ingénieur de béton",
          "image": "ingénieur_de_béton.jpg"
        },
        {
          "name": "Architecte de l'intérieur",
          "image": "architecte_de_l'intérieur.jpg"
        },
        {
          "name": "Génie civil",
          "image": "génie_civil.jpg"
        },
        {
          "name": "Urbaniste",
          "image": "urbaniste.jpg"
        },
        {
          "name": "Paysagistes",
          "image": "paysagistes.jpg"
        },
        {
          "name": "Promotion immobilière",
          "image": "promotion_immobilière.jpg"
        },
        {
          "name": "Topographe",
          "image": "topographe.jpg"
        },
        {
          "name": "Entrepreneur",
          "image": "entrepreneur.jpg"
        },
        {
          "name": "Location de matériel de construction",
          "image": "location_matériel_de_construction.jpg"
        },
        {
          "name": "Vente de matériel de construction",
          "image": "vente_matériel_de_construction.jpg"
        },
        {
          "name": "Cuisine sur mesure",
          "image": "cuisine_sur_mesure.jpg"
        }
      ]
    },
    "5": {
      "category": "MÉTIERS",
      "image": "métiers.jpg",
      "subcategories": [
        {
          "name": "Maçon",
          "image": "maçon.jpg"
        },
        {
          "name": "Électricien",
          "image": "électricien.jpg"
        },
        {
          "name": "Bricoleur",
          "image": "bricoleur.jpg"
        },
        {
          "name": "Plombier",
          "image": "plombier.jpg"
        },
        {
          "name": "Menuisier",
          "image": "menuisier.jpg"
        },
        {
          "name": "Étanchéité",
          "image": "étanchéité.jpg"
        },
        {
          "name": "Aluminium",
          "image": "aluminium.jpg"
        },
        {
          "name": "Artisan bijoutier",
          "image": "artisan_bijoutier.jpg"
        },
        {
          "name": "Jardinier",
          "image": "jardinier.jpg"
        },
        {
          "name": "Pâtissier",
          "image": "pâtissier.jpg"
        },
        {
          "name": "Baby sitter",
          "image": "baby_sitter.jpg"
        },
        {
          "name": "Courtier",
          "image": "courtier.jpg"
        },
        {
          "name": "Faux plafond",
          "image": "faux_plafond.jpg"
        },
        {
          "name": "Placo",
          "image": "placo.jpg"
        },
        {
          "name": "Parabole",
          "image": "parabole.jpg"
        },
        {
          "name": "Soudeur",
          "image": "soudeur.jpg"
        },
        {
          "name": "Tapissiers",
          "image": "tapissiers.jpg"
        },
        {
          "name": "Préparateurs radio et télévision",
          "image": "préparateurs_radio_et_télévision.jpg"
        },
        {
          "name": "Charpentier métallique",
          "image": "charpentier_métallique.jpg"
        },
        {
          "name": "Plongeur",
          "image": "plongeur.jpg"
        },
        {
          "name": "Pêche",
          "image": "pêche.jpg"
        },
        {
          "name": "Fleuriste",
          "image": "fleuriste.jpg"
        },
        {
          "name": "Femme de ménage",
          "image": "femme_de_ménage.jpg"
        }
      ]
    },
    "6": {
      "category": "MARCHÉ",
      "image": "marché.jpg",
      "subcategories": [
        {
          "name": "Boulangerie",
          "image": "boulangerie.jpg"
        },
        {
          "name": "Boucherie",
          "image": "boucherie.jpg"
        },
        {
          "name": "Charcuterie",
          "image": "charcuterie.jpg"
        },
        {
          "name": "Crémerie",
          "image": "crémerie.jpg"
        },
        {
          "name": "Épicerie",
          "image": "épicerie.jpg"
        },
        {
          "name": "Poissonnerie",
          "image": "poissonnerie.jpg"
        },
        {
          "name": "Vendeur fruits et légumes",
          "image": "vendeur_fruits_et_légumes.jpg"
        },
        {
          "name": "Poulailler",
          "image": "poulailler.jpg"
        },
        {
          "name": "Magasin",
          "image": "magasin.jpg"
        },
        {
          "name": "Drug store",
          "image": "drug_store.jpg"
        },
        {
          "name": "Vente du miel",
          "image": "vente_du_miel.jpg"
        }
      ]
    },
    "7": {
      "category": "DROIT",
      "image": "droit.jpg",
      "subcategories": [
        {
          "name": "Avocats (Avocat stagiaire, Avocat à la cour d'appel, Avocat à la cour de cassation)",
          "image": "avocats.jpg"
        },
        {
          "name": "Notaire",
          "image": "notaire.jpg"
        },
        {
          "name": "Huissiers",
          "image": "huissiers.jpg"
        },
        {
          "name": "Traducteur",
          "image": "traducteur.jpg"
        },
        {
          "name": "Experts",
          "image": "experts.jpg"
        },
        {
          "name": "Conseiller juridique d'entreprise",
          "image": "conseiller_juridique_d'entreprise.jpg"
        }
      ]
    },
    "8": {
      "category": "SÉCURITÉ",
      "image": "sécurité.jpg",
      "subcategories": [
        {
          "name": "Vente et installation des caméras et alarmes",
          "image": "vente_installation_caméras.jpg"
        },
        {
          "name": "Agence de sécurité",
          "image": "agence_de_sécurité.jpg"
        },
        {
          "name": "Location de matériel",
          "image": "location_de_matériel.jpg"
        }
      ]
    },
    "9": {
      "category": "ÉDUCATION",
      "image": "éducation.jpg",
      "subcategories": [
        {
          "name": "Établissement privé (Garderie scolaire / crèche / jardin d'enfants / centre de soutien scolaire / école / lycée / faculté / Centre de formation)",
          "image": "établissement_privé.jpg"
        },
        {
          "name": "Accompagnateur",
          "image": "accompagnateur.jpg"
        },
        {
          "name": "Enseignant",
          "image": "enseignant.jpg"
        },
        {
          "name": "Professeurs",
          "image": "professeurs.jpg"
        },
        {
          "name": "Librairie publique",
          "image": "librairie_publique.jpg"
        },
        {
          "name": "Club Robotique",
          "image": "club_robotique.jpg"
        },
        {
          "name": "Coworking space",
          "image": "coworking_space.jpg"
        },
        {
          "name": "Centre d'handicapés",
          "image": "centre_handicapés.jpg"
        }
      ]
    },
    "10": {
      "category": "SPORT",
      "image": "sport.jpg",
      "subcategories": [
        {
          "name": "Athlétisme",
          "image": "athlétisme.jpg"
        },
        {
          "name": "Aérobic",
          "image": "aérobic.jpg"
        },
        {
          "name": "Baseball",
          "image": "baseball.jpg"
        },
        {
          "name": "Basket-ball",
          "image": "basket-ball.jpg"
        },
        {
          "name": "Billard",
          "image": "billard.jpg"
        },
        {
          "name": "Bowling",
          "image": "bowling.jpg"
        },
        {
          "name": "Boxe",
          "image": "boxe.jpg"
        },
        {
          "name": "Cyclisme",
          "image": "cyclisme.jpg"
        },
        {
          "name": "Club vélo",
          "image": "club_vélo.jpg"
        },
        {
          "name": "Danse (Danse sportive)",
          "image": "danse.jpg"
        },
        {
          "name": "Dames",
          "image": "dames.jpg"
        },
        {
          "name": "Échecs",
          "image": "échecs.jpg"
        },
        {
          "name": "Équitation",
          "image": "équitation.jpg"
        },
        {
          "name": "Escrime",
          "image": "escrime.jpg"
        },
        {
          "name": "Football",
          "image": "football.jpg"
        },
        {
          "name": "Golf",
          "image": "golf.jpg"
        },
        {
          "name": "Gymnastique",
          "image": "gymnastique.jpg"
        },
        {
          "name": "Handball",
          "image": "handball.jpg"
        },
        {
          "name": "Judo",
          "image": "judo.jpg"
        },
        {
          "name": "Jiu-jitsu",
          "image": "jiu-jitsu.jpg"
        },
        {
          "name": "Jet ski",
          "image": "jet_ski.jpg"
        },
        {
          "name": "Karaté",
          "image": "karaté.jpg"
        },
        {
          "name": "Kempo",
          "image": "kempo.jpg"
        },
        {
          "name": "Karting",
          "image": "karting.jpg"
        },
        {
          "name": "Kayak",
          "image": "kayak.jpg"
        },
        {
          "name": "Kick-boxing",
          "image": "kick-boxing.jpg"
        },
        {
          "name": "Kung fu",
          "image": "kung_fu.jpg"
        },
        {
          "name": "Lancer de disque",
          "image": "lancer_de_disque.jpg"
        },
        {
          "name": "Lancer de javelot",
          "image": "lancer_de_javelot.jpg"
        },
        {
          "name": "Lancer de marteau",
          "image": "lancer_de_marteau.jpg"
        },
        {
          "name": "Lancer de poids",
          "image": "lancer_de_poids.jpg"
        },
        {
          "name": "Marche",
          "image": "marche.jpg"
        },
        {
          "name": "Moto (cross)",
          "image": "moto.jpg"
        },
        {
          "name": "Musculation",
          "image": "musculation.jpg"
        },
        {
          "name": "Marathon",
          "image": "marathon.jpg"
        },
        {
          "name": "Natation",
          "image": "natation.jpg"
        },
        {
          "name": "Paintball",
          "image": "paintball.jpg"
        },
        {
          "name": "Parkour",
          "image": "parkour.jpg"
        },
        {
          "name": "Pétanque",
          "image": "pétanque.jpg"
        },
        {
          "name": "Ping-Pong",
          "image": "ping_pong.jpg"
        },
        {
          "name": "Polo",
          "image": "polo.jpg"
        },
        {
          "name": "Rallye automobile",
          "image": "rallye_automobile.jpg"
        },
        {
          "name": "Rugby",
          "image": "rugby.jpg"
        },
        {
          "name": "Saut à la perche",
          "image": "saut_a_la_perche.jpg"
        },
        {
          "name": "Saut en hauteur",
          "image": "saut_en_hauteur.jpg"
        },
        {
          "name": "Saut en longueur",
          "image": "saut_en_longueur.jpg"
        },
        {
          "name": "Skateboard",
          "image": "skateboard.jpg"
        },
        {
          "name": "Spéléologie",
          "image": "spéléologie.jpg"
        },
        {
          "name": "Surf",
          "image": "surf.jpg"
        },
        {
          "name": "Tennis",
          "image": "tennis.jpg"
        },
        {
          "name": "Tir à l'arc",
          "image": "tir_a_l_arc.jpg"
        },
        {
          "name": "Vélocross (vélo cross-country, VTT)",
          "image": "velocross.jpg"
        },
        {
          "name": "Voile",
          "image": "voile.jpg"
        },
        {
          "name": "Volley-ball",
          "image": "volley_ball.jpg"
        },
        {
          "name": "Water-polo",
          "image": "water_polo.jpg"
        },
        {
          "name": "Yoga",
          "image": "yoga.jpg"
        },
        {
          "name": "Zumba",
          "image": "zumba.jpg"
        },
        {
          "name": "Equipe",
          "image": "equipe.jpg"
        },
        {
          "name": "Joueur",
          "image": "joueur.jpg"
        },
        {
          "name": "Agent",
          "image": "agent.jpg"
        },
        {
          "name": "Salle",
          "image": "salle.jpg"
        },
        {
          "name": "Préparateurs physique",
          "image": "preparateurs_physique.jpg"
        },
        {
          "name": "Educateur",
          "image": "educateur.jpg"
        },
        {
          "name": "Entraîneur",
          "image": "entraineur.jpg"
        },
        {
          "name": "Vendeur d'articles de sport",
          "image": "vendeur_articles_sport.jpg"
        },
        {
          "name": "Parie  bet",
          "image": "parie_bet.jpg"
        }
      ]
    },
    "11": {
      "category": "LOISIR",
      "image": "loisir.jpg",
      "subcategories": [
        {
          "name": "Cinéma",
          "image": "cinéma.jpg"
        },
        {
          "name": "Théâtre",
          "image": "théâtre.jpg"
        },
        {
          "name": "Festival",
          "image": "festival.jpg"
        },
        {
          "name": "Disco",
          "image": "disco.jpg"
        },
        {
          "name": "Rando et camping",
          "image": "rando_et_camping.jpg"
        },
        {
          "name": "Café",
          "image": "café.jpg"
        },
        {
          "name": "Salon de thé",
          "image": "salon_de_thé.jpg"
        },
        {
          "name": "Parc de loisirs",
          "image": "parc_de_loisirs.jpg"
        }
      ]
    },
    "12": {
      "category": "GASTRONOMIE",
      "image": "gastronomie.jpg",
      "subcategories": [
        {
          "name": "Restaurant à la carte",
          "image": "restaurant_a_la_carte.jpg"
        },
        {
          "name": "Fast food",
          "image": "fast_food.jpg"
        },
        {
          "name": "Restaurant lounge",
          "image": "restaurant_lounge.jpg"
        },
        {
          "name": "Spécialité locale",
          "image": "specialité_locale.jpg"
        },
        {
          "name": "Pâtisserie",
          "image": "pâtisserie.jpg"
        },
        {
          "name": "Food camion",
          "image": "food_camion.jpg"
        },
        {
          "name": "Traiteur",
          "image": "traiteur.jpg"
        },
        {
          "name": "Conserve alimentaire",
          "image": "conserve_alimentaire.jpg"
        }
      ]
    },
    "13": {
      "category": "SANTÉ",
      "image": "santé.jpg",
      "subcategories": [
        {
          "name": "Addictologue",
          "image": "addictologue.jpg"
        },
        {
          "name": "Allergologue",
          "image": "allergologue.jpg"
        },
        {
          "name": "Anatomo-cytopathologiste",
          "image": "anatomo_cytopathologiste.jpg"
        },
        {
          "name": "Anesthésiste-réanimateur",
          "image": "anesthésiste.jpg"
        },
        {
          "name": "Biologiste médicale",
          "image": "biologiste_médicale.jpg"
        },
        {
          "name": "Dermatologue",
          "image": "dermatologue.jpg"
        },
        {
          "name": "Endocrinologue-diabétologue-nutritionniste",
          "image": "endocrinologue.jpg"
        },
        {
          "name": "Généticien",
          "image": "geneticien.jpg"
        },
        {
          "name": "Gynécologue",
          "image": "gynécologue.jpg"
        },
        {
          "name": "Hématologue",
          "image": "hématologue.jpg"
        },
        {
          "name": "Hépato-gastro-entérologue",
          "image": "hepato_gastro_enterologue.jpg"
        },
        {
          "name": "Médecine cardiovasculaire",
          "image": "médecine_cardio.jpg"
        },
        {
          "name": "Médecine du sport",
          "image": "médecine_du_sport.jpg"
        },
        {
          "name": "Médecine du travail",
          "image": "médecine_du_travail.jpg"
        },
        {
          "name": "Médecine généraliste",
          "image": "médecine_généraliste.jpg"
        },
        {
          "name": "Maladies infectieuses et tropicales",
          "image": "maladies_infectieuses.jpg"
        },
        {
          "name": "Médecine intensive-réanimation",
          "image": "médecine_intensive.jpg"
        },
        {
          "name": "Médecine interne",
          "image": "médecine_interne.jpg"
        },
        {
          "name": "Médecine nucléaire",
          "image": "médecine_nucléaire.jpg"
        },
        {
          "name": "Médecine physique réadaptateur",
          "image": "médecine_physique.jpg"
        },
        {
          "name": "Médecine vasculaire",
          "image": "médecine_vasculaire.jpg"
        },
        {
          "name": "Néphrologue",
          "image": "nephrologue.jpg"
        },
        {
          "name": "Neurologue",
          "image": "neurologue.jpg"
        },
        {
          "name": "Oncologue",
          "image": "oncologue.jpg"
        },
        {
          "name": "Pédiatrie",
          "image": "pédiatrie.jpg"
        },
        {
          "name": "Pneumologue",
          "image": "pneumologue.jpg"
        },
        {
          "name": "Psychiatre",
          "image": "psychiatre.jpg"
        },
        {
          "name": "Radiologue et imagerie médicale",
          "image": "radiologue.jpg"
        },
        {
          "name": "Rhumatologue",
          "image": "rhumatologue.jpg"
        },
        {
          "name": "Santé publique",
          "image": "santé_publique.jpg"
        },
        {
          "name": "Chirurgien pédiatrique",
          "image": "chirurgien_pédiatrique.jpg"
        },
        {
          "name": "Chirurgien maxillo facial stomatologue",
          "image": "chirurgien_maxillo_facial.jpg"
        },
        {
          "name": "Chirurgien orale",
          "image": "chirurgien_orale.jpg"
        },
        {
          "name": "Chirurgien orthopédiste traumatologue",
          "image": "chirurgien_orthopédiste.jpg"
        },
        {
          "name": "Chirurgien thoracique et cardiovasculaire",
          "image": "chirurgien_thoracique.jpg"
        },
        {
          "name": "Chirurgien vasculaire",
          "image": "chirurgien_vasculaire.jpg"
        },
        {
          "name": "Chirurgien viscérale et digestive",
          "image": "chirurgien_viscérale.jpg"
        },
        {
          "name": "Gynécologue obstétricien",
          "image": "gynécologue_obstétricien.jpg"
        },
        {
          "name": "Neurochirurgien",
          "image": "neurochirurgien.jpg"
        },
        {
          "name": "Ophtalmologiste",
          "image": "ophtalmologiste.jpg"
        },
        {
          "name": "Oto-Rhino-Laryngologiste",
          "image": "oto_rhino_laryngologiste.jpg"
        },
        {
          "name": "Urologue",
          "image": "urologue.jpg"
        },
        {
          "name": "Agents infectieuses",
          "image": "agents_infectieuses.jpg"
        },
        {
          "name": "Biologiste générale",
          "image": "biologiste_générale.jpg"
        },
        {
          "name": "Biologie de la reproduction",
          "image": "biologie_de_la_reproduction.jpg"
        },
        {
          "name": "Hématologue et immunologiste",
          "image": "hématologue_et_immunologiste.jpg"
        },
        {
          "name": "Médecine moléculaire, génétique et pharmacologie",
          "image": "médecine_moléculaire.jpg"
        },
        {
          "name": "Kiné",
          "image": "kine.jpg"
        },
        {
          "name": "Infirmerie",
          "image": "infirmerie.jpg"
        },
        {
          "name": "SOS Infirmerie",
          "image": "sos_infirmerie.jpg"
        },
        {
          "name": "Pharmacie",
          "image": "pharmacie.jpg"
        },
        {
          "name": "Clinique",
          "image": "clinique.jpg"
        },
        {
          "name": "Hôpital",
          "image": "hôpital.jpg"
        },
        {
          "name": "Ambulance",
          "image": "ambulance.jpg"
        },
        {
          "name": "Laboratoire",
          "image": "laboratoire.jpg"
        },
        {
          "name": "Technicien de matériel",
          "image": "technicien_de_materiel.jpg"
        },
        {
          "name": "Centre médicale",
          "image": "centre_medicale.jpg"
        },
        {
          "name": "Vente de matérielle médicale",
          "image": "vente_materiel_medical.jpg"
        },
        {
          "name": "Vétérinaire",
          "image": "veterinaire.jpg"
        }
      ]
    },
      "14": {
        "category": "INFORMATIQUE",
        "image": "informatique.jpg",
        "subcategories": [
          {
            "name": "Publinet",
            "image": "publinet.jpg"
          },
          {
            "name": "Vente de matériel informatique",
            "image": "vente_materiel_informatique.jpg"
          },
          {
            "name": "Développeur",
            "image": "developpeur.jpg"
          },
          {
            "name": "Réparation portable",
            "image": "reparation_portable.jpg"
          },
          {
            "name": "Maintenance informatique",
            "image": "maintenance_informatique.jpg"
          },
          {
            "name": "Boite de développement",
            "image": "boit_de_developpement.jpg"
          },
          {
            "name": "Data analyste",
            "image": "data_analyste.jpg"
          },
          {
            "name": "Montage vidéo",
            "image": "montage_video.jpg"
          },
          {
            "name": "Designer",
            "image": "designer.jpg"
          },
          {
            "name": "Cybersécurité",
            "image": "cybersecurite.jpg"
          },
          {
            "name": "Infographiste",
            "image": "infographiste.jpg"
          },
          {
            "name": "Centre d'appel",
            "image": "centre_dappel.jpg"
          },
          {
            "name": "Freelance",
            "image": "freelance.jpg"
          }
        ]
      },
      "15": {
        "category": "TOURISME",
        "image": "tourisme.jpg",
        "subcategories": [
          {
            "name": "Hôtel de charme",
            "image": "hotel_de_charme.jpg"
          },
          {
            "name": "Hôtel",
            "image": "hotel.jpg"
          },
          {
            "name": "Agence de voyage",
            "image": "agence_de_voyage.jpg"
          },
          {
            "name": "Maisons d'hôtes",
            "image": "maisons_d_hotes.jpg"
          },
          {
            "name": "Base nautique",
            "image": "base_nautique.jpg"
          }
        ]
      },
      "16": {
        "category": "TRANSPORT",
        "image": "transport.jpg",
        "subcategories": [
          {
            "name": "Taxi",
            "image": "taxi.jpg"
          },
          {
            "name": "Location de voitures",
            "image": "location_de_voitures.jpg"
          },
          {
            "name": "Grand Taxis",
            "image": "grand_taxis.jpg"
          },
          {
            "name": "Livraison (auto, moto)",
            "image": "livraison.jpg"
          },
          {
            "name": "Taxi moto",
            "image": "taxi_moto.jpg"
          },
          {
            "name": "Louage",
            "image": "louage.jpg"
          },
          {
            "name": "Transport Maritime",
            "image": "transport_maritime.jpg"
          },
          {
            "name": "Location Transport (trottinette - calèche - vélo - train - Quad)",
            "image": "location_transport.jpg"
          }
        ]
      },
      "17": {
        "category": "CULTURE",
        "image": "culture.jpg",
        "subcategories": [
          {
            "name": "Artiste",
            "image": "artiste.jpg"
          },
          {
            "name": "Peintre",
            "image": "peintre.jpg"
          },
          {
            "name": "Écrivain",
            "image": "ecrivain.jpg"
          },
          {
            "name": "Poète",
            "image": "poete.jpg"
          },
          {
            "name": "Musicien",
            "image": "musicien.jpg"
          },
          {
            "name": "Musée",
            "image": "musee.jpg"
          },
          {
            "name": "Galerie",
            "image": "galerie.jpg"
          }
        ]
      },
      "18": {
        "category": "AUTO. MOTO",
        "image": "auto_moto.jpg",
        "subcategories": [
          {
            "name": "Avionbateauxvéhiculemotocyclevélo",
            "image": "avion_bateaux.jpg"
          },
          {
            "name": "Mécanicien",
            "image": "mecanicien.jpg"
          },
          {
            "name": "Vendeur (showroom)",
            "image": "vendeur_showroom.jpg"
          },
          {
            "name": "Pneumatique",
            "image": "pneumatique.jpg"
          },
          {
            "name": "Carrossier",
            "image": "carrossier.jpg"
          },
          {
            "name": "Vente pièces de rechange",
            "image": "vente_pieces_de_rechange.jpg"
          },
          {
            "name": "Ferrailleurs",
            "image": "ferrailleurs.jpg"
          },
          {
            "name": "Diagnostic",
            "image": "diagnostic.jpg"
          },
          {
            "name": "Modification",
            "image": "modification.jpg"
          },
          {
            "name": "Mécanique navale",
            "image": "mecanique_navale.jpg"
          },
          {
            "name": "Remorquage",
            "image": "remorquage.jpg"
          }
        ]
      },
      "19": {
        "category": "AGRICULTURE",
        "image": "agriculture.jpg",
        "subcategories": [
          {
            "name": "Sondage",
            "image": "sondage.jpg"
          },
          {
            "name": "Élevage (veaux - moutons - volailles et oiseaux - lapins - les chevaux - escargot - les abeilles - poisson)",
            "image": "elevage.jpg"
          },
          {
            "name": "Location matériel agricole",
            "image": "location_materiel_agricole.jpg"
          },
          {
            "name": "Regroupement laitière",
            "image": "regroupement_laitiere.jpg"
          },
          {
            "name": "Regroupements céréales",
            "image": "regroupement_cereales.jpg"
          },
          {
            "name": "Vente matériel agriculture",
            "image": "vente_materiel_agriculture.jpg"
          },
          {
            "name": "Pépinières des plantes",
            "image": "pepiniere_plantes.jpg"
          },
          {
            "name": "USINE (Fourrage, emballage de sardine et thon)",
            "image": "usine.jpg"
          },
          {
            "name": "Moulin à huile",
            "image": "moulin_a_huile.jpg"
          }
        ]
      },
      "20": {
        "category": "ÉLECTRONIQUE",
        "image": "electronique.jpg",
        "subcategories": [
          {
            "name": "Vente matériel électronique",
            "image": "vente_materiel_electronique.jpg"
          },
          {
            "name": "Matériel parabolique",
            "image": "materiel_parabolique.jpg"
          },
          {
            "name": "Matériels électroménager",
            "image": "materiels_electromenager.jpg"
          },
          {
            "name": "Vente des illustres",
            "image": "vente_des_illustres.jpg"
          },
          {
            "name": "Quincaillerie",
            "image": "quincaillerie.jpg"
          }
        ]
      },
      "21": {
        "category": "ESTHETIQUE",
        "image": "esthetique.jpg",
        "subcategories": [
          {
            "name": "Coiffeur (homme, femme)",
            "image": "coiffeur.jpg"
          },
          {
            "name": "Chirurgie esthétique",
            "image": "chirurgie_esthetique.jpg"
          },
          {
            "name": "Onglerie",
            "image": "onglerie.jpg"
          },
          {
            "name": "Piercing",
            "image": "piercing.jpg"
          },
          {
            "name": "Tatouage",
            "image": "tatouage.jpg"
          },
          {
            "name": "Lazer",
            "image": "lazer.jpg"
          },
          {
            "name": "Microblading",
            "image": "microblading.jpg"
          },
          {
            "name": "Radia facial",
            "image": "radia_facial.jpg"
          },
          {
            "name": "Nettoyage de peaux",
            "image": "nettoyage_de_peaux.jpg"
          },
          {
            "name": "Epilation",
            "image": "epilation.jpg"
          },
          {
            "name": "Microneedling",
            "image": "microneedling.jpg"
          }
        ]
      },
      "22": {
    "category": "FINANCE",
    "image": "finance.jpg",
    "subcategories": [
      {
        "name": "Comptable",
        "image": "comptable.jpg"
      },
      {
        "name": "Financier",
        "image": "financier.jpg"
      },
      {
        "name": "Banque",
        "image": "banque.jpg"
      },
      {
        "name": "Leasing",
        "image": "leasing.jpg"
      },
      {
        "name": "Recouvrement",
        "image": "recouvrement.jpg"
      },
      {
        "name": "Ste des cartes magnétiques",
        "image": "ste_cartes_magnetiques.jpg"
      },
      {
        "name": "Service cash",
        "image": "service_cash.jpg"
      },
      {
        "name": "Change devise",
        "image": "change_devise.jpg"
      }
    ]
  },
  "23": {
    "category": "USINE",
    "image": "usine.jpg",
    "subcategories": [
      {
        "name": "Agroalimentaire",
        "image": "agroalimentaire.jpg"
      },
      {
        "name": "Construction",
        "image": "construction.jpg"
      },
      {
        "name": "Vêtements",
        "image": "vetements.jpg"
      },
      {
        "name": "Maquillage",
        "image": "maquillage.jpg"
      },
      {
        "name": "Matériel médical",
        "image": "materiel_medical.jpg"
      },
      {
        "name": "Électroménager",
        "image": "electromenager.jpg"
      },
      {
        "name": "Plastique",
        "image": "plastique.jpg"
      },
      {
        "name": "Jouets",
        "image": "jouets.jpg"
      },
      {
        "name": "Informatique",
        "image": "informatique.jpg"
      },
      {
        "name": "Agricole",
        "image": "agricole.jpg"
      },
      {
        "name": "Meuble",
        "image": "meuble.jpg"
      },
      {
        "name": "Fourniture scolaire",
        "image": "fourniture_scolaire.jpg"
      },
      {
        "name": "Emballage",
        "image": "emballage.jpg"
      },
      {
        "name": "Fabrication De Boite Métallique",
        "image": "fabrication_boite_metallique.jpg"
      },
      {
        "name": "Recyclage (plastique, carton, fer)",
        "image": "recyclage.jpg"
      },
      {
        "name": "Société de recherche de pétrole",
        "image": "recherche_petrole.jpg"
      }
    ]
  },
  "24": {
    "category": "SERVICES",
    "image": "services.jpg",
    "subcategories": [
      {
        "name": "Lavage de voiture et vidange",
        "image": "lavage_voiture_vidange.jpg"
      },
      {
        "name": "Service d'hygiène",
        "image": "service_hygiene.jpg"
      },
      {
        "name": "Pressing",
        "image": "pressing.jpg"
      },
      {
        "name": "Entreprise de désinfection",
        "image": "entreprise_desinfection.jpg"
      },
      {
        "name": "Vente tenues de travail",
        "image": "vente_tenues_travail.jpg"
      },
      {
        "name": "Déménagement",
        "image": "deménagement.jpg"
      }
    ]
  },
  "25": {
    "category": "ÉVÉNEMENTIEL",
    "image": "evenementiel.jpg",
    "subcategories": [
      {
        "name": "Salle des fêtes",
        "image": "salle_des_fetes.jpg"
      },
      {
        "name": "Location de costumes et des robes des fêtes",
        "image": "location_costumes_robes.jpg"
      },
      {
        "name": "Location de matériel de fête",
        "image": "location_materiel_fete.jpg"
      },
      {
        "name": "Animateurs",
        "image": "animateurs.jpg"
      },
      {
        "name": "Foire",
        "image": "foire.jpg"
      },
      {
        "name": "Décoration des fêtes",
        "image": "decoration_fetes.jpg"
      },
      {
        "name": "Société événementielle",
        "image": "societe_evenementielle.jpg"
      },
      {
        "name": "Serveurs",
        "image": "serveurs.jpg"
      }
    ]
  }
  }


const sallesDeFetes = [
    {
      name: "User1",
      logo_url: "/logo11.png",
      images_url: [
        "/images/grand_palais_1.jpg",
        "/images/grand_palais_2.jpg",
        "/images/grand_palais_3.jpg"
      ],
      location: "Tunis",
      address: "123 Avenue de la République, Tunis, Tunisia",
      categories: ["Weddings", "Corporate Events", "Birthdays", "Conferences"],
      services: [
        {
          name: "Catering",
          description: "Customizable catering options to suit all types of events, from small gatherings to large banquets."
        },
        {
          name: "Decorations",
          description: "Elegant decoration packages to match the theme of your event, including floral arrangements, lighting, and more."
        },
        {
          name: "Sound & Lighting",
          description: "State-of-the-art sound and lighting systems to ensure your event is illuminated and has the best acoustics."
        },
        {
          name: "Event Planning",
          description: "Professional event planners who will help you organize every detail of your event, from start to finish."
        },
        {
          name: "DJ & Music",
          description: "Experienced DJs providing a wide range of music to keep your guests entertained throughout the event."
        },
        {
          name: "Security",
          description: "Professional security personnel to ensure the safety and smooth operation of your event."
        },
        {
          name: "Parking",
          description: "Ample parking space for guests, ensuring easy access to the venue."
        },
        {
          name: "Photographer",
          description: "Professional photographers to capture the best moments of your event."
        },
        {
          name: "Children's Entertainment",
          description: "Activities and entertainment designed for children, including games, clowns, and face painting."
        },
        {
          name: "Transportation",
          description: "Transportation services to and from the venue for your guests, including shuttle buses and private vehicles."
        }
      ]
    },
    {
      name: "User2",
      logo_url: "/logo12.png",
      images_url: [
        "/images/chateau_des_reves_1.jpg",
        "/images/chateau_des_reves_2.jpg",
        "/images/chateau_des_reves_3.jpg"
      ],
      location: "Sfax",
      address: "456 Boulevard des Rêves, Sfax, Tunisia",
      categories: ["Weddings", "Anniversaries", "Banquets", "Concerts"],
      services: [
        {
          name: "Catering",
          description: "Gourmet cuisine prepared by expert chefs, offering a variety of menus for all tastes and preferences."
        },
        {
          name: "Luxury Car Hire",
          description: "Elegant car rental services for transportation, including luxury cars and limousines."
        },
        {
          name: "Stage & Set Design",
          description: "Full stage and set design services for theatrical events, performances, and shows."
        },
        {
          name: "Private Rooms",
          description: "Private rooms for VIPs or smaller, more intimate gatherings."
        },
        {
          name: "Event Coordination",
          description: "Full event coordination services, ensuring your event goes off without a hitch."
        },
        {
          name: "Security",
          description: "Highly trained security teams to provide a safe environment for guests and performers."
        },
        {
          name: "Photo Booth",
          description: "Fun photo booths with props and instant prints for guests to enjoy."
        },
        {
          name: "Stage Lighting",
          description: "High-quality stage lighting setups for performances, parties, and special effects."
        },
        {
          name: "Valet Parking",
          description: "Valet parking service for guests to ensure a seamless experience upon arrival."
        },
        {
          name: "Sound System",
          description: "High-end sound system rental for speeches, music, and entertainment."
        }
      ]
    },
    {
      name: "User3",
      logo_url: "/logo13.png",
      images_url: [
        "/images/villa_etoilee_1.jpg",
        "/images/villa_etoilee_2.jpg",
        "/images/villa_etoilee_3.jpg"
      ],
      location: "Carthage",
      address: "789 Avenue des Etoiles, Carthage, Tunisia",
      categories: ["Weddings", "Gala Dinners", "Product Launches", "Corporate Seminars"],
      services: [
        {
          name: "Catering",
          description: "Exclusive catering services offering a variety of international cuisines and personalized menus."
        },
        {
          name: "Event Hosting",
          description: "Our expert hosts provide seamless event hosting services, from managing guests to coordinating the event."
        },
        {
          name: "Dance Floor",
          description: "A spacious dance floor for parties, weddings, and celebrations with the latest sound system."
        },
        {
          name: "Stage Production",
          description: "Full-scale stage production including equipment, lighting, and setup for concerts and shows."
        },
        {
          name: "Live Music",
          description: "Live bands and musicians for all types of events, including jazz, classical, and contemporary music."
        },
        {
          name: "Bridal Suite",
          description: "Private bridal suites for couples to relax and prepare for their special day."
        },
        {
          name: "24/7 Customer Support",
          description: "Our team provides 24/7 assistance for any questions or needs during the planning process."
        },
        {
          name: "Gift Bags",
          description: "Customizable gift bags for guests to take home as a memorable token of the event."
        },
        {
          name: "Smoking Area",
          description: "Designated smoking areas equipped with seating and comfort for smokers."
        },
        {
          name: "Event Setup & Breakdown",
          description: "Complete event setup and breakdown service to ensure everything runs smoothly from start to finish."
        }
      ]
    }
  ];
  
  const Users = () => {
    const location =useLocation()
    const [selectedDelegations, setSelectedDelegations] = useState([]);
    const navigate=useNavigate();
      const { data, gouvernoratData } = location.state || {};
      const delegations = gouvernoratData?.delegations || [];
    // Handle delegation selection
    const handleCheckboxChange = (delegation) => {
        setSelectedDelegations((prev) =>
            prev.includes(delegation)
                ? prev.filter((item) => item !== delegation)
                : [...prev, delegation]
        );
    };

    return (
        <div className="container-column">
        <div className="container-cat">
            {/* Left Section (Delegations List) */}
            <div className="left-section-cat">
            <div className="gouvernaurat-container-cat">
                    <h3 className="gouvernaurat-title-cat">{gouvernoratData.name}</h3>
                    <ul className="delegation-list-cat">
                        {delegations.map((delegation, index) => (
                            <li key={index} className="delegation-item-cat">
                                <label>
                                    <input
                                        type="checkbox"
                                        value={delegation}
                                        checked={selectedDelegations.includes(delegation)}
                                        onChange={() => handleCheckboxChange(delegation)}
                                    />
                                    {delegation}
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Middle Section (Background, Categories List) */}
            <div className="middle-section">
                {/* Background Image Section */}
                <div className="background-image-container">
                    <img
                        src={data.image} 
                        alt={data.name}
                        className="gouvernaurat-image"
                    />
                    <div className="image-overlay-text">
                        <p className="gouvernaurat-name">{data.name}</p>
                    </div>
                </div>

                {/* Categories List Section */}
                <div className="categories-list-container">
                    <div className="categories-grid">
                    {sallesDeFetes.map((salle, index) => (
  <div key={index} className="category-item-cat" onClick={() => {navigate('/OneUser');}} >
    <div className="image-container-cat">
      <img
        src={salle.logo_url} 
        alt={salle.name}            
        className="image-cat"
      />
      <div className="overlay-cat">
        <div className="overlay1-cat">
          <p className="category-name-cat">{salle.name}</p>  
        </div>
      </div>
    </div>
  </div>
))}
                    </div>
                </div>
            </div>

            {/* Right Section (Empty for Ads) */}
            <div className="right-section-cat">
                {/* Placeholder for right ad */}
            </div>
            
        </div><div>
            <Footer/></div>
        </div>
    );
};

export default Users;
