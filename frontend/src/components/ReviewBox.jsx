import { motion } from "framer-motion";
import "./ReviewBox.css";

const ReviewBox = ({ name = "name", description = "description..." }) => {
  return (
    <motion.div
      className="col-3"
      id="box"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
    >
      <div className="row" id="name">
        {name}
      </div>
      <div className="row" id="description">
        {description}
      </div>
    </motion.div>
  );
};

export default ReviewBox;
