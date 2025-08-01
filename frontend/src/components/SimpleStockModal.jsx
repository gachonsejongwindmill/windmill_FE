import { useState } from "react";

function SimpleStockModal({ onClose, onSubmit, stockId }) {
  const [date, setDate] = useState("");
  const [qty, setQty] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = () => {
    onSubmit({
      id: stockId,
      date,
      quantity: parseFloat(qty), // 음수도 허용
      purchasePrice: parseFloat(price),
    });
    onClose();
  };

  const isDisabled = !date || !qty || !price;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-[400px] shadow-md">
        <h2 className="text-xl font-bold mb-4">추가 거래 입력</h2>

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border px-3 py-2 w-full mb-3"
        />
        <input
          type="number"
          placeholder="수량 (음수 입력 시 매도)"
          value={qty}
          onChange={(e) => setQty(e.target.value)}
          className="border px-3 py-2 w-full mb-3"
        />
        <input
          type="number"
          placeholder="가격"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="border px-3 py-2 w-full mb-3"
        />

        <div className="flex justify-end mt-4 gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 text-black rounded"
          >
            취소
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            disabled={isDisabled}
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
}

export default SimpleStockModal;
