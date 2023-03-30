import React, { useState, useEffect, useCallback, useRef, useMemo } from "react";
import "./CatStumble.css";
import axios from "axios";
import Button from "../button/Button";

const CatStumble = () => {
  const [catMenu, setCatMenu] = useState([]);
  const [searchId, setSearchId] = useState("");
  const [minWidth, setMinWidth] = useState("");
  const [minHeight, setMinHeight] = useState("");
  const [meanHeight, setMeanHeight] = useState(0);
  const [modeHeight, setModeHeight] = useState(0);
  const [medianHeight, setMedianHeight] = useState(0);
  const isMounted = useRef(true);

  useEffect(() => {
    isMounted.current = true;
    fetchCatImage();
    return () => {
      // unmounted component
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    const filteredCats = catMenu.filter((cat) => {
      if (searchId !== "" && !cat.id.includes(searchId)) {
        return false;
      }
      if (minWidth !== "" && cat.width < minWidth) {
        return false;
      }
      if (minHeight !== "" && cat.height < minHeight) {
        return false;
      }
      return true;
    });

    if (filteredCats.length > 0) {
      // Calculate mean height
      const totalHeight = filteredCats.reduce((sum, cat) => sum + cat.height, 0);
      const meanHeight = totalHeight / filteredCats.length;
      setMeanHeight(meanHeight);

      // Calculate mode height
      const heightFrequencies = {};
      let maxFrequency = 0;
      let modeHeight = 0;
      for (const cat of filteredCats) {
        const height = cat.height;
        if (!heightFrequencies[height]) {
          heightFrequencies[height] = 1;
        } else {
          heightFrequencies[height]++;
        }
        if (heightFrequencies[height] > maxFrequency) {
          modeHeight = height;
          maxFrequency = heightFrequencies[height];
        }
      }
      setModeHeight(modeHeight);

      // Calculate median height
      const sortedHeights = filteredCats.map((cat) => cat.height).sort((a, b) => a - b);
      const middleIndexHeight = Math.floor(sortedHeights.length / 2);
      const medianHeight =
        sortedHeights.length % 2 === 0
          ? (sortedHeights[middleIndexHeight - 1] + sortedHeights[middleIndexHeight]) / 2
          : sortedHeights[middleIndexHeight];
      setMedianHeight(medianHeight);
    } else {
      setMeanHeight(0);
      setModeHeight(0);
      setMedianHeight(0);
    }
  }, [catMenu, searchId, minWidth, minHeight]);

  const fetchCatImage = useCallback(async () => {
    try {
      const catResponse = await axios.get(`https://api.thecatapi.com/v1/images/search?limit=10`);

      if (isMounted.current) {
        setCatMenu(catResponse.data);
      }
    } catch (error) {
      console.error(`There is some error: ${error.message}`);
    }
  }, []);

  const handleSearch = useCallback((event) => {
    setSearchId(event.target.value);
  }, []);

  const handleMinWidth = useCallback((event) => {
    setMinWidth(event.target.value);
  }, []);

  const handleMinHeight = useCallback((event) => {
    setMinHeight(event.target.value);
  }, []);

  const filteredCats = useMemo(() => {
    return catMenu.filter((cat) => {
      if (searchId !== "" && !cat.id.includes(searchId)) {
        return false;
      }
      if (minWidth !== "" && cat.width < minWidth) {
        return false;
      }
      if (minHeight !== "" && cat.height < minHeight) {
        return false;
      }
      return true;
    });
  }, [catMenu, searchId, minWidth, minHeight]);

  return (
    <>
      <div className="container">
        <h1 className="dashboard-title">Cat Dashboard</h1>
        <div className="search-container">
          <input type="text" placeholder="Search for a cat by ID" value={searchId} onChange={handleSearch} />
          <input type="text" placeholder="Filter by minimum width" value={minWidth} onChange={handleMinWidth} />
          <input type="text" placeholder="Filter by minimum height" value={minHeight} onChange={handleMinHeight} />
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
          <div className="statistics-container">
            <p>Mean Height: {meanHeight.toFixed(2)}</p>
            <p>Mode Height: {modeHeight}</p>
            <p>Median Height: {medianHeight}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CatStumble;
