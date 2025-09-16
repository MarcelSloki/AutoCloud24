export type Vehicle = {
  id: string;
  title: string;
  brand: string;
  platform: string;
  region: string;
  price: number;
  marketValue: number;
  repairCost: number;
  standzeitDays: number;
  riskScore: number; // 1 (niedrig) – 5 (hoch)
  history: { date: string; price: number }[];
};

export const demoVehicles: Vehicle[] = [
  {
    id: "1",
    title: "BMW 320d Touring 2019",
    brand: "BMW",
    platform: "Mobile.de",
    region: "NRW",
    price: 17500,
    marketValue: 19500,
    repairCost: 600,
    standzeitDays: 45,
    riskScore: 2,
    history: [
      { date: "2024-01", price: 18000 },
      { date: "2024-04", price: 17800 },
      { date: "2024-07", price: 17600 },
      { date: "2024-10", price: 17500 },
    ],
  },
  {
    id: "2",
    title: "Audi A4 Avant 2020",
    brand: "Audi",
    platform: "AutoScout24",
    region: "Hamburg",
    price: 21000,
    marketValue: 23000,
    repairCost: 800,
    standzeitDays: 60,
    riskScore: 3,
    history: [
      { date: "2024-01", price: 22500 },
      { date: "2024-04", price: 22200 },
      { date: "2024-07", price: 21800 },
      { date: "2024-10", price: 21000 },
    ],
  },
  {
    id: "3",
    title: "Mercedes C200 Limousine 2018",
    brand: "Mercedes",
    platform: "Auto1",
    region: "Bayern",
    price: 16500,
    marketValue: 18500,
    repairCost: 1200,
    standzeitDays: 75,
    riskScore: 4,
    history: [
      { date: "2024-01", price: 19000 },
      { date: "2024-04", price: 18500 },
      { date: "2024-07", price: 17800 },
      { date: "2024-10", price: 16500 },
    ],
  },
];
