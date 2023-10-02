import style from './Loader.module.scss';

export default function Loader() {
  return (
    <div className={style.wrapper}>
      <div className={style.loader}><span className='sronly'>loading...</span></div>
    </div>
  );
}
