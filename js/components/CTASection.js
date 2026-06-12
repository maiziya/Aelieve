// Call-to-action banner section
export const CTASection = {
  render() {
    return `
      <section class="bg-white py-12">
        <div class="relative bg-gray-50 overflow-hidden py-20">
          <div class="absolute -left-16 top-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-violet-500"></div>
          <div class="absolute -right-16 top-0 w-56 h-56 rounded-full bg-blue-500"></div>

          <div class="relative max-w-2xl mx-auto px-4 text-center">
            <h2 class="text-3xl sm:text-4xl font-bold text-balance">Are you ready to evolve your vision?</h2>
            <p class="mt-4 text-lg text-gray-600">
              We've driven over <span class="font-semibold border-b-2 border-blue-400">194,047</span> leads for clients.
            </p>
          </div>
        </div>
      </section>
    `;
  }
};
