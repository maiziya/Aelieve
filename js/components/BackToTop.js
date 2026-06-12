// Back-to-top button and floating chat widget
export const BackToTop = {
  render() {
    return `
      <button id="back-to-top" class="back-to-top fixed bottom-24 right-6 z-40 w-11 h-11 rounded-full bg-gray-900 text-white flex items-center justify-center shadow-lg hover:bg-gray-800" aria-label="Back to top">
        <i data-lucide="arrow-up" class="w-5 h-5"></i>
      </button>

      <div id="chat-card" class="hidden md:flex fixed bottom-24 right-20 z-40 items-center gap-3 bg-white shadow-xl rounded-lg px-4 py-3 max-w-xs">
        <i data-lucide="flower" class="w-6 h-6 text-orange-500 shrink-0"></i>
        <div class="flex-1">
          <p class="text-sm font-medium text-gray-800">Hi there! Have a question?</p>
          <p class="text-sm text-gray-500">Chat with us here.</p>
        </div>
        <button id="chat-close" class="text-gray-400 hover:text-gray-600" aria-label="Close chat">
          <i data-lucide="x" class="w-4 h-4"></i>
        </button>
      </div>

      <button id="chat-bubble" class="chat-bubble fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-orange-500 text-white flex items-center justify-center shadow-lg hover:bg-orange-600" aria-label="Open chat">
        <i data-lucide="message-circle" class="w-6 h-6"></i>
      </button>
    `;
  },

  init() {
    const btn = document.getElementById('back-to-top');
    if (btn) {
      window.addEventListener('scroll', () => {
        btn.classList.toggle('visible', window.scrollY > 400);
      });
      btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    const close = document.getElementById('chat-close');
    const card = document.getElementById('chat-card');
    if (close && card) {
      close.addEventListener('click', () => card.classList.add('hidden'));
    }
    const bubble = document.getElementById('chat-bubble');
    if (bubble && card) {
      bubble.addEventListener('click', () => card.classList.toggle('hidden'));
    }
  }
};
