/* empty css                                 */
import { c as createComponent, a as createAstro, r as renderTemplate, m as maybeRenderHead, b as addAttribute, e as renderSlot, f as renderComponent, g as renderHead, u as unescapeHTML } from '../chunks/astro/server_B1LbsB_M.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$Image } from '../chunks/_astro_assets_CrJXZi8N.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$c = createAstro();
const $$Container = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Container;
  const { className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`mx-auto max-w-7xl w-full px-5 sm:px-8 md:px-14 lg:px-5 bg-wood-cream/5 dark:bg-wood-dark/5 ${className}`, "class")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "C:/Users/harma/OneDrive/Documents/season2/BLESA/Sinan/agency-template/src/components/shared/Container.astro", void 0);

const $$Astro$b = createAstro();
const $$Navitem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Navitem;
  const { href, text } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li> <a${addAttribute(href, "href")} class="duration-300 font-medium ease-linear hover:text-primary py-3"> ${text} </a> </li>`;
}, "C:/Users/harma/OneDrive/Documents/season2/BLESA/Sinan/agency-template/src/components/shared/Navitem.astro", void 0);

const $$Astro$a = createAstro();
const $$BtnLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$BtnLink;
  const { href, text, className, variant } = Astro2.props;
  const getThemeStyle = (variant2) => {
    if (variant2 === "primary") {
      return "bg-wood-dark border-transparent relative after:bg-wood-light dark:after:bg-accent-terra hover:border-wood-light";
    }
    return "text-wood-dark dark:text-wood-light";
  };
  const getTextColor = (variant2) => {
    if (variant2 === "primary") {
      return "text-wood-cream dark:text-wood-light hover:text-wood-dark dark:hover:text-wood-cream";
    }
    return "text-wood-dark dark:text-wood-light";
  };
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(`px-6 py-3 rounded-full outline-none relative overflow-hidden border duration-300 ease-linear
                    after:absolute after:inset-x-0 after:aspect-square after:scale-0 after:opacity-70 after:origin-center after:duration-300 after:ease-linear after:rounded-full after:top-0 after:left-0
                    ${getThemeStyle(variant)} hover:after:opacity-100 hover:after:scale-[2.5] ${className}`, "class")}> <span${addAttribute(`relative z-10 flex items-center justify-center gap-2 ${getTextColor(variant)}`, "class")}> ${renderSlot($$result, $$slots["default"])} </span> </a>`;
}, "C:/Users/harma/OneDrive/Documents/season2/BLESA/Sinan/agency-template/src/components/shared/BtnLink.astro", void 0);

const Logo = new Proxy({"src":"/_astro/Al-Sindyan.BrOzitGp.png","width":128,"height":128,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/harma/OneDrive/Documents/season2/BLESA/Sinan/agency-template/src/assets/images/Al-Sindyan.png";
							}
							
							return target[name];
						}
					});

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const navItems = [
    {
      href: "#",
      text: "Home"
    },
    {
      href: "#solutions",
      text: "Solutions"
    },
    {
      href: "#services",
      text: "Services"
    },
    {
      href: "#cta",
      text: "Contact"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<header class="absolute inset-x-0 top-0 z-50 py-6"> ${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` <nav class="w-full flex justify-between gap-6 relative"> <!-- logo --> <div class="min-w-max inline-flex relative"> <a href="/agency-template" class="relative flex items-center gap-3"> ${renderComponent($$result2, "Image", $$Image, { "src": Logo, "alt": "Sindiyan Logo", "width": "70", "height": "100" })} <!-- <Image src="../assets/images/Al-Sindyan.ico" alt="A bird." width="50" height="50" /> --> <!-- <div class="relative w-7 h-7 overflow-hidden flex rounded-xl">
            <svg
              id="logo-15"
              width="100%"
              height="100%"
              viewBox="0 0 49 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.5 12.75C24.5 18.9632 19.4632 24 13.25 24H2V12.75C2 6.53679 7.03679 1.5 13.25 1.5C19.4632 1.5 24.5 6.53679 24.5 12.75Z"
                class="ccustom"
                fill="#17CF97"></path>
              <path
                d="M24.5 35.25C24.5 29.0368 29.5368 24 35.75 24H47V35.25C47 41.4632 41.9632 46.5 35.75 46.5C29.5368 46.5 24.5 41.4632 24.5 35.25Z"
                class="ccustom"
                fill="#17CF97"></path>
              <path
                d="M2 35.25C2 41.4632 7.03679 46.5 13.25 46.5H24.5V35.25C24.5 29.0368 19.4632 24 13.25 24C7.03679 24 2 29.0368 2 35.25Z"
                class="ccustom"
                fill="#17CF97"></path>
              <path
                d="M47 12.75C47 6.53679 41.9632 1.5 35.75 1.5H24.5V12.75C24.5 18.9632 29.5368 24 35.75 24C41.9632 24 47 18.9632 47 12.75Z"
                class="ccustom"
                fill="#17CF97"></path>
            </svg>
          </div> --> <div class="inline-flex text-lg font-semibold text-heading-1">
AL SINDYAN
</div> </a> </div> <div data-nav-overlay aria-hidden="true" class="fixed hidden inset-0 lg:!hidden bg-box-bg bg-opacity-50 backdrop-filter backdrop-blur-xl"></div> <div data-navbar class="flex h-0 overflow-hidden lg:!h-auto lg:scale-y-100 duration-300 ease-linear flex-col gap-y-6 gap-x-4 lg:flex-row w-full lg:justify-between lg:items-center absolute lg:relative top-full lg:top-0 bg-body lg:bg-transparent border-x border-x-box-border lg:border-x-0"> <ul class="border-t border-box-border lg:border-t-0 px-6 lg:px-0 pt-6 lg:pt-0 flex flex-col lg:flex-row gap-y-4 gap-x-3 text-lg text-heading-2 w-full lg:justify-center lg:items-center"> ${navItems.map((item) => {
    return renderTemplate`${renderComponent($$result2, "Navitem", $$Navitem, { ...item })}`;
  })} </ul> <div class="lg:min-w-max flex items-center sm:w-max w-full pb-6 lg:pb-0 border-b border-box-bg lg:border-0 px-6 lg:px-0"> ${renderComponent($$result2, "BtnLink", $$BtnLink, { "text": "WhatsApp Us", "href": "http://wa.me/+9647516665251", "className": "flex justify-center w-full sm:w-max group", "variant": "primary" }, { "default": ($$result3) => renderTemplate` <span class="flex items-center gap-2"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"> <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"></path> </svg>
WhatsApp Us
</span> ` })} </div> </div> <div class="min-w-max flex items-center gap-x-3"> <button data-switch-theme class="outline-none flex relative text-heading-2 rounded-full p-2 lg:p-3 border border-box-border hover:bg-slate-200 dark:hover:bg-slate-800"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 dark:flex hidden"> <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"></path> </svg> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 dark:hidden"> <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"></path> </svg> <span class="sr-only">switch theme</span> </button> <button data-toggle-nav data-open-nav="false" class="lg:hidden lg:invisible outline-none w-7 h-auto flex flex-col relative"> <span id="line1" class="w-6 h-0.5 rounded-full bg-heading-2 transition-all duration-300 ease-linear"></span> <span id="line2" class="w-6 origin-center mt-1 h-0.5 rounded-ful bg-heading-2 transition-all duration-300 ease-linear"></span> <span id="line3" class="w-6 mt-1 h-0.5 rounded-ful bg-heading-2 transition-all duration-300 ease-linear"></span> <span class="sr-only">togglenav</span> </button> </div> </nav> ` })} </header>`;
}, "C:/Users/harma/OneDrive/Documents/season2/BLESA/Sinan/agency-template/src/layouts/Navbar.astro", void 0);

const $$Astro$9 = createAstro();
const $$Paragraph = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Paragraph;
  const { className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<p${addAttribute(`md:text-lg text-heading-3 ${className}`, "class")}> ${renderSlot($$result, $$slots["default"])} </p>`;
}, "C:/Users/harma/OneDrive/Documents/season2/BLESA/Sinan/agency-template/src/components/shared/Paragraph.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="relative mt-16"> <footer class="relative bg-gradient-to-tr from-wood-cream to-wood-light dark:from-wood-dark dark:to-accent-green pt-28 rounded-t-3xl backdrop-blur-md"> ${renderComponent($$result, "Container", $$Container, { "className": "pb-8 relative overflow-auto" }, { "default": ($$result2) => renderTemplate` <div class="grid grid-cols-2 lg:grid-cols-3 lg:items-stretch gap-8 relative"> <div class="col-span-2 lg:col-span-1 h-auto flex flex-col"> <div class="h-full"> <a href="#" class="relative flex items-center gap-3"> <div class="inline-flex text-lg font-semibold text-heading-1">
AL SINDYAN
</div> </a> ${renderComponent($$result2, "Paragraph", $$Paragraph, { "className": "mt-8" }, { "default": ($$result3) => renderTemplate`
Crafting excellence in wood since 2010. We specialize in premium wood products, 
             from custom furniture to industrial solutions, bringing natural beauty and durability 
             to every project.
` })} </div> <!-- social links --> <div class="min-h-max flex items-center gap-4 text-heading-3 mt-8"> <a href="#" class="transition hover:text-wood-dark hover:scale-105"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-5 h-5" viewBox="0 0 16 16"> <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path> </svg> <span class="sr-only">social link</span> </a> <a href="#" class="transition hover:text-wood-dark hover:scale-105"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-5 h-5" viewBox="0 0 16 16"> <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path> </svg> <span class="sr-only">social link</span> </a> </div> </div> <div class="col-span-2 lg:col-span-2"> <div class="grid grid-cols-1 lg:grid-cols-2 gap-8"> <div class="flex flex-col gap-4"> <h3 class="text-lg font-semibold text-heading-1">Contact</h3> <div class="flex items-center gap-2"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg> <a href="tel:+9647506665251" class="hover:text-wood-dark">0750 666 5251</a> </div> <div class="flex items-center gap-2"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg> <a href="tel:+9647516665251" class="hover:text-wood-dark">0751 666 5251</a> </div> <div class="flex items-center gap-2"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path> </svg> <a href="mailto:info@al-sindyan.com" class="hover:text-wood-dark">info@al-sindyan.com</a> </div> </div> <div class="flex flex-col gap-4"> <h3 class="text-lg font-semibold text-heading-1">Location</h3> <div class="flex items-start gap-2"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path> </svg> <address class="not-italic hover:text-wood-dark">
Erbil, South industry<br>
near Haji Sherzad Oil
</address> </div> </div> </div> </div> </div> ` })} <div class="py-2 relative"> ${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` <div class="flex justify-between items-center gap-6 md:text-lg text-heading-3"> <div>
&copy; <span id="year"></span> AL SINDYAN. All rights reserved
</div> <div>
Made with ☕️ by <a href="https://blesa.io" target="_blank" class="font-semibold hover:text-wood-dark">blesa</a> </div> </div> ` })} </div> </footer> </div> `;
}, "C:/Users/harma/OneDrive/Documents/season2/BLESA/Sinan/agency-template/src/layouts/Footer.astro", void 0);

const $$Astro$8 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/agency-template/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta name="description" content="Agency template made with ASTROJS and TAILWINDCSS"><title>Agency template - ${title}</title><link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700&display=swap" rel="stylesheet"><link rel="stylesheet" href="/agency-template/style/custom.css">${renderHead()}</head> <body class="overflow-hidden overflow-y-auto bg-body"> ${renderComponent($$result, "Navbar", $$Navbar, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})}   </body></html>`;
}, "C:/Users/harma/OneDrive/Documents/season2/BLESA/Sinan/agency-template/src/layouts/Layout.astro", void 0);

const myHeroImage3 = new Proxy({"src":"/_astro/hero3.BPBvvnrp.jpg","width":5472,"height":3648,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/harma/OneDrive/Documents/season2/BLESA/Sinan/agency-template/src/assets/images/hero3.jpg";
							}
							
							return target[name];
						}
					});

const $$Astro$7 = createAstro();
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Button;
  const { className, variant } = Astro2.props;
  const getThemeStyle = (variant2) => {
    if (variant2 === "primary") {
      return "bg-wood-dark border-transparent relative after:bg-accent-green hover:border-accent-green dark:bg-wood-dark dark:after:bg-accent-terra dark:hover:border-accent-terra";
    }
    return "text-wood-dark dark:text-wood-light hover:text-accent-green dark:hover:text-accent-terra";
  };
  return renderTemplate`${maybeRenderHead()}<button${addAttribute(`px-6 py-3 rounded-full outline-none relative overflow-hidden border duration-300 ease-linear
                    after:absolute after:inset-x-0 after:aspect-square after:scale-0 after:opacity-70 after:origin-center after:duration-300 after:ease-linear after:rounded-full after:top-0 after:left-0
                    ${getThemeStyle(variant)} hover:after:opacity-100 hover:after:scale-[2.5] ${className}`, "class")}> ${renderSlot($$result, $$slots["default"])} </button>`;
}, "C:/Users/harma/OneDrive/Documents/season2/BLESA/Sinan/agency-template/src/components/shared/Button.astro", void 0);

const $$CtaButton = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Button", $$Button, { "variant": "primary", "className": "min-w-max text-wood-cream transition-colors duration-300" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<a href="#cta"> <span class="flex relative z-[5] text-center">
Contact Us
</span> </a> ` })}`;
}, "C:/Users/harma/OneDrive/Documents/season2/BLESA/Sinan/agency-template/src/components/shared/CtaButton.astro", void 0);

const $$GradiantText = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<span class="text-transparent bg-clip-text bg-gradient-to-br from-wood-dark from-20% via-accent-terra via-30% to-wood-light dark:from-wood-light dark:via-accent-terra dark:to-wood-dark"> ${renderSlot($$result, $$slots["default"])} </span>`;
}, "C:/Users/harma/OneDrive/Documents/season2/BLESA/Sinan/agency-template/src/components/shared/GradiantText.astro", void 0);

const $$Astro$6 = createAstro();
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Hero;
  const { className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(`relative pt-32 lg:pt-36 ${className} bg-gradient-to-br from-wood-cream to-wood-light dark:from-wood-dark/40 dark:to-accent-green/40`, "class")}> ${renderComponent($$result, "Container", $$Container, { "className": "flex flex-col lg:flex-row gap-10 lg:gap-12" }, { "default": ($$result2) => renderTemplate` <div class="relative flex flex-col items-center text-center lg:text-left lg:py-7 xl:py-8
        lg:items-start lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2"> <h1 class="text-3xl/tight sm:text-4xl/tight md:text-5xl/tight xl:text-6xl/tight
             font-bold text-heading-1">
Natural Wood
${renderComponent($$result2, "GradiantText", $$GradiantText, {}, { "default": ($$result3) => renderTemplate`Crafted with <br> Excellence` })}
For You
</h1> ${renderComponent($$result2, "Paragraph", $$Paragraph, { "className": "mt-8" }, { "default": ($$result3) => renderTemplate`
Discover the beauty of premium wood products, from elegant flooring to exquisite kitchenware. 
        Each piece tells a story of craftsmanship and natural beauty.
` })} <div class="mt-16 w-full flex flex-col"> <div class="lg:mx-auto mb-5"> ${renderComponent($$result2, "CtaButton", $$CtaButton, {})} </div> <!-- <div class="mx-auto">
          <ByResult />
        </div> --> </div> </div> <div class="flex flex-1 lg:w-1/2 lg:h-auto relative lg:max-w-none lg:mx-0 mx-auto max-w-3xl"> ${renderComponent($$result2, "Image", $$Image, { "src": myHeroImage3, "alt": "Hero image", "width": "2350", "height": "2359", "class": "lg:absolute lg:w-full lg:h-full rounded-3xl object-cover lg:max-h-none max-h-96 hover:shadow-xl transition-shadow duration-300" })} </div> ` })} <!-- <ByNumber /> --> </section>`;
}, "C:/Users/harma/OneDrive/Documents/season2/BLESA/Sinan/agency-template/src/components/sections/Hero.astro", void 0);

const $$Astro$5 = createAstro();
const $$Title = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Title;
  const { className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<h1${addAttribute(`text-heading-1 font-semibold text-2xl sm:text-3xl md:text-4xl ${className}`, "class")}> ${renderSlot($$result, $$slots["default"])} </h1>`;
}, "C:/Users/harma/OneDrive/Documents/season2/BLESA/Sinan/agency-template/src/components/shared/Title.astro", void 0);

const kronospan = new Proxy({"src":"/_astro/Kronospan.BecoPEyd.png","width":1920,"height":1080,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/harma/OneDrive/Documents/season2/BLESA/Sinan/agency-template/src/assets/logos/Kronospan.png";
							}
							
							return target[name];
						}
					});

const camsan = new Proxy({"src":"/_astro/camsan.HcGFGsi1.png","width":339,"height":99,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/harma/OneDrive/Documents/season2/BLESA/Sinan/agency-template/src/assets/logos/camsan.png";
							}
							
							return target[name];
						}
					});

const starwood = new Proxy({"src":"/_astro/starwood._sMWtOy_.png","width":300,"height":177,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/harma/OneDrive/Documents/season2/BLESA/Sinan/agency-template/src/assets/logos/starwood.png";
							}
							
							return target[name];
						}
					});

const kastamonu = new Proxy({"src":"/_astro/kastamonu.l5kVleO2.png","width":1024,"height":216,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/harma/OneDrive/Documents/season2/BLESA/Sinan/agency-template/src/assets/logos/kastamonu.png";
							}
							
							return target[name];
						}
					});

const Yildiz = new Proxy({"src":"/_astro/yildiz.CMSvbxAO.png","width":600,"height":220,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/harma/OneDrive/Documents/season2/BLESA/Sinan/agency-template/src/assets/logos/yildiz.png";
							}
							
							return target[name];
						}
					});

const $$Astro$4 = createAstro();
const $$Brands = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Brands;
  const brands = [
    {
      id: 1,
      name: "Yildiz Entegre",
      logo: Yildiz
    },
    {
      id: 2,
      name: "Camsan Ordu",
      logo: camsan
    },
    {
      id: 3,
      name: "Kronospan",
      logo: kronospan
    },
    {
      id: 4,
      name: "Kastamonu",
      logo: kastamonu
    },
    {
      id: 5,
      name: "Starwood",
      logo: starwood
    }
  ];
  const { className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(`${className}`, "class")}> ${renderComponent($$result, "Container", $$Container, { "className": "space-y-8" }, { "default": ($$result2) => renderTemplate` <div class="text-center max-w-3xl mx-auto"> ${renderComponent($$result2, "Title", $$Title, {}, { "default": ($$result3) => renderTemplate`Our partners in the industry` })} </div> <div class="flex justify-center flex-wrap gap-4"> ${brands.map((brand) => renderTemplate`<div class="p-4 sm:p-5 rounded-xl border border-box-border group bg-box-bg"> ${renderComponent($$result2, "Image", $$Image, { "src": brand.logo, "width": "100", "height": "60", "alt": brand.name, "class": "h-7 sm:h-10 w-auto ease-linear duration-300 grayscale group-hover:!grayscale-0 group-hover:scale-105" })} </div>`)} </div> ` })} </section>`;
}, "C:/Users/harma/OneDrive/Documents/season2/BLESA/Sinan/agency-template/src/components/sections/Brands.astro", void 0);

const $$Astro$3 = createAstro();
const $$Service = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Service;
  const { title, features, icon } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="p-5 sm:p-6 lg:p-8 relative overflow-hidden rounded-3xl shadow-md shadow-slate-700 dark:shadow-slate-900
  bg-gradient-to-tr from-slate-100/70 to-zinc-200/60 dark:from-slate-800/10 dark:to-zinc-800/10 backdrop-blur-md hover:bg-black/10 hover:dark:bg-slate-700/10"> <div class="rounded-xl p-3 text-heading-1 w-max relative bg-slate-200 dark:bg-slate-800"> ${renderSlot($$result, $$slots["default"], renderTemplate`${unescapeHTML(icon)}`)} </div> <div class="mt-6 space-y-4 relative"> <h2 class="text-lg md:text-xl font-semibold text-heading-2"> ${title} </h2> ${renderComponent($$result, "Paragraph", $$Paragraph, {}, { "default": ($$result2) => renderTemplate` <div class="mt-8 space-y-4 text-heading-3 font-medium list-outside list-disc"> ${features.map((feature) => {
    return renderTemplate`<div class="flex items-center font-medium"> <span class="font-bold rounded-full w-8 h-8 mr-3 inline-flex justify-center items-center text-primary dark:text-white">
&checkmark;
</span> ${feature} </div>`;
  })} </div> ` })} </div> <!-- <span
    class="absolute w-32 aspect-square -bottom-16 -right-16 bg-primary/10 rounded-full"
  ></span> --> </div>`;
}, "C:/Users/harma/OneDrive/Documents/season2/BLESA/Sinan/agency-template/src/components/cards/Service.astro", void 0);

const visibilityDilemma = new Proxy({"src":"/_astro/visibility-dilemma.BfDZhPGG.jpg","width":4048,"height":3032,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/harma/OneDrive/Documents/season2/BLESA/Sinan/agency-template/src/assets/images/visibility-dilemma.jpg";
							}
							
							return target[name];
						}
					});

const engagementGap = new Proxy({"src":"/_astro/engagement-gap.qzeFcgei.jpg","width":6000,"height":4000,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/harma/OneDrive/Documents/season2/BLESA/Sinan/agency-template/src/assets/images/engagement-gap.jpg";
							}
							
							return target[name];
						}
					});

const resultsInHibernation = new Proxy({"src":"/_astro/results-in-hibernation.DsTbz28B.jpg","width":3481,"height":2321,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/harma/OneDrive/Documents/season2/BLESA/Sinan/agency-template/src/assets/images/results-in-hibernation.jpg";
							}
							
							return target[name];
						}
					});

const services = [
  {
    title: "Quality Selection",
    features: [
      "Premium Wood Grading",
      "Material Expertise",
      "Sustainable Sourcing"
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" stroke-width="1.5" fill="currentColor" class="w-6 h-6"><path d="M256 0c17.7 0 32 14.3 32 32V42.4c93.7 13.9 167.7 88 181.6 181.6H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H469.6c-13.9 93.7-88 167.7-181.6 181.6V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V469.6C130.3 455.7 56.3 381.7 42.4 288H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H42.4C56.3 130.3 130.3 56.3 224 42.4V32c0-17.7 14.3-32 32-32zM107.4 288c12.5 58.3 58.4 104.1 116.6 116.6V384c0-17.7 14.3-32 32-32s32 14.3 32 32v20.6c58.3-12.5 104.1-58.4 116.6-116.6H384c-17.7 0-32-14.3-32-32s14.3-32 32-32h20.6C392.1 165.7 346.3 119.9 288 107.4V128c0 17.7-14.3 32-32 32s-32-14.3-32-32V107.4C165.7 119.9 119.9 165.7 107.4 224H128c17.7 0 32 14.3 32 32s-14.3 32-32 32H107.4zM256 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>`
  },
  {
    title: "Master Craftsmanship",
    features: [
      "Expert Woodworking",
      "Detailed Finishing",
      "Traditional Methods"
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" stroke-width="1.5" fill="currentColor" class="w-6 h-6"><path d="M0 80v48c0 17.7 14.3 32 32 32H48 96V80c0-26.5-21.5-48-48-48S0 53.5 0 80zM112 32c10 13.4 16 30 16 48V384c0 35.3 28.7 64 64 64s64-28.7 64-64v-5.3c0-32.4 26.3-58.7 58.7-58.7H480V128c0-53-43-96-96-96H112zM464 480c61.9 0 112-50.1 112-112c0-8.8-7.2-16-16-16H314.7c-14.7 0-26.7 11.9-26.7 26.7V384c0 53-43 96-96 96H368h96z"/></svg>`
  },
  {
    title: "Custom Solutions",
    features: [
      "Bespoke Designs",
      "Custom Dimensions",
      "Personalized Finishes"
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" stroke-width="1.5" fill="currentColor" class="w-6 h-6"><path d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z"/></svg>`
  },
  {
    title: "Product Range",
    features: [
      "Premium Flooring",
      "Kitchen Products",
      "Custom Furniture"
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" stroke-width="1.5" fill="currentColor" class="w-6 h-6"><path d="M192 104.8c0-9.2-5.8-17.3-13.2-22.8C167.2 73.3 160 61.3 160 48c0-26.5 28.7-48 64-48s64 21.5 64 48c0 13.3-7.2 25.3-18.8 34c-7.4 5.5-13.2 13.6-13.2 22.8c0 12.8 10.4 23.2 23.2 23.2H336c26.5 0 48 21.5 48 48v56.8c0 12.8 10.4 23.2 23.2 23.2c9.2 0 17.3-5.8 22.8-13.2c8.7-11.6 20.7-18.8 34-18.8c26.5 0 48 28.7 48 64s-21.5 64-48 64c-13.3 0-25.3-7.2-34-18.8c-5.5-7.4-13.6-13.2-22.8-13.2c-12.8 0-23.2 10.4-23.2 23.2V464c0 26.5-21.5 48-48 48H279.2c-12.8 0-23.2-10.4-23.2-23.2c0-9.2 5.8-17.3 13.2-22.8c11.6-8.7 18.8-20.7 18.8-34c0-26.5-28.7-48-64-48s-64 21.5-64 48c0 13.3 7.2 25.3 18.8 34c7.4 5.5 13.2 13.6 13.2 22.8c0 12.8-10.4 23.2-23.2 23.2H48c-26.5 0-48-21.5-48-48V343.2C0 330.4 10.4 320 23.2 320c9.2 0 17.3 5.8 22.8 13.2C54.7 344.8 66.7 352 80 352c26.5 0 48-28.7 48-64s-21.5-64-48-64c-13.3 0-25.3 7.2-34 18.8C40.5 250.2 32.4 256 23.2 256C10.4 256 0 245.6 0 232.8V176c0-26.5 21.5-48 48-48H168.8c12.8 0 23.2-10.4 23.2-23.2z"/></svg>`
  },
  {
    title: "Expert Support",
    features: [
      "Professional Installation",
      "Maintenance Service",
      "Technical Support"
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" stroke-width="1.5" fill="currentColor" class="w-6 h-6"><path d="M544 248v3.3l69.7-69.7c21.9-21.9 21.9-57.3 0-79.2L535.6 24.4c-21.9-21.9-57.3-21.9-79.2 0L416.3 64.5c-2.7-.3-5.5-.5-8.3-.5H296c-37.1 0-67.6 28-71.6 64H224V248c0 22.1 17.9 40 40 40s40-17.9 40-40V176c0 0 0-.1 0-.1V160l16 0 136 0c0 0 0 0 .1 0H464c44.2 0 80 35.8 80 80v8zM336 192v56c0 39.8-32.2 72-72 72s-72-32.2-72-72V129.4c-35.9 6.2-65.8 32.3-76 68.2L99.5 255.2 26.3 328.4c-21.9 21.9-21.9 57.3 0 79.2l78.1 78.1c21.9 21.9 57.3 21.9 79.2 0l37.7-37.7c.9 0 1.8 .1 2.7 .1H384c26.5 0 48-21.5 48-48c0-5.6-1-11-2.7-16H432c26.5 0 48-21.5 48-48c0-12.8-5-24.4-13.2-33c25.7-5 45.1-27.6 45.2-54.8v-.4c-.1-30.8-25.1-55.8-56-55.8c0 0 0 0 0 0l-120 0z"/></svg>`
  },
  {
    title: "Industry Innovation",
    features: [
      "Modern Techniques",
      "Advanced Equipment",
      "Latest Wood Treatments"
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" stroke-width="1.5" fill="currentColor" class="w-6 h-6"><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm306.7 69.1L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>`
  }
];
const solutions = [
  {
    title: "Quality Assurance",
    painPoint: "Finding consistently high-quality wood products in today's market can be challenging and overwhelming.",
    agitatepainPoint: "It's frustrating when wood products don't meet your expectations, showing inconsistencies in quality and finish that affect your project's outcome.",
    solution: "Our rigorous quality control and expert selection process ensures every piece meets the highest standards. Each product undergoes thorough inspection before delivery.",
    img: visibilityDilemma
  },
  {
    title: "Custom Creation",
    painPoint: "Standard wood products often don't fit your specific needs or match your unique vision.",
    agitatepainPoint: "It's disappointing when you can't find exactly what you're looking for, forcing you to compromise on your design or functionality requirements.",
    solution: "Our custom woodworking service brings your vision to life, crafting pieces that perfectly match your specifications and exceed your expectations.",
    img: engagementGap
  },
  {
    title: "Expert Craftsmanship",
    painPoint: "Mass-produced wood products often lack the attention to detail and durability that comes with true craftsmanship.",
    agitatepainPoint: "Poor quality workmanship leads to premature wear and disappointing results, wasting both time and money on replacements.",
    solution: "Our master craftsmen combine traditional techniques with modern precision, creating lasting pieces that showcase the natural beauty of wood.",
    img: resultsInHibernation
  }
];

const $$Astro$2 = createAstro();
const $$Services = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Services;
  const { className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section id="services"${addAttribute(`relative bg-gradient-to-br from-wood-cream to-wood-light dark:from-wood-dark dark:to-accent-green ${className}`, "class")}> <span class="w-40 h-40 rounded-full bg-gradient-to-br from-wood-light dark:from-wood-light from-0% via-wood-dark dark:via-wood-dark via-80% to-accent-green dark:to-accent-green to-110%
    absolute left-1/3 bottom-1/3"></span> <span class="w-40 h-40 rounded-full bg-gradient-to-br from-wood-cream dark:from-wood-light from-0% via-wood-light dark:via-wood-dark via-85% to-wood-dark dark:to-wood-dark to-100%
    absolute right-1/4 bottom-0"></span> <span class="w-40 h-40 rounded-full bg-gradient-to-br from-accent-terra dark:from-accent-terra from-0% via-wood-dark dark:via-wood-dark via-80% to-wood-light dark:to-wood-light to-110%
    absolute right-1/3 top-1/3"></span> <span class="w-40 h-40 rounded-full bg-gradient-to-br from-accent-terra dark:from-accent-terra from-0% via-wood-dark dark:via-wood-dark via-80% to-wood-light dark:to-wood-light to-110%
    absolute right-3/4 top-1/3"></span> ${renderComponent($$result, "Container", $$Container, { "className": "space-y-10 md:sapce-y-12" }, { "default": ($$result2) => renderTemplate` <div class="text-center max-w-3xl mx-auto space-y-4"> ${renderComponent($$result2, "Title", $$Title, { "className": "" }, { "default": ($$result3) => renderTemplate`Why Choose Sindiyan?` })} </div> <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"> ${services.map((service) => {
    return renderTemplate`${renderComponent($$result2, "Service", $$Service, { "title": service.title, "features": service.features, "icon": service.icon })}`;
  })} </div> ` })} </section>`;
}, "C:/Users/harma/OneDrive/Documents/season2/BLESA/Sinan/agency-template/src/components/sections/Services.astro", void 0);

const $$Astro$1 = createAstro();
const $$CTA = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CTA;
  const { className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section id="cta"${addAttribute(`pb-20 ${className}`, "class")}> ${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` <div class="w-full relative py-8 md:py-10 px-6 md:px-8 rounded-2xl bg-gradient-to-br from-wood-cream via-wood-light/20 to-wood-light/30 dark:from-wood-dark/40 dark:via-accent-green/20 dark:to-wood-dark/30"> <div class="mx-auto text-center max-w-xl md:max-w-2xl relative"> <h1 class="text-3xl/tight sm:text-4xl/tight md:text-5xl/tight
          font-bold text-wood-dark dark:text-wood-light">
Contact
${renderComponent($$result2, "GradiantText", $$GradiantText, {}, { "default": ($$result3) => renderTemplate`Our` })} ${renderComponent($$result2, "GradiantText", $$GradiantText, {}, { "default": ($$result3) => renderTemplate`Team` })} </h1> ${renderComponent($$result2, "Paragraph", $$Paragraph, { "className": "pt-10 font-semibold text-accent-green dark:text-wood-cream" }, { "default": ($$result3) => renderTemplate`
Get in touch with our wood experts today
` })} <div class="mx-auto max-w-md sm:max-w-xl pt-10 grid grid-cols-1 md:grid-cols-3 gap-4"> <a href="http://wa.me/+9647506665251"> ${renderComponent($$result2, "Button", $$Button, { "variant": "primary", "className": "min-w-max text-wood-cream transition-colors duration-300 w-full" }, { "default": ($$result3) => renderTemplate` <span class="flex relative z-[5] text-center items-center justify-center gap-2"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg>
0750 666 5251
</span> ` })} </a> <a href="http://wa.me/+9647516665251"> ${renderComponent($$result2, "Button", $$Button, { "variant": "primary", "className": "min-w-max text-wood-cream transition-colors duration-300 w-full" }, { "default": ($$result3) => renderTemplate` <span class="flex relative z-[5] text-center items-center justify-center gap-2"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg>
0751 666 5251
</span> ` })} </a> <a href="mailto:info@al-sindyan.com"> ${renderComponent($$result2, "Button", $$Button, { "variant": "primary", "className": "min-w-max text-wood-cream transition-colors duration-300 w-full" }, { "default": ($$result3) => renderTemplate` <span class="flex relative z-[5] text-center items-center justify-center gap-2"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path> </svg>
Email Us
</span> ` })} </a> </div> </div> </div> ` })} </section>`;
}, "C:/Users/harma/OneDrive/Documents/season2/BLESA/Sinan/agency-template/src/components/sections/CTA.astro", void 0);

const $$Astro = createAstro();
const $$Solutions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Solutions;
  const { className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section id="solutions"${addAttribute(`flex flex-col ${className}`, "class")}> ${solutions.map((solution, index) => {
    const oddIndex = index % 2 === 0;
    const flexRow = oddIndex ? "midmd:flex-row-reverse" : "midmd:flex-row";
    const bgColor = oddIndex ? "bg-wood-cream dark:bg-wood-dark" : "bg-transparent";
    return renderTemplate`<div${addAttribute(`w-100 py-10 md:py-16 ${bgColor}`, "class")}> <div${addAttribute(`flex flex-col gap-10 lg:gap-12 ${flexRow} mx-auto max-w-7xl w-full`, "class")}> <div class="max-w-md mx-auto w-11/12 flex-1 flex midmd:w-7/12 lg:w-1/2 flex-col"> ${renderComponent($$result, "Title", $$Title, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "GradiantText", $$GradiantText, {}, { "default": ($$result3) => renderTemplate`${solution.title}` })} ` })} ${renderComponent($$result, "Paragraph", $$Paragraph, { "className": "mt-8 font-medium text:lg md:text-2xl" }, { "default": ($$result2) => renderTemplate`${solution.painPoint}` })} ${renderComponent($$result, "Paragraph", $$Paragraph, { "className": "mt-3 " }, { "default": ($$result2) => renderTemplate`${solution.agitatepainPoint}` })} ${renderComponent($$result, "Paragraph", $$Paragraph, { "className": "mt-3 font-medium" }, { "default": ($$result2) => renderTemplate`${solution.solution}` })} </div> <div class="max-w-md mx-auto midmd:max-w-none lg:mx-0 lg:pr-10 xl:pr-2 flex-1 flex w-11/12 midmd:w-5/12 lg:w-1/2 midmd:h-auto"> <div class="w-full h-80 sm:h-96 midmd:h-full relative"> ${renderComponent($$result, "Image", $$Image, { "src": solution.img, "alt": "banner image", "width": "1240", "height": "1385", "class": "w-auto left-1/2 -translate-x-1/2 absolute bottom-0 max-h-full rounded-3xl object-cover" })} </div> </div> </div> </div>`;
  })} </section>`;
}, "C:/Users/harma/OneDrive/Documents/season2/BLESA/Sinan/agency-template/src/components/sections/Solutions.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to the Agency template" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex flex-col overflow-hidden"> ${renderComponent($$result2, "Hero", $$Hero, { "className": "py-10 md:py-16" })} ${renderComponent($$result2, "Solutions", $$Solutions, { "className": "pt-10 md:pt-16" })} ${renderComponent($$result2, "Services", $$Services, { "className": "py-10 md:py-16" })} ${renderComponent($$result2, "Brands", $$Brands, { "className": "py-10 md:py-16" })} <!-- <Features className="py-10 md:py-16" /> --> <!-- <FAQ className="py-10 md:py-16" /> --> ${renderComponent($$result2, "CTA", $$CTA, { "className": "py-10 md:py-16" })} <!-- Hero --> <!-- headline, subheading, image, cta button, results --> <!-- Problems/Solutions --> <!-- title, painpoint, aggitate pain, introduce solution, video  --> <!-- Benefits/Services --> <!-- benefit title, thanks to features, visual --> <!-- Testimonials/Brands --> <!-- reviews, partners --> <!-- Features --> <!-- ~10 features, more technical than emotional, in a list --> <!-- FAQ --> <!-- questions, answers, video --> <!-- CTA --> <!-- Question, button --> </main> ` })}`;
}, "C:/Users/harma/OneDrive/Documents/season2/BLESA/Sinan/agency-template/src/pages/index.astro", void 0);

const $$file = "C:/Users/harma/OneDrive/Documents/season2/BLESA/Sinan/agency-template/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
