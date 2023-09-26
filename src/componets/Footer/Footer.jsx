import { FaHeart } from "react-icons/fa6";
import style from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={style.footer}>
      <p>
        Feito com {<FaHeart className={style.icon} />} por{" "}
        <a
          href="http://dsouza.com.br"
          target="_blank"
          rel="noopener noreferrer"
        >
          Diego Souza
        </a>
      </p>
    </footer>
  );
}
