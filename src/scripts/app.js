import {
    convertLength,
    convertWeight,
    convertTemperature
} from "./converter.js";

const conversionType = document.querySelector("#conversion-type");
const inputValue = document.querySelector("#input-value");
const fromUnit = document.querySelector("#from-unit");
const toUnit = document.querySelector("#to-unit");
const swapUnitsButton = document.querySelector("#swap-units");
const convertButton = document.querySelector("#convert-button");
const result = document.querySelector("#result");
const errorMessage = document.querySelector("#error-message");
const historyList = document.querySelector("#history-list");
const clearHistoryButton = document.querySelector("#clear-history");

const UNIT_OPTIONS = {
    length: [
        ["meter", "Meter"],
        ["kilometer", "Kilometer"],
        ["centimeter", "Centimeter"],
        ["millimeter", "Millimeter"],
        ["mile", "Mile"],
        ["yard", "Yard"],
        ["foot", "Foot"],
        ["inch", "Inch"]
    ],
    weight: [
        ["kilogram", "Kilogram"],
        ["gram", "Gram"],
        ["milligram", "Milligram"],
        ["pound", "Pound"],
        ["ounce", "Ounce"]
    ],
    temperature: [
        ["celsius", "Celsius"],
        ["fahrenheit", "Fahrenheit"],
        ["kelvin", "Kelvin"]
    ]
};

const HISTORY_KEY = "unit-converter-history";

function populateUnits(type) {
    const units = UNIT_OPTIONS[type];

    fromUnit.innerHTML = "";
    toUnit.innerHTML = "";

    units.forEach(([value, label]) => {
        const fromOption = document.createElement("option");
        fromOption.value = value;
        fromOption.textContent = label;
        fromUnit.appendChild(fromOption);

        const toOption = document.createElement("option");
        toOption.value = value;
        toOption.textContent = label;
        toUnit.appendChild(toOption);
    });

    if (units.length > 1) {
        toUnit.selectedIndex = 1;
    }
}

function getConverter(type) {
    if (type === "length") {
        return convertLength;
    }

    if (type === "weight") {
        return convertWeight;
    }

    return convertTemperature;
}

function formatNumber(value) {
    return Number.parseFloat(value.toFixed(8)).toString();
}

function showError(message) {
    errorMessage.textContent = message;
    result.textContent = "Unable to convert.";
}

function clearError() {
    errorMessage.textContent = "";
}

function saveHistory(entry) {
    const history = JSON.parse(localStorage.getItem(HISTORY_KEY) || "[]");

    history.unshift(entry);

    const limitedHistory = history.slice(0, 10);

    localStorage.setItem(HISTORY_KEY, JSON.stringify(limitedHistory));

    renderHistory();
}

function renderHistory() {
    const history = JSON.parse(localStorage.getItem(HISTORY_KEY) || "[]");

    historyList.innerHTML = "";

    if (history.length === 0) {
        historyList.innerHTML = '<p class="empty-history">No conversions yet.</p>';
        return;
    }

    history.forEach((entry) => {
        const item = document.createElement("article");
        item.className = "history-item";

        const conversion = document.createElement("p");
        conversion.textContent =
            `${entry.value} ${entry.fromLabel} = ${entry.result} ${entry.toLabel}`;

        const date = document.createElement("p");
        date.className = "history-date";
        date.textContent = entry.date;

        item.append(conversion, date);
        historyList.appendChild(item);
    });
}

function convert() {
    clearError();

    const value = Number(inputValue.value);

    if (inputValue.value.trim() === "") {
        showError("Please enter a value.");
        return;
    }

    if (!Number.isFinite(value)) {
        showError("Please enter a valid number.");
        return;
    }

    try {
        const type = conversionType.value;
        const converter = getConverter(type);

        const convertedValue = converter(
            value,
            fromUnit.value,
            toUnit.value
        );

        const formattedValue = formatNumber(convertedValue);

        const fromLabel =
            fromUnit.options[fromUnit.selectedIndex].textContent;

        const toLabel =
            toUnit.options[toUnit.selectedIndex].textContent;

        result.textContent =
            `${formatNumber(value)} ${fromLabel} = ${formattedValue} ${toLabel}`;

        saveHistory({
            value: formatNumber(value),
            fromLabel,
            result: formattedValue,
            toLabel,
            date: new Date().toLocaleString()
        });
    } catch (error) {
        showError(error.message);
    }
}

function swapUnits() {
    const currentFrom = fromUnit.value;
    fromUnit.value = toUnit.value;
    toUnit.value = currentFrom;

    if (inputValue.value.trim() !== "") {
        convert();
    }
}

conversionType.addEventListener("change", () => {
    populateUnits(conversionType.value);
    clearError();
    result.textContent = "Enter a value to begin.";
});

inputValue.addEventListener("input", () => {
    if (inputValue.value.trim() !== "") {
        convert();
    } else {
        clearError();
        result.textContent = "Enter a value to begin.";
    }
});

fromUnit.addEventListener("change", () => {
    if (inputValue.value.trim() !== "") {
        convert();
    }
});

toUnit.addEventListener("change", () => {
    if (inputValue.value.trim() !== "") {
        convert();
    }
});

convertButton.addEventListener("click", convert);

swapUnitsButton.addEventListener("click", swapUnits);

clearHistoryButton.addEventListener("click", () => {
    localStorage.removeItem(HISTORY_KEY);
    renderHistory();
});

populateUnits(conversionType.value);
renderHistory();
