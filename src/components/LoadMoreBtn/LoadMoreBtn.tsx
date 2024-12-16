import css from "./LoadMoreBtn.module.css";

interface LoadMoreProps {
  onLoadMore: () => void;
}

const LoadMoreBtn = ({ onLoadMore }: LoadMoreProps) => {
  return (
    <button className={css.btn} onClick={() => onLoadMore()}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
