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
        // the name of the file that the transpalled code is stored on
        filename: "bundle.js",
        path: path.resolve(__dirname, "public")
    }
}