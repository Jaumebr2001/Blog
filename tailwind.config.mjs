/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#F0AD52', // Ejemplo de un color principal
				secondary: '#2B0303', // Ejemplo de otro color
				tercero: '#A76430', // Ejemplo de un tercer color
				cuarto: '#F8FAE5',
				// Puedes agregar más colores según tus necesidades
			  },
		},
	},
	plugins: [],
}
