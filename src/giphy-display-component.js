export function makeGiphyTemplate(giphyObject) {
    const html = /*html*/ `<li>
    <img src="${giphyObject.src}" alt="gif">
</li>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

export default function loadDisplay(listOfGifs) {
    const giphyList = document.getElementById('giphy-list');
    while(giphyList.firstChild) {
        giphyList.firstChild.remove();
    }
    listOfGifs.forEach(gif => {
        const giphyObject = {
            src: gif.images.fixed_width_small.url
        };
        const dom = makeGiphyTemplate(giphyObject);
        giphyList.appendChild(dom);
    });
}