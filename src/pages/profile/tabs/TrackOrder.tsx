import { useState } from "react";
import { Skeleton, Empty } from "antd";
import { useQueryHandler } from "../../../hooks/useQuery";

const TrackOrder = () => {
  const { data, isLoading } = useQueryHandler({
    url: "order/get-order",
    pathname: "order-get-order",
  });

  const orders = Array.isArray(data?.data) ? data.data : [];
  const [openOrderId, setOpenOrderId] = useState<string | null>(null);

  return (
    <div className="w-full">
      <h2 className="text-[20px] font-bold text-[#3D3D3D] mb-6">
        Track your Orders
      </h2>

      {isLoading ? (
        <Skeleton active paragraph={{ rows: 6 }} />
      ) : orders.length === 0 ? (
        <Empty description="No orders found" />
      ) : (
        <div className="flex flex-col gap-4">
          {orders.map((order: any) => {
            const isOpen = openOrderId === order._id;

            return (
              <div
                key={order._id}
                className="bg-[#F8F8F8] rounded-xl p-5 transition-all"
              >
                {/* ===== ORDER ROW ===== */}
                <div className="grid grid-cols-[2fr_1fr_1fr_1fr] items-center">
                  <div className="font-medium text-[#3D3D3D] break-all">
                    {order._id}
                  </div>

                  <div className="text-center font-medium">
                    {new Date(order.created_at)
                      .toISOString()
                      .slice(0, 10)}
                  </div>

                  <div className="text-center text-[#46A358] font-bold">
                    ${order.extra_shop_info.total.toFixed(2)}
                  </div>

                  <div className="text-right">
                    <button
                      onClick={() =>
                        setOpenOrderId(isOpen ? null : order._id)
                      }
                      className="text-[#46A358] font-medium hover:underline"
                    >
                      {isOpen ? "Hide info" : "More info"}
                    </button>
                  </div>
                </div>

                {/* ===== ORDER DETAILS ===== */}
                {isOpen && (
                  <div className="mt-6 border-t pt-5">
                    <div className="flex flex-col gap-4">
                      {order.shop_list.map((item: any) => (
                        <div
                          key={item._id}
                          className="flex gap-4 items-center bg-white rounded-lg p-4"
                        >
                          <img
                            src={item.main_image}
                            alt={item.title}
                            className="w-[80px] h-[80px] object-contain bg-[#F5F5F5] rounded"
                          />

                          <div className="flex-1">
                            <h4 className="font-semibold text-[#3D3D3D]">
                              {item.title}
                            </h4>
                            <p className="text-[13px] text-gray-500 line-clamp-2">
                              {item.short_description}
                            </p>
                          </div>

                          <div className="text-right">
                            <p className="font-bold">
                              ${item.price}
                            </p>
                            <p className="text-[13px] text-gray-500">
                              Qty: {item.count}
                            </p>
                          </div>
                        </div>
                      ))}

                      {/* PAYMENT INFO */}
                      <div className="text-right text-sm text-gray-500">
                        Payment method:{" "}
                        <span className="font-medium text-[#3D3D3D]">
                          {order.extra_shop_info.method}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default TrackOrder;
