/**
 * Alexandria Port – Berths & Zones
 *
 * Sources:
 *  - Egyptian Ministry of Transport & Logistics (mts.gov.eg)
 *  - ShipNext Port Data (shipnext.com)
 *  - Marine Insight – Major Ports of Egypt
 *  - Wikipedia – Alexandria Port
 *
 * Structure:
 *  The port (Western Harbour only – commercial) is divided into 6 functional zones
 *  with a total of ~67 berthing facilities.
 *  The Eastern Harbour is shallow and used only for naval/marina purposes.
 */

const alexandriaPortZones = [
  {
    zone: 1,
    berthRange: "Berths 5 – 15",
    berthStart: 5,
    berthEnd: 15,
    primaryUse: "General cargo",
    details: [
      "Agricultural products (cotton, tea, coffee, tobacco)",
      "Timber and industrial goods",
      "11 wharves for general merchandise",
    ],
    cargoTypes: ["general"],
  },
  {
    zone: 2,
    berthRange: "Berths 16 – 28",
    berthStart: 16,
    berthEnd: 28,
    primaryUse: "Ro-Ro, Passenger Terminal, Stuffed Bulk & Barge",
    details: [
      "Ro-Ro terminal (vehicles & heavy machinery)",
      "International passenger terminal (ferries & cruise ships)",
      "Stuffed bulk cargo",
      "Barge discharge operations",
      "Heavy construction materials",
    ],
    cargoTypes: ["ro-ro", "passenger", "bulk", "barge"],
  },
  {
    zone: 3,
    berthRange: "Berths 35 – 47",
    berthStart: 35,
    berthEnd: 47,
    primaryUse: "General cargo & Barge discharge",
    details: [
      "General cargo handling",
      "Barge discharge operations",
      "Mixed goods",
    ],
    cargoTypes: ["general", "barge"],
  },
  {
    zone: 4,
    berthRange: "Berths 50 – 68",
    berthStart: 50,
    berthEnd: 68,
    primaryUse: "Containers, Cement, Coal, Fertilizers & General cargo",
    details: [
      "Container terminal (TCT – Alexandria Container Terminal)",
      "Pier 55 – operated by CMA-CGM, capacity ~1.5 million TEU/year",
      "Cement handling",
      "Coal berths",
      "Fertilizers",
      "Barge discharge",
      "General cargo multipurpose berths",
    ],
    cargoTypes: ["container", "bulk", "general", "barge"],
  },
  {
    zone: 5,
    berthRange: "Berths 71a – 85/2",
    berthStart: "71a",
    berthEnd: "85/2",
    primaryUse: "Molasses, General cargo, Barge discharge (grains, flour, timber)",
    details: [
      "Molasses handling",
      "Timber import",
      "Grain and flour via barge discharge",
      "Some types of general cargo",
      "Alexandria International Containers Company (AICC) terminal",
    ],
    cargoTypes: ["liquid-bulk", "bulk", "general", "container", "barge"],
  },
  {
    zone: 6,
    berthRange: "Berths 86 – 87/5",
    berthStart: 86,
    berthEnd: "87/5",
    primaryUse: "Oil Dock – Petroleum products, Edible oil, Bunkering & Livestock",
    details: [
      "Berth 86: Livestock handling",
      "Berths 87/1–87/5: Edible oil import, petroleum products, vessel bunkering",
      "Connected to a nearby refinery via a 2 km pipeline",
      "No on-site oil storage – pipeline-fed only",
    ],
    cargoTypes: ["liquid-bulk", "livestock"],
  },
];

/**
 * Flat array of individual berths (where numbers are known)
 * for easy filtering and lookup.
 */
const alexandriaPortBerths = [
  // ─── Zone 1: General Cargo ──────────────────────────────────────
  { berth: "5",  zone: 1, usage: "General cargo – agricultural & industrial goods", cargoType: "general" },
  { berth: "6",  zone: 1, usage: "General cargo – agricultural & industrial goods", cargoType: "general" },
  { berth: "7",  zone: 1, usage: "General cargo – agricultural & industrial goods", cargoType: "general" },
  { berth: "8",  zone: 1, usage: "General cargo – agricultural & industrial goods", cargoType: "general" },
  { berth: "9",  zone: 1, usage: "General cargo – agricultural & industrial goods", cargoType: "general" },
  { berth: "10", zone: 1, usage: "General cargo – agricultural & industrial goods", cargoType: "general" },
  { berth: "11", zone: 1, usage: "General cargo – agricultural & industrial goods", cargoType: "general" },
  { berth: "12", zone: 1, usage: "General cargo – agricultural & industrial goods", cargoType: "general" },
  { berth: "13", zone: 1, usage: "General cargo – agricultural & industrial goods", cargoType: "general" },
  { berth: "14", zone: 1, usage: "General cargo – agricultural & industrial goods", cargoType: "general" },
  { berth: "15", zone: 1, usage: "General cargo – agricultural & industrial goods", cargoType: "general" },

  // ─── Zone 2: Ro-Ro, Passenger, Bulk & Barge ─────────────────────
  { berth: "16", zone: 2, usage: "Ro-Ro – vehicles & heavy machinery",                cargoType: "ro-ro" },
  { berth: "17", zone: 2, usage: "Ro-Ro – vehicles & heavy machinery",                cargoType: "ro-ro" },
  { berth: "18", zone: 2, usage: "Passenger Terminal – international ferries",        cargoType: "passenger" },
  { berth: "19", zone: 2, usage: "Passenger Terminal – cruise ships",                 cargoType: "passenger" },
  { berth: "20", zone: 2, usage: "Stuffed bulk cargo & heavy construction materials", cargoType: "bulk" },
  { berth: "21", zone: 2, usage: "Stuffed bulk cargo",                                cargoType: "bulk" },
  { berth: "22", zone: 2, usage: "Barge discharge",                                   cargoType: "barge" },
  { berth: "23", zone: 2, usage: "Barge discharge",                                   cargoType: "barge" },
  { berth: "24", zone: 2, usage: "Mixed bulk & general cargo",                        cargoType: "bulk" },
  { berth: "25", zone: 2, usage: "Mixed bulk & general cargo",                        cargoType: "bulk" },
  { berth: "26", zone: 2, usage: "Mixed bulk & general cargo",                        cargoType: "bulk" },
  { berth: "27", zone: 2, usage: "Mixed bulk & general cargo",                        cargoType: "bulk" },
  { berth: "28", zone: 2, usage: "Mixed bulk & general cargo",                        cargoType: "bulk" },

  // ─── Zone 3: General Cargo & Barge Discharge ────────────────────
  { berth: "35", zone: 3, usage: "General cargo & barge discharge", cargoType: "general" },
  { berth: "36", zone: 3, usage: "General cargo & barge discharge", cargoType: "general" },
  { berth: "37", zone: 3, usage: "General cargo & barge discharge", cargoType: "general" },
  { berth: "38", zone: 3, usage: "General cargo & barge discharge", cargoType: "general" },
  { berth: "39", zone: 3, usage: "General cargo & barge discharge", cargoType: "general" },
  { berth: "40", zone: 3, usage: "General cargo & barge discharge", cargoType: "general" },
  { berth: "41", zone: 3, usage: "General cargo & barge discharge", cargoType: "general" },
  { berth: "42", zone: 3, usage: "General cargo & barge discharge", cargoType: "general" },
  { berth: "43", zone: 3, usage: "General cargo & barge discharge", cargoType: "general" },
  { berth: "44", zone: 3, usage: "General cargo & barge discharge", cargoType: "general" },
  { berth: "45", zone: 3, usage: "General cargo & barge discharge", cargoType: "general" },
  { berth: "46", zone: 3, usage: "General cargo & barge discharge", cargoType: "general" },
  { berth: "47", zone: 3, usage: "General cargo & barge discharge", cargoType: "general" },

  // ─── Zone 4: Containers, Coal, Cement, Fertilizers ──────────────
  { berth: "50", zone: 4, usage: "Multipurpose – cement, fertilizers, general cargo",   cargoType: "general" },
  { berth: "51", zone: 4, usage: "Multipurpose – cement, fertilizers, general cargo",   cargoType: "general" },
  { berth: "52", zone: 4, usage: "Coal handling",                                       cargoType: "bulk" },
  { berth: "53", zone: 4, usage: "Coal handling",                                       cargoType: "bulk" },
  { berth: "54", zone: 4, usage: "Barge discharge",                                     cargoType: "barge" },
  { berth: "55", zone: 4, usage: "Container terminal (Pier 55 – CMA-CGM, ~1.5M TEU)",   cargoType: "container" },
  { berth: "56", zone: 4, usage: "Container terminal",                                  cargoType: "container" },
  { berth: "57", zone: 4, usage: "Container terminal",                                  cargoType: "container" },
  { berth: "58", zone: 4, usage: "Container terminal",                                  cargoType: "container" },
  { berth: "59", zone: 4, usage: "Container terminal",                                  cargoType: "container" },
  { berth: "60", zone: 4, usage: "Container terminal",                                  cargoType: "container" },
  { berth: "61", zone: 4, usage: "Container terminal",                                  cargoType: "container" },
  { berth: "62", zone: 4, usage: "Container terminal",                                  cargoType: "container" },
  { berth: "63", zone: 4, usage: "Container terminal",                                  cargoType: "container" },
  { berth: "64", zone: 4, usage: "Container terminal",                                  cargoType: "container" },
  { berth: "65", zone: 4, usage: "Container terminal",                                  cargoType: "container" },
  { berth: "66", zone: 4, usage: "Container terminal",                                  cargoType: "container" },
  { berth: "67", zone: 4, usage: "Container terminal",                                  cargoType: "container" },
  { berth: "68", zone: 4, usage: "Container terminal",                                  cargoType: "container" },

  // ─── Zone 5: Molasses, Grain, Timber, AICC ──────────────────────
  { berth: "71a",  zone: 5, usage: "Molasses & general cargo",                           cargoType: "liquid-bulk" },
  { berth: "72",   zone: 5, usage: "Timber import",                                      cargoType: "bulk" },
  { berth: "73",   zone: 5, usage: "Grain & flour via barge discharge",                  cargoType: "bulk" },
  { berth: "74",   zone: 5, usage: "Grain & flour via barge discharge",                  cargoType: "bulk" },
  { berth: "75",   zone: 5, usage: "General cargo",                                      cargoType: "general" },
  { berth: "76",   zone: 5, usage: "General cargo",                                      cargoType: "general" },
  { berth: "80",   zone: 5, usage: "Alexandria International Containers Company (AICC)", cargoType: "container" },
  { berth: "81",   zone: 5, usage: "Alexandria International Containers Company (AICC)", cargoType: "container" },
  { berth: "82",   zone: 5, usage: "Barge discharge – grains & flour",                   cargoType: "barge" },
  { berth: "83",   zone: 5, usage: "Barge discharge – grains & flour",                   cargoType: "barge" },
  { berth: "85/1", zone: 5, usage: "General cargo & barge",                              cargoType: "general" },
  { berth: "85/2", zone: 5, usage: "General cargo & barge",                              cargoType: "general" },

  // ─── Zone 6: Oil Dock ────────────────────────────────────────────
  { berth: "86",   zone: 6, usage: "Livestock handling",                                              cargoType: "livestock" },
  { berth: "87/1", zone: 6, usage: "Edible oil import, petroleum products & vessel bunkering",        cargoType: "liquid-bulk" },
  { berth: "87/2", zone: 6, usage: "Edible oil import, petroleum products & vessel bunkering",        cargoType: "liquid-bulk" },
  { berth: "87/3", zone: 6, usage: "Edible oil import, petroleum products & vessel bunkering",        cargoType: "liquid-bulk" },
  { berth: "87/4", zone: 6, usage: "Edible oil import, petroleum products & vessel bunkering",        cargoType: "liquid-bulk" },
  { berth: "87/5", zone: 6, usage: "Edible oil import, petroleum products & vessel bunkering",        cargoType: "liquid-bulk" },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

/** Filter berths by zone number (1–6) */
const getBerthsByZone = (zoneNumber) =>
  alexandriaPortBerths.filter((b) => b.zone === zoneNumber);

/** Filter berths by cargo type */
const getBerthsByCargoType = (type) =>
  alexandriaPortBerths.filter((b) => b.cargoType === type);

/** Get high-level zone info */
const getZoneInfo = (zoneNumber) =>
  alexandriaPortZones.find((z) => z.zone === zoneNumber);

// ─── Usage Examples ───────────────────────────────────────────────────────────
// getBerthsByCargoType("container")   → all container berths
// getBerthsByCargoType("bulk")        → all dry bulk berths
// getBerthsByZone(4)                  → all Zone 4 berths
// getZoneInfo(6)                      → Oil Dock zone details

module.exports = { alexandriaPortZones, alexandriaPortBerths, getBerthsByZone, getBerthsByCargoType, getZoneInfo };