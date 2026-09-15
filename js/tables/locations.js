import { randomItem, pickWeighted } from '../random.js';

// Weight is relative likelihood, not a percentage; omit it for weight 1.
export const SECTORS = [
  { id: 'ONE', description: 'Entertainment District' },
  { id: 'TWO', description: 'Arts District' },
  { id: 'FOUR', description: 'Industrial District' },
  { id: 'FIVE', description: 'Central' },
  { id: 'NINE', description: 'Commercial District', weight: 2 },
  { id: 'TWELVE', description: 'LAX' },
  { id: 'BEYOND_DOWNTOWN', description: 'Beyond Downtown' },
];

function sectorDescription(id) {
  return SECTORS.find((sector) => sector.id === id).description;
}

function createSectorOneLocation() {
  const areas = [
    { area: 'Nightclub Row', weight: 2, locations: ['The Snake Pit', 'Early Q', 'Metropolis'] },
    { area: 'Red Light District', weight: 2, locations: ["Happy Jack's Casino", 'Paradise Evolution', 'Kumite'] },
    { area: 'Beauty Parlors', locations: ['Bright Eyes Beauty Salon', 'Aphrodite', 'Roxbox'] },
    { area: 'Mid-City', locations: ['Rag Row', 'Magazine Mile', 'A & B Sports Arena'] },
  ];
  const area = pickWeighted(areas);
  return { sector: 'ONE', area: area.area, location: randomItem(area.locations) };
}

function createSectorTwoLocation() {
  const areas = [
    { area: 'Hysteria Hall', locations: ['Arcade', 'Multiplex', 'Crazy Legs Larry Used Autos'] },
    { area: 'University of Los Angeles', locations: ['University Library', "Dean's Office", 'Student Dorms'] },
    { area: 'University of Los Angeles Medical Center', locations: ['Medical Research Lab', 'Coma Ward', 'Hospital Basement'] },
  ];
  const area = pickWeighted(areas);
  return { sector: 'TWO', area: area.area, location: randomItem(area.locations) };
}

function createSectorFourLocation() {
  const areas = [
    {
      id: 'WALLACE_HQ',
      area: 'Wallace HQ',
      locations: [
        { name: 'Reception Area', weight: 2 },
        { name: 'Wallace Records Library' },
        { name: 'Memory Vaults' },
        { name: 'Executive Suite', weight: 2 },
      ],
    },
    { area: 'China-town', locations: ['Ona Bar', 'Shanghai Export & Import', 'Hutong Alley'] },
    { area: 'DNA Row', locations: ['MirrorWare Industries', 'Atinko Biowares', 'Nekko Corporation'] },
    { area: "Hawker's Circle", locations: ['Kingston Kitchen', 'Runner Surplus', 'Piss Alley', "Howey Lee's", 'Karma Bar', 'Kabukicho Arcade'] },
    { area: 'Animoid Row', weight: 2, locations: ['Van Ness Pet Hospital', 'The Fish Ladies', 'Runciters Zoological', 'The Dragonfly', 'Prawn Shop & Aquatic Emporium', "Abdul Ben Hassan's Reptiles"] },
  ];
  const area = pickWeighted(areas);

  const location = area.id === 'WALLACE_HQ'
    ? pickWeighted(area.locations).name
    : randomItem(area.locations);

  return { sector: 'FOUR', area: area.area, location };
}

function createSectorFiveLocation() {
  const areas = [
    { area: 'LAPD HQ', locations: ['Rep Detect Unit', 'Armory', 'Crime Lab', 'Mainframe', 'Morgue', 'Training Grounds'] },
    { area: 'City Hall', locations: ['City Hall Grand Stairs', 'LA Courthouse', 'Press Area', 'Independent Sentinel', "Mayor's Office", "District Attorney's Office"] },
    { area: 'Little Tokyo Shopping District', weight: 2, locations: ['White Dragon Noodle Bar', 'Burger Burger Burger', 'Shinjuku Alley', 'Vending Mall', 'Edo Megastore'] },
    { area: 'Bar District', locations: ['Naplopo', "Bibi's Bar", 'Level 44'] },
    { area: 'LAPD Housing', locations: ['Burt Jackson Block', 'Venderton Gardens', "Black'n'Blue Bar"] },
  ];
  const area = pickWeighted(areas);
  return { sector: 'FIVE', area: area.area, location: randomItem(area.locations) };
}

function createSectorNineLocation() {
  const areas = [
    { area: 'Fashion District', locations: ['Razdora Eatery', 'Markova Ballroom', "Ogilvy's Auction"] },
    { area: 'Financial District', locations: ['LA Stock Exchange', 'Walton Gardens', 'Shaw Financial'] },
    { area: 'Grand Central Market', weight: 2, locations: ["Wakasani's Seafood", 'Mumbai Spice Co', 'Walter & Knecht Antique Books'] },
    { area: 'LA Central Library', locations: ['Grand Lobby', 'Newspaper Archive', 'Special Collection Vault'] },
    { area: 'Retirement Row', locations: ['LA Viaduct', 'Abandoned Subway Station', 'Crashed Spinner'] },
  ];
  const area = pickWeighted(areas);
  return { sector: 'NINE', area: area.area, location: randomItem(area.locations) };
}

function createSectorTwelveLocation() {
  const areas = [
    {
      id: 'LAX',
      area: 'LAX',
      weight: 3,
      locations: [
        { name: 'Off-World Spaceport Terminal', weight: 2 },
        { name: 'On-World Domestic Terminal' },
        { name: 'Control Tower' },
        { name: 'Customs Office' },
        { name: 'Hotel Madison' },
      ],
    },
    { area: 'Warehouse District', weight: 2, locations: ['Logistics Hub D', "Maeve's Bar", 'Container Crane 141'] },
    { area: 'Sea Wall Docks', locations: ['LA Queen, Smuggler Ship', 'Sea Wall Watch Station', 'Wreck of Empress Sarah'] },
  ];
  const area = pickWeighted(areas);

  const location = area.id === 'LAX'
    ? pickWeighted(area.locations).name
    : randomItem(area.locations);

  return { sector: 'TWELVE', area: area.area, location };
}

function createBeyondDowntownLocation() {
  const areas = [
    { area: 'The Energy Empire', locations: ['Protein Farm', 'Power Plant', 'Transport Hub'] },
    { area: 'Los Angeles Hills', locations: ['Refugee Camp', 'Low Income Housing Project', 'Abandoned Building Site'] },
    { area: 'Santa Barbara', locations: ['De Vries Mansion', 'Jenkins Family Estate', 'Abandoned Resort'] },
    { area: 'San Diego Trash Mesa', locations: ['Labour Camp', 'Off-Grid R&D Lab', 'Scavenge Yard'] },
    { area: 'The Kipple', weight: 2, locations: ['Crashed Transport', 'Scavenger Camp', 'Waste Processing Station'] },
  ];
  const area = pickWeighted(areas);
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
  const sector = pickWeighted(SECTORS).id;
  return SECTOR_CREATORS[sector]();
}

export function formatLocation(location) {
  return `${location.location}, ${location.area}, Sector ${location.sector}: ${sectorDescription(location.sector)}`;
}
