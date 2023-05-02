const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '546431390c225f95c894326e53202641',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;