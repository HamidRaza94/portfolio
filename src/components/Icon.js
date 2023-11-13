import PropTypes from 'prop-types';

import HomeIcon from '@/assets/icons/new/home.svg';
import PersonIcon from '@/assets/icons/new/person.svg';
import TrophyIcon from '@/assets/icons/new/trophy.svg';
import SuitcaseIcon from '@/assets/icons/new/suitcase.svg';
import BooksIcon from '@/assets/icons/new/books.svg';
import ListCheckIcon from '@/assets/icons/new/list-check.svg';
import FolderOpenIcon from '@/assets/icons/new/folder-open.svg';
import AddressBookIcon from '@/assets/icons/new/address-book.svg';
import UserCircleIcon from '@/assets/icons/new/user-circle.svg';

const IconMapping = {
  home: HomeIcon,
  person: PersonIcon,
  trophy: TrophyIcon,
  suitcase: SuitcaseIcon,
  books: BooksIcon,
  listCheck: ListCheckIcon,
  folderOpen: FolderOpenIcon,
  addressBook: AddressBookIcon,
  userCircle: UserCircleIcon,
};

const Icon = ({ name, size, selected }) => {
  const SVGIcon = IconMapping[name];

  return (
    <div>
      <SVGIcon
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className={selected ? 'stroke-grey dark:stroke-grey' : 'stroke-black dark:stroke-grey'}
      />
    </div>
  );
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  size: PropTypes.number,
};

Icon.defaultProps = {
  size: 24,
};

export default Icon;
