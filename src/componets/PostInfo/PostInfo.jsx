import PropTypes from "prop-types";
import formattedDate from "../../util/formattedDate";
import { FaBookmark, FaCalendar, FaUser } from "react-icons/fa6";
import formattedText from "../../util/formattedText";

export default function PostInfo({ publishedAt, author, className, likes }) {
  const newDate = formattedDate(publishedAt) || null;
  const formattedAuthor = formattedText(author, 15) || null;

  console.log(likes);

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
  author: PropTypes.string.isRequired,
  publishedAt: PropTypes.string.isRequired,
  className: PropTypes.string,
  likes: PropTypes.bool,
};
