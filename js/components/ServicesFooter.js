// Bottom services strip before footer
const SERVICES = [
  { name: 'Creative Design', icon: 'pen-tool', color: 'text-blue-600' },
  { name: 'Web Design', icon: 'target', color: 'text-red-500' },
  { name: 'Reputation', icon: 'user-round', color: 'text-amber-500' },
  { name: 'Digital Advertising', icon: 'fast-forward', color: 'text-violet-600' },
  { name: 'Social & Content', icon: 'book-open', color: 'text-orange-500' }
];

function renderServiceCard(service) {
  return `
    <div class="card-hover flex-1 min-w-[180px] bg-gray-50 rounded-lg p-8 flex flex-col items-center text-center">
      <i data-lucide="${service.icon}" class="w-9 h-9 ${service.color} mb-4"></i>
      <h3 class="text-base font-semibold mb-5">${service.name}</h3>
      <button class="text-sm border border-gray-300 rounded px-4 py-2 hover:bg-white transition-colors">I need this</button>
    </div>
  `;
}

export const ServicesFooter = {
  render() {
    return `
      <section class="bg-white py-16">
        <div class="max-w-3xl mx-auto px-4 text-center">
          <h2 class="text-3xl sm:text-4xl font-bold text-balance">Let's evolve your marketing strategy, together.</h2>
        </div>
        <div class="max-w-7xl mx-auto px-4 mt-12">
          <div class="flex flex-wrap items-stretch gap-4">
            ${SERVICES.map(renderServiceCard).join('')}
          </div>
        </div>
      </section>
    `;
  }
};
