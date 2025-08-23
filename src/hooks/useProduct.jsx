import { useQuery } from "@tanstack/react-query";
import getApi from "../services/getApi";

function useProduct() {
  return useQuery({
    queryKey: ["product"],
    queryFn: getApi,
    staleTime: Infinity,
  });
}
export default useProduct;
