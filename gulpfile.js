var gulp = require("gulp");
var gulp_clean = require("rimraf");
var gulp_concat = require("gulp-concat");
var gulp_cssmin = require("gulp-cssmin");
var gulp_uglify = require("gulp-uglify");
var angularTemplateCache = require('gulp-angular-templatecache');
var addStream = require('add-stream');
var htmlmin = require('gulp-htmlmin');


var gulpPaths = {
    jsDestRoot: "./dist/"
};
gulpPaths.concatJsDest = gulpPaths.jsDestRoot + "CookBook.min.js";
gulpPaths.concatCSSDest = gulpPaths.jsDestRoot + "CookBook.min.css";
gulpPaths.concatVendorJsDest = gulpPaths.jsDestRoot + "Vendor.min.js";
var config = {
    htmltemplates: './src/template/*.html',
    templateCache: {
        file: 'templates.js',
        options: {
            module: 'cookbook',
            root: '/src/template',
            standAlone: false
        }
    },
    temp: './src/js/template/'
};


gulp.task('templatecache', function () {

    return gulp
        .src(config.htmltemplates)
        .pipe(angularTemplateCache(
            config.templateCache.file,
            config.templateCache.options
        ))
        .pipe(gulp.dest(config.temp));
});

gulp.task("ConcatAndMinJs", function () {
    return gulp.src([
        './src/js/app.js',   
        './src/js/template/templates.js',   
        './src/js/controller/CommentController.js',    
        './src/js/controller/ManageRecipesController.js',    
        './src/js/controller/ViewRecipesController.js', 
        './src/js/directive/Confirm.js', 
        './src/js/services/recipesService.js',
        './src/js/services/ModelDialogService.js'
         ], { base: "." })
            .pipe(gulp_concat(gulpPaths.concatJsDest))
            .pipe(gulp.dest("."));
});


gulp.task('ConcatAndMinCSS', function () {
    gulp.src('src/css/**/*.css')
        .pipe(gulp_cssmin())
        .pipe(gulp_concat(gulpPaths.concatCSSDest))
        .pipe(gulp.dest("."));
});

gulp.task('ConcatVendorJs', function () {
    gulp.src([
        './Plugin/jquery-2.js',
        './Plugin/angular.js',
        './Plugin/angular-ui-utils.js',
        './Plugin/ui-bootstrap-tpls.js',
        './Plugin/bootstrap.js',
        './Plugin/jquery-core.js',
        './Plugin/layout.js',
        './Plugin/superclick.js'
    ])
        .pipe(gulp_cssmin())
        .pipe(gulp_concat(gulpPaths.concatVendorJsDest))
        .pipe(gulp.dest("."));
});

gulp.task("RunAll", ["templatecache", "ConcatVendorJs","ConcatAndMinJs", "ConcatAndMinCSS"]);

