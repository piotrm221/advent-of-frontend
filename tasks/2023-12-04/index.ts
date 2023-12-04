// Tutaj skopiuj kod zadania
type CalculationValue = number | string;
type ComplexCalculation = (x: CalculationValue) => CalculationValue;

export function memoize(calculation: ComplexCalculation) {
    if(!(typeof calculation === 'function')) {
        throw new Error('Function to be memoized must be a function.');
    }
    const memoizedResults = new Map<CalculationValue, CalculationValue>();

    const getMemoizedCalculation = (argument: CalculationValue): CalculationValue => {
        if (memoizedResults.has(argument)) {
            return memoizedResults.get(argument) ?? '';
        }

        const calculationResult = calculation(argument);
        memoizedResults.set(argument, calculationResult);

        return calculationResult;
    }

    return getMemoizedCalculation;
}