# Config
## version
node version is v16.15.1

# Scripts
## `npm start`
Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
## `npm run build`
Getting Started with Create React App
Builds the app for production to the `build` folder.

## directory
- src
    - common
        - api: fetch methods
        - config: common config
    - components: page components
    - css: style.scss
    - font
    - img
    - type: type delaration

## logic
### switch type
1. table type: miners, asteroids, planets, display miners by default
2. click icon to switch type
3. call interface and refresh table, toggle active icon 

### show miners
1. click miners field
2. show popover 
3. call interface and refresh table [list of miners]   
4. click icon to close popover

### show history
1. click name field
2. show popover 
3. call interface and refresh table [history of person]   
4. click icon to close popover

### create a miner
1. click create a miner
2. show create popover
3. click Save
4. validate form fields and give a hint
5. call interface and then prompt success or fail
6. click icon to close result popover
7. refresh currrent table


## style
- if minerals is 0, set color red
- set clickable span blue


