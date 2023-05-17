const questions = [
  {
    type: "input",
    message: "What is the name of the project?",
    name: "projectName",
    default: "README GENERATOR",
  },

  {
    type: "input",
    message: "What are your thoughts on the README file?",
    name: "description",
  },

  {
    type: "input",
    message: "What do you need installed to run your challenge?",
    name: "Installation",
  },

  {
    type: "input",
    message: "How do you use your challenge?",
    name: "Usage",
  },

  {
    type: "input",
    message: "Did you collaborate with anyone on this? If so, link their Github",
    name: "Credits",
  },

  {
    type: "input",
    message: "What licensing did you use for this?",
    name: "License",
  },


];

module.exports = {
  questions
};
