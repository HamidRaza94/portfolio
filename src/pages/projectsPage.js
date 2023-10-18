import { forwardRef } from 'react';
import classNames from 'classnames';

import PageHeading from '@/components/pageHeading';
import ClipboardIcon from '@/assets/icons/clipboard.svg';
import Label from '@/components/label';
import Spacer from '@/components/spacer';
import Button from '@/components/button';
import Divider from '@/components/divider';

const PROJECT_LIST = [
  {
    id: '1',
    name: 'Plan & Buy Manager',
    duration: 'mar 2021 - sep 2021',
    description: 'Marketing product to have transparency between client and the dentsu team, have workflows to allow dentsu teams to work',
  },
  {
    id: '2',
    name: 'Data Refinery',
    duration: 'mar 2021 - sep 2021',
    description: 'It provides a self-serve experience, where teams can set up connectors, apply taxonomies, create transformation rules',
  },
  {
    id: '3',
    name: 'Vendor Management',
    duration: 'mar 2021 - sep 2021',
    description: 'It is responsible for adding vendors to the Dentsu media ecosystem and tracking contract details of a particular vendor',
  },
  {
    id: '4',
    name: 'Taxonomy',
    duration: 'mar 2021 - sep 2021',
    description: "It's responsible to create record of how data should be formatted for your campaigns. It provides self-servce administration to",
  },
];

const Projects = (_, ref) => {
  return (
    <div className={classNames('')}>
      <PageHeading label="Projects" ref={ref} />

      {PROJECT_LIST.map((project, index) => (
        <div className="flex" key={project.id}>
          <div className="flex justify-center items-center w-28 h-28 bg-grey rounded-full">
            <ClipboardIcon width={80} height={80} />
          </div>

          <div className="flex flex-col items-start w-[calc(100%-112px)] pl-2">
            <Label text={project.name} isBold size="text-lg" />
            <Label text={project.duration} isItalic style="leading-3" />
            <Spacer size={10} axis="vertical" />
            <Label text={project.description} style="line-clamp-2 leading-none" />
            <Spacer size={10} axis="vertical" />
            <Button primary css="px-2 py-1 rounded">Read more</Button>
            <Spacer size={10} axis="vertical" />
            {(PROJECT_LIST.length - 1 !== index) && <Divider />}
          </div>
        </div>
      ))}
    </div>
  );
}

export default forwardRef(Projects);
