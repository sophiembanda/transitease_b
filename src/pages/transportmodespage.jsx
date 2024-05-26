import "../css/transportmodes/transportmodes.css";

//components
import TmpDetailsSection from "../components/transportmodescomponents/TmpDetailsSection";
import TmpActionButtons from "../components/transportmodescomponents/TmpActionButtons";
import TmpFeed from "../components/transportmodescomponents/TmpFeed";

const transportmode = () => {
  return (
    <div className="transport-modes-page flex-col">
      <TmpDetailsSection />
      <TmpActionButtons />
      <TmpFeed />
    </div>
  );
};

export default transportmode;
