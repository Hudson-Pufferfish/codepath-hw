import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import "./CatStumble.css";
import axios from 'axios';
import Button from '../button/Button';
import AttributeCard from './AttributeCard';

const CatStumble = () => {
  const [catMenu, setCatMenu] = useState([]);
  const [searchId, setSearchId] = useState("");
  const isMounted = useRef(true);

  useEffect(() => {
    isMounted.current = true;
    fetchCatImage();
    return () => {
      // unmounted component
      isMounted.current = false;
    };
  }, []);

  const fetchCatImage = useCallback(async () => {
    try {
      const catResponse = await axios.get(`https://api.thecatapi.com/v1/images/search?limit=10`)

      if (isMounted.current) {
        setCatMenu(catResponse.data)
      }
    } catch (error) {
      console.error(`There is some error: ${error.message}`);
    }
  }, []);

  const handleSearch = useCallback((event) => {
    setSearchId(event.target.value);
  }, [])

  const filteredCats = useMemo(() => {

    return catMenu.filter(cat => cat.id.includes(searchId))
  }, [searchId]);

  return (
    <>
      <div className="container">
        <h1 className='dashboard-title'>Cat Dashboard</h1>
        <div className="search-container">
          <input type="text" placeholder="Search for a cat by ID" value={searchId} onChange={handleSearch} />
        </div>
        <div className="info-container">
          <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Spy nickname</th>
                  <th>Width</th>
                  <th>Height</th>
                </tr>
              </thead>
              <tbody>
                {filteredCats.map((cat, index) => (
                  <tr key={cat.id}>
                    <td>{index + 1}</td>
                    <td>{cat.id}</td>
                    <td>{cat.width}</td>
                    <td>{cat.height}</td>
                  </tr>
                ))}
              </tbody>
            </table>
        </div>
      </div>
    </>
  );
};

export default CatStumble;