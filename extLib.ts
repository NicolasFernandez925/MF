const fs = require('fs-extra');

function copyDirectory(sourceDir, destinationDir) {
  fs.copySync(sourceDir, destinationDir);
}

function cleanDirectory(directory) {
  fs.emptyDirSync(directory);
}

//Limpia Libreria
cleanDirectory('src/library');

//Extrae sp-front-design-lib
copyDirectory('node_modules/sp-front-design-lib/export', 'src/library');

//Extrae sp-front-utils-lib
copyDirectory('node_modules/sp-front-utils-lib/export', 'src/library');