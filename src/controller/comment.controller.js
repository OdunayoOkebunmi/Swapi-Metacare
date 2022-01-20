import axios from 'axios';
import Comment from '../database/models/Comment';
import { errorResponse, successResponse } from '../helper/responseHandler';
import env from '../helper/config';
import { sortDynamic } from '../helper/utils';

export const createComment = async (req, res, next) => {
  try {
    const { body: { comment }, params: { id } } = req;
    if (!comment) return errorResponse(res, 400, { message: 'Add comment' });
    if (!id) return errorResponse(res, 400, { message: 'Add movie ID' });
    if (comment.length > 500) return errorResponse(res, 400, { message: 'Comment should be less than 500 characters' });
    const isMovie = await axios.get(`${env.swapi_url}/films/${id}`);
    if (!isMovie) {
      return errorResponse(res, 404, { message: 'Movie not found' });
    }
    const data = await new Comment({
      movieID: id,
      comment,
      userIP: req.ip,
    });
    data.save();
    return successResponse(res, 201, 'comment', { message: 'Comment added succesfully!', data });
  } catch (error) {
    return next(error);
  }
};

export const getAllComments = async (req, res, next) => {
  try {
    const data = await Comment.find({});
    data.sort(sortDynamic('comment', 'asc'));
    return successResponse(res, 200, 'comment', { message: 'Successfully retrieved all comments', data });
  } catch (error) {
    return next(error);
  }
};

export const getOneComment = async (req, res, next) => {
  try {
    const { params: { id } } = req;
    const data = await Comment.find({ _id: id });
    if (data.length === 0) {
      return errorResponse(res, 404, { message: 'Comment not found!' });
    }
    return successResponse(res, 200, 'comment', { message: 'Successfully retrieved comment', data });
  } catch (error) {
    return next(error);
  }
};
