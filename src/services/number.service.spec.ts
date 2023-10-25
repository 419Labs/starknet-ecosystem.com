import { formatCompactNumber } from "./number.service";

describe("Number service", () => {
  describe("formatCompactNumber", () => {
    [
      { value: 16, expected: "16" },
      { value: 3850, expected: "3.85K" },
      { value: 2998260, expected: "2.998M" },
      { value: 2900000, expected: "2.9M" },
      { value: 8146280, expected: "8.146M" },
    ].forEach(({ value, expected }) =>
      it(`should return ${expected} when given value is ${value}`, () => {
        // When
        const result = formatCompactNumber(value);

        // Then
        expect(result).toStrictEqual(expected);
      })
    );
  });
});
