/** @type {{images: {imageSizes: number[], loader: string, deviceSizes: number[], nextImageExportOptimizer: {imageFolderPath: string, exportFolderPath: string, quality: number}}, assetPrefix: string, reactStrictMode: boolean, env: {storePicturesInWEBP: boolean}}} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: '/',
  images: {
    loader: "custom",
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    nextImageExportOptimizer: {
      imageFolderPath: "public/",
      exportFolderPath: "out",
      quality: 90
    }
  },
  env: {
    storePicturesInWEBP: true
  }
}

module.exports = nextConfig
