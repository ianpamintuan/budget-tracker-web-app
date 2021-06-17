import { FunctionComponent } from "react";
import classNames from "classnames";

export interface FormFieldProps {
	name: string;
	className?: string;
	label?: string;
	description?: string;
}

export const FormField: FunctionComponent<FormFieldProps> = ({
	className,
	name,
	label,
	description,
	children,
	...props
}) => {
	return (
		<div className={classNames("mt-3", className)}>
			{label && (
				<label
					htmlFor={name}
					className="block text-md font-medium text-gray-700"
				>
					{label}
				</label>
			)}
			{children}
			{description && (
				<p className="mt-2 text-sm text-gray-500">{description}</p>
			)}
		</div>
	);
};
