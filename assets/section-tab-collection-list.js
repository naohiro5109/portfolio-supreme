function initTabs() {
  document.querySelectorAll('.tabs').forEach(tab => {
    const buttons = tab.querySelectorAll('.tab-button');
    const contents = tab.querySelectorAll('.tab-content');

    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const target = button.dataset.tab;

        buttons.forEach(b => b.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));

        button.classList.add('active');
        tab.querySelector('#' + target).classList.add('active');
      });
    });
  });
}

document.addEventListener('DOMContentLoaded', initTabs);
document.addEventListener('shopify:section:load', initTabs);