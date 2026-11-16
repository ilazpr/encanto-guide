import type { Place } from './types'

// Replaceable collection. Replace/extend this file (or generate it from a CSV) to change the guide.
// Coordinates: OpenStreetMap/Nominatim lookup on 2026-11-15. Text: original editorial draft, pending Encanto review.
export const PLACES: Place[] = [
  {
    "id": "el-morro",
    "name": "Castillo San Felipe del Morro",
    "category": "culture",
    "region": "san-juan",
    "municipality": "San Juan",
    "lat": 18.47084,
    "lng": -66.12422,
    "summary": "Spanish fort on the western tip of Old San Juan, run by the National Park Service.",
    "body": "Begun in the 16th century, El Morro guards the entrance to San Juan Bay. It is part of San Juan National Historic Site, which is also a UNESCO World Heritage property. The grassy esplanade in front is open ground facing the sea.",
    "practical": [
      "Managed by the US National Park Service as part of San Juan National Historic Site.",
      "Confirm hours, fees and access with the official source before you go."
    ],
    "sources": [
      "OpenStreetMap / Nominatim (coordinates, ODbL)",
      "Editorial draft, pending Encanto review"
    ],
    "coordsVerified": "2026-11-15",
    "officialUrl": "https://www.nps.gov/saju/",
    "googlePlaceId": "ChIJuWLC2b1uA4wRI18mdUpCAGo",
    "photo": {
      "src": "photos/el-morro.jpg",
      "thumb": "photos/el-morro-thumb.jpg",
      "credit": "Jomar Malave / Discover Puerto Rico",
      "license": "Used with permission from Discover Puerto Rico (confirmed by Encanto, 2026-11-15). Takedown on request.",
      "sourceUrl": "https://discoverpuertorico.photoshelter.com/"
    }
  },
  {
    "id": "san-cristobal",
    "name": "Castillo San Cristóbal",
    "category": "culture",
    "region": "san-juan",
    "municipality": "San Juan",
    "lat": 18.46737,
    "lng": -66.11069,
    "summary": "The large land-side fortress that protected Old San Juan, also part of the National Historic Site.",
    "body": "San Cristóbal was built to defend the city from attacks by land. Its tunnels, batteries and outworks cover a large hillside on the eastern edge of the old city.",
    "practical": [
      "Part of San Juan National Historic Site (US National Park Service).",
      "Confirm hours, fees and access with the official source before you go."
    ],
    "sources": [
      "OpenStreetMap / Nominatim (coordinates, ODbL)",
      "Editorial draft, pending Encanto review"
    ],
    "coordsVerified": "2026-11-15",
    "officialUrl": "https://www.nps.gov/saju/",
    "googlePlaceId": "ChIJDblZxcNuA4wRbSV3VbkJ5dM"
  },
  {
    "id": "paseo-princesa",
    "name": "Paseo de la Princesa",
    "category": "culture",
    "region": "san-juan",
    "municipality": "San Juan",
    "lat": 18.46419,
    "lng": -66.11964,
    "summary": "Tree-lined promenade that follows the old city wall above San Juan Bay.",
    "body": "A flat, pedestrian-friendly path along the bay edge of Old San Juan. It links the port area with the wall near the fortress, with sea views the whole way.",
    "practical": [
      "Open public promenade; confirm any event closures locally."
    ],
    "sources": [
      "OpenStreetMap / Nominatim (coordinates, ODbL)",
      "Editorial draft, pending Encanto review"
    ],
    "coordsVerified": "2026-11-15",
    "kidsBasis": "Flat, car-free promenade.",
    "also": [
      "kids"
    ],
    "googlePlaceId": "ChIJs9vyO8tvA4wRMEGD123Fq8A"
  },
  {
    "id": "cementerio-pazzis",
    "name": "Cementerio Santa María Magdalena de Pazzis",
    "category": "culture",
    "region": "san-juan",
    "municipality": "San Juan",
    "lat": 18.46983,
    "lng": -66.11964,
    "summary": "A 19th-century cemetery on a headland over the Atlantic, just outside the walls.",
    "body": "The cemetery sits on a slope facing the ocean between El Morro and the La Perla neighborhood. Visitors come for the setting and the monuments.",
    "practical": [
      "A working cemetery: dress and behave respectfully.",
      "Confirm hours, fees and access with the official source before you go."
    ],
    "sources": [
      "OpenStreetMap / Nominatim (coordinates, ODbL)",
      "Editorial draft, pending Encanto review"
    ],
    "coordsVerified": "2026-11-15",
    "googlePlaceId": "ChIJNQHkq79uA4wR9MMNmmlPxLY"
  },
  {
    "id": "casa-del-libro",
    "name": "La Casa del Libro",
    "category": "culture",
    "region": "san-juan",
    "municipality": "San Juan",
    "lat": 18.46414,
    "lng": -66.11768,
    "summary": "Small museum on Calle del Cristo devoted to books, printing and bookmaking.",
    "body": "A compact stop in Old San Juan for anyone interested in rare books and the history of printing.",
    "practical": [
      "Confirm hours, fees and access with the official source before you go."
    ],
    "sources": [
      "OpenStreetMap / Nominatim (coordinates, ODbL)",
      "Editorial draft, pending Encanto review"
    ],
    "coordsVerified": "2026-11-15",
    "googlePlaceId": "ChIJV5dhfcduA4wRJp8jFL_2VAw"
  },
  {
    "id": "mapr",
    "name": "Museo de Arte de Puerto Rico",
    "category": "culture",
    "region": "san-juan",
    "municipality": "San Juan",
    "lat": 18.44843,
    "lng": -66.06617,
    "summary": "Main art museum in Santurce, covering Puerto Rican art from the colonial period on.",
    "body": "Located on Avenida José de Diego in Santurce, the museum is a good indoor option and a natural pairing with other Santurce stops.",
    "practical": [
      "Confirm hours, fees and access with the official source before you go."
    ],
    "sources": [
      "OpenStreetMap / Nominatim (coordinates, ODbL)",
      "Editorial draft, pending Encanto review"
    ],
    "coordsVerified": "2026-11-15",
    "officialUrl": "https://www.mapr.org/",
    "googlePlaceId": "ChIJGYZKTeNoA4wR6HGDU33r-LU"
  },
  {
    "id": "mapo",
    "name": "Museo de Arte de Ponce",
    "category": "culture",
    "region": "south",
    "municipality": "Ponce",
    "lat": 18.00399,
    "lng": -66.61695,
    "summary": "Art museum founded by Luis A. Ferré, in a modernist building designed by Edward Durell Stone.",
    "body": "One of the island's major art collections, a short drive from Ponce's historic center.",
    "practical": [
      "Confirm hours, fees and access with the official source before you go."
    ],
    "sources": [
      "OpenStreetMap / Nominatim (coordinates, ODbL)",
      "Editorial draft, pending Encanto review"
    ],
    "coordsVerified": "2026-11-15",
    "officialUrl": "https://museoarteponce.org/",
    "googlePlaceId": "ChIJA34xsIrVHIwRSQTMsl6Bixk"
  },
  {
    "id": "parque-de-bombas",
    "name": "Parque de Bombas",
    "category": "culture",
    "region": "south",
    "municipality": "Ponce",
    "lat": 18.0119,
    "lng": -66.61374,
    "summary": "The red-and-black firehouse on Ponce's main plaza, built in 1882.",
    "body": "Ponce's best-known landmark building stands beside Plaza Las Delicias in the historic center. It is now a museum.",
    "practical": [
      "Confirm hours, fees and access with the official source before you go."
    ],
    "sources": [
      "OpenStreetMap / Nominatim (coordinates, ODbL)",
      "Editorial draft, pending Encanto review"
    ],
    "coordsVerified": "2026-11-15",
    "googlePlaceId": "ChIJVVVV_IjVHIwRem_IdVgt1_M"
  },
  {
    "id": "tibes",
    "name": "Centro Ceremonial Indígena de Tibes",
    "category": "culture",
    "region": "south",
    "municipality": "Ponce",
    "lat": 18.04344,
    "lng": -66.62158,
    "summary": "Pre-Columbian ceremonial site with ball courts and plazas in the hills above Ponce.",
    "body": "Tibes preserves the layout of a pre-Columbian Indigenous community, including bateyes (ball courts) and ceremonial plazas.",
    "practical": [
      "Confirm hours, fees and access with the official source before you go."
    ],
    "sources": [
      "OpenStreetMap / Nominatim (coordinates, ODbL)",
      "Editorial draft, pending Encanto review"
    ],
    "coordsVerified": "2026-11-15",
    "googlePlaceId": "ChIJJdeaBInVHIwRV-WGQwa-SZE"
  },
  {
    "id": "buena-vista",
    "name": "Hacienda Buena Vista",
    "category": "culture",
    "region": "south",
    "municipality": "Ponce",
    "lat": 18.08436,
    "lng": -66.65601,
    "summary": "Restored 19th-century coffee plantation north of Ponce.",
    "body": "Hacienda Buena Vista is a preserved coffee and corn estate in the mountains behind Ponce, operated as a heritage site.",
    "practical": [
      "Visits have historically been by guided tour or reservation. Check before you go."
    ],
    "sources": [
      "OpenStreetMap / Nominatim (coordinates, ODbL)",
      "Editorial draft, pending Encanto review"
    ],
    "coordsVerified": "2026-11-15",
    "googlePlaceId": "ChIJI9BIxi_VAowR1hTSe5CfPzY"
  },
  {
    "id": "la-guancha",
    "name": "Paseo Tablado La Guancha",
    "category": "food",
    "region": "south",
    "municipality": "Ponce",
    "lat": 17.96544,
    "lng": -66.61493,
    "summary": "Waterfront boardwalk in Ponce with food kiosks and sea views.",
    "body": "A bayside boardwalk on the Caribbean coast with food and drink stands, popular for evening walks.",
    "practical": [
      "Individual kiosks open and close independently. Check which are open."
    ],
    "sources": [
      "OpenStreetMap / Nominatim (coordinates, ODbL)",
      "Editorial draft, pending Encanto review"
    ],
    "coordsVerified": "2026-11-15",
    "kidsBasis": "Open boardwalk on the waterfront.",
    "also": [
      "kids"
    ],
    "googlePlaceId": "ChIJsYxVtR3WHIwRJSHnUVTklT4"
  },
  {
    "id": "barrachina",
    "name": "Barrachina",
    "category": "food",
    "region": "san-juan",
    "municipality": "San Juan",
    "lat": 18.46455,
    "lng": -66.11724,
    "summary": "Old San Juan restaurant on Calle Fortaleza that says it is where the piña colada began.",
    "body": "Barrachina is an Old San Juan institution with a courtyard. It claims to be the birthplace of the piña colada (1963); the claim is disputed by other venues.",
    "practical": [
      "Business status and hours not yet verified against Google Places."
    ],
    "sources": [
      "OpenStreetMap / Nominatim (coordinates, ODbL)",
      "Editorial draft, pending Encanto review"
    ],
    "coordsVerified": "2026-11-15",
    "googlePlaceId": "ChIJt2zuY8duA4wR56__Tgqqm0M"
  },
  {
    "id": "mercado-santurce",
    "name": "Plaza del Mercado de Santurce",
    "category": "food",
    "region": "san-juan",
    "municipality": "San Juan",
    "lat": 18.45049,
    "lng": -66.07045,
    "summary": "The public market of Santurce, with produce stalls and food counters around the plaza.",
    "body": "The market anchors a neighborhood known for food and nightlife. Stall hours vary.",
    "practical": [
      "Stall and restaurant hours vary. Check before you go."
    ],
    "sources": [
      "OpenStreetMap / Nominatim (coordinates, ODbL)",
      "Editorial draft, pending Encanto review"
    ],
    "coordsVerified": "2026-11-15",
    "googlePlaceId": "ChIJbQsnHzZvA4wRGK6HrswJSk8"
  },
  {
    "id": "kioskos-luquillo",
    "name": "Kioskos de Luquillo",
    "category": "food",
    "region": "east",
    "municipality": "Luquillo",
    "lat": 18.38061,
    "lng": -65.73614,
    "summary": "A long row of open-air food kiosks along the road near Luquillo beach.",
    "body": "The kiosks serve fritters, seafood and drinks and sit a few minutes from the public beach.",
    "practical": [
      "Each kiosk sets its own hours and menu."
    ],
    "sources": [
      "OpenStreetMap / Nominatim (coordinates, ODbL)",
      "Editorial draft, pending Encanto review"
    ],
    "coordsVerified": "2026-11-15",
    "kidsBasis": "Casual open-air counters beside the beach.",
    "also": [
      "kids"
    ]
  },
  {
    "id": "tercer-milenio",
    "name": "Parque del Tercer Milenio",
    "category": "kids",
    "region": "san-juan",
    "municipality": "San Juan",
    "lat": 18.46598,
    "lng": -66.08987,
    "summary": "Waterfront park beside the Condado Lagoon channel, near Escambrón.",
    "body": "An open public park on San Juan Bay, next to Balneario El Escambrón.",
    "practical": [],
    "sources": [
      "OpenStreetMap / Nominatim (coordinates, ODbL)",
      "Editorial draft, pending Encanto review"
    ],
    "coordsVerified": "2026-11-15",
    "kidsBasis": "Open waterfront public park.",
    "googlePlaceId": "ChIJb5IkJd9uA4wRpqkxUcqqMCI"
  },
  {
    "id": "museo-nino",
    "name": "Museo del Niño de Carolina",
    "category": "kids",
    "region": "san-juan",
    "municipality": "Carolina",
    "lat": 18.41915,
    "lng": -65.96823,
    "summary": "Children's museum in Carolina, near the Isla Verde and airport area.",
    "body": "A museum designed for children, in the metro area east of San Juan.",
    "practical": [
      "Hours, ages and ticket prices are not verified here. Check the museum."
    ],
    "sources": [
      "OpenStreetMap / Nominatim (coordinates, ODbL)",
      "Editorial draft, pending Encanto review"
    ],
    "coordsVerified": "2026-11-15",
    "kidsBasis": "A children's museum by name and purpose.",
    "googlePlaceId": "ChIJbThYTLtmA4wRnInX9IiSAlY"
  },
  {
    "id": "zoo-mayaguez",
    "name": "Zoológico de Puerto Rico Dr. Juan A. Rivero",
    "category": "kids",
    "region": "west",
    "municipality": "Mayagüez",
    "lat": 18.21604,
    "lng": -67.1338,
    "summary": "The island's zoo, in Mayagüez on the west coast.",
    "body": "A destination for families visiting the west coast.",
    "practical": [
      "Check current opening days and animal exhibits before traveling."
    ],
    "sources": [
      "OpenStreetMap / Nominatim (coordinates, ODbL)",
      "Editorial draft, pending Encanto review"
    ],
    "coordsVerified": "2026-11-15",
    "kidsBasis": "A zoo with animal exhibits."
  },
  {
    "id": "escambron",
    "name": "Balneario El Escambrón",
    "category": "beach",
    "region": "san-juan",
    "municipality": "San Juan",
    "lat": 18.46704,
    "lng": -66.08995,
    "summary": "Public beach on the edge of Old San Juan, with views of Fort San Jerónimo.",
    "body": "A government-run public beach (balneario) within a few minutes of Old San Juan.",
    "practical": [
      "Balnearios typically have lifeguards and restrooms, but confirm on site and check sea conditions."
    ],
    "sources": [
      "OpenStreetMap / Nominatim (coordinates, ODbL)",
      "Editorial draft, pending Encanto review"
    ],
    "coordsVerified": "2026-11-15",
    "kidsBasis": "Government-run public beach with facilities.",
    "also": [
      "kids"
    ],
    "googlePlaceId": "ChIJpw1uJiJvA4wRR8msA7TzA7o"
  },
  {
    "id": "luquillo-monserrate",
    "name": "Balneario La Monserrate",
    "category": "beach",
    "region": "east",
    "municipality": "Luquillo",
    "lat": 18.38532,
    "lng": -65.72954,
    "summary": "Public beach at Luquillo, close to the Kioskos.",
    "body": "Palm-lined public beach on the northeast coast, about halfway between San Juan and Fajardo.",
    "practical": [
      "Check conditions and facilities on site."
    ],
    "sources": [
      "OpenStreetMap / Nominatim (coordinates, ODbL)",
      "Editorial draft, pending Encanto review"
    ],
    "coordsVerified": "2026-11-15",
    "kidsBasis": "Government-run public beach with facilities.",
    "also": [
      "kids"
    ],
    "googlePlaceId": "ChIJx3yUIQuZBIwRCBfZHAO83bg"
  },
  {
    "id": "seven-seas",
    "name": "Balneario Seven Seas",
    "category": "beach",
    "region": "east",
    "municipality": "Fajardo",
    "lat": 18.36954,
    "lng": -65.6348,
    "summary": "Public beach in Fajardo, near Las Croabas and Laguna Grande.",
    "body": "A balneario on the east coast, near the base for many Fajardo day trips.",
    "practical": [
      "Check conditions and facilities on site."
    ],
    "sources": [
      "OpenStreetMap / Nominatim (coordinates, ODbL)",
      "Editorial draft, pending Encanto review"
    ],
    "coordsVerified": "2026-11-15",
    "kidsBasis": "Government-run public beach with facilities.",
    "also": [
      "kids"
    ],
    "googlePlaceId": "ChIJnSPsZw-XBIwRPeixb874VFA"
  },
  {
    "id": "flamenco",
    "name": "Playa Flamenco",
    "category": "beach",
    "region": "east",
    "municipality": "Culebra",
    "lat": 18.33167,
    "lng": -65.32138,
    "summary": "Crescent beach on Culebra, one of the best-known beaches in the Caribbean.",
    "body": "Reached by ferry or air from the main island, Flamenco is the main beach on Culebra.",
    "practical": [
      "Culebra requires a ferry or flight. Confirm schedules well ahead."
    ],
    "sources": [
      "OpenStreetMap / Nominatim (coordinates, ODbL)",
      "Editorial draft, pending Encanto review"
    ],
    "coordsVerified": "2026-11-15",
    "googlePlaceId": "ChIJKRcnrcXoBIwRFLJNVzuOzkA"
  },
  {
    "id": "sun-bay",
    "name": "Sun Bay",
    "category": "beach",
    "region": "east",
    "municipality": "Vieques",
    "lat": 18.09598,
    "lng": -65.45686,
    "summary": "Long public beach on Vieques, near Esperanza.",
    "body": "A broad public beach on the island's south coast.",
    "practical": [
      "Vieques requires a ferry or flight. Confirm schedules ahead."
    ],
    "sources": [
      "OpenStreetMap / Nominatim (coordinates, ODbL)",
      "Editorial draft, pending Encanto review"
    ],
    "coordsVerified": "2026-11-15",
    "googlePlaceId": "ChIJhVSdhwrIBIwRtJh3qZC66Q4",
    "photo": {
      "src": "photos/sun-bay.jpg",
      "thumb": "photos/sun-bay-thumb.jpg",
      "credit": "Jomar Malave / Discover Puerto Rico",
      "license": "Used with permission from Discover Puerto Rico (confirmed by Encanto, 2026-11-15). Takedown on request.",
      "sourceUrl": "https://discoverpuertorico.photoshelter.com/"
    }
  },
  {
    "id": "crash-boat",
    "name": "Playa Crash Boat",
    "category": "beach",
    "region": "west",
    "municipality": "Aguadilla",
    "lat": 18.45776,
    "lng": -67.16356,
    "summary": "Aguadilla beach with an old pier used for jumping and snorkeling.",
    "body": "The beach takes its name from the rescue boats once based at the pier. It is popular for swimming and snorkeling.",
    "practical": [
      "Conditions can change quickly. Check sea state before entering."
    ],
    "sources": [
      "OpenStreetMap / Nominatim (coordinates, ODbL)",
      "Editorial draft, pending Encanto review"
    ],
    "coordsVerified": "2026-11-15",
    "googlePlaceId": "ChIJBa_pxxi9AowR7rJ9I-N9kr0"
  },
  {
    "id": "buye",
    "name": "Playa Buyé",
    "category": "beach",
    "region": "west",
    "municipality": "Cabo Rojo",
    "lat": 18.05009,
    "lng": -67.19876,
    "summary": "Beach in Cabo Rojo on the southwest coast.",
    "body": "A beach popular with locals and visitors in the Cabo Rojo area.",
    "practical": [
      "Check conditions on site."
    ],
    "sources": [
      "OpenStreetMap / Nominatim (coordinates, ODbL)",
      "Editorial draft, pending Encanto review"
    ],
    "coordsVerified": "2026-11-15",
    "googlePlaceId": "ChIJg44Jk-5RHYwRSIX13_QfNAQ"
  },
  {
    "id": "boqueron",
    "name": "Balneario de Boquerón",
    "category": "beach",
    "region": "west",
    "municipality": "Cabo Rojo",
    "lat": 18.01682,
    "lng": -67.17238,
    "summary": "Public beach in the Boquerón village area of Cabo Rojo.",
    "body": "A public balneario near the village of Boquerón.",
    "practical": [
      "Check conditions and facilities on site."
    ],
    "sources": [
      "OpenStreetMap / Nominatim (coordinates, ODbL)",
      "Editorial draft, pending Encanto review"
    ],
    "coordsVerified": "2026-11-15",
    "kidsBasis": "Government-run public beach with facilities.",
    "also": [
      "kids"
    ],
    "googlePlaceId": "ChIJCeSSNTFOHYwRnNHIsaLci6Y"
  },
  {
    "id": "el-yunque",
    "name": "El Yunque National Forest",
    "category": "outdoor",
    "region": "east",
    "municipality": "Río Grande",
    "lat": 18.29552,
    "lng": -65.7837,
    "summary": "The only tropical rainforest in the US National Forest System, in the Luquillo Mountains.",
    "body": "El Yunque is the island's best-known rainforest, with trails, waterfalls and lookouts. Access and reservations are managed by the US Forest Service.",
    "practical": [
      "Reservations and parking rules have changed in recent years. Check the Forest Service site.",
      "Confirm hours, fees and access with the official source before you go."
    ],
    "sources": [
      "OpenStreetMap / Nominatim (coordinates, ODbL)",
      "Editorial draft, pending Encanto review"
    ],
    "coordsVerified": "2026-11-15",
    "officialUrl": "https://www.fs.usda.gov/elyunque",
    "googlePlaceId": "ChIJydD9LrOhBIwR0SSym7z2QoM"
  },
  {
    "id": "laguna-grande",
    "name": "Laguna Grande",
    "category": "outdoor",
    "region": "east",
    "municipality": "Fajardo",
    "lat": 18.37667,
    "lng": -65.62372,
    "summary": "One of Puerto Rico's bioluminescent bays, in the Las Croabas nature reserve.",
    "body": "Laguna Grande glows at night because of microscopic organisms in the water. Visits are normally by guided kayak or boat tour.",
    "practical": [
      "Swimming is not permitted in the bio bays.",
      "Best seen on dark, moonless nights."
    ],
    "sources": [
      "OpenStreetMap / Nominatim (coordinates, ODbL)",
      "Editorial draft, pending Encanto review"
    ],
    "coordsVerified": "2026-11-15",
    "googlePlaceId": "ChIJR0OLKCmXBIwRLB4qNMh-FEo"
  },
  {
    "id": "cabezas",
    "name": "Faro de Las Cabezas de San Juan",
    "category": "outdoor",
    "region": "east",
    "municipality": "Fajardo",
    "lat": 18.38154,
    "lng": -65.61811,
    "summary": "Spanish lighthouse inside a nature reserve on the northeast tip of the island.",
    "body": "The restored lighthouse sits within the Las Cabezas de San Juan nature reserve, with trails and lagoon access.",
    "practical": [
      "Reserve visits have normally required a reservation. Check before you go."
    ],
    "sources": [
      "OpenStreetMap / Nominatim (coordinates, ODbL)",
      "Editorial draft, pending Encanto review"
    ],
    "coordsVerified": "2026-11-15",
    "googlePlaceId": "ChIJLXRpXtWWBIwRJ8dx02IU13M"
  },
  {
    "id": "cueva-ventana",
    "name": "Cueva Ventana",
    "category": "outdoor",
    "region": "north",
    "municipality": "Arecibo",
    "lat": 18.37121,
    "lng": -66.69155,
    "summary": "A limestone cave above the Río Grande de Arecibo valley, with a window-like opening.",
    "body": "The cave opening frames views over the valley. Access is through guided tours.",
    "practical": [
      "Visits are normally guided. Check access rules.",
      "Uneven rocky ground."
    ],
    "sources": [
      "OpenStreetMap / Nominatim (coordinates, ODbL)",
      "Editorial draft, pending Encanto review"
    ],
    "coordsVerified": "2026-11-15",
    "googlePlaceId": "ChIJu5bvA5XeAowR3z1SOSI8W00"
  },
  {
    "id": "cueva-indio",
    "name": "Cueva del Indio",
    "category": "outdoor",
    "region": "north",
    "municipality": "Arecibo",
    "lat": 18.49193,
    "lng": -66.6386,
    "summary": "Coastal cave and cliff area near Arecibo with Indigenous petroglyphs.",
    "body": "Rocky sea cliffs and small caves on the north coast.",
    "practical": [
      "Rocky, uneven terrain near the sea. Check access and fees locally."
    ],
    "sources": [
      "OpenStreetMap / Nominatim (coordinates, ODbL)",
      "Editorial draft, pending Encanto review"
    ],
    "coordsVerified": "2026-11-15",
    "googlePlaceId": "ChIJrydpZL_hAowR0VWDYbcE9L0"
  },
  {
    "id": "charco-azul",
    "name": "Charco Azul",
    "category": "outdoor",
    "region": "south",
    "municipality": "Patillas",
    "lat": 18.09299,
    "lng": -66.03087,
    "summary": "Natural swimming hole near Patillas.",
    "body": "A river pool in southeastern Puerto Rico. Access and water levels vary.",
    "practical": [
      "Check access and water conditions locally before you travel."
    ],
    "sources": [
      "OpenStreetMap / Nominatim (coordinates, ODbL)",
      "Editorial draft, pending Encanto review"
    ],
    "coordsVerified": "2026-11-15",
    "googlePlaceId": "ChIJYzIRi_BRA4wRInnlrIUSgEk"
  },
  {
    "id": "guanica",
    "name": "Bosque Estatal de Guánica",
    "category": "outdoor",
    "region": "south",
    "municipality": "Guánica",
    "lat": 17.97352,
    "lng": -66.86039,
    "summary": "Dry forest reserve on the southwest coast, a UNESCO Biosphere Reserve.",
    "body": "A dry forest with hiking trails, very different from the rainforest in the northeast.",
    "practical": [
      "Trails can be hot and exposed. Bring water and check conditions."
    ],
    "sources": [
      "OpenStreetMap / Nominatim (coordinates, ODbL)",
      "Editorial draft, pending Encanto review"
    ],
    "coordsVerified": "2026-11-15",
    "googlePlaceId": "ChIJR1VaWFguHYwRTjIaIxfSQdI"
  },
  {
    "id": "los-morrillos",
    "name": "Faro Los Morrillos (Cabo Rojo)",
    "category": "outdoor",
    "region": "west",
    "municipality": "Cabo Rojo",
    "lat": 17.93365,
    "lng": -67.19218,
    "summary": "Lighthouse at the southwest corner of Puerto Rico, near limestone cliffs.",
    "body": "A walkable site with sea views at the southwestern tip of the island.",
    "practical": [
      "Exposed terrain. Bring sun protection and check conditions."
    ],
    "sources": [
      "OpenStreetMap / Nominatim (coordinates, ODbL)",
      "Editorial draft, pending Encanto review"
    ],
    "coordsVerified": "2026-11-15",
    "googlePlaceId": "ChIJ6-pKFABbHYwRYzvh8JjJaks"
  },
  {
    "id": "laguna-condado",
    "name": "Laguna del Condado",
    "category": "outdoor",
    "region": "san-juan",
    "municipality": "San Juan",
    "lat": 18.45755,
    "lng": -66.07956,
    "summary": "Tidal lagoon between Condado and Santurce, used for paddling.",
    "body": "The lagoon is a calm paddling spot in central San Juan. Kayak tours run here.",
    "practical": [],
    "sources": [
      "OpenStreetMap / Nominatim (coordinates, ODbL)",
      "Editorial draft, pending Encanto review"
    ],
    "coordsVerified": "2026-11-15",
    "googlePlaceId": "ChIJl-cnuTpvA4wRdUIeaiQ0iU4"
  },
  {
    "id": "pinones",
    "name": "Bosque Estatal de Piñones",
    "category": "outdoor",
    "region": "san-juan",
    "municipality": "Loíza",
    "lat": 18.44357,
    "lng": -65.94393,
    "summary": "Mangrove forest and coastal strip east of the airport.",
    "body": "A coastal forest with mangroves and a beachfront road lined with food kiosks.",
    "practical": [
      "Check current trail and boardwalk access locally."
    ],
    "sources": [
      "OpenStreetMap / Nominatim (coordinates, ODbL)",
      "Editorial draft, pending Encanto review"
    ],
    "coordsVerified": "2026-11-15",
    "googlePlaceId": "ChIJWynnBhFkA4wR7p9k5qj5gRg"
  }
]
