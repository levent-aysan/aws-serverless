'use strict';

const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient;
const createArticle = require('./model.js').createArticle;
const DynamoDAO = require('../util/dynamo-dao.js');
const ArticleController = require('./controller.js');

module.exports.handler = function(event, context, callback) {
    const article = createArticle(event, context, callback);
    const dynamoDAO = new DynamoDAO(dynamo, 'BlogTable');
    const controller = new ArticleController(dynamoDAO);
    controller.updateArticle(article, callback);
};