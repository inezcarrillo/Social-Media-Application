const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat')

const thoughtSchema = new Schema(
    {
        thoughtId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId,
        },
        thoughtBody: {
            type: String,
            required: true,
            maxlength: 280,
        },
        userName: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
        },
    },
    {
        toJSON: {
            getters: true,
        },
        id: false,
    }
);

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;