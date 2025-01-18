import React, { useState } from 'react';
import './gouvernorats.css'; // Add your custom styling for the search container
import Footer from '../Footer'; // If you have a footer component

function SearchContainer() {
  const [country, setCountry] = useState('');
  const [region, setRegion] = useState('');
  const [category, setCategory] = useState('');
  const [activity, setActivity] = useState('');
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

  const categories = [
    [
        {
            "name": "EVENEMENTIEL",
            "image_url": "/categories/EVENEMENTIEL.jpeg"
        },
        {
            "name": "Salle de fête",
            "image_url": "/categories/salle de fete.jpeg"
        },
        {
            "name": "Location de costumes et des robes de fête",
            "image_url": "/categories/Prêt à porter femme.jpeg"
        },
        {
            "name": "Location de matériel de fête",
            "image_url": "/categories/Location de matériel de fête.jpeg"
        },
        {
            "name": "Animateurs",
            "image_url": "/categories/Animateurs.jpeg"
        },
        {
            "name": "Foire",
            "image_url": "/categories/Foire.jpeg"
        },
        {
            "name": "Décoration des fêtes",
            "image_url": "/categories/Decoration des féte.jpeg"
        },
        {
            "name": "Société événementielle",
            "image_url": "/categories/Société événementielle.jpg"
        },
        {
            "name": "Serveur",
            "image_url": "/categories/Serveur.jpeg"
        }
    ],
    [
        {
            "name": "SHOPPING",
            "image_url": "/categories/SHOPPING.jpeg"
        },
        {
            "name": "Homme",
            "image_url": "/categories/Homme.jpeg",
            "under-category": [
                {
                    "name": "Prêt à porter",
                    "image_url": "/categories/Prêt à porter.jpeg"
                },
                {
                    "name": "Accessoires",
                    "image_url": "/categories/Accessoires.jpeg"
                },
                {
                    "name": "Chaussures",
                    "image_url": "/categories/Chaussures.jpeg"
                }
            ]
        },
        {
            "name": "Femme",
            "image_url": "/categories/Femme.jpeg",
            "under-category": [
                {
                    "name": "Prêt à porter",
                    "image_url": "/categories/Prêt à porter.jpeg"
                },
                {
                    "name": "Accessoires",
                    "image_url": "/categories/Accessoires.jpeg"
                },
                {
                    "name": "Chaussures",
                    "image_url": "/categories/Chaussures.jpeg"
                }
            ]
        },
        {
            "name": "Enfant",
            "image_url": "/categories/Enfant.jpeg",
            "under-category": [
                {
                    "name": "Prêt à porter",
                    "image_url": "/categories/Prêt à porter.jpeg"
                },
                {
                    "name": "Accessoires",
                    "image_url": "/categories/Accessoires.jpeg"
                },
                {
                    "name": "Chaussures",
                    "image_url": "/categories/Chaussures.jpeg"
                },
                {
                    "name": "Jouets",
                    "image_url": "/categories/Jouets.jpeg"
                }
            ]
        },
        {
            "name": "Maison",
            "image_url": "/categories/Maison.jpeg"
        },
        {
            "name": "Cuisine",
            "image_url": "/categories/Cuisine.jpeg"
        },
        {
            "name": "Tapis et rideaux",
            "image_url": "/categories/Tapis et rideaux.jpeg"
        },
        {
            "name": "Meuble",
            "image_url": "/categories/Meuble.jpeg"
        },
        {
            "name": "Centres commerciaux",
            "image_url": "/categories/Centres commerciaux.jpeg"
        },
        {
            "name": "Bijouterie",
            "image_url": "/categories/Bijouterie.jpeg"
        },
        {
            "name": "Boutique divers",
            "image_url": "/categories/Boutique divers.jpeg"
        },
        {
            "name": "Produits cosmétiques",
            "image_url": "/categories/Produits cosmétiques.jpeg"
        },
        {
            "name": "Parfumerie",
            "image_url": "/categories/Parfumerie.jpeg"
        },
        {
            "name": "Handmade",
            "image_url": "/categories/Handmade.jpeg"
        },
        {
            "name": "Importer",
            "image_url": "/categories/Importer.jpeg"
        },
        {
            "name": "Artisanat",
            "image_url": "/categories/Artisanat.jpeg"
        }
    ],
    [
        {
            "name": "GROSSISTE - DEPOT",
            "image_url": "/categories/GROSSISTE - DEPOT.jpeg"
        },
        {
            "name": "Agroalimentaire",
            "image_url": "/categories/Agroalimentaire.jpeg"
        },
        {
            "name": "Construction",
            "image_url": "/categories/Construction.jpeg"
        },
        {
            "name": "Vêtements",
            "image_url": "/categories/Vêtements.jpeg"
        },
        {
            "name": "Accessoires",
            "image_url": "/categories/Accessoires.jpeg"
        },
        {
            "name": "Décoration",
            "image_url": "/categories/Décoration.jpeg"
        },
        {
            "name": "Lumière et câble",
            "image_url": "/categories/Lumière et câble.jpeg"
        },
        {
            "name": "Maquillage",
            "image_url": "/categories/Maquillage.jpeg"
        },
        {
            "name": "Fournisseur médical",
            "image_url": "/categories/Fournisseur médical.jpeg"
        },
        {
            "name": "Électroménager",
            "image_url": "/categories/Électroménager.jpeg"
        },
        {
            "name": "Article Bébé et Maman",
            "image_url": "/categories/Article Bébé et Maman.jpeg"
        },
        {
            "name": "Plastique",
            "image_url": "/categories/Plastique.jpeg"
        },
        {
            "name": "Jouets",
            "image_url": "/categories/Jouets.jpeg"
        },
        {
            "name": "Informatique",
            "image_url": "/categories/Informatique.jpeg"
        },
        {
            "name": "Agricole",
            "image_url": "/categories/Agricole.jpeg"
        },
        {
            "name": "Meuble",
            "image_url": "/categories/Meuble.jpeg"
        },
        {
            "name": "Fourniture scolaire",
            "image_url": "/categories/Fourniture scolaire.jpeg"
        },
        {
            "name": "Eaux minérales et boissons gazeuses",
            "image_url": "/categories/Eaux minérales et boissons gazeuses.jpeg"
        }
    ],
    [
        {
            "name": "BÂTIMENT",
            "image_url": "/categories/BÂTIMENT.jpeg"
        },
        {
            "name": "Architecte",
            "image_url": "/categories/Architecte.jpeg"
        },
        {
            "name": "Ingénieur de béton",
            "image_url": "/categories/Ingénieur de béton.jpeg"
        },
        {
            "name": "Architecte de l'intérieur",
            "image_url": "/categories/Architecte de l'intérieur.jpeg"
        },
        {
            "name": "Génie civil",
            "image_url": "/categories/Génie civil.jpeg"
        },
        {
            "name": "Urbaniste",
            "image_url": "/categories/Urbaniste.jpeg"
        },
        {
            "name": "Paysagistes",
            "image_url": "/categories/Paysagistes.jpeg"
        },
        {
            "name": "Promotion immobilière",
            "image_url": "/categories/Promotion immobilière.jpeg"
        },
        {
            "name": "Topographe",
            "image_url": "/categories/Topographe.jpeg"
        },
        {
            "name": "Entrepreneur",
            "image_url": "/categories/Entrepreneur.jpeg"
        },
        {
            "name": "Location de matériel de construction",
            "image_url": "/categories/Location de matériel de construction.jpeg"
        },
        {
            "name": "Vente de matériel de construction",
            "image_url": "/categories/Vente de matériel de construction.jpeg"
        },
        {
            "name": "Cuisine sur mesure",
            "image_url": "/categories/Cuisine sur mesure.jpeg"
        }
    ],
    [
        {
            "name": "MÉTIER",
            "image_url": "/categories/MÉTIER.jpeg"
        },
        {
            "name": "Maçon",
            "image_url": "/categories/Maçon.jpeg"
        },
        {
            "name": "Électricien",
            "image_url": "/categories/Électricien.jpeg"
        },
        {
            "name": "Bricoleur",
            "image_url": "/categories/Bricoleur.jpeg"
        },
        {
            "name": "Plombier",
            "image_url": "/categories/Plombier.jpeg"
        },
        {
            "name": "Menuisier",
            "image_url": "/categories/Menuisier.jpeg"
        },
        {
            "name": "Étanchéité",
            "image_url": "/categories/Étanchéité.jpeg"
        },
        {
            "name": "Aluminium",
            "image_url": "/categories/Aluminium.jpeg"
        },
        {
            "name": "Artisan bijoutier",
            "image_url": "/categories/Artisan bijoutier.jpeg"
        },
        {
            "name": "Jardinier",
            "image_url": "/categories/Jardinier.jpeg"
        },
        {
            "name": "Baby-sitter",
            "image_url": "/categories/Baby-sitter.jpeg"
        },
        {
            "name": "Courtier",
            "image_url": "/categories/Courtier.jpeg"
        },
        {
            "name": "Faux plafond",
            "image_url": "/categories/Faux plafond.jpeg"
        },
        {
            "name": "Placo",
            "image_url": "/categories/Placo.jpeg"
        },
        {
            "name": "Parabole",
            "image_url": "/categories/Parabole.jpeg"
        },
        {
            "name": "Soudeur",
            "image_url": "/categories/Soudeur.jpeg"
        },
        {
            "name": "Étanchéité",
            "image_url": "/categories/Étanchéité.jpeg"
        },
        {
            "name": "Pâtissier",
            "image_url": "/categories/Pâtissier.jpeg"
        },
        {
            "name": "Tapissiers",
            "image_url": "/categories/Tapissiers.jpeg"
        },
        {
            "name": "Préparateurs radio et télévision",
            "image_url": "/categories/Préparateurs radio et télévision.jpeg"
        },
        {
            "name": "Charpentier métallique",
            "image_url": "/categories/Charpentier métallique.jpeg"
        },
        {
            "name": "Plongeur",
            "image_url": "/categories/Plongeur.jpeg"
        },
        {
            "name": "Pêche",
            "image_url": "/categories/Pêche.jpeg"
        },
        {
            "name": "Fleuriste",
            "image_url": "/categories/Fleuriste.jpeg"
        }
    ]
];

  const handleSearch = () => {
    console.log("Searching for:");
    console.log("Country:", country);
    console.log("Region:", region);
    console.log("Category:", category);
    console.log("Activity:", activity);
  };

  // Function to filter based on the search inputs
  const filteredGouvernorats = gouvernorats.filter((gouvernorat) => {
    const gouvernoratName = Object.keys(gouvernorat)[0];
    const gouvernoratData = gouvernorat[gouvernoratName];

    // Filter based on search criteria
    return (
      (country === '' || gouvernoratName.toLowerCase().includes(country.toLowerCase())) &&
      (region === '' || gouvernoratData.delegations.some(delegation => delegation.toLowerCase().includes(region.toLowerCase()))) &&
      (category === '' || gouvernoratData.image_url.toLowerCase().includes(category.toLowerCase())) &&
      (activity === '' || gouvernoratData.delegations.some(delegation => delegation.toLowerCase().includes(activity.toLowerCase())))
    );
  });

  return (
    <div className="gouvernorats-container">
      <div className="gov-title">Gouvernorats De La Tunisie</div>
      <hr />
      <div className="container-gouv">
        <div className="ad-container-left-gouv"></div>
        <div className="list-container-gouv">
          {filteredGouvernorats.length > 0 ? (
            filteredGouvernorats.map((gouvernorat, index) => {
              const gouvernoratName = Object.keys(gouvernorat)[0];
              const gouvernoratData = gouvernorat[gouvernoratName];
              const imageUrl = gouvernoratData.image_url;

              return (
                <div
                  key={index}
                  className="item-container-gouv"
                  // Add onClick handler if you need to do something when clicked
                >
                  <div className="image-container-gouv">
                    <img
                      src={imageUrl}
                      alt={gouvernoratName}
                      className="image-gouv"
                    />
                    <div className="overlay-gouv">
                      <div className="overlay1-gouv">
                        <span className="gouvernorat-name-gouv">{gouvernoratName}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div>No results found</div>
          )}
        </div>
        <div className="ad-container-right-gouv"></div>
      </div>
      <Footer />
    </div>
  );
}

export default SearchContainer;
