import { Modal } from "antd";
import { useReduxDispatch, useReduxSelector } from "../../../../hooks/useRedux";
import { setAuthorizationModalVisibility } from "../../../../redux/modal-store";

const AuthorizationModal = () => {
  const {authorizationModalVisibility} = useReduxSelector(
    (state) => state.modalSlice
  );
const dispatch = useReduxDispatch()
  return (
    <Modal open={authorizationModalVisibility}
     footer={false} 
     onCancel={() => dispatch(setAuthorizationModalVisibility())}>
      <h1>Salom</h1>
    </Modal>
  );
};

export default AuthorizationModal;
