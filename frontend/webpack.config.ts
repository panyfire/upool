import * as path from 'path'

module.exports = {
  plugins: [
    {
      test: /\.(jpe?g|png|gif|svg)$/i,
      loader: 'file-loader?name=/img/[name].[ext]',
    },
    {
      test: /\.svg$/,
      use: [
        {
          loader: 'babel-loader',
        },
        {
          loader: 'react-svg-loader',
          options: {
            jsx: false,
          },
        },
      ],
    },
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@': path.resolve(__dirname, 'src/'),
    },
  },
}
