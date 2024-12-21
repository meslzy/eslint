export const defineRules = (id: string, rules: Record<string, unknown>) => {
  return Object.keys(rules).reduce((acc, key) => {
    acc[`${id}/${key}`] = rules[key];
    return acc;
  }, {});
};
