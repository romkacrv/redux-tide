import {createAction} from "../../../src/action";
import * as api from '../RESTApi'
import {postsSchema} from "./schema";


/**
 * Ajax axios call get post by Id
 *
 * @property {Number} postId - post id
 *
 * @type {Action}
 */
export const fetchPost = createAction(
  postsSchema,
  api.get,
  postId => `posts/${postId}`
)

export const updatePost = createAction(
  postsSchema,
  api.put,
  (postId, data) => [
    `posts/${postId}`,
    undefined,
    data
  ]
)
