import styles from './filters.module.css';

function Filters() {
  return (
    <div className={styles.filterContainer}>
      <div className={styles.filterButtonContainer}>
        <button className={styles.filterButton}>Filters</button> {/* activated */}
      </div>
      <div className={`${styles.filterContentsContainer} ${styles.activated}`}> {/* activated */}   
        <div className={styles.filterStyleButtons}>
          <button className={styles.realistic}>Realistic</button>
          <button className={styles.anime}>Anime</button>
          <button className={styles.HEHE}>Realistic</button>
          <button className={styles.HEHE}>Realistic</button>
        </div>

        <div className={styles.filterModels}>
          <ul>
            <li>Stable Diffuson XL</li>
            <li>asdasdasd XL</li>
            <li>ASDASDASD XL</li>
            <li>ASDASFASFAFA XL</li>
          </ul>

          <ul>
            <li>asfasfas</li>
            <li>asfasfasfasf</li>
            <li>asfasf</li>
            <li>asfasfasfa</li>
          </ul>
          <ul>
            <li>Stable Diffuson XL</li>
            <li>asdasdasd XL</li>
            <li>ASDASDASD XL</li>
            <li>ASDASFASFAFA XL</li>
          </ul>

          <ul>
            <li>asfasfas</li>
            <li>asfasfasfasf</li>
            <li>asfasf</li>
            <li>asfasfasfa</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Filters;
