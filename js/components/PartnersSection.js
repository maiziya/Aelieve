// Partners section with circular logos
const PARTNERS = [
  { name: 'LinkedIn', icon: 'linkedin', color: 'text-blue-600' },
  { name: 'Google', icon: 'chrome', color: 'text-red-500' },
  { name: 'Facebook', icon: 'facebook', color: 'text-blue-600' },
  { name: 'Bing', icon: 'globe', color: 'text-teal-500' },
  { name: 'Twitter', icon: 'twitter', color: 'text-sky-500' }
];

function renderPartner(partner) {
  return `
    <div class="flex flex-col items-center">
      <div class="w-28 h-28 rounded-full bg-white shadow-sm flex items-center justify-center">
        <i data-lucide="${partner.icon}" class="w-12 h-12 ${partner.color}"></i>
      </div>
      <span class="mt-2 text-sm text-gray-500">Partner</span>
    </div>
  `;
}

export const PartnersSection = {
  render() {
    return `
      <section class="bg-white py-12">
        <div class="max-w-6xl mx-auto px-4">
          <div class="bg-gray-50 rounded-2xl py-14 px-4">
            <div class="max-w-2xl mx-auto text-center">
              <h2 class="text-2xl sm:text-3xl font-bold text-balance">We get by with a little help from our partners.</h2>
              <p class="mt-3 text-gray-600">
                We've grown strong <span class="font-semibold border-b-2 border-blue-400">partnerships</span> with the following brands.
              </p>
            </div>
            <div class="mt-10 flex flex-wrap items-center justify-center gap-8">
              ${PARTNERS.map(renderPartner).join('')}
            </div>
          </div>
        </div>
      </section>
    `;
  }
};
