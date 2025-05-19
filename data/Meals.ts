
export type ItemsByCategoryArrayProps = {
	category: string,
	items: CategoryItem[] | []
}[]
export type CategoryItem = { name: string, price: number, image: string, quantity: number }
export const itemsByCategoryArray: ItemsByCategoryArrayProps = [
	{
		category: "all",
		items: [],
	},
	{
		category: "appetizers",
		items: [
			{ name: "Bruschetta", price: 7.5, image: "/images/bruschetta.jpg", quantity: 0 },
			{ name: "Garlic Bread", price: 5.0, image: "/images/garlic-bread.jpg", quantity: 0 },
		],
	},
	{
		category: "salads",
		items: [
			{ name: "Caesar Salad", price: 9.0, image: "/images/caesar.jpg", quantity: 0 },
			{ name: "Greek Salad", price: 8.5, image: "/images/greek.jpg", quantity: 0 },
		],
	},
	{
		category: "burgers",
		items: [
			{ name: "Classic Burger", price: 12.0, image: "/images/classic-burger.jpg", quantity: 0 },
			{ name: "Veggie Burger", price: 11.0, image: "/images/veggie-burger.jpg", quantity: 0 },
		],
	},
	{
		category: "pasta",
		items: [
			{ name: "Spaghetti Bolognese", price: 13.0, image: "/images/spaghetti.jpg", quantity: 0 },
			{ name: "Pesto Pasta", price: 12.0, image: "/images/pesto.jpg", quantity: 0 },
		],
	},
	{
		category: "desserts",
		items: [
			{ name: "Tiramisu", price: 6.5, image: "/images/tiramisu.jpg", quantity: 0 },
			{ name: "Cheesecake", price: 6.0, image: "/images/cheesecake.jpg", quantity: 0 },
		],
	},
	{
		category: "drinks",
		items: [
			{ name: "Lemonade", price: 3.5, image: "/images/lemonade.jpg", quantity: 0 },
			{ name: "Iced Tea", price: 3.0, image: "/images/iced-tea.jpg", quantity: 0 },
		],
	},
	{
		category: "kids-menu",
		items: [
			{ name: "Mini Burger", price: 6.0, image: "/images/mini-burger.jpg", quantity: 0 },
			{ name: "Mac & Cheese", price: 5.5, image: "/images/mac-cheese.jpg", quantity: 0 },
		],
	},
	{
		category: "vegan",
		items: [
			{ name: "Vegan Bowl", price: 11.0, image: "/images/vegan-bowl.jpg", quantity: 0 },
			{ name: "Tofu Stir Fry", price: 10.5, image: "/images/tofu.jpg", quantity: 0 },
		],
	},
	{
		category: "specials",
		items: [
			{ name: "Lamb Chops with Mint", price: 18.0, image: "/images/lamb.jpg", quantity: 0 },
			{ name: "Truffle Risotto", price: 17.5, image: "/images/risotto.jpg", quantity: 0 },
		],
	},
];