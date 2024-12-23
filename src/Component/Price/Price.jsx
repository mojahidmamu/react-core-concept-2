 
import PropTypes from "prop-types";
const Price = ( {option} ) => {
const {name, price, features} = option;
  return (
    <div>
      <h2>
        <span className="text-5xl">{price}</span>
        <span className="text-3xl">/monthly</span>
      </h2>
    </div>
  );
};

Price.PropTypes ={
  option : PropTypes.object
}

export default Price;