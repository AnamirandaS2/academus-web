import { forwardRef } from "react";

export const Input = forwardRef<HTMLInputElement>(
    ({...props}, ref) => {
        return (
            <input ref={ref} {...props} className=""/>
        )
    }
)