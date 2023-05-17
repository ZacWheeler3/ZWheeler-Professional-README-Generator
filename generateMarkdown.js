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
    
    
        ![alt text](assets/images/screenshot.png)

    
    ## Credits
    
    ${answers.Credits}
    
    ## License
    
    ${answers.License}
    The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).
       
    ## Badges
    
    ![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)
    
    Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.
        
`
}
module.exports = {generateMarkdown};