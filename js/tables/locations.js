import { randomItem } from '../random.js';

export const SECTORS = {
  ONE: 'Entertainment District',
  TWO: 'Arts District',
  FOUR: 'Industrial District',
  FIVE: 'Central',
  NINE: 'Commercial District',
  TWELVE: 'LAX',
  BEYOND_DOWNTOWN: 'Beyond Downtown',
};

// Weighted pool of sector ids — duplicates increase likelihood, ported as-is
// from LocationTables.Sector.getRandomSector()'s index array.
const SECTOR_WEIGHTS = ['ONE', 'TWO', 'FOUR', 'FIVE', 'NINE', 'NINE', 'TWELVE', 'BEYOND_DOWNTOWN'];

function createSectorOneLocation() {
  const areas = [
    { area: 'Nightclub Row', locations: ['The Snake Pit', 'Early Q', 'Metropolis'] },
    { area: 'Red Light District', locations: ["Happy Jack's Casino", 'Paradise Evolution', 'Kumite'] },
    { area: 'Beauty Parlors', locations: ['Bright Eyes Beauty Salon', 'Aphrodite', 'Roxbox'] },
    { area: 'Mid-City', locations: ['Rag Row', 'Magazine Mile', 'A & B Sports Arena'] },
  ];
  const areaWeights = [0, 0, 1, 1, 2, 3];
  const area = areas[randomItem(areaWeights)];
  return { sector: 'ONE', area: area.area, location: randomItem(area.locations) };
}

function createSectorTwoLocation() {
  const areas = [
    { area: 'Hysteria Hall', locations: ['Arcade', 'Multiplex', 'Crazy Legs Larry Used Autos'] },
    { area: 'University of Los Angeles', locations: ['University Library', "Dean's Office", 'Student Dorms'] },
    { area: 'University of Los Angeles Medical Center', locations: ['Medical Research Lab', 'Coma Ward', 'Hospital Basement'] },
  ];
  const area = areas[Math.floor(Math.random() * areas.length)];
  return { sector: 'TWO', area: area.area, location: randomItem(area.locations) };
}

function createSectorFourLocation() {
  const areas = [
    { area: 'Wallace HQ', locations: ['Reception Area', 'Wallace Records Library', 'Memory Vaults', 'Executive Suite'] },
    { area: 'China-town', locations: ['Ona Bar', 'Shanghai Export & Import', 'Hutong Alley'] },
    { area: 'DNA Row', locations: ['MirrorWare Industries', 'Atinko Biowares', 'Nekko Corporation'] },
    { area: "Hawker's Circle", locations: ['Kingston Kitchen', 'Runner Surplus', 'Piss Alley', "Howey Lee's", 'Karma Bar', 'Kabukicho Arcade'] },
    { area: 'Animoid Row', locations: ['Van Ness Pet Hospital', 'The Fish Ladies', 'Runciters Zoological', 'The Dragonfly', 'Prawn Shop & Aquatic Emporium', "Abdul Ben Hassan's Reptiles"] },
  ];
  const WALLACE_HQ_IDX = 0;
  const areaWeights = [0, 1, 2, 3, 4, 4];
  const areaIdx = randomItem(areaWeights);
  const area = areas[areaIdx];

  let location;
  if (areaIdx === WALLACE_HQ_IDX) {
    const locationWeights = [0, 0, 1, 2, 3, 3];
    location = area.locations[randomItem(locationWeights)];
  } else {
    location = randomItem(area.locations);
  }
  return { sector: 'FOUR', area: area.area, location };
}

function createSectorFiveLocation() {
  const areas = [
    { area: 'LAPD HQ', locations: ['Rep Detect Unit', 'Armory', 'Crime Lab', 'Mainframe', 'Morgue', 'Training Grounds'] },
    { area: 'City Hall', locations: ['City Hall Grand Stairs', 'LA Courthouse', 'Press Area', 'Independent Sentinel', "Mayor's Office", "District Attorney's Office"] },
    { area: 'Little Tokyo Shopping District', locations: ['White Dragon Noodle Bar', 'Burger Burger Burger', 'Shinjuku Alley', 'Vending Mall', 'Edo Megastore'] },
    { area: 'Bar District', locations: ['Naplopo', "Bibi's Bar", 'Level 44'] },
    { area: 'LAPD Housing', locations: ['Burt Jackson Block', 'Venderton Gardens', "Black'n'Blue Bar"] },
  ];
  const areaWeights = [0, 1, 2, 2, 3, 4];
  const area = areas[randomItem(areaWeights)];
  return { sector: 'FIVE', area: area.area, location: randomItem(area.locations) };
}

function createSectorNineLocation() {
  const areas = [
    { area: 'Fashion District', locations: ['Razdora Eatery', 'Markova Ballroom', "Ogilvy's Auction"] },
    { area: 'Financial District', locations: ['LA Stock Exchange', 'Walton Gardens', 'Shaw Financial'] },
    { area: 'Grand Central Market', locations: ["Wakasani's Seafood", 'Mumbai Spice Co', 'Walter & Knecht Antique Books'] },
    { area: 'LA Central Library', locations: ['Grand Lobby', 'Newspaper Archive', 'Special Collection Vault'] },
    { area: 'Retirement Row', locations: ['LA Viaduct', 'Abandoned Subway Station', 'Crashed Spinner'] },
  ];
  const areaWeights = [0, 1, 2, 2, 3, 4];
  const area = areas[randomItem(areaWeights)];
  return { sector: 'NINE', area: area.area, location: randomItem(area.locations) };
}

function createSectorTwelveLocation() {
  const areas = [
    { area: 'LAX', locations: ['Off-World Spaceport Terminal', 'On-World Domestic Terminal', 'Control Tower', 'Customs Office', 'Hotel Madison'] },
    { area: 'Warehouse District', locations: ['Logistics Hub D', "Maeve's Bar", 'Container Crane 141'] },
    { area: 'Sea Wall Docks', locations: ['LA Queen, Smuggler Ship', 'Sea Wall Watch Station', 'Wreck of Empress Sarah'] },
  ];
  const LAX_IDX = 0;
  const areaWeights = [0, 0, 0, 1, 1, 2];
  const areaIdx = randomItem(areaWeights);
  const area = areas[areaIdx];

  let location;
  if (areaIdx === LAX_IDX) {
    const locationWeights = [0, 0, 1, 2, 3, 4];
    location = area.locations[randomItem(locationWeights)];
  } else {
    location = randomItem(area.locations);
  }
  return { sector: 'TWELVE', area: area.area, location };
}

function createBeyondDowntownLocation() {
  const areas = [
    { area: 'The Energy Empire', locations: ['Protein Farm', 'Power Plant', 'Transport Hub'] },
    { area: 'Los Angeles Hills', locations: ['Refugee Camp', 'Low Income Housing Project', 'Abandoned Building Site'] },
    { area: 'Santa Barbara', locations: ['De Vries Mansion', 'Jenkins Family Estate', 'Abandoned Resort'] },
    { area: 'San Diego Trash Mesa', locations: ['Labour Camp', 'Off-Grid R&D Lab', 'Scavenge Yard'] },
    { area: 'The Kipple', locations: ['Crashed Transport', 'Scavenger Camp', 'Waste Processing Station'] },
  ];
  const areaWeights = [0, 1, 2, 3, 4, 4];
  const area = areas[randomItem(areaWeights)];
  return { sector: 'BEYOND_DOWNTOWN', area: area.area, location: randomItem(area.locations) };
}

const SECTOR_CREATORS = {
  ONE: createSectorOneLocation,
  TWO: createSectorTwoLocation,
  FOUR: createSectorFourLocation,
  FIVE: createSectorFiveLocation,
  NINE: createSectorNineLocation,
  TWELVE: createSectorTwelveLocation,
  BEYOND_DOWNTOWN: createBeyondDowntownLocation,
};

export function generateLocation() {
  const sector = randomItem(SECTOR_WEIGHTS);
  return SECTOR_CREATORS[sector]();
}

export function formatLocation(location) {
  return `${location.location}, ${location.area}, Sector ${location.sector}: ${SECTORS[location.sector]}`;
}
