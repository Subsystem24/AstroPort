import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../astro.d38ce855.mjs';
import { g as getCollection, $ as $$ContactCTA } from './_...slug_.astro.b10effba.mjs';
import { b as $$Hero, a as $$BaseLayout } from './404.astro.c0d66d11.mjs';
import { $ as $$Grid, a as $$PortfolioPreview } from './index.astro.e6de255c.mjs';
import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'slash';
import 'path-to-regexp';
import 'mime';
import 'string-width';
import 'html-escaper';
/* empty css                           *//* empty css                           *//* empty css                               *//* empty css                         *//* empty css                           *//* empty css                           *//* empty css                           */
const $$Astro = createAstro();
const $$Work = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Work;
  const projects = (await getCollection("work")).sort(
    (a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf()
  );
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "My Work | Phuvit Jaruratkit", "description": "Learn about Phuvit Jaruratkit's most recent projects" }, { "default": ($$result2) => renderTemplate`
	${maybeRenderHead($$result2)}<div class="stack gap-20">
		<main class="wrapper stack gap-8">
			${renderComponent($$result2, "Hero", $$Hero, { "title": "My Work", "tagline": "See my most recent projects below to get an idea of my past experience.", "align": "start" })}
			${renderComponent($$result2, "Grid", $$Grid, { "variant": "offset" }, { "default": ($$result3) => renderTemplate`${projects.map((project) => renderTemplate`<li>
							${renderComponent($$result3, "PortfolioPreview", $$PortfolioPreview, { "project": project })}
						</li>`)}` })}
		</main>
		${renderComponent($$result2, "ContactCTA", $$ContactCTA, {})}
	</div>
` })}`;
}, "/Users/phuvitjaruratkit/Desktop/project/AstroPort/AstroPort/src/pages/work.astro");

const $$file = "/Users/phuvitjaruratkit/Desktop/project/AstroPort/AstroPort/src/pages/work.astro";
const $$url = "/work";

export { $$Work as default, $$file as file, $$url as url };
