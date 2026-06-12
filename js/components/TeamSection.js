// Team section
const IMG_API = 'https://aidp.juejin.cn/agentic/api/v1/tool/text2image';

function teamImage(prompt) {
  return `${IMG_API}?prompt=${encodeURIComponent(prompt)}&size=1024x1024`;
}

const TEAM_CARDS = [
  {
    title: 'Careers With Us',
    text: "We're always looking for people who can bring new perspectives and life experience to our teams.",
    prompt: 'modern office glass door entrance with motion blur person walking, warm lighting'
  },
  {
    title: 'Meet The Dream Team',
    text: "We wouldn't be anything without our team members and the experience both in and outside of work that they bring to us.",
    prompt: 'group photo of young marketing team wearing black shirts smiling in modern office'
  },
  {
    title: 'Values We Live by',
    text: 'We sat down with our core team members and uncovered the values that motivate us every single day.',
    prompt: 'two business colleagues standing chatting in modern office hallway'
  }
];

function renderTeamCard(card) {
  return `
    <div class="team-card flex-1 min-w-[260px] max-w-[320px] text-center">
      <div class="rounded-2xl overflow-hidden">
        <img src="${teamImage(card.prompt)}" alt="${card.title}" class="w-full h-72 object-cover" crossorigin="anonymous" />
      </div>
      <h3 class="mt-5 text-xl font-semibold">${card.title}</h3>
      <p class="mt-3 text-sm text-gray-600 leading-relaxed">${card.text}</p>
    </div>
  `;
}

export const TeamSection = {
  render() {
    return `
      <section class="bg-white py-20">
        <div class="flex justify-center mb-12">
          <span class="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center">
            <i data-lucide="triangle" class="w-6 h-6 text-white"></i>
          </span>
        </div>

        <div class="max-w-3xl mx-auto px-4 text-center">
          <p class="text-sm text-gray-500 mb-3">Our Team Of Marketing Gurus</p>
          <h2 class="text-3xl sm:text-4xl font-bold text-balance">
            We're more than just a pretty website, we've got personality.
          </h2>
          <button class="mt-6 text-sm border border-gray-300 rounded px-5 py-2 hover:bg-gray-50 transition-colors">
            More about us
          </button>
        </div>

        <div class="max-w-6xl mx-auto px-4 mt-12">
          <div class="flex flex-wrap justify-center gap-8">
            ${TEAM_CARDS.map(renderTeamCard).join('')}
          </div>
        </div>
      </section>
    `;
  }
};
