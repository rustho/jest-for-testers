const NON_BREAKING_SPACE = "\u00A0";

/**
 * Форматирует 11-значный российский номер телефона по гайдам https://guides.kontur.ru/principles/typography/
 * ```ts
 * formatPhone('81234567890'); // +7 123 456-78-90
 * formatPhone('88004567890'); // 8 800 456-78-90
 * ```
 *
 * @param phone номер телефона
 */
export const formatPhone = (phone) => {
  const unformatted = phone.replace(/(?!\+)\D/g, "");
  const withPrefix = unformatted.replace(/^[87](?!800)/g, "+7");
  const matches = /^(\d|\+\d)(\d{3})(\d{3})(\d{2})(\d{2})/g.exec(withPrefix);

  if (!matches) {
    return phone;
  }

  const lastPart = [matches[3], matches[4], matches[5]].join("-");

  return [matches[1], matches[2], lastPart].join(NON_BREAKING_SPACE);
};
