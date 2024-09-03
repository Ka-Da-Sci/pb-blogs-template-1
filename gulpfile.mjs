import { src, dest, series, parallel, watch } from 'gulp';
import browserSync from 'browser-sync';
import postCss from 'gulp-postcss';
import { deleteAsync } from 'del';
// import imagemin from 'gulp-imagemin';
// import newer from 'gulp-newer';

// Import PostCSS plugins
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

const source = 'src';
const destination = 'build';
const bs = browserSync.create();

async function clean(cb) {
    await deleteAsync(destination);
    cb();
}

function html(cb) {
    src(`${source}/*.html`).pipe(dest(destination));
    cb();
}

function css(cb) {
    src(`${source}/**/*.css`)
    .pipe(postCss([tailwindcss(), autoprefixer()]))
    .pipe(dest(`${destination}`));
    cb();
}

function js(cb) {
    src(`${source}/**/*.js`)
        .pipe(dest(`${destination}`));
    cb();
}


function images(cb) {
    src(`${source}/**/*.{jpg,jpeg,png,svg,gif}`, {encoding: false})
    // .pipe(newer(destination)) // Only pass through newer images
    // .pipe(imagemin()) // Optimize images
    .pipe(dest(`${destination}`));
    cb();
}

function watcher(cb) {
    watch(`${source}/**/*.{jpg,jpeg,png,svg,gif}`).on('change', parallel(images, bs.reload));
    watch(`${source}/*.html`).on('change', series(html, bs.reload));
    watch(`${source}/**/*.css`).on('change', series(css, bs.reload));
    watch(`${source}/**/*.{jpg,jpeg,png,svg,gif}`).on('change', series(images, bs.reload));
    watch(`${source}/**/*.js`).on('change', series(js, bs.reload));
    watch("./gulpfile.mjs").on('change', bs.reload);
    cb();
}

function server(cb) {
    bs.init({
        notify: false,
        open: false,
        server: {
            baseDir: destination
        }
    });
    cb();
}

export default series(clean, images, parallel(html, css, js), server, watcher);
