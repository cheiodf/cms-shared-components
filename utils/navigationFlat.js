import { navigation } from '../../utils/constants/navigation';

const navigationFlatFunction = () => {
  const newNavigation = [];

  const itemLoop = routes => {
    routes.map(item => {
      newNavigation.push(item);
      if (item.subPaths.length) {
        item.subPaths.map(() => itemLoop(item.subPaths));
      }
      return true;
    });

    return newNavigation;
  };

  return itemLoop(navigation);
};

export const navigationFlat = navigationFlatFunction();
