import { formatPhone } from "./formatPhone";
const SP = "\u00A0";

/**
 * Форматирует 11-значный российский номер телефона по гайдам https://guides.kontur.ru/principles/typography/
 * ```ts
 * formatPhone('81234567890'); // +7 123 456-78-90
 * formatPhone('88004567890'); // 8 800 456-78-90
 * ```
 *
 * @param phone номер телефона
 */

describe("formatPhone", () => {
  it("formats phone number with 8", () => {
    expect(formatPhone("81234567890")).toEqual(`+7${SP}123${SP}456-78-90`);
  });
});
