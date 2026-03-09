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

  // =====================
  // SOUPS & SALADS
  // =====================
  {
    id: 5,
    name: "Vegetable Salad",
    desc: "Traditional Indian salad with tomatoes & dressing.",
    price: 7.50,
    category: "Salads",
    image: VegetableSalad,
  },
  {
    id: 6,
    name: "Lentil Soup",
    desc: "Traditional Indian soup of lentils & spices.",
    price: 5.95,
    category: "Soup",
    image: LentilSoup,
  },

  // =====================
  // SIDE ORDERS
  // =====================
  {
    id: 7,
    name: "Raita",
    desc: "Yogurt dip with cucumbers & carrots.",
    price: 3.95,
    category: "Sides",
    image: Raita,
  },
  {
    id: 8,
    name: "Mango Chutney",
    desc: "Sweet mango Indian chutney.",
    price: 3.25,
    category: "Sides",
    image: MangoChutney,
  },
  {
    id: 9,
    name: "Mixed Pickle",
    desc: "Traditional Indian mixed pickle.",
    price: 3.50,
    category: "Sides",
    image: MixedPickle,
  },

  // =====================
  // VEGETARIAN DISHES
  // =====================
  {
    id: 10,
    name: "Baingan Bharta",
    desc: "Fire-roasted mashed eggplant with spices.",
    price: 15.50,
    category: "Vegetarian",
    image: BainganBharta,
  },
  {
    id: 11,
    name: "Aloo Gobi",
    desc: "Cauliflower & potatoes in house spices.",
    price: 14.99,
    category: "Vegetarian",
    image: AlooGobi,
  },
  {
    id: 12,
    name: "Shahi Paneer",
    desc: "Paneer in creamy tomato sauce.",
    price: 14.99,
    category: "Vegetarian",
    image: ShahiPaneer,
  },
  {
    id: 13,
    name: "Aloo Chole",
    desc: "Chickpeas and potatoes Punjabi style.",
    price: 14.99,
    category: "Vegetarian",
    image: AlooChole,
  },
  {
    id: 14,
    name: "Daal Makhani",
    desc: "Slow cooked lentils in buttery masala.",
    price: 15.50,
    category: "Vegetarian",
    image: DaalMakhani,
  },
  {
    id: 15,
    name: "Saag Paneer",
    desc: "Spinach puree with homemade paneer.",
    price: 15.50,
    category: "Vegetarian",
    image: SaagPaneer,
  },

  // =====================
  // SEAFOOD DISHES
  // =====================
  {
    id: 16,
    name: "Shrimp Tikka Masala",
    desc: "Shrimp cooked in rich masala sauce.",
    price: 18.99,
    category: "Seafood",
    image: ShrimpTikkaMasala,
  },
  {
    id: 17,
    name: "Butter Shrimp",
    desc: "Shrimp in creamy butter tomato sauce.",
    price: 19.99,
    category: "Seafood",
    image: ButterShrimp,
  },
  {
    id: 18,
    name: "Creamy Coconut Shrimp",
    desc: "Shrimp simmered in coconut curry.",
    price: 18.99,
    category: "Seafood",
    image: CreamyCoconutShrimp,
  },
  {
    id: 19,
    name: "Shrimp Saag",
    desc: "Shrimp cooked with spinach & Indian spices.",
    price: 18.99,
    category: "Seafood",
    image: ShrimpSaag,
  },
  {
    id: 20,
    name: "Shrimp Jalfrazie",
    desc: "Shrimp sautéed with bell peppers & onions.",
    price: 18.99,
    category: "Seafood",
    image: ShrimpJalfrazie,
  },

  // =====================
  // RICE SPECIALTIES
  // =====================
  {
    id: 21,
    name: "Hyderabadi Biryani (Vegetable)",
    desc: "Saffron rice with vegetables.",
    price: 16.99,
    category: "Rice",
    image: HyderabadiBiryaniVegetable,
  },
  {
    id: 22,
    name: "Hyderabadi Biryani (Chicken)",
    desc: "Classic chicken dum biryani.",
    price: 17.99,
    category: "Rice",
    image: HyderabadiBiryaniChicken,
  },
  {
    id: 23,
    name: "Hyderabadi Biryani (Lamb)",
    desc: "Traditional lamb biryani.",
    price: 18.99,
    category: "Rice",
    image: HyderabadiBiryaniLamb,
  },
  {
    id: 24,
    name: "Hyderabadi Biryani (Shrimp)",
    desc: "Shrimp biryani with aromatic spices.",
    price: 18.99,
    category: "Rice",
    image: HyderabadiShrimpBiryani,
  },

  // =====================
  // INDIAN BREAD
  // =====================
  {
    id: 25,
    name: "Naan",
    desc: "Traditional white flour flatbread.",
    price: 2.99,
    category: "Bread",
    image: Naan,
  },
  {
    id: 26,
    name: "Onion Naan",
    desc: "Naan topped with diced onions.",
    price: 3.99,
    category: "Bread",
    image: OnionKulchaRecipe,
  },
  {
    id: 27,
    name: "Garlic & Basil Naan",
    desc: "Fresh garlic and basil naan.",
    price: 3.99,
    category: "Bread",
    image: GarlicBasilNaan,
  },
  {
    id: 28,
    name: "Keema Naan",
    desc: "Stuffed naan with spiced minced lamb.",
    price: 4.99,
    category: "Bread",
    image: KeemaNaan,
  },

  // =====================
  // DESSERTS
  // =====================
  {
    id: 29,
    name: "Mango Ice Cream",
    desc: "Homemade mango ice cream with pistachio.",
    price: 4.95,
    category: "Desserts",
    image: MangoIceCream,
  },
  {
    id: 30,
    name: "Gulab Jamun",
    desc: "Milk dumplings soaked in rose syrup.",
    price: 3.95,
    category: "Desserts",
    image: GulabJamun,
  },
  {
    id: 31,
    name: "Kheer",
    desc: "Traditional rice pudding with cardamom.",
    price: 3.95,
    category: "Desserts",
    image: Kheer,
  },

];

export default MENU;