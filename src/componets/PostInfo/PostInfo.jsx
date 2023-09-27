import PropTypes from "prop-types";
import formattedDate from "../../util/formattedDate";
import { FaCalendar, FaUser } from "react-icons/fa6";
import formattedText from "../../util/formattedText";

export default function PostInfo({ publishedAt, author, className }) {
  const newDate = formattedDate(publishedAt) || null;
  const formattedAuthor = formattedText(author, 15) || null;

  return (
    <div className={className}>
      {newDate && (
        <span>
          <FaCalendar /> {newDate}
        </span>
      )}
      {formattedAuthor && (
        <span>
          <FaUser /> {formattedAuthor}
        </span>
      )}
    </div>
  );
}

PostInfo.propTypes = {
  author: PropTypes.string.isRequired,
  publishedAt: PropTypes.string.isRequired,
  className: PropTypes.string,
};
