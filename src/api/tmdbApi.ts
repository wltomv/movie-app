import axiosClient from './axios';
import { TvType } from '../models/tv.models';
import { Category } from '../models/category.models';
import { MovieType, IMoviesResponse } from '../models/movies.models';

export const category: Category = {
    movie: 'movie',
    tv: 'tv',
};

export const movieType: MovieType = {
    upcoming: 'upcoming',
    popular: 'popular',
    top_rated: 'top_rated',
};

export const tvType: TvType = {
    upcoming: 'upcoming',
    popular: 'popular',
    on_the_air: 'on_the_air',
    top_rated: 'top_rated',
};

const tmdbApi = {
    getMoviesList: (type: string, params: object) => {
        const url = `movie/${movieType[type as keyof MovieType]}`;
        return axiosClient.get<IMoviesResponse>(url, { params });
    },
    getTvList: (type: string, params: object) => {
        const url = `tv/${tvType[type as keyof TvType]}`;
        return axiosClient.get<IMoviesResponse>(url, params);
    },
    getVideos: (_category: string, id: string) => {
        const url = `${category[_category as keyof Category]}/${id}/videos`;
        return axiosClient.get(url, { params: {} });
    },
    search: (_category: string, params: object) => {
        const url = `search/${category[_category as keyof Category]}`;
        return axiosClient.get(url, params);
    },
    detail: (_category: string, id: string, params: object) => {
        const url = `${category[_category as keyof Category]}/${id}`;
        return axiosClient.get(url, params);
    },
    credits: (_category: string, id: string) => {
        const url = `${category[_category as keyof Category]}/${id}/credits`;
        return axiosClient.get(url, { params: {} });
    },
    similar: (_category: string, id: string) => {
        const url = `${category[_category as keyof Category]}/${id}/similar`;
        return axiosClient.get(url, { params: {} });
    },
};

export default tmdbApi;
