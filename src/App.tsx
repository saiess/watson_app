import { useEffect, useState } from "react";
import "./App.css";
import Outfits from "./components/Outfits";
import WatsonAssistant from "./components/WatsonAssistant";
import { OutfitsDataType, RangeObject } from "./types/outfitsDataType";
import { outfitsData } from "./data/outfitsData";

function App() {
  const [userPreferences, setUserPreferences] = useState<OutfitsDataType>({
    gender: "Man",
    outfitCategory: "classic",
    season: "all",
    colorSkin: "light",
    age: 77,
    Height: 170,
    weight: 66,
    budget: 78,
    ecoFriendly: "yes",
  });

  const [filteredData, setFilteredData] = useState<OutfitsDataType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);


  useEffect(() => {
    const savedPreferences = sessionStorage.getItem('userPreferences');
    if (savedPreferences) {
      const parsedPreferences = JSON.parse(savedPreferences) as OutfitsDataType;
      setUserPreferences({...parsedPreferences});
    }
  }, []);

  const isInRange = (value: number, range: number | RangeObject): boolean => {
    if (typeof range === "number") {
      return value === range;
    }
    return value >= range.min && value <= range.max;
  };

  const filterData = (
    data: OutfitsDataType[],
    preferences: OutfitsDataType
  ) => {
    return data.filter((item) => {
      const genderMatch = item.gender === preferences.gender;
      const colorSkinMatch = item.colorSkin === preferences.colorSkin;
      const outfitCategoryMatch =
        item.outfitCategory === preferences.outfitCategory;
      const seasonMatch = item.season === preferences.season;
      const ageMatch = isInRange(preferences.age as number, item.age);
      const heightMatch = isInRange(preferences.Height as number, item.Height);
      const weightMatch = isInRange(preferences.weight as number, item.weight);
      const budgetMatch = item.budget <= preferences.budget;
      const ecoFriendlyMatch = item.ecoFriendly === preferences.ecoFriendly;
      return (
        genderMatch &&
        colorSkinMatch &&
        outfitCategoryMatch &&
        seasonMatch &&
        ageMatch &&
        heightMatch &&
        weightMatch &&
        budgetMatch &&
        ecoFriendlyMatch
      );
    });
  };

  useEffect(() => {
    const filtered = filterData(outfitsData, userPreferences);
    setFilteredData(filtered);
    setIsLoading(false);
  }, [userPreferences]);

  return (
    <>
      <h1 className="text">Recommended Outfits</h1>
      <hr className="line" />
      <p className="text">Please use Watson ChatBot for recommendations</p>
      {isLoading && (
        <div className="loader_container">
          <div className="loader"></div>
        </div>
      )}
      {filteredData && <Outfits imagesToDisplay={filteredData} />}
      <WatsonAssistant setUserPreferences={setUserPreferences} />
    </>
  );
}

export default App;
