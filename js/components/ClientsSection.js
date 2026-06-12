// About / clients logos section
const IMG_API = 'https://aidp.juejin.cn/agentic/api/v1/tool/text2image';

function clientImage(prompt) {
  return `${IMG_API}?prompt=${encodeURIComponent(prompt)}&size=1024x1024`;
}

const CLIENT_LOGOS = [
  'Riverside Casino', '4Front Solutions', 'Thompson & Co', 'Baseball', 'Kreshmore Group',
  'Perfekt', 'McDonald Optical', '3Peaks', 'Wedding Day Designs', 'G&G Asphalt',
  'Fitness Sports', 'RFYP', 'Greenery Designs', 'Nuere', 'MFG',
  'Sunnyside Medical', 'Players Way', 'Theory', 'Premier Shed Shop', 'HWC'
];

function renderLogo(name) {
  return `
    <div class="partner-logo flex items-center justify-center h-20 px-2">
      <span class="text-lg font-semibold text-gray-500 text-center tracking-wide">${name}</span>
    </div>
  `;
}

function renderAboutBlock() {
  return `
    <div class="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-12 items-center">
      <div class="w-full md:w-1/2 rounded-xl overflow-hidden">
        <img src="${clientImage('hands typing on laptop showing marketing analytics dashboard with coffee cup, top view warm tones')}" alt="Aelieve dashboard" class="w-full h-auto object-cover" crossorigin="anonymous" />
      </div>
      <div class="w-full md:w-1/2">
        <h2 class="text-3xl sm:text-4xl font-bold text-balance">An agency like no other.</h2>
        <p class="mt-6 text-gray-600 leading-relaxed">
          Since 2018, we've been on a mission to evolve the world of digital marketing. Today, that mission
          remains the same with countless companies using our software, services and support to transform the
          way they attract, engage, and delight customers.
        </p>
        <button class="mt-8 text-sm border border-gray-300 rounded px-5 py-2 hover:bg-gray-50 transition-colors">
          A little about us
        </button>
      </div>
    </div>
  `;
}

export const ClientsSection = {
  render() {
    return `
      <section class="bg-white py-16">
        ${renderAboutBlock()}

        <div class="max-w-3xl mx-auto px-4 text-center mt-24">
          <h2 class="text-3xl sm:text-4xl font-bold text-balance">We are committed to the success of our clients.</h2>
          <p class="mt-4 text-lg text-gray-600">
            We've successfully grown over <span class="font-semibold border-b-2 border-orange-400">500</span> established &amp; new brands.
          </p>
        </div>

        <div class="max-w-6xl mx-auto px-4 mt-12">
          <div class="flex flex-wrap justify-center gap-x-8 gap-y-6">
            ${CLIENT_LOGOS.map(renderLogo).join('')}
          </div>
        </div>
      </section>
    `;
  }
};
