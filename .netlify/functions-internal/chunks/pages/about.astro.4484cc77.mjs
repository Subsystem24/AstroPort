import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../astro.d38ce855.mjs';
import { b as $$Hero, a as $$BaseLayout } from './404.astro.c0d66d11.mjs';
import { $ as $$ContactCTA } from './_...slug_.astro.b10effba.mjs';
/* empty css                           */import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'slash';
import 'path-to-regexp';
import 'mime';
import 'string-width';
import 'html-escaper';
/* empty css                         *//* empty css                           *//* empty css                           *//* empty css                           *//* empty css                               */
const $$Astro = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "About | Phuvit Jaruratkit", "description": "About Phuvit Jaruratkit Lorem Ipsum", "class": "astro-KH7BTL4R" }, { "default": ($$result2) => renderTemplate`
	${maybeRenderHead($$result2)}<div class="stack gap-20 astro-KH7BTL4R">
		<main class="wrapper about astro-KH7BTL4R">
			${renderComponent($$result2, "Hero", $$Hero, { "title": "About", "tagline": "Thanks for stopping by. Read below to learn more about myself and my background.", "class": "astro-KH7BTL4R" }, { "default": ($$result3) => renderTemplate`
				<img width="1553" height="873" src="/assets/friend.jpeg" alt="Phuvit Jaruratkit at work with a colleague" class="astro-KH7BTL4R">
			` })}

			<section class="astro-KH7BTL4R">
				<h2 class="section-title astro-KH7BTL4R">Personality</h2>
				<div class="content astro-KH7BTL4R">
					<p class="astro-KH7BTL4R">
						Respectful self-motivator gifted at finding reliable solutions for software issues. Experienced in API web application and design development and offering skills in backend and frontend. Fluent in ruby, javascript, java framework and accustomed to working with cross-cultural, global teams. Organized and dependable candidate successful at managing multiple priorities with a positive attitude. Willingness to take on added responsibilities to meet team goals.
					</p>
				</div>
			</section>
			<section class="astro-KH7BTL4R">
				<h2 class="section-title astro-KH7BTL4R">Education</h2>
				<div class="content astro-KH7BTL4R">
          <ul class="astro-KH7BTL4R">
            <li class="astro-KH7BTL4R"><p class="astro-KH7BTL4R">2023 batch Le Wagon coding bootcamp</p></li>
            <li class="astro-KH7BTL4R"><p class="astro-KH7BTL4R">Ritsumeikan Asia Pacific University, Bachelor degree in Finance and accounting</p></li>
          </ul>
				</div>
			</section>
			<section class="astro-KH7BTL4R">
				<h2 class="section-title astro-KH7BTL4R">Skills</h2>
				<div class="content astro-KH7BTL4R">
          <ul class="astro-KH7BTL4R">
					<li class="astro-KH7BTL4R"><p class="astro-KH7BTL4R">JAVA, Ruby, Javascript, HTML, CSS</p></li>
          <li class="astro-KH7BTL4R"><p class="astro-KH7BTL4R">Rails, ReactJs, TailwindCSS</p></li>
          <li class="astro-KH7BTL4R"><p class="astro-KH7BTL4R">SQLite, PostGreSQL, Sanity</p></li>
          <li class="astro-KH7BTL4R"><p class="astro-KH7BTL4R">API development, AJAX</p></li>
        </ul>
				</div>
			</section>
		</main>

		${renderComponent($$result2, "ContactCTA", $$ContactCTA, { "class": "astro-KH7BTL4R" })}
	</div>
` })}`;
}, "/Users/phuvitjaruratkit/Desktop/project/AstroPort/AstroPort/src/pages/about.astro");

const $$file = "/Users/phuvitjaruratkit/Desktop/project/AstroPort/AstroPort/src/pages/about.astro";
const $$url = "/about";

export { $$About as default, $$file as file, $$url as url };
