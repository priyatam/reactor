var path = require('path');
var util = require('util');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer-core');
var pkg = require('./package.json');
var join = require('path').join;
var webpackPostcssTools = require('webpack-postcss-tools');

var DEBUG = process.env.NODE_ENV !== 'production';

var cssBundle = path.join('./', util.format('[name].%s.css', pkg.version));
var jsBundle = path.join('./', util.format('[name].%s.js', pkg.version));

var cssExtractTextPlugin = new ExtractTextPlugin(cssBundle, {
  allChunks: true
});

var plugins =[
  new webpack.optimize.OccurenceOrderPlugin(),
  cssExtractTextPlugin
];

if (DEBUG) {
  plugins.push(
    new webpack.HotModuleReplacementPlugin()
  );
} else {
  plugins.push(
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.NoErrorsPlugin()
  );
}

var loaders = [
  {
    test: /\.jsx?$/,
    loaders: ['react-hot', 'babel-loader?optional&optional=runtime'],
    exclude: /node_modules/
  },
  {
    test: /\.css$/,
    loader: 'style!css?importLoaders=1!postcss'
  },
  {
    test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$/,
    loader: 'file-loader?name=[path][name].[ext]'
  },
  {
    test: /\.html$/,
    loader: [
      'file-loader?name=[path][name].[ext]',
      'template-html-loader?' + [
        'raw=true',
        'engine=lodash',
        'version='+pkg.version
      ].join('&')
    ].join('!')
  },
  {
    test: /\.scss$/,
    loader: cssExtractTextPlugin.extract('style-loader', [
      'css-loader?sourceMap',
      'postcss-loader',
      'sass-loader?' + [
        'sourceMap',
        'outputStyle=expanded',
        'includePaths[]=' + path.resolve(__dirname, './app/styles'),
        'includePaths[]=' + path.resolve(__dirname, './node_modules')
      ].join('&')
    ].join('!'))
  }
];

var entry = {
  app: ['./app.jsx']
};
if (DEBUG) {
  entry.app.push('webpack-dev-server/client?http://localhost:8000');
  entry.app.push('webpack/hot/only-dev-server');
}

var cssMap = webpackPostcssTools.makeVarMap('app/styles/typography.css');

var config = {
  entry: entry,
  context: path.join(__dirname, 'app'),
  output: {
    path: pkg.config.build_dir,
    publicPath: '/',
    filename: jsBundle,
    pathinfo: DEBUG
  },
  cache: DEBUG,
  debug: DEBUG,
  target: 'web',
  devtool: DEBUG ? '#inline-source-map' : false,
  module: {
    loaders: loaders
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    packageMains: ['webpack', 'browser', 'web', 'style', 'main' ]
  },
  plugins: plugins,
  postcss: [
    autoprefixer,
    webpackPostcssTools.prependTildesToImports,

    require('postcss-custom-properties')({
      variables: cssMap.vars
    }),

    require('postcss-custom-media')({
      extensions: cssMap.media
    }),

    require('postcss-calc')()
  ]
};

module.exports = config;
