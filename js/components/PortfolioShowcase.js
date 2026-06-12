// Showcase strip of website screenshots
const IMG_API = 'https://aidp.juejin.cn/agentic/api/v1/tool/text2image';

function showcaseImage(prompt) {
  return `${IMG_API}?prompt=${encodeURIComponent(prompt)}&size=1024x1024`;
}

const SHOWCASE_ITEMS = [
  { prompt: 'modern event venue website homepage dark hero image, web design screenshot' },
  { prompt: 'blue corporate business consulting website homepage, web design screenshot' },
  { prompt: 'dark roofing contractor website with services section, web design screenshot' },
  { prompt: 'space emergency communication website homepage with earth globe, dark web design screenshot' },
  { prompt: 'professional roofing company website with free estimate form orange blue, web design screenshot' },
  { prompt: 'mountain lodge resort booking website hero, web design screenshot' }
];

function renderShowcaseItem(item, index) {
  const offset = index % 2 === 0 ? 'mt-0' : 'mt-8';
  return `
    <div class="${offset} flex-shrink-0 w-72 rounded-lg overflow-hidden shadow-md">
      <img src="${showcaseImage(item.prompt)}" alt="Website project showcase" class="w-full h-44 object-cover" crossorigin="anonymous" />
    </div>
  `;
}

export const PortfolioShowcase = {
  render() {
    return `
      <section class="bg-white py-12 overflow-hidden">
        <div class="flex items-center gap-6 px-4 overflow-x-auto no-scrollbar">
          ${SHOWCASE_ITEMS.map(renderShowcaseItem).join('')}
        </div>

        <div class="max-w-3xl mx-auto px-4 text-center mt-16">
          <h2 class="text-3xl sm:text-4xl font-bold text-balance">We help brands that do good, look good.</h2>
          <p class="mt-4 text-lg text-gray-600">
            We've done over <span class="font-semibold border-b-2 border-red-400">1,154</span> digital marketing projects.
          </p>
        </div>
      </section>
    `;
  }
};
