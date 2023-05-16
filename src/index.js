const $links = document.getElementById('links');
const $name = document.querySelector('h1');

const data = {
    name: "Daniel Velásquez",
    nickname: "dnyvelasquez",
    description: `Con un amplia experiencia en las redes de telecomunicaciones, incursiono en el mundo del
    desarrollo web actualizándome en HTML, JavaSCript, CSS y ahora en React y Angular,
    Descubriendo un mundo que me apasiona y explotando mis habiliodades demostradas duranto la
    la universidad en el ambito del desarrollo.`,
    avatar: "../src/img/foto1.jpg",
    social: [
      {
        name: "twitter",
        url: "https://twitter.com/",
        username: "dannyelhito",
      },
      {
        name: "instagram",
        url: "https://instagram.com/",
        username: "dny.velasquez",
      },
    ],
    links: [
      {
        name: "blog",
        url: "https://example.com/",
        color: "red",
        emoji: "📖",
      },
      {
        name: "podcast",
        url: "https://example.com/",
        color: "yellow",
        emoji: "💬",
      },
    ],
    footer: "Made with Love on Colombia",
};

const main = () => {
    let name = document.createTextNode(data?.name);
    let links = data?.links.map((link) => {
        return `
            <div class="bg-${link.color}-200 px-4 py-5 w-full flex justify-between">
                <a class="text-sm font-bold text-${link.color}-600 text-center hover:text-${link.color}-800 cursor-pointer"
                    href="${link.url}" target="_blank">
                    ${link.name}
                </a>
                <span>${link.emoji}</span>
            </div>
        `;
    }).join('');
    let newItem = document.createElement('section');
    newItem.innerHTML = links;
    $links.appendChild(newItem);
    $name.appendChild(name);
}

main();