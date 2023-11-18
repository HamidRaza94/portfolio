import { useState, useContext, forwardRef } from 'react';
import classNames from 'classnames';
import Modal from 'react-modal';

import PageHeading from '@/components/pageHeading';
import ClipboardIcon from '@/assets/icons/clipboard.svg';
import Label from '@/components/label';
import Spacer from '@/components/spacer';
import Button from '@/components/button';
import Divider from '@/components/divider';
import Card from '@/components/card';
import useNavigation from '@/hooks/useNavigation';

import ThemeModeContext from '@/contexts/ThemeModeContext';

const PROJECT_LIST = [
  {
    id: '1',
    name: 'Plan & Buy Manager',
    duration: 'mar 2021 - sep 2021',
    description: 'Marketing product to have transparency between client and the dentsu team, have workflows to allow dentsu teams to work',
    techs: ['React JS', 'Node JS', 'Mongo DB', 'Express JS', 'GraphQL', 'Apollo'],
  },
  {
    id: '2',
    name: 'Data Refinery',
    duration: 'mar 2021 - sep 2021',
    description: 'It provides a self-serve experience, where teams can set up connectors, apply taxonomies, create transformation rules',
    techs: ['React JS', 'Node JS', 'Mongo DB', 'Express JS', 'GraphQL', 'Apollo'],
  },
  {
    id: '3',
    name: 'Vendor Management',
    duration: 'mar 2021 - sep 2021',
    description: 'It is responsible for adding vendors to the Dentsu media ecosystem and tracking contract details of a particular vendor',
    techs: ['React JS', 'Node JS', 'Mongo DB', 'Express JS', 'GraphQL', 'Apollo'],
  },
  {
    id: '4',
    name: 'Taxonomy',
    duration: 'mar 2021 - sep 2021',
    description: "It's responsible to create record of how data should be formatted for your campaigns. It provides self-servce administration to",
    techs: ['React JS', 'Node JS', 'Mongo DB', 'Express JS', 'GraphQL', 'Apollo'],
  },
];

const Projects = (_, ref) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const { darkThemeMode } = useContext(ThemeModeContext);
  const isMobileView = useNavigation();

  const openModal = (projectId) => {
    setSelectedProject(projectId);
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  }

  const customStyles = {
    content: {
      top: '50px',
      bottom: '50px',
      left: '20px',
      right: '20px',
      backgroundColor: darkThemeMode ? '#656565' : '#ffffff',
    },
    overlay: {
      zIndex: 100,
    },
  };

  if (isMobileView) {
    return (
      <div ref={ref} className={classNames('')}>
        <PageHeading label="Projects" />

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
              <Button primary css="px-2 py-1 rounded" onClick={() => openModal(index)}>
                Read more
              </Button>

              <Spacer size={10} axis="vertical" />
              {(PROJECT_LIST.length - 1 !== index) && <Divider />}
            </div>
          </div>
        ))}

        {isModalOpen && (
          <Modal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Project Description"
          >
            <div className="flex flex-col justify-between h-full">
              <div className="flex flex-col items-center">
                <div className="flex justify-center items-center w-28 h-28 bg-grey rounded-full">
                  <ClipboardIcon width={80} height={80} />
                </div>

                <div className="flex flex-col items-center my-3">
                  <Label text={PROJECT_LIST[selectedProject].name} isBold size="text-lg" />
                  <Label text={PROJECT_LIST[selectedProject].duration} isItalic style="leading-3" />
                </div>

                <Label text={PROJECT_LIST[selectedProject].description} style="leading-none" />
              </div>

              <div className="flex justify-end">
                <Button
                  onClick={closeModal}
                  primary
                  noPadding
                  css="py-1 px-5"
                >
                  OK
                </Button>
              </div>
            </div>
          </Modal>
        )}
      </div>
    );
  }

  return (
    <div>
      <PageHeading label="Projects" ref={ref} />

      <div ref={ref} className="flex m-2 flex-wrap justify-between">
        {PROJECT_LIST.map((project, index) => (
          <Card
            key={index.toString}
            title={project.name}
            subTitle={project.duration}
            description={project.description}
            techs={project.techs}
          />
        ))}
      </div>
    </div>
  );
}

export default forwardRef(Projects);
