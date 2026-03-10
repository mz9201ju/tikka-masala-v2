// ✅ YOUR MENU DATA (MOVE IT HERE)
import AlooChole from '../../assets/Aloo-Chole.jpg';
import AlooGobi from '../../assets/Aloo-Gobi.webp';
import BainganBharta from '../../assets/Baingan-Bharta.webp';
import ButterShrimp from '../../assets/Butter-Shrimp.webp';
import ChiliChickenWings from '../../assets/Chili-Chicken-Wings.jpg';
import CreamyCoconutShrimp from '../../assets/Creamy-Coconut-Shrimp.webp';
import DaalMakhani from '../../assets/Daal-Makhani.webp';
import Naan from '../../assets/Naan.jpg';
import OnionKulchaRecipe from '../../assets/Onion-Kulcha-Recipe.jpg';
import GarlicBasilNaan from '../../assets/Garlic-Basil-Naan.jpg';
import GulabJamun from '../../assets/Gulab-Jamun.webp';
import HyderabadiBiryaniChicken from '../../assets/Hyderabadi-Biryani-(Chicken).webp';
import HyderabadiBiryaniLamb from '../../assets/Hyderabadi-Biryani-(Lamb).jpg';
import HyderabadiBiryaniVegetable from '../../assets/Hyderabadi-Biryani-(Vegetable).webp';
import HyderabadiShrimpBiryani from '../../assets/Hyderabadi-Shrimp-Biryani.jpg';
import KeemaNaan from '../../assets/Keema-Naan.webp';
import Kheer from '../../assets/Kheer.webp';
import LentilSoup from '../../assets/Lentil-Soup.webp';
import MangoChutney from '../../assets/Mango-Chutney.webp';
import MangoIceCream from '../../assets/Mango-Ice-Cream.jpg';
import MixedPickle from '../../assets/Mixed-Pickle.jpg';
import Raita from '../../assets/Raita.jpg';
import SaagPaneer from '../../assets/Saag-Paneer.jpg';
import ShahiPaneer from '../../assets/Shahi-Paneer.jpg';
import ShrimpJalfrazie from '../../assets/Shrimp-Jalfrazie.webp';
import ShrimpSaag from '../../assets/Shrimp-Saag.webp';
import ShrimpTikkaMasala from '../../assets/Shrimp-Tikka-Masala.webp';
import VegetableSalad from '../../assets/Vegetable-Salad.jpg';
import VegetableSamosa from '../../assets/Vegetable-Samosa.jpg';
import VeggePakora from '../../assets/vegge-pakora.jpg';
import ChickenPakora from '../../assets/chicken-pakora.jpg';

const MENU = [

  // =====================
  // APPETIZERS
  // =====================
  {
    id: 1,
    name: "Vegetable Pakoras",
    desc: "Fresh vegetables battered and deep fried.",
    price: 4.99,
    category: "Appetizers",
    image: VeggePakora,
  },
  {
    id: 2,
    name: "Chicken Pakoras",
    desc: "Boneless chicken fritters served with mint chutney.",
    price: 5.99,
    category: "Appetizers",
    image: ChickenPakora,
  },
  {
    id: 3,
    name: "Chili Chicken Wings",
    desc: "Spicy yogurt-marinated wings fried crispy.",
    price: 9.50,
    category: "Appetizers",
    image: ChiliChickenWings,
  },
  {
    id: 4,
    name: "Vegetable Samosa",
    desc: "Triangle pastry stuffed with vegetables & potatoes.",
    price: 5.50,
    category: "Appetizers",
    image: VegetableSamosa,
  },
  {
    id: 5,
    name: "Mixed Appetizer For Two",
    desc: "Samosa chicken pakora. vegetable pakorn, veg. Samosa. onion bhaji.",
    price: 12.98,
    category: "Appetizers",
    image: "",
  },
  {
    id: 6,
    name: "Onion Bhaji",
    desc: "Onion rings in batter. deep fried and served with mint sauce.",
    price: 8.78,
    category: "Appetizers",
    image: "",
  },
  {
    id: 7,
    name: "Shrimp Cocktail",
    desc: "Prawns sautéed and served with a cognac dressing dip ... Bukhara Style'.",
    price: 11.35,
    category: "Appetizers",
    image: "",
  },
  

  // =====================
  // SOUPS & SALADS
  // =====================
  {
    id: 8,
    name: "Vegetable Salad",
    desc: "Traditional Indian salad with tomatoes & dressing.",
    price: 10.88,
    category: "Salads",
    image: VegetableSalad,
  },
  {
    id: 9,
    name: "Bukhara Salad",
    desc: "Romaine and iceberg lettuce with a spiced Indian Dressing topped with pieces of Tandoori baked chicken.",
    price: 10.88,
    category: "Salads",
    image: "",
  },
  {
    id: 10,
    name: "Prawn Salad",
    desc: "Romaine and head lettuce with Jumbo Tandoori Prawns. Black Night Dressing and sea.me seeds.",
    price: 11.93,
    category: "Salads",
    image: "",
  },

  // =====================
  // Lamb Specialies
  // =====================
  {
    id: 13,
    name: "Butter Lamb",
    desc: "Boneless lamb marinated in ginger, yogurt and butter, then cooked in Tandoor oven and simmered in special sauce.",
    price: 21.89,
    category: "Lamb-Special",
    image: "",
  },
  {
    id: 14,
    name: "Lamb Saag",
    desc: "Boneless lamb cooked with spinach and Indian spices. A specialty from Goa. Lamb cooked with vinegar, spices and potatoes in spiced gravy.",
    price: 21.89,
    category: "Lamb-Special",
    image: "",
  },
  {
    id: 15,
    name: "Bukhara's Curry Lamb Roghan Josh",
    desc: "Lamb cooked with fresh tomatoes. ground onions. ginger, garlic and Indian spices.",
    price: 21.89,
    category: "Lamb-Special",
    image: "",
  },
  {
    id: 16,
    name: "Lamb Jalrraizie",
    desc: "Lamb pieces marinated with fish ground spices and sautéed with tomatoes, bell peppers and mushrooms.",
    price: 21.89,
    category: "Lamb-Special",
    image: "",
  },
  {
    id: 17,
    name: "Lamb Tikka Masala",
    desc: "Boneless lamb marinated in ginger. yogurt and spices cooked in Tandoor oven, then simmered in sauce.",
    price: 21.89,
    category: "Lamb-Special",
    image: "",
  },
  {
    id: 18,
    name: "Creamy Coconut Lamb Curry",
    desc: "Boneless lamb marinated in ginger, yogurt and creamy coconut, then cooked in Tandoor oven and simmered in special sauce.",
    price: 21.89,
    category: "Lamb-Special",
    image: "",
  },
  {
    id: 19,
    name: "Lamb Vindaloo",
    desc: "Lamb cooked in our special sauce with mushrooms and bell peppers",
    price: 21.89,
    category: "Lamb-Special",
    image: "",
  },

  // =====================
  // Lamb
  // =====================

  {
    id: 20,
    name: "Lamb Kashmiri",
    desc: "Lamb breast marinated in our special creamy sauce, ginger, garlic and special Indian spices (topped with egg).",
    price: 25.04,
    category: "Lamb",
    image: "",
  },
  {
    id: 21,
    name: "Lamb Haryalli",
    desc: "Lamb breast marinated in our special creamy sauce, ginger, garlic and special Indian spices (topped with egg).",
    price: 25.04,
    category: "Lamb",
    image: "",
  },
  {
    id: 22,
    name: "Dhani Lamb",
    desc: "Saucy bite sized pieces of lamb, curried in golden brown onion, 'fresh tomatoes, slowly simmered in garlic, yogurt and whip cream sauce.",
    price: 25.04,
    category: "Lamb",
    image: "",
  },
  {
    id: 23,
    name: "Lamb Takatak",
    desc: "Lamb breast marinated in our special tomato sauce. ginger, garlic, Julian onions. bell peppers and special Indian spices (topped with egg).",
    price: 25.04,
    category: "Lamb",
    image: "",
  },
  {
    id: 24,
    name: "Lamb Shahjahani",
    desc: "Lamb marinated in our special creamy sauce, ginger, garlic pineapple and special Indian spices (topped with an egg).",
    price: 25.04,
    category: "Lamb",
    image: "",
  },
  {
    id: 25,
    name: "Lamb Maharani",
    desc: "Lamb marinated in our special tomato sauce. mushrooms and special Indian spices (topped with egg).",
    price: 25.04,
    category: "Lamb",
    image: "",
  },

  // =====================
  // Chicken Specialties
  // =====================
  {
    id: 26,
    name: "Chicken Tikka Masala",
    desc: "Boneless chicken marinated in ginger, yoghurt and spices. then cooked in Tandoor oven and simmered in sauce.",
    price: 23.99,
    category: "Chicken-Special",
    image: "",
  },
  {
    id: 27,
    name: "Creamy Coconut Chicken Curry",
    desc: "Boneless chicken marinated in ginger, yogurt and creamy coconut, then cooked in Tandoor oven and simmered in special sauce.",
    price: 23.99,
    category: "Chicken-Special",
    image: "",
  },
  {
    id: 28,
    name: "Butter Chicken",
    desc: "Boneless chicken marinated in ginger. yogurt and spices, then cooked in the Tandoor oven and simmered in special sauce.",
    price: 23.99,
    category: "Chicken-Special",
    image: "",
  },
  {
    id: 29,
    name: "Chicken Saag",
    desc: "Boneless chicken cooked with spinach and Indian spices.",
    price: 23.99,
    category: "Chicken-Special",
    image: "",
  },
  {
    id: 30,
    name: "Chicken Vindaloo",
    desc: "A speciality from Goa. Chicken cooked with vinegar, spices and potatoes in spiced gravy.",
    price: 23.99,
    category: "Chicken-Special",
    image: "",
  },
  {
    id: 31,
    name: "Chicken Jalfraizie",
    desc: "Chicken pieces marinated with fresh ground spices and sn.uteed with tomatoes. bell peppers and mushrooms.",
    price: 23.99,
    category: "Chicken-Special",
    image: "",
  },
  {
    id: 32,
    name: "Special Chicken Mumtaz",
    desc: "Chicken breast, spinach leaves. sauce with cashew nuts. onions tomatoes and Indian spices",
    price: 23.99,
    category: "Chicken-Special",
    image: "",
  },
  {
    id: 33,
    name: "Bukhara's Curry Chicken",
    desc: "Chicken cooked in our special sauce with mushrroms and bell peppers.",
    price: 23.99,
    category: "Chicken-Special",
    image: "",
  },
  {
    id: 34,
    name: "Chicken Roghan Josh",
    desc: "Chicken cooked with fresh tomato. ground spices and sauteed with tomatoes. bell peppers and mushrooms.",
    price: 23.99,
    category: "Chicken-Special",
    image: "",
  },

  // =====================
  // Chicken
  // =====================
  {
    id: 35,
    name: "Chicken Kashmiri",
    desc: "Chicken breast marinated in our special creamy sauce. ginger,garlic and special Indian spices (topped with egg).",
    price: 23.99,
    category: "Chicken",
    image: "",
  },
  {
    id: 36,
    name: "Chicken Haryalli",
    desc: "Chicken breast marinated in our special green creamy sauce, ginger,garlic and special Indian spices (topped with egg).",
    price: 23.99,
    category: "Chicken",
    image: "",
  },
  {
    id: 37,
    name: "Chicken Shahjahani",
    desc: "Chicken breast marinated in our special creamy sauce. ginger.garlicpine apple and special Indian spices (topped with egg).",
    price: 23.99,
    category: "Chicken",
    image: "",
  },
  {
    id: 38,
    name: "Chicken Takatak",
    desc: "Chicken breast marinated in our special tomato sauce, ginger.garlic.Julian onions, bell peppers and special Indian spices (topped with egg).",
    price: 23.99,
    category: "Chicken",
    image: "",
  },
  {
    id: 39,
    name: "Chicken Maharani",
    desc: "Chicken breast marinated in our special tomato sauce, mushroomsand special Indian spices (topped with egg).",
    price: 23.99,
    category: "Chicken",
    image: "",
  },
  {
    id: 40,
    name: "Dhani Chicken",
    desc: "Saucy bite sized pieces of chicken. curried in golden brown onion. freshtomatoes, slowly simmered in garlic, yougurt. and whip cream sauce.",
    price: 23.99,
    category: "Chicken",
    image: "",
  },

  // =====================
  // Pasta Dishes
  // =====================
  {
    id: 41,
    name: "Chicken E Bukhara",
    desc: "Angel hair pasta with sauced chicken pieces in a light garlic cream sauce.",
    price: 19.54,
    category: "Pasta",
    image: "",
  },
  {
    id: 42,
    name: "Seafood Pasta",
    desc: "Angel hair pasta and halibut in alight garlic cream sauce.",
    price: 20.59,
    category: "Pasta",
    image: "",
  },
  {
    id: 43,
    name: "Shrimp E Bukhara",
    desc: "Angel hair pasta with sauced shrimp in a light garlic cream sauce.",
    price: 19.54,
    category: "Pasta",
    image: "",
  },
  {
    id: 44,
    name: "Angel Hair Pasta",
    desc: "Angel hair pasta with mixed vegetables in alight, curried, garlic cream sauce.",
    price: 18.49,
    category: "Pasta",
    image: "",
  },

  // =====================
  // Tandoori Specialties
  // =====================
  {
    id: 45,
    name: "Iranian Kebab",
    desc: "Chicken pieces marinated with yogurt and cashew nut paste.",
    price: 18.49,
    category: "Tandoori-Special",
    image: "",
  },
  {
    id: 46,
    name: "Tandoori Mixed Combo",
    desc: "A combination of chicken, lamb, fish, rack of lamb and prawns with our special sauces.",
    price: 18.49,
    category: "Tandoori-Special",
    image: "",
  },
  {
    id: 47,
    name: "Chicken Tandoori",
    desc: "Half a spring chicken, roasted in the Tandoori oven.",
    price: 18.49,
    category: "Tandoori-Special",
    image: "",
  },
  {
    id: 48,
    name: "Rack of Lamb",
    desc: "Rack of lamb.served French Style.with our special sauce.",
    price: 18.49,
    category: "Tandoori-Special",
    image: "",
  },
  {
    id: 49,
    name: "Chicken Tikka",
    desc: "Boneless chicken pieces marinated in our unique spicy yogurt sauce.",
    price: 18.49,
    category: "Tandoori-Special",
    image: "",
  },
  {
    id: 50,
    name: "Lamb Boti Kebab",
    desc: "Pieces of tender lamb leg meat with a spicy yogurt sauce.",
    price: 18.49,
    category: "Tandoori-Special",
    image: "",
  },
  {
    id: 51,
    name: "Tandoori Prawns",
    desc: "Prawns marinated with herbs and spices and boiled in Tandoori oven.",
    price: 18.49,
    category: "Tandoori-Special",
    image: "",
  },
  {
    id: 52,
    name: "Halibut Tandoori",
    desc: "Filet of halibut, marinated with spices and herbs.topped with a tropical fruit relish.",
    price: 18.49,
    category: "Tandoori-Special",
    image: "",
  },
  {
    id: 53,
    name: "Tandoori Mixed Vegetables",
    desc: "Cottage cheese. zucchini, mushroom, cauliflower.bell pepper, onion and potato.",
    price: 18.49,
    category: "Tandoori-Special",
    image: "",
  },

  // =====================
  // VEGETARIAN DISHES
  // =====================
  {
    id: 54,
    name: "Baingan Bharta",
    desc: "Fire-roasted mashed eggplant with spices.",
    price: 18.49,
    category: "Vegetarian",
    image: BainganBharta,
  },
  {
    id: 55,
    name: "Aloo Gobi",
    desc: "Cauliflower & potatoes in house spices.",
    price: 18.49,
    category: "Vegetarian",
    image: AlooGobi,
  },
  {
    id: 56,
    name: "Shabnam Masala",
    desc: "A perfect mix, of mushrooms and onions cooked with spices.",
    price: 18.49,
    category: "Vegetarian",
    image: "",
  },
  {
    id: 57,
    name: "Shahi Paneer",
    desc: "Paneer in creamy tomato sauce.",
    price: 18.49,
    category: "Vegetarian",
    image: ShahiPaneer,
  },
  {
    id: 58,
    name: "Navaratao Korma",
    desc: "Nine kinds of mixed vegetables cooked with cheese and nuts in a mild cream sauce.",
    price: 18.49,
    category: "Vegetarian",
    image: "",
  },
  {
    id: 59,
    name: "Daal Makhani",
    desc: "Slow cooked lentils in buttery masala.",
    price: 18.49,
    category: "Vegetarian",
    image: DaalMakhani,
  },
  {
    id: 60,
    name: "Saag Paneer",
    desc: "Spinach puree with homemade paneer.",
    price: 18.49,
    category: "Vegetarian",
    image: SaagPaneer,
  },
  {
    id: 61,
    name: "Saag Aalu",
    desc: "Spinach and potatoes cooked with garlic and ginger.",
    price: 18.49,
    category: "Vegetarian",
    image: "",
  },
  {
    id: 62,
    name: "Matter Paneer",
    desc: "Homemade fresh cheese with green peas cooked with onions, tomatoes and spices.",
    price: 18.49,
    category: "Vegetarian",
    image: "",
  },
  {
    id: 63,
    name: "Aalu Matter",
    desc: "Potatoes and green peas in spiced gravy.",
    price: 18.49,
    category: "Vegetarian",
    image: "",
  },
  {
    id: 64,
    name: "Malai Kofta",
    desc: "Minced paneer and potato balls stuffed with dried fruits in a mild cream sauce.",
    price: 18.49,
    category: "Vegetarian",
    image: "",
  },
  {
    id: 65,
    name: "Aloo Chole",
    desc: "Chickpeas and potatoes Punjabi style.",
    price: 18.49,
    category: "Vegetarian",
    image: AlooChole,
  },
  {
    id: 66,
    name: "Shahi Vegetable",
    desc: "Nine kinds of fresh vegetable cooked in spinach puree.",
    price: 18.49,
    category: "Vegetarian",
    image: "",
  },

  // =====================
  // SEAFOOD DISHES
  // =====================
  {
    id: 67,
    name: "Butter Shrimp",
    desc: "Shrimp in creamy butter tomato sauce.",
    price: 20.59,
    category: "Seafood",
    image: ButterShrimp,
  },
  {
    id: 68,
    name: "Shrimp Saag",
    desc: "Shrimp cooked with spinach & Indian spices.",
    price: 20.59,
    category: "Seafood",
    image: ShrimpSaag,
  },
  {
    id: 69,
    name: "Shrimp Jalfrazie",
    desc: "Shrimp sautéed with bell peppers & onions.",
    price: 20.59,
    category: "Seafood",
    image: ShrimpJalfrazie,
  },
  {
    id: 70,
    name: "Shrimp Tikka Masala",
    desc: "Shrimp cooked in rich masala sauce.",
    price: 20.59,
    category: "Seafood",
    image: ShrimpTikkaMasala,
  },
  {
    id: 71,
    name: "Creamy Coconut Shrimp",
    desc: "Shrimp simmered in coconut curry.",
    price: 20.59,
    category: "Seafood",
    image: CreamyCoconutShrimp,
  },
  {
    id: 72,
    name: "Shrimp Vindaloo",
    desc: "A specially from Goa. Jumbo Prawns cooked in vinegar, spices and potatoes in spiced gravy.",
    price: 20.59,
    category: "Seafood",
    image: "",
  },

  // =====================
  // Specialty Curries
  // =====================
  {
    id: 73,
    name: "Halibut Masala",
    desc: "Salfron flavored rice with fresh vegetables, fried fruit; and nuts served with raita.",
    price: 20.59,
    category: "Specialty-Curries",
    image: "",
  },
  {
    id: 74,
    name: "Creamy Coconut Curry Chicken",
    desc: "Creamy coconut curry chicken.",
    price: 19.54,
    category: "Specialty-Curries",
    image: "",
  },
  {
    id: 75,
    name: "Creamy Coconut Curry Lamb",
    desc: "Creamy Coconut Curry Lamb",
    price: 20.59,
    category: "Specialty-Curries",
    image: "",
  },
  {
    id: 76,
    name: "Lamb Shahi Korma",
    desc: "Basmati rice cooked with fish. crab. shrimp p, scallops & fresh spices.",
    price: 20.59,
    category: "Specialty-Curries",
    image: "",
  },
  {
    id: 77,
    name: "Creamy Coconut Curry Shrimp",
    desc: "Creamy Coconut Curry Shrimp",
    price: 20.59,
    category: "Specialty-Curries",
    image: "",
  },
  {
    id: 78,
    name: "Creamy Coconut Curry Fish",
    desc: "Creamy Coconut Curry Fish",
    price: 19.54,
    category: "Specialty-Curries",
    image: "",
  },

  // =====================
  // RICE SPECIALTIES
  // =====================
  {
    id: 79,
    name: "Hyderabadi Biryani (Vegetable)",
    desc: "Saffron rice with vegetables.",
    price: 16.99,
    category: "Rice",
    image: HyderabadiBiryaniVegetable,
  },
  {
    id: 80,
    name: "Hyderabadi Biryani (Chicken)",
    desc: "Classic chicken dum biryani.",
    price: 20.84,
    category: "Rice",
    image: HyderabadiBiryaniChicken,
  },
  {
    id: 81,
    name: "Hyderabadi Biryani (Lamb)",
    desc: "Traditional lamb biryani.",
    price: 20.59,
    category: "Rice",
    image: HyderabadiBiryaniLamb,
  },
  {
    id: 82,
    name: "Hyderabadi Biryani (Shrimp)",
    desc: "Shrimp biryani with aromatic spices.",
    price: 20.59,
    category: "Rice",
    image: HyderabadiShrimpBiryani,
  },
  {
    id: 83,
    name: "Seafood Biryani",
    desc: "Basmati rice cooked with fish, crab, shrimp, scalllops & fish spices.",
    price: 23.74,
    category: "Rice",
    image: "",
  },
  {
    id: 84,
    name: "Kashmiri Pulao",
    desc: "Salfron flavored rice with fresh vegetables, fried fruit; and nuts served with raita.",
    price: 18.49,
    category: "Rice",
    image: "",
  },

  // =====================
  // INDIAN BREAD
  // =====================
  {
    id: 85,
    name: "Naan",
    desc: "Traditional white flour flatbread.",
    price: 2.99,
    category: "Bread",
    image: Naan,
  },
  {
    id: 86,
    name: "Onion Naan",
    desc: "Naan topped with diced onions.",
    price: 3.99,
    category: "Bread",
    image: OnionKulchaRecipe,
  },
  {
    id: 87,
    name: "Garlic & Basil Naan",
    desc: "Fresh garlic and basil naan.",
    price: 3.99,
    category: "Bread",
    image: GarlicBasilNaan,
  },
  {
    id: 88,
    name: "Potato Naan",
    desc: "Naan stuffed with spiced potatoes and peas.",
    price: 3.99,
    category: "Bread",
    image: "",
  },
  {
    id: 89,
    name: "Paneer Naan",
    desc: "Naan stuffed with homemade Indian cheese and spices.",
    price: 3.99,
    category: "Bread",
    image: "",
  },
  {
    id: 90,
    name: "Kabuli Naan",
    desc: "Naan filled with almonds, cashews, pistachios and dried cherries.",
    price: 3.99,
    category: "Bread",
    image: "",
  },
  {
    id: 91,
    name: "Roti",
    desc: "Unleavened whole wheat bread.",
    price: 3.99,
    category: "Bread",
    image: "",
  },
  {
    id: 92,
    name: "Paratha",
    desc: "Unleavened whole wheat bread in multiple layers.",
    price: 3.99,
    category: "Bread",
    image: "",
  },
  {
    id: 93,
    name: "Chicken Naan",
    desc: "Naan stuffed with minced chicken.",
    price: 3.99,
    category: "Bread",
    image: "",
  },
  {
    id: 94,
    name: "Broccoli Paratha",
    desc: "Paratha stuffed with seasoned broccoli.",
    price: 3.99,
    category: "Bread",
    image: "",
  },
  {
    id: 95,
    name: "Keema Naan",
    desc: "Stuffed naan with spiced minced lamb.",
    price: 4.99,
    category: "Bread",
    image: KeemaNaan,
  },

  // =====================
  // SOAP
  // =====================
  {
    id: 96,
    name: "Lentil Soup",
    desc: "Traditional Indian soup of lentils & spices.",
    price: 5.95,
    category: "Soup",
    image: LentilSoup,
  },
  {
    id: 97,
    name: "Spicy Critina Soup",
    desc: "Chicken, mixed vegetables, chil i, corn starch, tomatoes with our special Indian spices.",
    price: 9.83,
    category: "Soup",
    image: "",
  },
  {
    id: 98,
    name: "Mulligatawny",
    desc: "A classic Indian soup of apples and curry.",
    price: 9.83,
    category: "Soup",
    image: "",
  },
  {
    id: 99,
    name: "Shrimp Soup",
    desc: "Shrimp and Spinach soup with celery. leeks and spices, the 'chefs favourite'.",
    price: 9.83,
    category: "Soup",
    image: "",
  },

  // =====================
  // SIDE ORDERS
  // =====================
  {
    id: 100,
    name: "Raita",
    desc: "Yogurt dip with cucumbers & carrots.",
    price: 3.95,
    category: "Sides",
    image: Raita,
  },
  {
    id: 101,
    name: "Mango Chutney",
    desc: "Sweet mango Indian chutney.",
    price: 3.25,
    category: "Sides",
    image: MangoChutney,
  },
  {
    id: 102,
    name: "Mixed Pickle",
    desc: "Traditional Indian mixed pickle.",
    price: 3.50,
    category: "Sides",
    image: MixedPickle,
  },

  // =====================
  // DESSERTS
  // =====================
  {
    id: 103,
    name: "Mango Ice Cream",
    desc: "Homemade mango ice cream with pistachio.",
    price: 4.95,
    category: "Desserts",
    image: MangoIceCream,
  },
  {
    id: 104,
    name: "Gulab Jamun",
    desc: "Milk dumplings soaked in rose syrup.",
    price: 3.95,
    category: "Desserts",
    image: GulabJamun,
  },
  {
    id: 105,
    name: "Kheer",
    desc: "Traditional rice pudding with cardamom.",
    price: 3.95,
    category: "Desserts",
    image: Kheer,
  },

  // =====================
  // Beverages & Drinks
  // =====================
  {
    id: 106,
    name: "Cola Drinks",
    desc: "Pepsi, Cokacola, etc.",
    price: 5.63,
    category: "Beverages-Drinks",
    image: "",
  },
  {
    id: 107,
    name: "Cold Tea",
    desc: "Milk dumplings soaked in rose syrup.",
    price: 6.15,
    category: "Beverages-Drinks",
    image: "",
  },

];

export default MENU;