import { useCallback } from "react";
import { useNavigate, useLocation }from "react-router-dom";
import { debounce } from "lodash";

type useSearchProps = {
  query: string,
  fetchCallback: Function,
  emptyCallback: Function,
}

export const useSearch = ({query, fetchCallback, emptyCallback}: useSearchProps, dependencies: any[]): Function => {
  const navigate = useNavigate();
  const location = useLocation();

  const debouncedFetch = useCallback(
    debounce((input:string): void => {
      if (!input) {
        emptyCallback([])
        return
      }
      
      if (query === input) {
        return
      }

      const params = new URLSearchParams({query: input})
      navigate({pathname: location.pathname, search: params.toString()}, {replace: true})
  
      fetchCallback(input)
    }
    , 1000),
    dependencies
  )

  return debouncedFetch;
}