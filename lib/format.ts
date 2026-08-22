/**
 * Manual thousands-grouping instead of Number.toLocaleString(): Node's ICU
 * data and the browser's can pick different space characters (U+00A0 vs
 * U+202F) for the same "fr-FR" locale, which causes SSR/CSR hydration
 * mismatches on every price displayed. This keeps server and client output
 * byte-identical.
 */
export function formatAmount(value: number | string): string {
  const num = Number(value);
  if (!Number.isFinite(num)) return String(value);
  const [intPart, decimalPart] = Math.abs(num).toFixed(decimalsFor(num)).split(".");
  const grouped = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  const sign = num < 0 ? "-" : "";
  return decimalPart ? `${sign}${grouped}.${decimalPart}` : `${sign}${grouped}`;
}

function decimalsFor(num: number): number {
  return Number.isInteger(num) ? 0 : 2;
}

function pad2(n: number): string {
  return String(n).padStart(2, "0");
}

const MONTHS_FR = [
  "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
  "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre",
];

/** Date.prototype.getDay()-indexed (0 = Sunday), for the clock/greeting widgets. */
export const WEEKDAYS_FR = [
  "Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi",
];

/**
 * Manual "01 Janvier 2026" formatting instead of Date.prototype.toLocaleDateString():
 * same rationale as formatAmount() above — Node's ICU data and the browser's
 * can disagree on the same locale/options, which caused a real SSR/CSR
 * hydration mismatch in this codebase for money. Extracting the fields by
 * hand and joining them keeps server and client output byte-identical.
 */
export function formatDate(value: string | Date): string {
  const d = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(d.getTime())) return String(value);
  return `${pad2(d.getDate())} ${MONTHS_FR[d.getMonth()]} ${d.getFullYear()}`;
}

/** Same as formatDate(), with an "HH:MM" time appended. */
export function formatDateTime(value: string | Date): string {
  const d = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(d.getTime())) return String(value);
  return `${formatDate(d)} ${pad2(d.getHours())}:${pad2(d.getMinutes())}`;
}
