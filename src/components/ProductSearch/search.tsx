import './styles.css';

const ProductSearch = () => {
  return (
    <div className="base-card product-search-container">
        <div className="product-search-input">
          <input placeholder="type your search here" />
        </div>
        <div className="search-button">
          <button className="btn">
            <h6>SEARCH</h6>
          </button>
        </div>
    </div>
  );
};

export default ProductSearch;
