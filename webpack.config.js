const path = require("path");

module.exports = {

    mode: "development",
    //allow to debug on the browser and let you see the origin of the line of code not just the bundled .js transpalled file
    devtool: 'eval-source-map',

    // where webpack starts reading
    entry: "./src/index.ts",
    module: {
        rules: [
            {   //used to test files when they are compilled, if test pass test use the loader
                test: /\.ts$/,
                use: 'ts-loader',
                // where the ts files whould b in our project (inside src fodler)
                include: [path.resolve(__dirname, 'src')]
            }
        ]
    },
    resolve: {
        // what extensions (files) we want webpack to be able to resolve
        extensions: ['.ts', '.js']
    },

    output: {
        // publicPath: "public",

        // the name of the file that the transpalled code is stored on
        filename: "bundle.js",
        path: path.resolve(__dirname, "public")
    },

    devServer: {
        //tell the dev server where to serve the ts compilled code in memory from
        publicPath: "/",
        contentBase: "./public",
        hot: true
    }
}