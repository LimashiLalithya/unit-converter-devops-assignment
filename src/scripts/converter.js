const LENGTH_FACTORS = {
    meter: 1,
    kilometer: 1000,
    centimeter: 0.01,
    mile: 1609.344,
    foot: 0.3048,
    inch: 0.0254
};

const WEIGHT_FACTORS = {
    kilogram: 1,
    gram: 0.001,
    pound: 0.45359237,
    ounce: 0.028349523125
};

export function convertLength(value, from, to) {
    return (value * LENGTH_FACTORS[from]) / LENGTH_FACTORS[to];
}

export function convertWeight(value, from, to) {
    return (value * WEIGHT_FACTORS[from]) / WEIGHT_FACTORS[to];
}

export function convertTemperature(value, from, to) {
    let celsius;

    if (from === "celsius") {
        celsius = value;
    } else if (from === "fahrenheit") {
        celsius = (value - 32) * (5 / 9);
    } else if (from === "kelvin") {
        celsius = value - 273.15;
    } else {
        throw new Error("Unsupported temperature unit");
    }

    if (to === "celsius") {
        return celsius;
    }

    if (to === "fahrenheit") {
        return (celsius * 9 / 5) + 32;
    }

    if (to === "kelvin") {
        return celsius + 273.15;
    }

    throw new Error("Unsupported temperature unit");
}
