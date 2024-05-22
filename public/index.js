function onloadpaste() {
	let text = '# Markdown previewer\n'
	text += 'Hello, and welcome to my markdown previewer by zahadneokurkycz\n'
	text += '## Example use\n'
	text += '[This is a link to the source code](https://github.com/zahadneokurkycz/markdown-preview)\n'
	text += '\n'
	text += '`This is an inline code`\n'
	text += '```\n'
	text += 'This is a block of code\n'
	text += '```\n'
	text += '* Some unordered lists\n'
	text += '1. And some ordered lists\n'
	text += '\n'
	text += '---\n'
	text += '> This is an blockquote example\n'
	text += '> \n'
	text += '> — Autor of this page\n'
	text += '\n'
	text += '![Github logo](https://avatars.githubusercontent.com/u/78108685?v=4)\n'
	text += '\n'
	text += '\n'
	text += '**This was my github pfp**\n'
	$('#editor').text(text)
	let onloadit = '<h1>Markdown previewer</h1>\n'
	onloadit += '<p>Hello, and welcome to my markdown previewer by zahadneokurkycz</p>\n'
	onloadit += '<h2>Example use</h2>\n'
	onloadit += '<p><a href="https://github.com/zahadneokurkycz/markdown-preview">This is a link to the source code</a></p>\n'
	onloadit += '<p><code>This is an inline code</code></p>\n'
	onloadit += '<pre><code>This is a block of code\n'
	onloadit += '</code></pre>\n'
	onloadit += '<ul>\n'
	onloadit += '<li>Some unordered lists</li>\n'
	onloadit += '</ul>\n'
	onloadit += '<ol>\n'
	onloadit += '<li>And some ordered lists</li>\n'
	onloadit += '</ol>\n'
	onloadit += '<hr>\n'
	onloadit += '<blockquote>\n'
	onloadit += '<p>This is an blockquote example</p>\n'
	onloadit += '<p>— Autor of this page</p>\n'
	onloadit += '</blockquote>\n'
	onloadit += '<p><img src="https://avatars.githubusercontent.com/u/78108685?v=4" alt="Github logo"></p>\n'
	onloadit += '<p><strong>This was my github pfp</strong></p>\n'
	$('#preview').html(onloadit)
}

document.addEventListener('DOMContentLoaded', () => {
    // Function to add copy functionality
    function addCopyFunctionality(preElement) {
        preElement.addEventListener('click', (event) => {
            const text = preElement.textContent;

            // Create a temporary textarea element to hold the text
            const textarea = document.createElement('textarea');
            textarea.value = text;
            document.body.appendChild(textarea);

            // Select the text and copy it to clipboard
            textarea.select();
            document.execCommand('copy');

            // Remove the temporary textarea element
            document.body.removeChild(textarea);

            alert('Text copied to clipboard');
        });
    }

    // Initialize MutationObserver
    const observer = new MutationObserver((mutationsList) => {
        for (let mutation of mutationsList) {
            if (mutation.type === 'childList') {
                for (let node of mutation.addedNodes) {
                    if (node.nodeType === 1 && node.matches('pre')) {
                        addCopyFunctionality(node);
                    }
                }
            }
        }
    });

    // Start observing the document for added nodes
    observer.observe(document.body, { childList: true, subtree: true });

    // Add copy functionality to existing elements
    document.querySelectorAll('pre').forEach(addCopyFunctionality);
});
