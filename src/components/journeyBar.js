const JourneyBar = (props) => {
  const { height = 36 } = props;

  return (
    <>
      <div className="w-5 h-5 bg-primary rounded-full flex justify-center items-center">
        <div className="w-1 h-1 bg-white rounded-full"></div>
      </div>
      <div
        className={`w-1.5 h-${height} bg-primary`}
        style={{ marginTop: -1 }}
      ></div>
    </>
  );
};

export default JourneyBar;
