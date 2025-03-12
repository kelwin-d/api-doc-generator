import React from 'react';

function MarkdownExporter({ endpoints }) {
    const exportMarkdown = () => {
        let markdown = '# API Documentation\n\n';
        Object.entries(endpoints).forEach(([path, methods]) => {
            markdown += `## ${path}\n`;
            Object.keys(methods).forEach(method => {
                markdown += `- **${method.toUpperCase()}**: ${methods[method].summary || 'No description available'}\n`;
            });
            markdown += '\n';
        });

        const blob = new Blob([markdown], { type: 'text/markdown' });
        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = 'API_Documentation.md';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };

    return (
        <button onClick={exportMarkdown} className="export-btn">
            Export as Markdown
        </button>
    );
}

export default MarkdownExporter;

