import { Modal } from "antd";

import PreviewContent from "./PreviewContent";
import { useReduxDispatch, useReduxSelector } from "../../../../hooks/useRedux";
import { closePreview } from "../../../../redux/productPreviewSlice";

const ProductPreview = () => {
  const dispatch = useReduxDispatch();
  const { open, product } = useReduxSelector(
    (state) => state.productPreview
  );

  if (!product) return null;

  return (
    <Modal
      open={open}
      onCancel={() => dispatch(closePreview())}
      footer={null}
      width={900}
      centered
    >
      <PreviewContent product={product} />
    </Modal>
  );
};

export default ProductPreview;
