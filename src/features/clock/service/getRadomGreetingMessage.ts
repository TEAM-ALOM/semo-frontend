import { greetingMessageTemplates } from '../model/greetingMessageTemplates';

export const getRandomGreetingMessage = () => {
  return greetingMessageTemplates[
    Math.floor(Math.random() * greetingMessageTemplates.length)
  ];
};
