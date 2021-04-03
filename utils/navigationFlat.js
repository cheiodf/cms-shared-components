import { navigation } from '../../utils/constants/navigation';

export const navigationFlatFunction = (navigationItems = navigation) => {
  const newNavigation = [];

  const itemLoop = routes => {
    routes.map(item => {
      newNavigation.push(item);
      if (item?.subPaths?.length) {
        item.subPaths.map(() => itemLoop(item.subPaths));
      }
      return true;
    });

    return newNavigation;
  };

  return itemLoop(navigationItems);
};

export const navigationFlat = navigationFlatFunction();
