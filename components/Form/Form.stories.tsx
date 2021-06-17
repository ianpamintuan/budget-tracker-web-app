import { useForm } from "react-hook-form";
import { Form, FormTextInput } from "./";
import { FormButtonSubmit } from "./FormButtonSubmit";
import { FormField } from "./FormField";

export default {
	title: "Components/Form",
	component: Form,
};

export const Basic = () => {
	const useFormInstance = useForm({
		defaultValues: {
			firstName: "",
			lastName: "",
		},
	});

	const onSubmit = (data: any) => console.log(data);

	return (
		<div className="container">
			<Form
				useFormInstance={useFormInstance}
				onSubmit={onSubmit}
				className="grid grid-cols-6 gap-6"
			>
				<FormField
					className="col-span-6 sm:col-span-3"
					name="firstName"
					label="First name"
				>
					<FormTextInput name="firstName" />
				</FormField>
				<FormField
					className="col-span-6 sm:col-span-3"
					name="lastName"
					label="Last name"
				>
					<FormTextInput name="lastName" />
				</FormField>
				<div className="col-span-6 justify-self-end">
					<FormButtonSubmit>Submit</FormButtonSubmit>
				</div>
			</Form>
		</div>
	);
};
