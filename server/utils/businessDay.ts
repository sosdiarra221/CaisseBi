/**
 * Computes the [from, to) window for a "business day" anchored on `dateStr`
 * (YYYY-MM-DD), accounting for a company that stays open past midnight
 * (e.g. a restaurant open 07:00 -> 02:00 the next calendar day).
 *
 * A sale made at 01:00 after such a close time still belongs to the business
 * day that started the previous morning, not the new calendar day — this is
 * what lets report/dashboard endpoints group "today" correctly for that kind
 * of business.
 *
 * Fallback: if the company hasn't configured openTime/closeTime yet, this
 * reproduces the historical plain-midnight behavior exactly
 * (`${dateStr}T00:00:00.000` .. `${dateStr}T23:59:59.999`), so existing
 * companies see no change until they opt in via /parametres.
 */
export function getBusinessDayRange(
  dateStr: string,
  company: { openTime: string | null; closeTime: string | null }
): { from: Date; to: Date } {
  const { openTime, closeTime } = company;

  if (!openTime || !closeTime) {
    return {
      from: new Date(`${dateStr}T00:00:00.000`),
      to: new Date(`${dateStr}T23:59:59.999`),
    };
  }

  const from = new Date(`${dateStr}T${openTime}:00.000`);

  // closeTime <= openTime means the business day rolls over into the next
  // calendar day (e.g. open 07:00, close 02:00). Same-day hours (e.g.
  // 09:00-22:00) keep `to` on `dateStr` itself.
  const crossesMidnight = closeTime <= openTime;

  let to: Date;
  if (crossesMidnight) {
    // Use Date methods to advance by one calendar day rather than
    // hand-parsing dateStr, so month/year rollovers (e.g. 2026-08-31 ->
    // 2026-09-01, or a year boundary) are handled correctly.
    const base = new Date(`${dateStr}T${closeTime}:00.999`);
    to = new Date(base);
    to.setDate(to.getDate() + 1);
  } else {
    to = new Date(`${dateStr}T${closeTime}:00.999`);
  }

  return { from, to };
}
