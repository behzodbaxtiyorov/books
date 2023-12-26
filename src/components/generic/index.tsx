import { useLocation } from "react-router-dom";

const GenericComp = () => {
  const { pathname } = useLocation();
  return <div>{pathname}TEZ ORADA</div>;
};

export default GenericComp;
