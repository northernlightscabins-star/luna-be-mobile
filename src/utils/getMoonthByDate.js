import moonthMap from '../assets/LunarMoonDates_2026-30.json';
export default function getMoonth(date) {
  const ymd = date.toISOString().slice(0, 10);
  const entry = moonthMap.find(m => m.start_date_ymd === ymd);
  if (!entry) throw new Error('Moonth not found for ' + ymd);
  return { name: entry.moonth_name, day: entry.length_days };
}
