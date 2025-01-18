import React, { useState } from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
import './Categories.css';
import Footer from "../Footer";

const gouvernorats = [
    {
      "Ariana": {
        "image_url": "/gouvernorats/Ariena.jpg",
        "delegations": [
          "Ariana Ville", "La Soukra", "Ettadhamen", "Raoued", "Mnihla", 
          "Kalâat el-Andalous", "Sidi Thabet"
        ]
      }
    },
    {
      "Béja": {
        "image_url": "/gouvernorats/Béja.jpg",
        "delegations": [
          "Béja Nord", "Nefza", "Medjez el-Bab", "Béja Sud", "Testour", 
          "Téboursouk", "Amdoun", "Goubellat", "Thibar"
        ]
      }
    },
    {
      "Ben Arous": {
        "image_url": "/gouvernorats/ben_arous.jpg",
        "delegations": [
          "El Mourouj", "Fouchana", "Mornag", "Mohamedia", "Radès", 
          "Medina Jedida", "Hammam Lif", "Ben Arous", "Ezzahra", 
          "Bou Mhel el-Bassatine", "Hammam Chott", "Mégrine"
        ]
      }
    },
    {
      "Bizerte": {
        "image_url": "/gouvernorats/bizerte.jpg",
        "delegations": [
          "Bizerte Nord", "Menzel Bourguiba", "Ras Jebel", "Mateur", 
          "Bizerte Sud", "Sejnane", "Menzel Jemil", "Joumine", 
          "Ghezala", "El Alia", "Zarzouna", "Tinja", "Ghar El Melh", "Utique"
        ]
      }
    },
    {
      "Gabès": {
        "image_url": "/gouvernorats/gabes.jpg",
        "delegations": [
          "El Hamma", "Gabès Sud", "Mareth", "Gabès Médina", "Gabès Ouest", 
          "Métouia", "Ghannouch", "Nouvelle Matmata", "Menzel El Habib", "Matmata"
        ]
      }
    },
    {
      "Gafsa": {
        "image_url": "/gouvernorats/gafsa.jpg",
        "delegations": [
          "Gafsa Sud", "Métlaoui", "Sened", "El Ksar", "Moularès", "Redeyef", 
          "El Guettar", "Belkhir", "Mdhilla", "Gafsa Nord", "Sidi Aïch"
        ]
      }
    },
    {
      "Jendouba": {
        "image_url": "/gouvernorats/jendouba.jpg",
        "delegations": [
          "Jendouba Sud", "Ghardimaou", "Fernana", "Tabarka", "Jendouba Nord", 
          "Balta-Bou Aouane", "Aïn Draham", "Bou Salem", "Oued Meliz"
        ]
      }
    },
    {
      "Kairouan": {
        "image_url": "/gouvernorats/Kairouan.jpg",
        "delegations": [
          "Kairouan Nord", "Kairouan Sud", "Bou Hajla", "Sbikha", "Haffouz", 
          "Nasrallah", "Oueslatia", "Hajeb El Ayoun", "Chebika", "El Alâa", 
          "Echrarda"
        ]
      }
    },
    {
      "Kasserine": {
        "image_url": "/gouvernorats/kasserine.jpg",
        "delegations": [
          "Sbeïtla", "Kasserine Nord", "Fériana", "Sbiba", "Foussana", "Thala", 
          "Majel Bel Abbès", "Kasserine Sud", "Ezzouhour", "El Ayoun", 
          "Hassi El Ferid", "Jedelienne", "Haïdra"
        ]
      }
    },
    {
      "Kébili": {
        "image_url": "/gouvernorats/kebili.jpg",
        "delegations": [
          "Kébili Sud", "Kébili Nord", "Souk Lahad", "Douz Nord", "Douz Sud", 
          "Faouar"
        ]
      }
    },
    {
      "La Manouba": {
        "image_url": "/gouvernorats/Mannouba.jpg",
        "delegations": [
          "Douar Hicher", "Oued Ellil", "La Manouba", "Tebourba", "Djedeida", 
          "Mornaguia", "El Batan", "Borj El Amri"
        ]
      }
    },
    {
      "Mahdia": {
        "image_url": "/gouvernorats/mahdia.jpg",
        "delegations": [
          "Mahdia", "Ksour Essef", "Essouassi", "El Jem", "Sidi Alouane", 
          "Bou Merdes", "Chorbane", "Chebba", "Ouled Chamekh", "Melloulèche", 
          "Hebira"
        ]
      }
    },
    {
      "Médenine": {
        "image_url": "/gouvernorats/medenine.jpg",
        "delegations": [
          "Zarzis", "Ben Gardane", "Djerba - Houmt Souk", "Djerba - Midoun", 
          "Médenine Nord", "Médenine Sud", "Beni Khedache", "Djerba - Ajim", 
          "Sidi Makhlouf"
        ]
      }
    },
    {
      "Monastir": {
        "image_url": "/gouvernorats/monastir.jpg",
        "delegations": [
          "Monastir", "Moknine", "Jemmal", "Ksar Hellal", "Téboulba", 
          "Ksibet el-Médiouni", "Bembla", "Zéramdine", 
          "Sayada-Lamta-Bou Hajar", "Sahline", "Ouerdanine", "Bekalta", "Beni Hassen"
        ]
      }
    },
    {
      "Nabeul": {
        "image_url": "/gouvernorats/nabeul.jpg",
        "delegations": [
          "Hammamet", "Korba", "Nabeul", "Menzel Temime", "Grombalia", "Kélibia", 
          "Soliman", "Dar Chaâbane El Fehri", "El Haouaria", "Béni Khiar", 
          "Béni Khalled", "Menzel Bouzelfa", "Bou Argoub", "El Mida", "Takelsa", 
          "Hammam Ghezèze"
        ]
      }
    },
    {
      "Sfax": {
        "image_url": "/gouvernorats/sfax.jpg",
        "delegations": [
          "Sfax Ville", "Sfax Ouest", "Sfax Sud", "Sakiet Eddaïer", "Sakiet Ezzit", 
          "Bir Ali Ben Khalifa", "Thyna", "Jebiniana", "El Hencha", "Agareb", 
          "Menzel Chaker", "Mahrès", "Skhira", "El Amra", "Graïba", "Kerkennah"
        ]
      }
    },
    {
      "Sidi Bouzid": {
        "image_url": "/gouvernorats/Sidi Bouzid.jpg",
        "delegations": [
          "Sidi Bouzid Ouest", "Regueb", "Sidi Bouzid Est", "Jilma", "Bir El Hafey", 
          "Sidi Ali Ben Aoun", "Menzel Bouzaiane", "Mezzouna", "Meknassy", 
          "Ouled Haffouz", "Souk Jedid", "Cebbala Ouled Asker"
        ]
      }
    },
    {
      "Siliana": {
        "image_url": "/gouvernorats/siliana.jpg",
        "delegations": [
          "Makthar", "Rouhia", "Siliana Sud", "Siliana Nord", "El Krib", 
          "Bou Arada", "Gaâfour", "Kesra", "Sidi Bou Rouis", "Bargou", "El Aroussa"
        ]
      }
    },
    {
      "Sousse": {
        "image_url": "/gouvernorats/sousse.jpg",
        "delegations": [
          "M'saken", "Sousse Riadh", "Sousse Jawhara", "Kalâa Kebira", 
          "Sousse Sidi Abdelhamid", "Enfida", "Hammam Sousse", "Sousse Médina", 
          "Kalâa Seghira", "Akouda", "Bouficha", "Sidi Bou Ali", "Kondar", 
          "Sidi El Hani", "Hergla"
        ]
      }
    },
    {
      "Tataouine": {
        "image_url": "/gouvernorats/tataouine.jpg",
        "delegations": [
          "Tataouine Nord", "Tataouine Sud", "Ghomrassen", "Smâr", "Remada", 
          "Bir Lahmar", "Dehiba"
        ]
      }
    },
    {
      "Tozeur": {
        "image_url": "/gouvernorats/Touzeur.png",
        "delegations": [
          "Tozeur", "Degache", "Nefta", "Tameghza", "Hazoua"
        ]
      }
    },
    {
      "Tunis": {
        "image_url": "/gouvernorats/tunis.jpg",
        "delegations": [
          "Hraïria", "El Kabaria", "Sidi Hassine", "La Marsa", "Le Bardo", 
          "El Omrane supérieur", "Le Kram", "El Menzah", "El Omrane", "Ezzouhour", 
          "Bab El Bhar", "Cité El Khadra", "Séjoumi", "El Ouardia", "Bab Souika", 
          "Sidi El Béchir", "La Goulette", "Médina", "Djebel Jelloud", "Ettahrir", 
          "Carthage"
        ]
      }
    },
    {
      "Zaghouan": {
        "image_url": "/gouvernorats/Zaghouane.jpg",
        "delegations": [
          "El Fahs", "Zaghouan", "Nadhour", "Bir Mcherga", "Zriba", 
          "Saouaf"
        ]
      }
    },
    {
      "Kef": {
        "image_url": "/gouvernorats/kef.jpg",
        "delegations": [
          "Kef Est", "Dahmani", "Tajerouine", "Kef Ouest", "Nebeur", "Sers", 
          "Sakiet Sidi Youssef", "El Ksour", "Kalaat Senan", "Jérissa", 
          "Kalâat Khasba"
        ]
      }
    }
  ]

  const categories ={
    "1": {
      "category": "SANTÉ",
      "image": "SANTÉ.jpeg",
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
    "2": {
      "category": "DROIT",
      "image": "droit.jpg",
      "subcategories": [
        {
          "name": "Avocats",
          "image": "avocats.jpg",
          "subcategories":[{"name":"Avocat stagiaire","image": "avocats.jpg"}, {"name":"Avocat à la cour d'appel","image": "avocats.jpg"}, {"name":"Avocat à la cour de cassation","image": "avocats.jpg"}]
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
    "3": {
      "category": "BÂTIMENT",
      "image": "BÂTIMENT.jpeg",
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
    "4": {
      "category": "SHOPPING",
      "image": "SHOPPING.jpeg",
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
    "5": {
      "category": "MÉTIERS",
      "image": "MÉTIERS.jpeg",
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
      "category": "GASTRONOMIE",
      "image": "GASTRONOMIE.jpeg",
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
    "7": {
      "category": "LOISIR",
      "image": "LOISIR.png",
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
    "8": {
      "category": "GROSSISTE - DÉPOT",
      "image": "GROSSISTE - DEPOT.jpeg",
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
    "9": {
      "category": "MARCHÉ",
      "image": "MARCHÉ.jpeg",
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
    "10": {
      "category": "ÉDUCATION",
      "image": "EDUCATION.jpeg",
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
    "11": {
      "category": "ESTHETIQUE",
      "image": "ESTHETIQUE.jpg",
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
    "12": {
      "category": "ÉVÉNEMENTIEL",
      "image": "EVENEMENTIEL.jpeg",
      "subcategories": [
        {
          "name": "Salle des fête",
          "image": "salle_des_fête.jpeg"
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
    "13": {
      "category": "TRANSPORT",
      "image": "Transport.png",
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
    "14": {
      "category": "SÉCURITÉ",
      "image": "SÉCURITÉ.jpeg",
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

    "15": {
      "category": "SPORT",
      "image": "SPORT.jpeg",
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

      "16": {
        "category": "INFORMATIQUE",
        "image": "INFORMATIQUE.jpeg",
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
      "17": {
        "category": "TOURISME",
        "image": "TOURISME.jpeg",
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

      "18": {
        "category": "CULTURE",
        "image": "CULTURE.png",
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
      "19": {
        "category": "AUTO. MOTO",
        "image": "AUTO. MOTO.jpeg",
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
      "20": {
        "category": "AGRICULTURE",
        "image": "AGRICULTURE.jpeg",
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
      "21": {
        "category": "ÉLECTRONIQUE",
        "image": "ÉLECTRONIQUE.jpg",
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

      "22": {
    "category": "FINANCE",
    "image": "FINANCE.jpeg",
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
    "image": "USINE.jpeg",
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
    "image": "SERVICES.jpg",
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
  }
  }

  const Categories = () => { 
    const location = useLocation();
    const [selectedDelegations, setSelectedDelegations] = useState([]);
    const navigate = useNavigate();
    const { gouvernoratName, gouvernoratData } = location.state || {};
    const delegations = gouvernoratData?.delegations || [];
    const image_url = gouvernoratData?.image_url;
  
    const handleCheckboxChange = (delegation) => {
      setSelectedDelegations((prev) =>
        prev.includes(delegation)
          ? prev.filter((item) => item !== delegation)
          : [...prev, delegation]
      );
    };
  
    const handleCategoryClick = (data,gouvernoratData) => {
      navigate('/SousCategories', { state: { data , gouvernoratData} });
      console.log("data",data);
      
    };
    return (
      <div className="container-column">
        <div className="container-cat">
          {/* Left Section */}
          <div className="left-section-cat">
            <div className="gouvernaurat-container-cat">
              <h3 className="gouvernaurat-title-cat">{gouvernoratName}</h3>
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
          <div className="middle-section-cat">
            {/* Background Image Section */}
            <div className="background-image-container">
              <img
                src={image_url} 
                alt={gouvernoratName} 
                className="gouvernaurat-image"
              />
              <div className="image-overlay-text">
                <p className="gouvernaurat-name">{gouvernoratName}</p>
              </div>
            </div>
  
            {/* Categories List Section */}
            <div className="categories-list-container">
              <div className="categories-grid">
                {/* Replace categories with actual category data */}
{Object.values(categories).map((categoryGroup, index) => (
  <div
    key={index}
    className="category-item-cat"
    onClick={() => {
        handleCategoryClick(categoryGroup,gouvernoratData)
    }}
  >
    <div className="image-container-cat">
      <img
        src={`/${categoryGroup.image}`} 
        alt={categoryGroup.category}
        className="image-cat"
      />
      <div className="overlay-cat">
        <div className="overlay1-cat">
          <p className="category-name-cat">{categoryGroup.category}</p>
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
        </div>
        <Footer />
      </div>
    );
  };
  
  export default Categories;