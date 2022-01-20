/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
import axios from 'axios';
import { errorResponse, successResponse } from '../helper/responseHandler';
import env from '../helper/config';
import { sortedCharacters, filteredCharacters } from '../helper/utils';

export const getCharactersSorted = async (req, res, next) => {
  try {
    const { query: { sortParam, gender } } = req;
    const characters = await axios.get(`${env.swapi_url}/people/`);
    if (!characters) return errorResponse(res, 404, { message: 'Characters not found!' });
    let data = {};
    const { results } = characters.data;
    data = (results).map((character) => (
      {
        name: character.name,
        height: character.height,
        mass: character.mass,
        hair_color: character.hair_color,
        skin_color: character.skin_color,
        eye_color: character.eye_color,
        birth_year: character.birth_year,
        gender: character.gender,
      }
    ));
    const sortedData = (sortParam) ? sortedCharacters(data, sortParam, 'asc') : filteredCharacters(gender, data);
    return successResponse(res, 200, 'characters', sortedData);
  } catch (error) {
    return next(error);
  }
};
