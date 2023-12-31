import PropTypes from "prop-types";
import formattedDate from "../../util/formattedDate";
import formattedText from "../../util/formattedText";
import { FaBookmark, FaCalendar, FaUser } from "react-icons/fa6";

export default function PostInfo({ publishedAt, author, className, likes }) {
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
      {likes && (
        <span>
          <FaBookmark /> Salvo
        </span>
      )}
    </div>
  );
}

PostInfo.propTypes = {
  author: PropTypes.string,
  publishedAt: PropTypes.string,
  className: PropTypes.string,
  likes: PropTypes.bool,
};
