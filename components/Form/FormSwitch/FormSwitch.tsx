import { FunctionComponent } from "react";
import classNames from "classnames";
import "../../../styles/components/switch.css";
import { FormCommonProps } from "../../../common/Forms";
import { useFormContext } from "react-hook-form";

export interface FormSwitchProps extends FormCommonProps {}

export const FormSwitch: FunctionComponent<FormSwitchProps> = ({
	id,
	className,
	name,
}) => {
	const { register } = useFormContext();

	return (
		<label
			htmlFor={id}
			className={classNames(
				"flex items-center cursor-pointer mt-1",
				className
			)}
		>
			<div className="relative">
				<input
					{...register(name)}
					id={id}
					type="checkbox"
					className="hidden"
					name={name}
				/>
				<div className="toggle-path bg-gray-200 w-9 h-5 rounded-full shadow-inner" />
				<div className="toggle-circle absolute w-3.5 h-3.5 bg-white rounded-full shadow inset-y-0 left-0" />
			</div>
		</label>
	);
};
