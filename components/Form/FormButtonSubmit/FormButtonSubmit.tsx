import React, { FunctionComponent } from "react";
import { Button, ButtonProps } from "../../Button";

export interface FormButtonSubmitProps extends ButtonProps {}

export const FormButtonSubmit: FunctionComponent<FormButtonSubmitProps> = ({
	children,
}) => {
	return <Button type="submit">{children}</Button>;
};
