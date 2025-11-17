import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { MenuItem } from "@/data/menuData";
import { ShoppingCart, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import { useRestaurantHours } from "@/hooks/use-restaurant-hours";
import { Alert, AlertDescription } from "@/components/ui/alert";

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
import vegrice from"@/assets/vegrice.avif";
import paneerrice from"@/assets/paneerrice.png";
import vegpolao from"@/assets/vegpolao.png";
import jeerarice from"@/assets/jeerarice.png";
import lemonrice from"@/assets/lemonrice.png";
import eggroll from "@/assets/eggroll.jpg";
import eggchickenroll from "@/assets/eggchickenroll.png";
import chickenroll from "@/assets/chickenroll.png";
import dbeggroll from "@/assets/dbeggroll.png";
import paneerroll from "@/assets/paneerroll.png";
import lachharoll from "@/assets/lachharoll.png";
import nmroti from "@/assets/nmroti.png";
import aluparatha  from "@/assets/aluparatha.png";
import butternan from "@/assets/butternan.jpg";
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
import chickenchana from "@/assets/chickenchana.jpg";


interface MenuItemDialogProps {
  item: MenuItem | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
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
  "chickenchana":chickenchana,
};

const MenuItemDialog = ({ item, open, onOpenChange }: MenuItemDialogProps) => {
  const [quantity, setQuantity] = useState(1);
  const [portion, setPortion] = useState<"full" | "half">("full");
  const { addToCart } = useCart();
  const { toast } = useToast();
  const { isOpen: isRestaurantOpen, nextOpenTime, openingHours } = useRestaurantHours();

  if (!item) return null;

  const handleAddToCart = () => {
    addToCart(item, quantity, portion);
    toast({
      title: "Added to cart",
      description: `${item.name} ${item.half ? `(${portion})` : ''} × ${quantity}`,
    });
    onOpenChange(false);
    setQuantity(1);
    setPortion("full");
  };

  const imageSrc = imageMap[item.image] || chickenCurry;

  return (
    <Dialog open={open} onOpenChange={(isOpen) => {
      onOpenChange(isOpen);
      if (!isOpen) {
        setQuantity(1);
        setPortion("full");
      }
    }}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-foreground">
            {item.name}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
            <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
              <img 
                src={imageSrc} 
                alt={item.name}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>

            <DialogDescription className="text-base text-foreground/80 leading-relaxed">
              {item.description}
            </DialogDescription>

            {!isRestaurantOpen && (
              <Alert className="bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-800">
                <Clock className="h-4 w-4 text-red-600 dark:text-red-400" />
                <AlertDescription className="text-red-800 dark:text-red-200 font-medium">
                  Restaurant is currently closed. We open at {nextOpenTime}. Regular hours: {openingHours}
                </AlertDescription>
              </Alert>
            )}

            {item.half && (
              <div className="space-y-3 p-4 bg-muted/30 rounded-xl border-2 border-primary/10">
                <Label className="text-sm font-semibold text-foreground">Select Portion Size</Label>
                <RadioGroup 
                  value={portion} 
                  onValueChange={(value) => setPortion(value as "full" | "half")} 
                  className="flex gap-4"
                  disabled={!isRestaurantOpen}
                >
                  <div className="flex items-center space-x-2 flex-1">
                    <RadioGroupItem value="full" id="full" disabled={!isRestaurantOpen} />
                    <Label htmlFor="full" className={`cursor-pointer flex-1 text-sm ${!isRestaurantOpen ? 'opacity-50' : ''}`}>
                      Full - ₹{item.price}
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 flex-1">
                    <RadioGroupItem value="half" id="half" disabled={!isRestaurantOpen} />
                    <Label htmlFor="half" className={`cursor-pointer flex-1 text-sm ${!isRestaurantOpen ? 'opacity-50' : ''}`}>
                      Half - ₹{item.half}
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            )}

            <div className="flex items-baseline gap-3 pt-2">
              <span className="text-4xl font-bold text-primary">
                ₹{(portion === "half" && item.half ? item.half : item.price) * quantity}
              </span>
            </div>

            <div className="flex gap-3 items-stretch">
              <div className={`flex items-center gap-2 border-2 border-primary/20 rounded-xl px-3 bg-muted/30 ${!isRestaurantOpen ? 'opacity-50' : ''}`}>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1 || !isRestaurantOpen}
                  className="h-auto p-2 hover:bg-primary/10"
                >
                  <span className="text-xl font-bold text-primary">−</span>
                </Button>
                <span className="text-xl font-bold text-foreground min-w-[2rem] text-center">
                  {quantity}
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setQuantity(quantity + 1)}
                  disabled={!isRestaurantOpen}
                  className="h-auto p-2 hover:bg-primary/10"
                >
                  <span className="text-xl font-bold text-primary">+</span>
                </Button>
              </div>
              
              <Button
                onClick={handleAddToCart}
                disabled={!isRestaurantOpen}
                className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 text-lg rounded-xl transition-all duration-300 hover:shadow-xl hover:scale-105 gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isRestaurantOpen ? (
                  <>
                    <ShoppingCart className="w-5 h-5" />
                    Add to Cart
                  </>
                ) : (
                  <>
                    <Clock className="w-5 h-5" />
                    Closed
                  </>
                )}
              </Button>
            </div>
          </div>
      </DialogContent>
    </Dialog>
  );
};

export default MenuItemDialog;