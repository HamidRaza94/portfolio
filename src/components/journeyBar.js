const JourneyBar = (props) => {
  const { height = 144 } = props;

  return (
    <div className="flex flex-col items-center">
      <div className="w-5 h-5 bg-primary rounded-full flex justify-center items-center">
        <div className="w-1 h-1 bg-white rounded-full"></div>
      </div>
      <div
        className={`w-1.5 bg-primary`}
        style={{ marginTop: -1, height: height }}
      />
    </div>
  );
};

export default JourneyBar;
