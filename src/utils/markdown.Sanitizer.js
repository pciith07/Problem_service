const marked = require('marked');
const sanitizeHtml = require('sanitize-html');
const TurnDownService = require('turndown')

function sanitizedMarkdown(markedDownContent){
    const turndownService = new TurnDownService();
    const convertedHtml = marked.parse(markedDownContent);
    console.log(convertedHtml);
    const sanitizedHtml = sanitizeHtml(convertedHtml,
        {
            allowedTags: sanitizeHtml.defaults.allowedTags
        }
    );
    console.log(sanitizedHtml);
    const sanitizedMarkdownContent = turndownService.turndown(sanitizedHtml);
    console.log(sanitizedMarkdownContent)
    return sanitizedMarkdownContent;
}

// const input = `
// #hello world
// ### this is a markdown
// - something
// <script> alert('wohoo')</script>
// [Link](www.google.com)

// `

module.exports = sanitizedMarkdown;
