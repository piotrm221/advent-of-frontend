// Tutaj skopiuj kod zadania
export type Lokalizacja = { x: number, y: number, z: number, czas: number }
export type MapaCzasoprzestrzenna = (...args: any) => any;

export function znajdzWorek(lokalizacje: Lokalizacja[], mapa: MapaCzasoprzestrzenna): Lokalizacja | null {
    if (!(lokalizacje.length > 0)) return null;

    const calculations = lokalizacje.map((lokalizacja) => mapa(...Object.values(lokalizacja)));
    
    const notANumberValue: typeof NaN | undefined = calculations.find(calculation => isNaN(calculation))
    if (notANumberValue !== undefined) return null;

    const localizationIndex = calculations.indexOf(Math.max(...calculations));
    return lokalizacje[localizationIndex];
}