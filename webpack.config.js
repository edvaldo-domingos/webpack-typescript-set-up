const path = require("path");

module.exports = {
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