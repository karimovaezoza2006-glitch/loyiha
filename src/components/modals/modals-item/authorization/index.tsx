import { Modal } from "antd";
import { useReduxDispatch, useReduxSelector } from "../../../../hooks/useRedux";
import { setAuthorizationModalVisibility } from "../../../../redux/modal-store";
import { useState } from "react";
import Login from "./login";
import Register from "./registor";

const AuthorizationModal = () => {
  const {authorizationModalVisibility} = useReduxSelector(
    (state) => state.modalSlice
  );
const dispatch = useReduxDispatch()
const[state, setState] = useState<string>("login")
  return (
    <Modal open={authorizationModalVisibility}
     footer={false} 
     onCancel={() => dispatch(setAuthorizationModalVisibility())}>
      
    <div className="mt-10">
      <div className="flex items-center justify-center gap-4">
        <div onClick={()=> setState("login")} className= {`text-xl cursor-pointer ${
          state === "login" && "text-main"
        }`}> Login</div>
        <div className="bg-[#3D3D3D] w-[1px] h-5"></div>
        <div onClick={()=> setState("register")}  className= {`text-xl cursor-pointer ${
          state === "register" && "text-main"
        }`}>Register</div>
      </div>

    
  {state === "login" ? <Login/> : <Register/>}
    </div>
    </Modal>
  );
};

export default AuthorizationModal;
