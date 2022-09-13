import { Request, Response } from 'express';
import { Post } from 'firebase-backend'; // Get, Post, Put, Update, Delete available

// Use the `Post` class which is extended from the `Endpoint` class.
export default new Post((request: Request, response: Response) => {
  // Read the values out of the body
  const questionId = request.body['questionId'];

  // Send your response. 201 to indicate the creation of a new resource
  console.log("request received");
  return response.status(200).send({
    token: questionId,
  });
});
