import { MenuItem } from "@/data/menuData";
import { Eye } from "lucide-react";

// Import all images
import chickenCurry from "@/assets/chicken-curry.jpg";
import chickenPakora from "@/assets/chicken-pakora.jpg";
import vegetarian from "@/assets/vegetarian.jpg";
import biryani from "@/assets/biryani.jpg";
import bread from "@/assets/bread.jpg";
import rolls from "@/assets/rolls.jpg";
import vegRice from "@/assets/veg-rice.jpg";
import nonVegRice from "@/assets/non-veg-rice.jpg";
import chowmein from "@/assets/chowmein.jpg";
import vegchow from "@/assets/vegchow.jpg";
import eggchow from "@/assets/eggchow.jpg";
import chickenchow from "@/assets/chickenchow.png";
import eggchickenchow from "@/assets/eggchickenchow.png";
import pannerchow from "@/assets/pannerchow.png";
import mixchow from "@/assets/mixchow.jpg";
import eggrice from "@/assets/eggrice.png";
import chickenrice from "@/assets/chickenrice.png";
import mixedrice from "@/assets/mixedrice.png";
import vegrice from"@/assets/vegrice.png";
import paneerrice from"@/assets/paneerrice.png";
import vegpolao from"@/assets/vegpolao.png";
import jeerarice from"@/assets/jeerarice.png";
import lemonrice from"@/assets/lemonrice.png";
import eggroll from "@/assets/eggroll.png";
import eggchickenroll from "@/assets/eggchickenroll.png";
import chickenroll from "@/assets/chickenroll.png";
import dbeggroll from "@/assets/dbeggroll.png";
import paneerroll from "@/assets/paneerroll.png";
import lachharoll from "@/assets/lachharoll.png";
import nmroti from "@/assets/nmroti.png";
import aluparatha  from "@/assets/aluparatha.png";
import butternan from "@/assets/butternan.png";
import tandooriroti from "@/assets/tandooriroti.png";
import maslakulcha from "@/assets/maslakulcha.png";
import chickenbriyani from "@/assets/chickenbriyani.png";
import alubriyani from "@/assets/alu-biriyani.png";
import eggbriyani from "@/assets/egg-biriyani.avif";
import mixveg from "@/assets/mixveg.jpg";
import paneerbuttermasla from "@/assets/paneerbuttermasla.jpg";
import mushroomchilly from "@/assets/Mushroomchilly.avif";
import tadka from "@/assets/tadka.webp";
import mushroombuttermasla from "@/assets/mushroombuttermasla.jpg";
import paneerchilly from "@/assets/paneerchilly.jpg";
import chanamasla from "@/assets/chanamasla.jpg";
import aloogobi from "@/assets/aloogobi.jpeg";
import eggtadka from "@/assets/eggtadka.jpg";
import chickenpakora from "@/assets/chickenpakora.jpg";
import chickenlolipop from "@/assets/chickenlolipop.jpg";
import chickenmoglai from "@/assets/chickenmoglai.jpg";
import eggmoglai from "@/assets/eggmoglai.webp";
import chickenkosha from "@/assets/chickenkosha.webp";
import chillychicken from "@/assets/chillychicken.webp";
import chickenbuttermasla from "@/assets/chickenbuttermasla.jpg";
import kadaichicken from "@/assets/kadaichicken.webp";
import chickenpunjabi from "@/assets/chickenpunjabi.webp";
import chickenmanchurian from "@/assets/chickenmanchurian.jpg";
import chickenrezala from "@/assets/chickenrezala.jpg";
import chickenchap from "@/assets/ChickenChaap.jpg";
import chickenbharta from "@/assets/chickenbharta.jpeg";
import drychilichicken from "@/assets/drychilichicken.avif";
import chickenmomosteam from "@/assets/chickenmomosteam.jpg";
import frymomo from "@/assets/frymomo.webp";
import chickentikka from "@/assets/chickentikka.webp";
import chickenreshamikabab from "@/assets/chickenreshmikabab.jpg";
import chickenhariyalikabab from "@/assets/ChickenHariyaliKabab.jpg";
import chickenpharikabab from "@/assets/chickenpahari.webp";
import chickenlegpice from "@/assets/chickenlegpice.jpg";
import chickenstick from "@/assets/chickensick.jpg";
import chickenwings from "@/assets/chickenwings.webp";
import chickentandoor from "@/assets/chickentandoor.jpg";




interface MenuItemCardProps {
  item: MenuItem;
  onClick: () => void;
  variant?: "card" | "circle";
}

const imageMap: Record<string, string> = {
  "chicken-curry": chickenCurry,
  // "chicken-pakora": chickenPakora,
  "vegetarian": vegetarian,
  "biryani": biryani,
  "bread": bread,
  "rolls": rolls,
  // "veg-rice": vegRice,
  "non-veg-rice": nonVegRice,
  "chowmein": chowmein,
  "veg-chow":vegchow,
  "egg-chow":eggchow,
  "chicken-chow":chickenchow,
  "egg-chicken-chow":eggchickenchow,
  "panner-chow":pannerchow,
  "mix-chow":mixchow,
  "egg-rice":eggrice,
  "chicken-rice":chickenrice,
  "mixed-rice":mixedrice,
  "veg-rice":vegrice,
  "paneer-rice":paneerrice,
  "veg-polao":vegpolao,
  "jeera-rice":jeerarice,
  "lemon-rice":lemonrice,
  "egg-roll":eggroll,
  "egg-chicken-roll":eggchickenroll,
  "chicken-roll":chickenroll,
  "db-egg-roll":dbeggroll,
  "paneer-roll":paneerroll,
  "lachha-roll":lachharoll,
  "nm-roti":nmroti,
  "alu-paratha":aluparatha,
  "butter-nan":butternan,
  "tandoori-roti":tandooriroti,
  "masla-kulcha":maslakulcha,
  "chicken-briyani":chickenbriyani,
  "alu-briyani":alubriyani,
  "egg-briyani":eggbriyani,
  "mix-veg":mixveg,
  "paneer-butter-masla":paneerbuttermasla,
  "mushroom-chilly":mushroomchilly,
  "tadka":tadka,
  "mushroom-butter-masla":mushroombuttermasla,
  "paneer-chilly":paneerchilly,
  "chana-masla":chanamasla,
  "aloo-gobi":aloogobi,
  "egg-tadka":eggtadka,
  "chicken-pakora":chickenpakora,
  "chicken-lolipop":chickenlolipop,
  "chicken-moglai":chickenmoglai,
  "egg-moglai":eggmoglai,
  "chicken-kosha":chickenkosha,
  "chilly-chicken":chillychicken,
  "chicken-butter-masla":chickenbuttermasla,
  "kadai-chicken":kadaichicken,
  "chicken-punjabi":chickenpunjabi,
  "chicken-manchurian":chickenmanchurian,
  "chicken-rezala":chickenrezala,
  "chicken-chap":chickenchap,
  "chicken-bharta":chickenbharta,
  "dry-chili-chicken":drychilichicken,
  "chicken-momo-steam":chickenmomosteam,
  "fry-momo":frymomo,
  "chicken-tikka":chickentikka,
  "chicken-reshami-kabab":chickenreshamikabab,
  "chicken-hariyali-kabab":chickenhariyalikabab,
  "chicken-phari-kabab":chickenpharikabab,
  "chicken-leg-pice":chickenlegpice,
  "chicken-stick":chickenstick,
  "chicken-wings":chickenwings,
  "chicken-tandoor":chickentandoor,
  
};

const MenuItemCard = ({ item, onClick, variant = "card" }: MenuItemCardProps) => {
  const imageSrc = imageMap[item.image] || chickenCurry;

  if (variant === "circle") {
    return (
      <button
        onClick={onClick}
        className="group flex flex-col items-center gap-2 p-2 rounded-lg hover:bg-muted/50 transition-all duration-300 cursor-pointer"
      >
        <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
          <img
            src={imageSrc}
            alt={item.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="text-center">
          <h3 className="font-semibold text-sm sm:text-base text-foreground line-clamp-1">
            {item.name}
          </h3>
          <div className="flex items-center justify-center gap-0.5 text-primary font-bold text-sm sm:text-base mt-1">
            <span>₹{item.price}</span>
            {item.half && (
              <span className="text-xs text-muted-foreground ml-1">
                / ₹{item.half}
              </span>
            )}
          </div>
        </div>
      </button>
    );
  }

  return (
    <div 
      onClick={onClick}
      className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in border-2 border-border cursor-pointer group"
    >
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={imageSrc} 
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-2 group-hover:bg-primary group-hover:text-white transition-all">
          <Eye className="w-5 h-5" />
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5">
        <h3 className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors mb-2">
          {item.name}
        </h3>
        
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2 min-h-[40px]">
          {item.description}
        </p>

        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold text-primary">₹{item.price}</span>
          {item.half && (
            <span className="text-sm text-muted-foreground">
              (Half: ₹{item.half})
            </span>
          )}
        </div>

        <div className="mt-4 text-sm text-primary font-medium group-hover:underline flex items-center gap-2">
          <span>Click to view details & order</span>
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </div>
      </div>
    </div>
  );
};

export default MenuItemCard;