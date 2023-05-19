
function generateMarkdown(answers) {
  return `

    ${answers.projectName}
    
## Description 

    ${answers.description}
        
## Installation
    
    ${answers.Installation}
      
## Usage

    ${answers.Usage}
    
    Provide instructions and examples for use. Include screenshots as needed.
    
## Credits
    
    ${answers.Credits}
    
## License    

    The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, 

    ${answers.License}
       
## Badges
![alt text for screen readers](/path/to/image.png "Text to show on mouseover")

    ${answers.Badges}
`;
}
module.exports = { generateMarkdown };
