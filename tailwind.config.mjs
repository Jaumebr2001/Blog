/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#fff', // Ejemplo de un color principal
				secondary: '#29333C', // Ejemplo de otro color
				tercero: '#29333C', // Ejemplo de un tercer color
				cuarto: '#061A23',
				// Puedes agregar más colores según tus necesidades
			  },
		},
	},
	plugins: [],
}
