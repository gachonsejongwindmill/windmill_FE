import { useToggleInterestStock } from "../hooks/useToggleInterestStock";

function StockItem({ stock, isInterested }) {
  const { mutate } = useToggleInterestStock();

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    mutate({ stockId: stock.id, isAlreadyInterested: isInterested });
  };

  return (
    <div className="relative rounded-xl shadow-md border p-4 bg-white">
      <button
        onClick={handleClick}
        className={`absolute top-2 right-3 text-xl transition ${
          isInterested
            ? "text-yellow-500"
            : "text-gray-400 hover:text-yellow-400 transition text-xl"
        }`}
      >
        {isInterested ? "⭐" : "☆"}
      </button>
      <p className="font-bold text-base pr-8 truncate">{stock.name}</p>
      <p className="font-bold text-base">({stock.ticker})</p>
      <p className="text-sm text-gray-600 mt-1">현재가: {stock.price}</p>
    </div>
  );
}

export default StockItem;
