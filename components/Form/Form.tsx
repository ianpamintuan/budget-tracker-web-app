import React, { FunctionComponent } from "react";
import { FieldValues, FormProvider, UseFormReturn } from "react-hook-form";

export interface FormProps {
	name?: string;
	className?: string;
	useFormInstance: UseFormReturn<any>;
	onSubmit: (data: any) => void;
}

export const Form: FunctionComponent<FormProps> = ({
	useFormInstance,
	onSubmit,
	children,
	...props
}) => {
	const { handleSubmit } = useFormInstance;

	return (
		<FormProvider {...useFormInstance}>
			<form
				autoComplete="off"
				onSubmit={handleSubmit(onSubmit)}
				{...props}
			>
				{children}
			</form>
		</FormProvider>
	);
};
