import StyleChanger from "../components/StyleChanger/StyleChanger";
import FirstControl from "../components/FirstControl/FirstControl";
import ButtonChanger from "../helpers/store/buttonChanger";
import SecondControl from "../components/SecondControl/SecondControl";

export const Main = () => {
  const buttonChangerInstance = new ButtonChanger();
  const handleAllButtonRight = () => {
    buttonChangerInstance.AllButtonRight();
  };

  const handleButtonDefaultStatus = () => {
    buttonChangerInstance.ButtonDefaultStatus();
  };

  const ThreeTip = () => {
    buttonChangerInstance.ThreeTip();
  };

  const TenTip = () => {
    buttonChangerInstance.TenTip();
  };

  return (
    <div>
      <StyleChanger
        buttonChangerInstance={buttonChangerInstance}
        names={["Две справа", "По разные стороны"]}
        onAllButtonRight={handleAllButtonRight}
        onButtonDefaultStatus={handleButtonDefaultStatus}
      />
      <FirstControl buttonChangerInstance={buttonChangerInstance} />
      <StyleChanger
        buttonChangerInstance={buttonChangerInstance}
        names={["по 3 подсказки", "По 10 подсказок"]}
        onAllButtonRight={ThreeTip}
        onButtonDefaultStatus={TenTip}
      />
      <SecondControl buttonChangerInstance={buttonChangerInstance} />
    </div>
  );
};
