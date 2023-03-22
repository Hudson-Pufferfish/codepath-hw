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
      console.error(`There is some error: ${error.message}`);
    }
  }, []);

  const handleNewCat = useCallback(async () => {
    fetchCatImage();
  }, [fetchCatImage]);

  const handleRemoveBan = useCallback((e) => {
    const attribute = e.target.getAttribute('data-attribute');
    const value = e.target.getAttribute('data-value');
    console.log(attribute, value);

    setBanList(prevBanList => {
      const newBan = prevBanList.filter((item) => {
        return item[0] !== attribute && item[1] !== value;
      });

    return [...newBan]
  })
  }, [])

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

  console.log("🚀 ----------------------------------🚀")
  console.log("🚀 ~ CatStumble ~ banList:", banList)
  console.log("🚀 ----------------------------------🚀")

  return (
    <>
      <div className="container">
        <div className="left-container">
          <h3>
            Who have we seen so far?
          </h3>
        </div>
        <div className="center-container">
          <h2>Cat Stumble</h2>
          <Button onHandleCard={handleNewCat}>Stumble</Button>
          {showCatInfo ? (
            <div className='info-container'>
              <div className="img-container">
                <img src={catInfo.url} alt="Random cat" />
              </div>
                <AttributeCard
                  attribute="width"
                  value={catInfo.width}
                  setBanList={setBanList}
                />
                <AttributeCard
                  attribute="height"
                  value={catInfo.height}
                  setBanList={setBanList}
                />
                <AttributeCard
                  attribute="origin"
                  value={catInfo.breeds?.length > 0 ? catInfo.breeds[0].origin : 'No origin info'}
                  setBanList={setBanList}
                />
                <AttributeCard
                  attribute="name"
                  value={catInfo.categories?.length > 0 ? catInfo.categories[0].name : 'No name info'}
                  setBanList={setBanList}
                />
            </div>
          ): null}
        </div>
        <div className="right-container">
          <h3>
            Ban List
          </h3>
          <div className="ban-content">
            {banList ?
              banList.map(([key, value], index) => (
                <div
                  key={index}
                  className="ban-item"
                  data-attribute={key}
                  data-value={value}
                  onClick={handleRemoveBan}>
                  {`${key} ${value}`}
                </div>
              ))
            
              : null
            }
          </div>

        </div>
      </div>
    </>
  );
};

export default CatStumble;