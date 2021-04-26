import { Layout } from "./Layout";

export const decorators = [
	(Story) => (
		<Layout>
			<Story />
		</Layout>
	),
];

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};
