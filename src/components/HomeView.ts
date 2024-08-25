export function obtenirDateLaPlusRecente(dates: Date[]): Date | null {
  const dateLaPlusGrandeEnMs = Math.max(
    ...dates.map((date: any) => date.getTime())
  );

  return new Date(dateLaPlusGrandeEnMs);
}
