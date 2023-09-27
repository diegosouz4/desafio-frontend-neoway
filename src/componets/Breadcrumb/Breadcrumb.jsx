import { Link } from "react-router-dom";
import style from "./Breadcrumb.module.scss";
import PropTypes from "prop-types";
import formattedText from "../../util/formattedText";

export default function Breadcrumb({ title, className }) {
  const formattedTitle = formattedText(title, 20);

  return (
    <div className={`${className} ${style.breadCrumb}`}>
      <Link to="/">home</Link>
      <span>{formattedTitle}</span>
    </div>
  );
}

Breadcrumb.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
};
