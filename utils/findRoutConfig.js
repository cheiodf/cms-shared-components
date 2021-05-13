import { navigationFlat } from './navigationFlat';

export const findRouteConfig = path => {
  const pathWithoutQueryValue = path.split('=')[0];
  const pathLastCharacter = pathWithoutQueryValue.substr(
    pathWithoutQueryValue.length - 1
  );

  const pathToCompare =
    pathLastCharacter === '/'
      ? pathWithoutQueryValue.slice(0, -1)
      : pathWithoutQueryValue;

  const config = navigationFlat.filter(page => pathToCompare === page.path)[0];

  return config;
};
