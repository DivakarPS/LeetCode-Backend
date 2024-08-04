const mongoose = require('mongoose');
const { Schema } = mongoose;

const problemSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title cannot be empty']
    },
    description: {
        type: String,
        required: [true, 'Description cannot be empty']
    },
    difficulty: {
        type: String,
        enum : ['easy', 'medium', 'hard'],
        required: [true, 'Difficulty cannot be empty'],
        default: 'easy'
    },
    testCases: [
        {
            input: {
                type: String,
                required: [true, 'Input cannot be empty']
            },
            output: {
                type: String,
                required: [true, 'Output cannot be empty']
            }
        }
    ],
    codeStubs: [
        {
            language: {
                type: String,
                
            },
            startSnippet: {
                type: String,
                
            },
            endSnippet: {
                type: String,
                
            }
        }
    ],
    editorial: {
        type: String
    }
});

const Problem = mongoose.model('Problem', problemSchema);

module.exports = Problem;