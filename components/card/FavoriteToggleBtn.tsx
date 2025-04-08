import { Heart } from "lucide-react";
import { Button } from "../ui/button";

const FavoriteToggleBtn = ({ landmarkId }: { landmarkId: string }) => {
  return (
    <Button size='icon' variant="outline" className="opacity-80">
      {/* <Heart fill="black" /> */}
      <Heart />
    </Button>
  );
};
export default FavoriteToggleBtn;
