import { useSelector } from "react-redux";
import { selectItemsCount } from "../features/basketSlice";
import { useNavigate } from "react-router";

function Header() {
  const numberofItemsInBasket = useSelector(selectItemsCount);
  const navigate = useNavigate();
  return (
    <header className="flex justify-between items-center">
      {/* Left */}
      <div>
        <h1 onClick={() => navigate.push("/")} className="text-5xl">
          Diana's store
        </h1>
        <h2>Your no.1 store for React stuff</h2>
      </div>
      {/* Right */}
      <div>
        <h3 onClick={() => navigate.push("./checkout")}>
          Items in your basket:{numberofItemsInBasket}
        </h3>
      </div>
    </header>
  );
}

export default Header;
