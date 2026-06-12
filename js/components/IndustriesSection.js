// Industries & verticals section
const IMG_API = 'https://aidp.juejin.cn/agentic/api/v1/tool/text2image';

function industryImage(prompt) {
  return `${IMG_API}?prompt=${encodeURIComponent(prompt)}&size=1024x1024`;
}

const INDUSTRIES = [
  {
    caption: 'B2B services keep the business world alive behind the scenes.',
    link: 'B2B marketing',
    prompt: 'tablet showing business coaching program website on desk with coffee, top view'
  },
  {
    caption: 'B2C marketing that understands your target audience.',
    link: 'B2C marketing',
    prompt: 'hand holding smartphone showing fashion ecommerce website, top view'
  },
  {
    caption: 'eCommerce and digital marketing go hand-in-hand.',
    link: 'eCommerce marketing',
    prompt: 'laptop and phone showing colorful ecommerce website on desk, hands typing'
  },
  {
    caption: 'Get top-tier digital marketing for your franchise.',
    link: 'Franchise marketing',
    prompt: 'laptop showing franchise business website on white desk, top view'
  },
  {
    caption: 'The ability to give back is something that should never be hard to find.',
    link: 'Non-Profit marketing',
    prompt: 'desktop monitor showing nonprofit human services website on desk'
  },
  {
    caption: 'Grow your retail business to beyond your vision.',
    link: 'Retail marketing',
    prompt: 'laptop showing retail store website on table with plant, modern setup'
  }
];

function renderIndustryCard(item) {
  return `
    <div class="industry-card flex-1 min-w-[220px] max-w-[260px] flex flex-col items-center text-center">
      <img src="${industryImage(item.prompt)}" alt="${item.link}" class="w-full h-52 object-cover rounded-lg mb-4" crossorigin="anonymous" />
      <p class="text-base font-medium text-gray-800 leading-snug">${item.caption}</p>
      <a href="#" class="mt-2 text-sm text-blue-600 hover:underline">${item.link}</a>
    </div>
  `;
}

export const IndustriesSection = {
  render() {
    return `
      <section class="bg-white py-16">
        <div class="max-w-3xl mx-auto px-4 text-center">
          <p class="text-sm text-gray-500 mb-3">Industries &amp; Verticals</p>
          <h2 class="text-3xl sm:text-4xl font-bold text-balance">
            Every industry is different, their marketing strategy should be too.
          </h2>
          <button class="mt-6 text-sm border border-gray-300 rounded px-5 py-2 hover:bg-gray-50 transition-colors">
            Who we help
          </button>
        </div>

        <div class="max-w-7xl mx-auto px-4 mt-12">
          <div class="flex flex-wrap justify-center gap-6">
            ${INDUSTRIES.map(renderIndustryCard).join('')}
          </div>
        </div>
      </section>
    `;
  }
};
