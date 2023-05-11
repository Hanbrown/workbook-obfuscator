# Workbook Obfuscator
*A program that bundles and obfuscates students' js code and then prunes unneeded js files*

## How to use this program
1. Clone the desired repository into the student folder
2. Create a branch for editing
3. In __webpack.config.js__ set the `student` variable to the repository folder name
4. Run `npm run build`
5. On successful output, test with `npm start`
   1. If http-server isn't working, use another server (like VSCode LiveServer)
6. To prune JavaScript files, go to root directory and run `bash remove-js.sh`
7. Verify that project still works
8. Push branch to desired server

## How to install this program
1. Run `bash setup.sh`

## Dependencies
* NodeJS
* http-server
* Git
* Git Bash