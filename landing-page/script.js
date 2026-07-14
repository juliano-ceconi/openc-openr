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

    // 4. Docs Tabs interaction
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');

    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.getAttribute('data-tab');
            
            tabButtons.forEach(b => b.classList.remove('active'));
            tabPanels.forEach(p => p.classList.remove('active'));
            
            btn.classList.add('active');
            const targetPanel = document.getElementById(targetTab);
            if (targetPanel) {
                targetPanel.classList.add('active');
            }
        });
    });

    // 5. Subtabs interaction (WSL vs Native)
    const subtabButtons = document.querySelectorAll('.subtab-btn');
    const subPanels = document.querySelectorAll('.sub-panel');

    subtabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetSub = btn.getAttribute('data-subtab');
            
            subtabButtons.forEach(b => b.classList.remove('active'));
            subPanels.forEach(p => p.classList.remove('active'));
            
            btn.classList.add('active');
            const targetSubPanel = document.getElementById(targetSub);
            if (targetSubPanel) {
                targetSubPanel.classList.add('active');
            }
        });
    });

    // 6. Copy code functionality
    const copyButtons = document.querySelectorAll('.copy-btn');
    copyButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const codeEl = btn.parentElement.querySelector('code');
            if (codeEl) {
                const codeText = codeEl.innerText || codeEl.textContent;
                navigator.clipboard.writeText(codeText).then(() => {
                    btn.textContent = 'Copiado!';
                    btn.classList.add('copied');
                    setTimeout(() => {
                        btn.textContent = 'Copiar';
                        btn.classList.remove('copied');
                    }, 2000);
                }).catch(err => {
                    console.error('Falha ao copiar: ', err);
                });
            }
        });
    });

    // 7. Connect top cards to documentation tabs
    const contentCards = document.querySelectorAll('.content-card');
    const tabMapping = ['tab-introducao', 'tab-instalacao', 'tab-avancado', 'tab-prompts'];

    contentCards.forEach((card, index) => {
        card.style.cursor = 'pointer';
        card.addEventListener('click', () => {
            const targetTabId = tabMapping[index];
            const targetBtn = document.querySelector(`.tab-btn[data-tab="${targetTabId}"]`);
            if (targetBtn) {
                targetBtn.click();
                const docsSection = document.getElementById('guia-pratico');
                if (docsSection) {
                    docsSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
});
