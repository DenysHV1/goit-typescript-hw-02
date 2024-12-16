import css from "./ImageCard.module.css";

interface ImgCardProps {
  img: string;
  alt: string;
}

const ImageCard = ({ img, alt }: ImgCardProps) => {
  return (
    <div>
      <img className={css.galleryImg} src={img} alt={alt} />
    </div>
  );
};

export default ImageCard;
