function setFooterText(plainText, linkText, linkHref) {
    const footerContent = document.querySelector('.footer-content');
    if (footerContent) {
        footerContent.innerHTML = `
            <p>${plainText}</p>
            <p>Todos los derechos reservados. <a class="footer-link" href="${linkHref}">${linkText}</a></p>
        `;
    }
}

// Example of use:
setFooterText(
    "2016-2021 Siroko Solutions S.L.",
    "Ver bases.",
    "https://www.siroko.com/es/i/legal"
);
