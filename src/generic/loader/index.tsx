import { Skeleton } from "antd";

const LoaderApi = () => {
    const categoryLoader = () =>{
        return Array.from({ length:9}).map((_, index) =>(
              <Skeleton.Input key={index} active  block />
         
        ));
    }
  return{categoryLoader}
}

export {LoaderApi}