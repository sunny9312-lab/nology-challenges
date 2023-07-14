import style from "./AlbumsFlex.module.scss";

const AlbumsFlex = ({ children }) => {
  return <section className={style.container}>{children}</section>
}

export default AlbumsFlex