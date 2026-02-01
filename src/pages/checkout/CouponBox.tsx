import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { applyCoupon, clearCoupon } from "../../features/coupon/couponSlice";

const CouponBox = ({ subtotal }: { subtotal: number }) => {
  const [code, setCode] = useState("");
  const dispatch = useDispatch();

  const couponState = useSelector(
    (state: any) => state.coupon || {}
  );

  const { data: coupon, loading, error } = couponState;

  const applyHandler = () => {
    if (!code) return;
    dispatch(applyCoupon({ code, subtotal }) as any);
  };

  return (
    <div className="bg-white p-4 rounded-xl">
      {!coupon ? (
        <>
          <input
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full border px-3 py-2"
            placeholder="Coupon code"
          />

          <button
            onClick={applyHandler}
            disabled={loading}
            className="w-full bg-[#46A358] text-white py-2 mt-2"
          >
            {loading ? "Checking..." : "Apply"}
          </button>

          {error && (
            <p className="text-red-500 text-sm mt-1">{error}</p>
          )}
        </>
      ) : (
        <div className="flex justify-between items-center">
          <div>
            <p className="font-semibold">{coupon.title}</p>
            <p className="text-green-600 text-sm">
              - ${coupon.discount_for}
            </p>
          </div>
          <button
            onClick={() => dispatch(clearCoupon())}
            className="text-red-500 text-sm"
          >
            Remove
          </button>
        </div>
      )}
    </div>
  );
};

export default CouponBox;
