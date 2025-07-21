import { useNavigate } from "react-router-dom";

export const ReturnButton = () => {
  const navigate = useNavigate();

  return (
    <button
      className="return"
      onClick={() => navigate("/ministeries")}
    >
      Ir a Ministerios
    </button>
  );
};
