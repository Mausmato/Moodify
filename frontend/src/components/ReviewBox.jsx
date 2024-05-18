import "./ReviewBox.css";
const ReviewBox = ({ name = "name", description = "description..." }) => {
  return (
    <div className="col-3" id="box">
      <div className="row" id="name">
        {name}
      </div>
      <div className="row" id="description">
        {description}
      </div>
    </div>
  );
};

export default ReviewBox;
