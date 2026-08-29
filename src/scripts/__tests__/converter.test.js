import { describe, expect, it } from "vitest";
import {
    convertLength,
    convertWeight,
    convertTemperature
} from "../converter.js";

describe("Length conversion", () => {
    it("converts meters to kilometers", () => {
        expect(convertLength(1000, "meter", "kilometer")).toBe(1);
    });

    it("converts kilometers to meters", () => {
        expect(convertLength(2, "kilometer", "meter")).toBe(2000);
    });
});

describe("Weight conversion", () => {
    it("converts kilograms to grams", () => {
        expect(convertWeight(2, "kilogram", "gram")).toBe(2000);
    });
});

describe("Temperature conversion", () => {
    it("converts Celsius to Fahrenheit", () => {
        expect(convertTemperature(0, "celsius", "fahrenheit")).toBe(32);
    });

    it("converts Celsius to Kelvin", () => {
        expect(convertTemperature(0, "celsius", "kelvin")).toBeCloseTo(273.15);
    });
});
