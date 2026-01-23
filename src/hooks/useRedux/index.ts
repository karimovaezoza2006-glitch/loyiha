import type { RootStore, DispatchType } from "../../redux";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";

export const useReduxSelector: TypedUseSelectorHook<RootStore> =useSelector;
export const useReduxDispatch = () => useDispatch<DispatchType>();
