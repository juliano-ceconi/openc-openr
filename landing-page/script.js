document.addEventListener('DOMContentLoaded', () => {
    // 1. FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const item = question.parentElement;
            document.querySelectorAll('.faq-item').forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            item.classList.toggle('active');
        });
    });

    // 2. Terminal simulation
    const terminalBody = document.querySelector('.terminal-body');
    if (terminalBody) {
        const lines = [
            { text: '▸ Carregando contexto do projeto...', cls: 'dim' },
            { text: '▸ 12 arquivos analisados em 0.3s', cls: 'dim' },
            { text: '✓ AGENTS.md compilado', cls: 'green' },
            { text: '▸ Conectando ao OpenRouter...', cls: 'dim' },
            { text: '✓ Modelo claude-sonnet-4 ativo', cls: 'green' },
            { text: '▸ Cache de dependências: 87% hit rate', cls: 'dim' },
        ];
        let lineIndex = 0;
        const interval = setInterval(() => {
            if (lineIndex >= lines.length) { clearInterval(interval); return; }
            const line = lines[lineIndex];
            const cursorEl = terminalBody.querySelector('.term-line.cursor');
            const newLine = document.createElement('p');
            newLine.className = `term-line ${line.cls}`;
            newLine.textContent = line.text;
            if (cursorEl) {
                terminalBody.insertBefore(newLine, cursorEl);
            } else {
                terminalBody.appendChild(newLine);
            }
            const allLines = terminalBody.querySelectorAll('.term-line:not(.cursor)');
            if (allLines.length > 10) allLines[0].remove();
            lineIndex++;
        }, 1800);
    }

    // 3. Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', e => {
            const href = anchor.getAttribute('href');
            if (href === '#') return;
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
