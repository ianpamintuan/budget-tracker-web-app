import { ButtonSize, ButtonVariety } from "../../common/Variety";
import { Button } from "./Button";

export default {
	title: "Components/Button",
	component: Button,
};

export const Sizes = () => (
	<>
		<Button size={ButtonSize.Small} className="mr-3">
			Small
		</Button>
		<Button className="mr-3">Normal</Button>
		<Button size={ButtonSize.Large}>Large</Button>
	</>
);
export const Primary = () => <Button>Primary</Button>;
export const Success = () => (
	<Button variety={ButtonVariety.Success}>Success</Button>
);
export const Danger = () => (
	<Button variety={ButtonVariety.Danger}>Danger</Button>
);
export const Secondary = () => (
	<Button variety={ButtonVariety.Secondary}>Secondary</Button>
);
export const Warning = () => (
	<Button variety={ButtonVariety.Warning}>Warning</Button>
);
export const Info = () => <Button variety={ButtonVariety.Info}>Info</Button>;
export const Disabled = () => <Button disabled>Disabled</Button>;
