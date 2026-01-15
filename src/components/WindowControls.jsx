import useWindowStore from "#store/window";

const WindowControls = ({ target }) => {
  const {
    closeWindow,
    minimizeWindow,
    toggleMaximizeWindow,
  } = useWindowStore();

  return (
    <div id="window-controls">
      {/* CLOSE */}
      <div
        className="close"
        onClick={() => closeWindow(target)}
      />

      {/* MINIMIZE */}
      <div
        className="minimize"
        onClick={() => minimizeWindow(target)}
      />

      {/* MAXIMIZE */}
      <div
        className="maximize"
        onClick={() => toggleMaximizeWindow(target)}
      />
    </div>
  );
};

export default WindowControls;
