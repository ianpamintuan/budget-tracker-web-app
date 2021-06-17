import React, { FunctionComponent } from "react";
import { FormCommonProps } from "../../../common/Forms";
import classNames from "classnames";
import { get, useFormContext } from "react-hook-form";

export interface FormTextInputProps extends FormCommonProps {
	placeholder?: string;
}

export const FormTextInput: FunctionComponent<FormTextInputProps> = ({
	name,
	...props
}) => {
	const { register, formState } = useFormContext();
	const error = get(formState.errors, name);

	return (
		<input
			{...register(name)}
			name={name}
			className={classNames(
				"border no-outline mt-1 block w-full rounded-md py-1.5 px-2",
				{
					"ring-red-500": error,
				}
			)}
			type="text"
			autoComplete="off"
			{...props}
		/>
	);
};
