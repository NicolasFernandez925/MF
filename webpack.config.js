const HtmlWebPackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const name = require('./package.json').name;
const deps = require('./package.json').dependencies;
const info = require('./package.json').customInfo;

const devPort = info.devPort;
const prodPort = info.prodPort;

module.exports = (env, argv) => {
  const path = require('path');
  const isDevelopment = argv.mode === 'development';
  const port = isDevelopment ? devPort : prodPort;

  return {
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.js',
    },

    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000,
    },

    devServer: {
      port: port,
      historyApiFallback: true,
    },

    resolve: {
      extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
      plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })],
    },

    module: {
      rules: [
        {
          test: /\.m?js/,
          type: 'javascript/auto',
          resolve: {
            fullySpecified: false,
          },
        },
        {
          test: /\.(css|s[ac]ss)$/i,
          use: ['style-loader', 'css-loader', 'postcss-loader'],
        },
        {
          test: /\.(ts|tsx|js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
      ],
    },

    plugins: [
      new webpack.ProvidePlugin({
        React: 'react',
      }),
      new ModuleFederationPlugin({
        name: info.alias,
        filename: 'remoteBundle.js',
        exposes: {
          './Packs': './src/modules/Packs/Packs.tsx',
        },
        shared: {
          ...deps,
          react: {
            singleton: true,
            eager: true,
            requiredVersion: deps.react,
          },
          'react-dom': {
            singleton: true,
            eager: true,
            requiredVersion: deps['react-dom'],
          },
        },
      }),
      new HtmlWebPackPlugin({
        template: './src/index.html',
        favicon: './src/favicon.ico',
        title: name,
      }),
    ],
  };
};
