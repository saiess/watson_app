import { OutfitsDataType } from "../types/outfitsDataType";
import { MdOutlineEco } from "react-icons/md";

interface OutfitsProps {
  imagesToDisplay: OutfitsDataType[];
}

const Outfits = ({ imagesToDisplay }: OutfitsProps) => {
  return (
    <div className="image-grid">
      {imagesToDisplay &&
        imagesToDisplay.map((item, idx) => (
          <div key={idx} className="image-item">
            <img
              src={item.image_path}
              alt={item.outfitCategory}
              style={{ width: "80%", height: "80%" }}
            />
            <div className="item__desc">
              <span className="text name">{item.name}</span>
              <div className="price_section">
              <span className="text price">{item.budget} $</span>
              <MdOutlineEco className="eco__icon"/>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Outfits;
