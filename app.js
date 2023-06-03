$(() => {

    marked.use({
        breaks: true,
        mangle: false,
        headerIds: false
    });

    const h1 = "# Welcome to my Markdown Previewer\n\n";
    const h2 = "## Here is a subheading...\n\n";
    const link = "[freeCodeCamp](https://www.freecodecamp.org)\n\n";
    const inlineCode = "`<div></div>`\n\n"
    const blockCode = "```\nfunction testFunction(a, b) {\n    return a + b;\n    }\n}\n```\n\n";
    const listItem = "- List Item One\n- List Item Two\n- List Item Three\n\n";
    const blockQuote = "> Block Quotes!\n\n"
    const image = "![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)\n\n";
    const boldText = "**BOLD TEXT**\n\n";

    $("#editor").val(h1 + h2 + link + inlineCode + blockCode + listItem + blockQuote + image + boldText);

    let defaultMD = marked.parse($("#editor").val());
    $("#preview").html(defaultMD);

    $("#editor").keyup(() => {
        let text = marked.parse($("#editor").val());
        $("#preview").html(text);
    });

    $("#refresh-btn").click(() => {
        $("#editor").val('');
    })
});