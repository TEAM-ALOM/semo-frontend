import { backgroundImagePaths } from '../model/backgroundImages';

export const getRandomImageUrl = () => {
  return backgroundImagePaths[
    Math.floor(Math.random() * backgroundImagePaths.length)
  ];
};
