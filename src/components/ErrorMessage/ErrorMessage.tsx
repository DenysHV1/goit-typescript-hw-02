import css from "./ErrorMessage.module.css";

interface ErrorProps {
  message: string;
}

const ErrorMessage = ({ message }: ErrorProps) => {
  return <p className={css.errorMessage}>{message}</p>;
};

export default ErrorMessage;
