const OrderItem = ({ item }: any) => {
  return (
    <div className="flex justify-between items-center py-3 px-2 bg-[#FAFAFA] rounded-md">
      <div className="flex gap-4">
        <img
          src={item.main_image}
          className="w-14 h-14 object-contain border rounded"
        />

        <div>
          <p className="font-medium text-[#3D3D3D]">
            {item.title}
          </p>
          <p className="text-xs text-gray-500">
            SKU: {item._id}
          </p>
        </div>
      </div>

      <div className="text-right">
        <p className="text-sm text-gray-500">
          (x{item.counter})
        </p>
        <p className="font-medium">
          ${(item.price * item.counter).toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default OrderItem;
