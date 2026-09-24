import { MenuItem } from '../types/menu';

import imgCafe1 from '@assets/cafe1_1784196147551.webp';
import imgCafe2 from '@assets/cafe2_1784196147550.webp';
import imgCafe3 from '@assets/cafe3_1784196147549.webp';
import imgCafe4 from '@assets/cafe4_1784196147548.webp';
import imgCafe5 from '@assets/cafe5_1784196147547.webp';
import imgCafe6 from '@assets/cafe6_1784196147546.webp';
import imgCafe7 from '@assets/cafe7_1784196147544.webp';

export const menuCategories = [
  'Coffee',
  'Tea',
  'Cold Coffee',
  'Milkshakes',
  'Mojitos',
  'Boba Drinks',
  'Pizza',
  'Burgers',
  'Pasta',
  'Sandwiches',
  'Fries',
  'Chicken Snacks',
  'Desserts'
] as const;

export type Category = typeof menuCategories[number];

export const menu: MenuItem[] = [
  // Coffee — cafe5 (shows coffee menu)
  { id: '1', name: 'Café Latte', description: 'Rich espresso with steamed milk and a light layer of foam.', price: 80, category: 'Coffee', isVeg: true, image: imgCafe5 },
  { id: '2', name: 'Cappuccino', description: 'Classic espresso topped with deeply frothed milk.', price: 80, category: 'Coffee', isVeg: true, image: imgCafe5 },
  { id: '3', name: 'Americano', description: 'Espresso poured over hot water for a robust flavor.', price: 70, category: 'Coffee', isVeg: true, image: imgCafe5 },
  { id: '5', name: 'Espresso', description: 'A bold, concentrated shot of our signature blend.', price: 60, category: 'Coffee', isVeg: true, image: imgCafe5 },
  { id: '5b', name: 'Black Coffee', description: 'Pure, no-nonsense brewed coffee.', price: 35, category: 'Coffee', isVeg: true, image: imgCafe5 },
  { id: '5c', name: 'Chocolate Coffee', description: 'Espresso with rich chocolate flavor.', price: 69, category: 'Coffee', isVeg: true, image: imgCafe5 },

  // Tea — cafe5
  { id: '6', name: 'Masala Chai', description: 'Traditional spiced Indian tea brewed to perfection.', price: 35, category: 'Tea', isVeg: true, image: imgCafe5 },
  { id: '7', name: 'Green Tea', description: 'Light, refreshing, and rich in antioxidants.', price: 30, category: 'Tea', isVeg: true, image: imgCafe5 },
  { id: '8', name: 'Lemon Tea', description: 'Zesty and soothing hot tea with fresh lemon.', price: 69, category: 'Tea', isVeg: true, image: imgCafe5 },
  { id: '8b', name: 'Milk Tea', description: 'Comforting classic milk tea.', price: 20, category: 'Tea', isVeg: true, image: imgCafe5 },
  { id: '8c', name: 'Chocolate Tea', description: 'A unique blend of tea with chocolate notes.', price: 69, category: 'Tea', isVeg: true, image: imgCafe5 },
  { id: '8d', name: 'Darjeeling Tea', description: 'Delicate, aromatic Darjeeling first flush.', price: 40, category: 'Tea', isVeg: true, image: imgCafe5 },

  // Cold Coffee — cafe5
  { id: '4', name: 'Cold Coffee', description: 'Chilled creamy coffee blended with ice.', price: 69, category: 'Cold Coffee', isVeg: true, image: imgCafe5 },
  { id: '4b', name: 'Chocolate Cold Coffee', description: 'Iced cold coffee with a rich chocolate twist.', price: 69, category: 'Cold Coffee', isVeg: true, image: imgCafe5 },
  { id: '4c', name: 'Caramel Cold Coffee', description: 'Smooth cold coffee drizzled with caramel.', price: 99, category: 'Cold Coffee', isVeg: true, image: imgCafe5 },
  { id: '4d', name: 'Dark Fantasy Cold Coffee', description: 'Intense dark roast iced coffee indulgence.', price: 99, category: 'Cold Coffee', isVeg: true, image: imgCafe5 },
  { id: '4e', name: 'Bullet Proof Coffee', description: 'Energizing coffee with a bold, creamy kick.', price: 85, category: 'Cold Coffee', isVeg: true, image: imgCafe5 },

  // Boba Drinks — cafe3
  { id: '9', name: 'Classic Pearl Milk Tea', description: 'Signature boba tea with chewy tapioca pearls.', price: 130, category: 'Boba Drinks', isVeg: true, image: imgCafe3 },
  { id: '10', name: 'Taro Boba', description: 'Sweet and creamy purple taro milk tea with boba.', price: 130, category: 'Boba Drinks', isVeg: true, image: imgCafe3 },
  { id: '11', name: 'Strawberry Boba', description: 'Refreshing strawberry flavoured milk tea with boba.', price: 130, category: 'Boba Drinks', isVeg: true, image: imgCafe3 },
  { id: '11b', name: 'Mango Boba Moj', description: 'Tropical mango boba mojito with pearls.', price: 130, category: 'Boba Drinks', isVeg: true, image: imgCafe3 },
  { id: '11c', name: 'Blue Lagoon Boba', description: 'Vibrant blue boba mojito, refreshingly cool.', price: 130, category: 'Boba Drinks', isVeg: true, image: imgCafe3 },
  { id: '11d', name: 'Boba Coffee', description: 'Cold coffee elevated with chewy boba pearls.', price: 130, category: 'Boba Drinks', isVeg: true, image: imgCafe3 },

  // Milkshakes — cafe7
  { id: '12', name: 'Chocolate Shake', description: 'Thick and creamy shake made with rich chocolate.', price: 99, category: 'Milkshakes', isVeg: true, image: imgCafe7 },
  { id: '13', name: 'Mango Shake', description: 'Tropical delight made with real mango puree.', price: 99, category: 'Milkshakes', isVeg: true, image: imgCafe7 },
  { id: '14', name: 'Strawberry Shake', description: 'Sweet and fruity strawberry blended with milk and ice cream.', price: 99, category: 'Milkshakes', isVeg: true, image: imgCafe7 },
  { id: '15', name: 'Banana Shake', description: 'Classic fresh banana shake for a quick energy boost.', price: 99, category: 'Milkshakes', isVeg: true, image: imgCafe7 },
  { id: '16', name: 'Protein Smoothie', description: 'Healthy blend packed with essential proteins.', price: 149, category: 'Milkshakes', isVeg: true, image: imgCafe7 },
  { id: '16b', name: 'Kesar Badam Milk', description: 'Traditional saffron and almond milk shake.', price: 99, category: 'Milkshakes', isVeg: true, image: imgCafe7 },

  // Mojitos — cafe5
  { id: '17', name: 'Virgin Mojito', description: 'Non-alcoholic citrusy mint cooler.', price: 69, category: 'Mojitos', isVeg: true, image: imgCafe5 },
  { id: '18', name: 'Blue Lagoon', description: 'Vibrant blue lagoon mocktail, refreshingly cool.', price: 69, category: 'Mojitos', isVeg: true, image: imgCafe5 },
  { id: '18b', name: 'Mango Moj', description: 'Tropical mango mojito with a minty finish.', price: 69, category: 'Mojitos', isVeg: true, image: imgCafe5 },
  { id: '18c', name: 'Strawberry Mojito', description: 'Fruity strawberry mojito with a zingy twist.', price: 69, category: 'Mojitos', isVeg: true, image: imgCafe5 },
  { id: '18d', name: 'Masala Cold Drink', description: 'Spiced masala soda — a desi classic.', price: 59, category: 'Mojitos', isVeg: true, image: imgCafe5 },

  // Pizza — cafe6
  { id: '20', name: 'Cheese Pizza', description: 'Classic pizza loaded with rich, melted cheese.', price: 89, category: 'Pizza', isVeg: true, image: imgCafe6 },
  { id: '20b', name: 'Veg Pizza', description: 'Topped with fresh seasonal vegetables and cheese.', price: 99, category: 'Pizza', isVeg: true, image: imgCafe6 },
  { id: '20c', name: 'Cheese Onion Pizza', description: 'Caramelised onion with a generous cheese pull.', price: 99, category: 'Pizza', isVeg: true, image: imgCafe6 },
  { id: '21', name: 'Paneer Pizza', description: 'Spiced paneer tikka over a cheesy base.', price: 119, category: 'Pizza', isVeg: true, image: imgCafe6 },
  { id: '22', name: 'Chicken Pizza', description: 'Topped with tender grilled chicken and cheese.', price: 119, category: 'Pizza', isVeg: false, image: imgCafe6 },
  { id: '22b', name: 'Farmhouse Pizza', description: 'Loaded farmhouse toppings on a crispy crust.', price: 199, category: 'Pizza', isVeg: true, image: imgCafe6 },
  { id: '23', name: 'Chicken Volcano Pizza', description: 'Fiery chicken pizza with jalapeños and extra cheese.', price: 210, category: 'Pizza', isVeg: false, image: imgCafe6 },

  // Burgers — cafe2
  { id: '24', name: 'Veg Burger', description: 'Crispy vegetable patty with fresh lettuce and sauce.', price: 79, category: 'Burgers', isVeg: true, image: imgCafe2 },
  { id: '25', name: 'Chicken Burger', description: 'Juicy minced chicken patty with classic toppings.', price: 109, category: 'Burgers', isVeg: false, image: imgCafe2 },
  { id: '26', name: 'Paneer Burger', description: 'Spiced paneer patty stacked with veggies.', price: 109, category: 'Burgers', isVeg: true, image: imgCafe2 },
  { id: '26b', name: 'King Burger', description: 'Towering king-sized burger for a royal appetite.', price: 199, category: 'Burgers', isVeg: false, image: imgCafe2 },
  { id: '27', name: 'Cheese Blast Burger', description: 'Oozing with melted cheese in every bite.', price: 199, category: 'Burgers', isVeg: true, image: imgCafe2 },
  { id: '27b', name: 'Hawaiian Burger', description: 'Sweet pineapple meets savoury patty in perfect harmony.', price: 149, category: 'Burgers', isVeg: false, image: imgCafe2 },

  // Pasta — cafe4
  { id: '28', name: 'Veg White Sauce Pasta', description: 'Creamy and cheesy alfredo sauce pasta.', price: 149, category: 'Pasta', isVeg: true, image: imgCafe4 },
  { id: '29', name: 'Veg Red Sauce Pasta', description: 'Tangy tomato red sauce pasta with herbs.', price: 149, category: 'Pasta', isVeg: true, image: imgCafe4 },
  { id: '30', name: 'Mix Sauce Pasta', description: 'The best of both — red and white combined.', price: 199, category: 'Pasta', isVeg: true, image: imgCafe4 },
  { id: '30b', name: 'Peri Peri Pasta', description: 'Fiery peri-peri spiced pasta for heat lovers.', price: 50, category: 'Pasta', isVeg: true, image: imgCafe4 },
  { id: '31', name: 'Chicken Pasta', description: 'Your choice of sauce with tender chicken pieces.', price: 149, category: 'Pasta', isVeg: false, image: imgCafe4 },
  { id: '31b', name: 'Veg Maggi', description: 'Classic instant noodles loaded with veggies.', price: 40, category: 'Pasta', isVeg: true, image: imgCafe4 },

  // Sandwiches — cafe4
  { id: '32', name: 'Veg Sandwich', description: 'Fresh vegetables layered in toasted bread.', price: 69, category: 'Sandwiches', isVeg: true, image: imgCafe4 },
  { id: '32b', name: 'Veg Cheese Sandwich', description: 'Grilled sandwich with melted cheese and veggies.', price: 79, category: 'Sandwiches', isVeg: true, image: imgCafe4 },
  { id: '32c', name: 'Paneer Cheese Sandwich', description: 'Spicy paneer with cheese on grilled bread.', price: 89, category: 'Sandwiches', isVeg: true, image: imgCafe4 },
  { id: '33', name: 'Chicken Grill Sandwich', description: 'Succulent grilled chicken with special house spread.', price: 99, category: 'Sandwiches', isVeg: false, image: imgCafe4 },
  { id: '33b', name: 'Chicken BBQ Sandwich', description: 'Smoky BBQ chicken in soft toasted bread.', price: 109, category: 'Sandwiches', isVeg: false, image: imgCafe4 },
  { id: '34', name: 'Tandoori Chicken Sandwich', description: 'Spicy marinated tandoori chicken in grilled bread.', price: 109, category: 'Sandwiches', isVeg: false, image: imgCafe4 },

  // Fries — cafe4
  { id: '35', name: 'French Fry', description: 'Crispy golden potato fries.', price: 69, category: 'Fries', isVeg: true, image: imgCafe4 },
  { id: '35b', name: 'Masala French Fry', description: 'Golden fries tossed in tangy masala spice.', price: 69, category: 'Fries', isVeg: true, image: imgCafe4 },
  { id: '36', name: 'Cheese Corn Nuggets', description: 'Crispy nuggets stuffed with cheese and sweet corn.', price: 79, category: 'Fries', isVeg: true, image: imgCafe4 },
  { id: '37', name: 'Veg Finger', description: 'Crunchy vegetable fingers, great for snacking.', price: 79, category: 'Fries', isVeg: true, image: imgCafe4 },
  { id: '38', name: 'Spring Roll', description: 'Golden crispy rolls filled with spiced vegetables.', price: 99, category: 'Fries', isVeg: true, image: imgCafe4 },
  { id: '38b', name: 'Aloo Tikki', description: 'Spiced potato patties, shallow fried to crisp perfection.', price: 79, category: 'Fries', isVeg: true, image: imgCafe4 },

  // Chicken Snacks — cafe1
  { id: '39', name: 'Fish Fry', description: 'Crispy golden fried fish, one piece.', price: 99, category: 'Chicken Snacks', isVeg: false, image: imgCafe1 },
  { id: '39b', name: 'Fish Finger', description: 'Crunchy battered fish fingers, 4 pieces.', price: 119, category: 'Chicken Snacks', isVeg: false, image: imgCafe1 },
  { id: '40', name: 'Chicken Nuggets', description: 'Bite-sized crispy fried chicken nuggets, 6 pcs.', price: 89, category: 'Chicken Snacks', isVeg: false, image: imgCafe1 },
  { id: '40b', name: 'Chicken Wings', description: 'Spicy, crunchy, and irresistible chicken wings, 2 pcs.', price: 99, category: 'Chicken Snacks', isVeg: false, image: imgCafe1 },
  { id: '41', name: 'Chicken Sikhi Kebab', description: 'Juicy minced chicken kebabs off the skewer.', price: 109, category: 'Chicken Snacks', isVeg: false, image: imgCafe1 },
  { id: '42', name: 'Chicken Spring Roll', description: 'Golden rolls filled with spiced chicken, 4 pcs.', price: 119, category: 'Chicken Snacks', isVeg: false, image: imgCafe1 },

  // Desserts — cafe7
  { id: '43', name: 'Chocolate Ice Cream', description: 'Rich chocolate ice cream scoop.', price: 69, category: 'Desserts', isVeg: true, image: imgCafe7 },
  { id: '44', name: 'Vanilla Ice Cream', description: 'Classic creamy vanilla scoop.', price: 69, category: 'Desserts', isVeg: true, image: imgCafe7 },
  { id: '45', name: 'Mango Ice Cream', description: 'Fruity mango ice cream scoop.', price: 69, category: 'Desserts', isVeg: true, image: imgCafe7 },
  { id: '46', name: 'Butterscotch Ice Cream', description: 'Crunchy butterscotch scoop.', price: 69, category: 'Desserts', isVeg: true, image: imgCafe7 },
  { id: '47', name: 'Mixed Scoop', description: 'Your choice of any two flavours.', price: 149, category: 'Desserts', isVeg: true, image: imgCafe7 },
  { id: '48', name: 'Tutti Frutti Ice Cream', description: 'Classic fruit studded ice cream sundae.', price: 149, category: 'Desserts', isVeg: true, image: imgCafe7 },
];
