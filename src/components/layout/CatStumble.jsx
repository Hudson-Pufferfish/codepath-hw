import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import "./CatStumble.css";
import axios from 'axios';
import Button from '../button/Button';
import AttributeCard from './AttributeCard';

const CatStumble = () => {
  const [catInfo, setCatInfo] = useState('');
  const [banList, setBanList] = useState([]);
  const [showCatInfo, setShowCatInfo] = useState(false);
  const isMounted = useRef(true);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      // unmounted component
      isMounted.current = false;
    };
  });

  const fetchCatImage = useCallback(async () => {
    try {
      const response = await axios.get("https://api.thecatapi.com/v1/images/search");
      const catResponse = await axios.get(`https://api.thecatapi.com/v1/images/${response.data[0].id}`)

      if (isMounted.current) {
        setCatInfo(catResponse.data);
        setShowCatInfo(true);
      }
    } catch (error) {
      console.log(`There is some error: ${error.message}`);
    }
  }, []);

  const handleNewCat = useCallback(async () => {
    fetchCatImage();
  }, [fetchCatImage]);

  // const handleBanAttribute = useCallback((attribute) => {
  //   setBanList([...banList, attribute]);
  // }, [banList]);

  // const attributesToDisplay = [
  //   { label: 'Image', value: catInfo.url },
  //   { label: 'Breed', value: catInfo.breeds?.length > 0 ? catInfo.breeds[0].name : '' },
  //   { label: 'Temperament', value: catInfo.breeds?.length > 0 ? catInfo.breeds[0].temperament : '' },
  //   { label: 'Origin', value: catInfo.breeds?.length > 0 ? catInfo.breeds[0].origin : '' },
  //   { label: 'Life Span', value: catInfo.breeds?.length > 0 ? catInfo.breeds[0].life_span : '' },
  // ];

  // const filteredAttributes = useMemo(() => {
  //   return attributesToDisplay.filter((attribute) => !banList.includes(attribute.label));
  // }, [attributesToDisplay, banList]);

  return (
    <>
      <div className="container">
        <div className="left-container">Who have we seen so far?</div>
        <div className="center-container">
          <h1>Cat Stumble</h1>
          <Button onHandleCard={handleNewCat}>Stumble</Button>
          {showCatInfo ? (
            <>
              <div className="img-container">
                <img src={catInfo.url} alt="Random cat" />
              </div>
              <AttributeCard
                attribute="width"
              >
                {`Width: ${catInfo.width}`}
              </AttributeCard>
              <AttributeCard
                attribute="height"
              >
                {`Height: ${catInfo.height}`}
              </AttributeCard>
              <AttributeCard
                attribute="origin"
              >
                {`Origin: ${catInfo.breeds?.length > 0 ? catInfo.breeds[0].origin : 'No origin info'}`}
              </AttributeCard>
              <AttributeCard
                attribute="name"
              >
                {`Name: ${catInfo.categories?.length > 0 ? catInfo.categories[0].name : 'No name info'}`}
              </AttributeCard>
            </>
          ): null}
        </div>
        <div className="right-container">Ban List</div>
      </div>
    </>
  );
};

export default CatStumble;