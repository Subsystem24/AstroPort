import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, f as renderSlot, d as renderComponent } from '../astro.d38ce855.mjs';
import { g as getCollection, a as $$Pill, b as $$CallToAction, $ as $$ContactCTA } from './_...slug_.astro.b10effba.mjs';
import { $ as $$Icon, b as $$Hero, a as $$BaseLayout } from './404.astro.c0d66d11.mjs';
/* empty css                           *//* empty css                           */
const $$Astro$3 = createAstro();
const $$Grid = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Grid;
  const { variant } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<ul${addAttribute([["grid", { offset: variant === "offset", small: variant === "small" }], "astro-VC5TSDMU"], "class:list")}>
	${renderSlot($$result, $$slots["default"])}
</ul>`;
}, "/Users/phuvitjaruratkit/Desktop/project/AstroPort/AstroPort/src/components/Grid.astro");

const $$Astro$2 = createAstro();
const $$PortfolioPreview = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$PortfolioPreview;
  const { data, slug } = Astro2.props.project;
  return renderTemplate`${maybeRenderHead($$result)}<a class="card astro-LGKM4U2A"${addAttribute(`/work/${slug}`, "href")}>
	<span class="title astro-LGKM4U2A">${data.title}</span>
	<img${addAttribute(data.img, "src")}${addAttribute(data.img_alt || "", "alt")} loading="lazy" decoding="async" class="astro-LGKM4U2A">
</a>`;
}, "/Users/phuvitjaruratkit/Desktop/project/AstroPort/AstroPort/src/components/PortfolioPreview.astro");

const $$Astro$1 = createAstro();
const $$Skills = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Skills;
  return renderTemplate`${maybeRenderHead($$result)}<section class="box skills astro-AB4IHPZS">
	<div class="stack gap-2 lg:gap-4 astro-AB4IHPZS">
		${renderComponent($$result, "Icon", $$Icon, { "icon": "terminal-window", "color": "var(--accent-regular)", "size": "2.5rem", "gradient": true, "class": "astro-AB4IHPZS" })}
		<h2 class="astro-AB4IHPZS">Full Stack</h2>
		<p class="astro-AB4IHPZS">Le Wagon graduated, proficiency in Ruby on Rails, JAVA, React, Javascript, HTML & CSS, TailWind</p>
	</div>
	<div class="stack gap-2 lg:gap-4 astro-AB4IHPZS">
		${renderComponent($$result, "Icon", $$Icon, { "icon": "trophy", "color": "var(--accent-regular)", "size": "2.5rem", "gradient": true, "class": "astro-AB4IHPZS" })}
		<h2 class="astro-AB4IHPZS">Financial Student</h2>
		<p class="astro-AB4IHPZS">Majoring in finance, looking forward for landing a job in FinTech industry</p>
	</div>
	<div class="stack gap-2 lg:gap-4 astro-AB4IHPZS">
		${renderComponent($$result, "Icon", $$Icon, { "icon": "strategy", "color": "var(--accent-regular)", "size": "2.5rem", "gradient": true, "class": "astro-AB4IHPZS" })}
		<h2 class="astro-AB4IHPZS">Strategy-Minded</h2>
		<p class="astro-AB4IHPZS">Urna porttitor rhoncus dolor purus non enim praesent ornare.</p>
	</div>
</section>`;
}, "/Users/phuvitjaruratkit/Desktop/project/AstroPort/AstroPort/src/components/Skills.astro");

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const projects = (await getCollection("work")).sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf()).slice(0, 4);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "class": "astro-J7PV25F6" }, { "default": ($$result2) => renderTemplate`
	${maybeRenderHead($$result2)}<div class="stack gap-20 lg:gap-48 astro-J7PV25F6">
		<div class="wrapper stack gap-8 lg:gap-20 astro-J7PV25F6">
			<header class="hero astro-J7PV25F6">
				${renderComponent($$result2, "Hero", $$Hero, { "title": "Hello, I'm Phuvit", "tagline": "A University Student Developer who is currently based in Tokyo, Japan.", "align": "start", "class": "astro-J7PV25F6" }, { "default": ($$result3) => renderTemplate`
					<div class="roles astro-J7PV25F6">
						${renderComponent($$result3, "Pill", $$Pill, { "class": "astro-J7PV25F6" }, { "default": ($$result4) => renderTemplate`${renderComponent($$result4, "Icon", $$Icon, { "icon": "code", "size": "1.33em", "class": "astro-J7PV25F6" })} Developer` })}
						${renderComponent($$result3, "Pill", $$Pill, { "class": "astro-J7PV25F6" }, { "default": ($$result4) => renderTemplate`${renderComponent($$result4, "Icon", $$Icon, { "icon": "microphone-stage", "size": "1.33em", "class": "astro-J7PV25F6" })} Financial Analyze` })}
						${renderComponent($$result3, "Pill", $$Pill, { "class": "astro-J7PV25F6" }, { "default": ($$result4) => renderTemplate`${renderComponent($$result4, "Icon", $$Icon, { "icon": "pencil-line", "size": "1.33em", "class": "astro-J7PV25F6" })} Liverpool Fan` })}
					</div>
				` })}

				<img alt="Phuvit Jaruratkit smiling in a red plaid shirt and tortoise shell glasses" width="480" height="620" src="/assets/profilepic.jpg" class="astro-J7PV25F6">
			</header>

			${renderComponent($$result2, "Skills", $$Skills, { "class": "astro-J7PV25F6" })}
		</div>

		<main class="wrapper stack gap-20 lg:gap-48 astro-J7PV25F6">
			<section class="section with-background with-cta astro-J7PV25F6">
				<header class="section-header stack gap-2 lg:gap-4 astro-J7PV25F6">
					<h3 class="astro-J7PV25F6">Past Work</h3>
					<p class="astro-J7PV25F6">Take a look below at some of my featured work for personal development project.</p>
				</header>

				<div class="gallery astro-J7PV25F6">
					${renderComponent($$result2, "Grid", $$Grid, { "variant": "offset", "class": "astro-J7PV25F6" }, { "default": ($$result3) => renderTemplate`${projects.map((project) => renderTemplate`<li class="astro-J7PV25F6">
									${renderComponent($$result3, "PortfolioPreview", $$PortfolioPreview, { "project": project, "class": "astro-J7PV25F6" })}
								</li>`)}` })}
				</div>

				<div class="cta astro-J7PV25F6">
					${renderComponent($$result2, "CallToAction", $$CallToAction, { "href": "/work/", "class": "astro-J7PV25F6" }, { "default": ($$result3) => renderTemplate`
						View All
						${renderComponent($$result3, "Icon", $$Icon, { "icon": "arrow-right", "size": "1.2em", "class": "astro-J7PV25F6" })}
					` })}
				</div>
			</section>

			<!-- <section class="section with-background bg-variant">
				<header class="section-header stack gap-2 lg:gap-4">
					<h3>Mentions</h3>
					<p>
						I have been fortunate enough to recieve praise for my work in several publications. Take
						a look below to learn more.
					</p>
				</header> -->

				<!-- <div class="gallery">
					<Grid variant="small">
						{
							['Medium', 'BuzzFeed', 'The Next Web', 'awwwards.', 'TechCrunch'].map((brand) => (
								<li class="mention-card">
									<p>{brand}</p>
								</li>
							))
						}
					</Grid>
				</div> -->
			
		</main>

		${renderComponent($$result2, "ContactCTA", $$ContactCTA, { "class": "astro-J7PV25F6" })}
	</div>
` })}`;
}, "/Users/phuvitjaruratkit/Desktop/project/AstroPort/AstroPort/src/pages/index.astro");

const $$file = "/Users/phuvitjaruratkit/Desktop/project/AstroPort/AstroPort/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Grid as $, $$PortfolioPreview as a, index as i };
