const bookmarksDiv = $('#bookmarks');

// let code = `<div><a href="${url}">${name}</a></div>`;
let code = '';

for (const bookmark of bookmarks) {
  const { name, url, img } = bookmark;

  code += `<div class="bookmark"><a href="${url}"><img src="${
    img || 'https://thumbs.dreamstime.com/b/web-189206689.jpg'
  }"></img><p>${name}</p></a></div>`;
}

bookmarksDiv.append(code);
