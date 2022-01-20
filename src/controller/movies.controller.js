/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
import axios from 'axios';
import { errorResponse, successResponse } from '../helper/responseHandler';
import env from '../helper/config';
import { sortDynamic } from '../helper/utils';

export const getMoviesSorted = async (req, res, next) => {
  try {
    const movies = await axios.get(`${env.swapi_url}/films`);
    if (!movies) return errorResponse(res, 404, { message: 'Movies not found!' });
    let data = {};
    const { results } = movies.data;
    data = (results).map((movie) => (
      {
        title: movie.title,
        opening_crawl: movie.opening_crawl,
        release_date: movie.release_date,
      }
    ));
    data.sort(sortDynamic('release_date', 'asc'));
    return successResponse(res, 200, 'movies', data);
  } catch (error) {
    return next(error);
  }
};
