
module.exports = {
	configureWebpack: {
		module: {
			rules: [
				// {
				// 	test: /\.(png|jpe?g|gif|webm|mp4|svg)$/,
	   //      loader: "file-loader",
	   //      options: {
	   //        name: "[name][contenthash:8].[ext]",
	   //        outputPath: "assets/img",
	   //        esModule: false,
	   //      }
				// }
			]
		}
	},
	devServer: {
		port: 8083
	}
};