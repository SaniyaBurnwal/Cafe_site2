import interior1 from '@assets/489823663_3099534823558195_3389099971366225854_n_1784198757650.jpg';
import interior2 from '@assets/485783436_505775569266671_5601143029282379324_n_1784198757652.jpg';
import guitar    from '@assets/cafe9_1784197561371.jpg';

import img1  from '@assets/unnamed_(15)_1784198240330.webp'; // chocolate cold coffee
import img2  from '@assets/unnamed_(14)_1784198240331.webp'; // blue lagoon + green mojito
import img3  from '@assets/unnamed_(13)_1784198240333.webp'; // momos
import img4  from '@assets/unnamed_(12)_1784198240334.webp'; // exterior at night
import img5  from '@assets/unnamed_(11)_1784198240340.webp'; // cold coffee cup
import img6  from '@assets/unnamed_(10)_1784198240344.webp'; // drinks
import img7  from '@assets/unnamed_(9)_1784198240346.webp';  // food
import img8  from '@assets/unnamed_(8)_1784198240351.webp';  // café ambiance
import img9  from '@assets/unnamed_(7)_1784198240354.webp';  // food
import img10 from '@assets/unnamed_(6)_1784198240356.webp';  // drinks
import img11 from '@assets/unnamed_(5)_1784198240357.webp';  // food
import img12 from '@assets/unnamed_(4)_1784198240358.webp';  // café interior
import img13 from '@assets/unnamed_(3)_1784198240362.webp';  // food
import img14 from '@assets/unnamed_(2)_1784198240364.webp';  // drinks
import img15 from '@assets/unnamed_(1)_1784198240367.webp';  // food
import img16 from '@assets/unnamed_1784198240371.webp';      // café
import img17 from '@assets/unnamed_1784198240372.jpg';       // café

export const galleryImages = [
  // Café — interior, exterior, ambiance, guitar
  { src: interior1, category: 'Café', alt: 'Cup Sip Cafe interior — green turf & hanging bulbs' },
  { src: interior2, category: 'Café', alt: 'Cup Sip Cafe interior — neon sign & menu wall' },
  { src: guitar,    category: 'Café', alt: 'Guitar on the wall — café ambiance' },
  { src: img4,      category: 'Café', alt: 'Cup Sip Cafe exterior at night' },
  { src: img8,      category: 'Café', alt: 'Café ambiance' },
  { src: img12,     category: 'Café', alt: 'Café interior' },
  { src: img16,     category: 'Café', alt: 'Café moments' },
  { src: img17,     category: 'Café', alt: 'Cup Sip Cafe' },

  // Drinks only
  { src: img1,  category: 'Drinks', alt: 'Chocolate cold coffee drizzle' },
  { src: img2,  category: 'Drinks', alt: 'Blue lagoon and green mojito' },
  { src: img5,  category: 'Drinks', alt: 'Cup Sip signature cold coffee' },
  { src: img6,  category: 'Drinks', alt: 'Refreshing drinks' },
  { src: img10, category: 'Drinks', alt: 'Special beverage' },
  { src: img14, category: 'Drinks', alt: 'Cool drinks' },

  // Food only
  { src: img3,  category: 'Food', alt: 'Pan-fried momos with dipping sauce' },
  { src: img7,  category: 'Food', alt: 'Café special dish' },
  { src: img9,  category: 'Food', alt: 'Delicious food' },
  { src: img11, category: 'Food', alt: 'Café food' },
  { src: img13, category: 'Food', alt: 'Signature dish' },
  { src: img15, category: 'Food', alt: 'Café special' },
];

export const galleryCategories = ['All', 'Café', 'Drinks', 'Food'] as const;
