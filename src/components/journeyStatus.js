import Image from 'next/image';

import Label from '@/components/label';
import IntersoftCompanyImage from '@/assets/images/intersoft-dark.png';

const JourneyStatus = () => {
  return (
    <div className="flex">
      <Image
        src={IntersoftCompanyImage}
        alt="Intersoft Company Logo"
        className="w-24 h-10 mr-3"
      />

      <div className="flex flex-col items-center mt-3">
        <div className="w-5 h-5 bg-primary rounded-full flex justify-center items-center">
          <div className="w-1 h-1 bg-white rounded-full"></div>
        </div>
        <div className="w-1.5 h-20 bg-primary" style={{ marginTop: -1 }}></div>
      </div>

      <div className="mt-10">
        <Label text="technical analyst" />
        <Label text="sept 2021 - mar 2023" isItalic />
      </div>
    </div>
  );
};

export default JourneyStatus;
