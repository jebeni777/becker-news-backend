'use strict';
const Comment = require('./models/Comment').default;
const mongoose = require('mongoose');

module.exports.create = async (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;
    try {
        await mongoose.connect(process.env.DB);
        const comment = await Comment.create(JSON.parse(event.body));
        await mongoose.connection.close()
        return callback(null, {
            statusCode: 200,
            body: JSON.stringify(comment),
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true
            }
        });
    }
    catch (err) {
        await mongoose.connection.close()
        return callback(null, {
            statusCode: err.statusCode || 500,
            body: JSON.stringify(err),
            headers: {
                'Content-Type': 'text/plain',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true
            }
        });
    }
};
  
module.exports.getAll = async (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;
    try {
        await mongoose.connect(process.env.DB);
        const comment = await Comment.find();
        await mongoose.connection.close()
        callback(null, {
        statusCode: 200,
        body: JSON.stringify(comments),
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true
        }
        })
    } catch(err) {
        console.log('Error: ', err)
        await mongoose.connection.close()
        callback(null, {
        statusCode: err.statusCode || 500,
        body: JSON.stringify(err),
        headers: {
            'Content-Type': 'text/plain',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true
        }
        })
    }
};