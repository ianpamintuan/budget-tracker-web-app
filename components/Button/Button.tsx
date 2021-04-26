import React, { FunctionComponent, MouseEventHandler, ReactNode } from "react";
import { ButtonSize, ButtonVariety } from "../../common/Variety";
import classNames from "classnames";

export interface ButtonProps {
    className?: string;
    variety?: ButtonVariety;
    size?: ButtonSize;
    disabled?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    children: ReactNode;
}

export const Button: FunctionComponent<ButtonProps> = ({
    className,
    variety = ButtonVariety.Primary,
    size = ButtonSize.Default,
    disabled = false,
    children,
    ...props
}) => {
    return (
        <button
            className={classNames("rounded", className, variety, size, {
                "opacity-50 cursor-not-allowed": disabled,
            })}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
};
