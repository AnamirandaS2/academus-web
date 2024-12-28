import { forwardRef, useCallback } from "react";
import { Input, InputProps } from "./Input";
import ReactInputMask from "react-input-mask";

export type MaskedInputProps = InputProps & {
  mask: string;
};

export const MaskInput = forwardRef<
  React.ElementRef<typeof ReactInputMask>,
  MaskedInputProps
>(({ mask, onChange, onBlur, ...props }, forwardedRef) => {
  const CustomInput = useCallback(
    (inputProps: InputProps) => <Input {...props} {...inputProps} />,
    [props]
  );

  return (
    <ReactInputMask
      alwaysShowMask
      mask={mask}
      maskChar=""
      ref={forwardedRef}
      onChange={onChange}
      onBlur={onBlur}
    >
      {CustomInput}
    </ReactInputMask>
  );
});

MaskInput.displayName = "MaskInput";
