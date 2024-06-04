import React, { useState } from 'react';
import styles from './filters.module.css';
import Gallery from '../Gallery/Gallery.jsx'

function Filters() {
  console.log('Filter component rendered!');
  const [filterButton, setFilterButton] = useState(false);
  const [filterSelection, setFilterSelection] = useState("none");

  function handleToggleFilterButton() {
    setFilterButton(prevState => !prevState);
  }
  console.log("filter open: ", filterButton);

  function handleFilterSelection(e) {
    const selectedFilter = e.target.textContent;
    setFilterSelection(selectedFilter);
    setTimeout(() => setFilterButton(false), 150);
  }
  console.log(filterSelection, "filter selected");


  function handleResetFilterSelection() {
    setFilterSelection("none");
    setTimeout(() => setFilterButton(false), 150);
    
  }

  function filterIsSelected(text) {
    return filterSelection === text ? styles.filterIsSelected : '';
  }

  return (
    <>
    <div className={styles.filterContainer}>
      <div className={styles.filterButtonContainer}>
        <button
          onClick={handleToggleFilterButton}
          className={`${styles.filterButton} ${filterButton ? styles.activated : ''}`}
        >
          Filters
        </button>
        <button
          onClick={handleResetFilterSelection}
          className={`${styles.filterButton} ${styles.filterResetButton}`}
        >
          Reset
        </button>
      </div>
      <div className={`${styles.filterContentsContainer} ${filterButton ? styles.activated : ''}`}>
        <div className={styles.filterStyleButtons} onClick={handleFilterSelection}>
          <button className={`${styles.realistic} ${filterIsSelected("Realistic")}`}>Realistic</button>
          <button className={`${styles.anime} ${filterIsSelected("Anime")}`}>Anime</button>
          <button className={`${styles.HEHE} ${filterIsSelected("Illustration")}`}>Illustration</button>
          <button className={`${styles.HEHE} ${filterIsSelected("Fantasy")}`}>Fantasy</button>
        </div>

        <div className={styles.filterModels} onClick={handleFilterSelection}>
          <ul>
            <li className={filterIsSelected("Realistic model 1")}>Realistic model 1</li>
            <li className={filterIsSelected("Realistic model 2")}>Realistic model 2</li>
            <li className={filterIsSelected("Realistic model 3")}>Realistic model 3</li>
            <li className={filterIsSelected("Realistic model 4")}>Realistic model 4</li>
          </ul>

          <ul>
            <li className={filterIsSelected("Anime model 1")}>Anime model 1</li>
            <li className={filterIsSelected("Anime model 2")}>Anime model 2</li>
            <li className={filterIsSelected("Anime model 3")}>Anime model 3</li>
            <li className={filterIsSelected("Anime model 4")}>Anime model 4</li>
          </ul>
          <ul>
            <li className={filterIsSelected("Illustration model 1")}>Illustration model 1</li>
            <li className={filterIsSelected("Illustration model 2")}>Illustration model 2</li>
            <li className={filterIsSelected("Illustration model 3")}>Illustration model 3</li>
            <li className={filterIsSelected("Illustration model 4")}>Illustration model 4</li>
          </ul>

          <ul>
            <li className={filterIsSelected("Fantasy model 1")}>Fantasy model 1</li>
            <li className={filterIsSelected("Fantasy model 2")}>Fantasy model 2</li>
            <li className={filterIsSelected("Fantasy model 3")}>Fantasy model 3</li>
            <li className={filterIsSelected("Fantasy model 4")}>Fantasy model 4</li>
          </ul>
        </div>
      </div>
    </div>
    <Gallery filterSelection={filterSelection}/></>
  );
}

export default Filters;
