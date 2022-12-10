const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '1cc28d7cb8202fa7566afa90c4a8b9f4',
    orginalImage: (imgPath: string) =>
        `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath: string) =>
        `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
