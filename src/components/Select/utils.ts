export const getLabel = <T>(option: T): string => {
  if (typeof option === "object" && option !== null) {
    if ("label" in option) {
      return (option as any).label;
    }
  }
  return "Label não encontrado";
};

export const getValue = <T>(option: T): string => {
  if (typeof option === "object" && option !== null) {
    if ("value" in option) {
      return (option as any).value;
    }
  }
  return "Value não encontrado";
};
