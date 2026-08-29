const LENGTH_FACTORS = {
    meter: 1,
    kilometer: 1000,
    centimeter: 0.01,
    millimeter: 0.001,
    mile: 1609.344,
    yard: 0.9144,
    foot: 0.3048,
    inch: 0.0254
};

const WEIGHT_FACTORS = {
    kilogram: 1,
    gram: 0.001,
    milligram: 0.000001,
    pound: 0.45359237,
    ounce: 0.028349523125
};

function validateInput(value, units, from, to) {
    if (!Number.isFinite(value)) {
        throw new Error("Value must be a valid number");
    }

    if (!Object.prototype.hasOwnProperty.call(units, from)) {
        throw new Error(`Unsupported source unit: ${from}`);
    }

    if (!Object.prototype.hasOwnProperty.call(units, to)) {
        throw new Error(`Unsupported target unit: ${to}`);
    }
}

export function convertLength(value, from, to) {
    validateInput(value, LENGTH_FACTORS, from, to);

    return (value * LENGTH_FACTORS[from]) / LENGTH_FACTORS[to];
}

export function convertWeight(value, from, to) {
    validateInput(value, WEIGHT_FACTORS, from, to);

    return (value * WEIGHT_FACTORS[from]) / WEIGHT_FACTORS[to];
}

export function convertTemperature(value, from, to) {
    const temperatureUnits = {
        celsius: true,
        fahrenheit: true,
        kelvin: true
    };

    validateInput(value, temperatureUnits, from, to);

    let celsius;

    switch (from) {
        case "celsius":
            celsius = value;
            break;

        case "fahrenheit":
            celsius = (value - 32) * (5 / 9);
            break;

        case "kelvin":
            celsius = value - 273.15;
            break;

        default:
            throw new Error(`Unsupported source unit: ${from}`);
    }

    switch (to) {
        case "celsius":
            return celsius;

        case "fahrenheit":
            return (celsius * 9 / 5) + 32;

        case "kelvin":
            return celsius + 273.15;

        default:
            throw new Error(`Unsupported target unit: ${to}`);
    }
}