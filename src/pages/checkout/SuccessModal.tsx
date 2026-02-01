import { Modal } from "antd";

const SuccessModal = ({ open, onClose, total, paymentMethod }: any) => {
  return (
    <Modal open={open} footer={null} onCancel={onClose}>
      <h2 className="font-bold text-lg">Order Successful</h2>
      <p>Total: ${total}</p>
      <p>Payment: {paymentMethod}</p>
    </Modal>
  );
};

export default SuccessModal;
