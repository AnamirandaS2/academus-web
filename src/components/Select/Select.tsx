import { forwardRef } from "react";

type SelectProps<T> = {
  options: T[] | undefined;
  isLoading: boolean;
  label?: string;
  getLabel: (option: T) => string;
  getValue: (option: T) => string;
} & React.SelectHTMLAttributes<HTMLSelectElement>; // Inclui propriedades nativas do <select>

export const Select = forwardRef<HTMLSelectElement, SelectProps<any>>(
  <T,>(
    { options, isLoading, label, getLabel, getValue, ...rest }: SelectProps<T>,
    ref: React.Ref<HTMLSelectElement>
  ) => {
    return (
      <div className="flex flex-col gap-2">
        {label && (
          <label htmlFor="generic-select" className="text-blue-700 font-medium">
            {label}
          </label>
        )}
        <select
          ref={ref}
          className="w-full border border-blue-700 px-4 py-2 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          {...rest}
        >
          {isLoading ? (
            <option disabled>Carregando...</option>
          ) : (
            <>
              <option value="" disabled>
                Escolha uma opção
              </option>
              {options?.map((option, index) => (
                <option key={index} value={getValue(option)}>
                  {getLabel(option)}
                </option>
              ))}
            </>
          )}
        </select>
      </div>
    );
  }
);

Select.displayName = "Select";
