
const { src, dest, watch } = require('gulp'); 
const sass = require('gulp-sass')(require('sass'));

function css (donde) {
src('src/scss/app.scss') // Identificar el archivo de SASS
.pipe(sass()) //Compilarlo
.pipe(dest("build/css")); //Guardarlo en el Disco duro 


    donde() ; // Callback que avisa a gulp cuando llegamos al final; 
}

function dev(donde){
    watch("src/scss/app.scss", css) ; 

    donde()
}
exports.css = css ; 
