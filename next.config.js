/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        loader: 'custom',
        loaderFile: './image-loader.js',
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: [{
                loader: '@svgr/webpack',
                options: {
                svgo: false
                }
            }]
        })
        return config
    },
}

module.exports = nextConfig
