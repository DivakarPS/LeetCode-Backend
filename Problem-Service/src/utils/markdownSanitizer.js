const marked = require('marked');
const sanitizeHtml = require('sanitize-html');
const TurnDownService = require('turndown');

function sanitizeMarkdownContent(markdownContent){
    const convertedHtml = marked.parse(markdownContent);
    const turnDownService = new TurnDownService();
    console.log("convertedHtml", convertedHtml);
    const sanitizedHtml = sanitizeHtml(convertedHtml, {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat([ 'img' ]),
    });
    console.log("sanitizedHtml", sanitizedHtml);
    const sanitizedMarkDown =  turnDownService.turndown(sanitizedHtml);
    console.log("sanitizedMarkDown", sanitizedMarkDown);
    return sanitizedMarkDown;
}

module.exports = sanitizeMarkdownContent;