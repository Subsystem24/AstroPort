import { k as createVNode, F as Fragment, s as spreadAttributes } from './astro.d38ce855.mjs';
import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'slash';
import 'path-to-regexp';
import 'mime';
import 'string-width';
import 'html-escaper';

const images = {
					
				};

				function updateImageReferences(html) {
					return html.replaceAll(
						/__ASTRO_IMAGE_="(.+)"/gm,
						(full, imagePath) => spreadAttributes({src: images[imagePath].src, ...images[imagePath].attributes})
					);
				}

				const html = updateImageReferences("<h2 id=\"effective-knowledge-review\">Effective Knowledge Review</h2>\n<blockquote>\n<p>Tell me and I forget. Teach me and I remember. Involve me and I learn with <a href=\"https://www.quizmate.tech/\">Quizmate</a></p>\n</blockquote>\n<p><a href=\"https://www.quizmate.tech/\">Quizmate</a> is an innovative platform that leverages artificial intelligence (AI) to deliver tailor-made quizzes, enabling learners to assess and review their knowledge in specific topics. Developed using Ruby on Rails and Tailwind CSS, <a href=\"https://www.quizmate.tech/\">Quizmate</a> combines powerful API development and JavaScript to provide dynamic and engaging user experiences. Hosted on Heroku and utilizing PostGreSQL, <a href=\"https://www.quizmate.tech/\">Quizmate</a> offers a seamless and reliable learning environment.</p>\n<p>With <a href=\"https://www.quizmate.tech/\">Quizmate</a>, learners have access to a vast library of quizzes across various subjects, carefully designed to suit their individual learning needs. The AI algorithms analyze the learner’s progress, adapt to their strengths and weaknesses, and generate quizzes that challenge and reinforce their knowledge effectively.</p>\n<h4 id=\"team-contribution-skills-involve\">Team contribution skills involve</h4>\n<ul>\n<li>Backend development using rails</li>\n<li>Support the team styling by using the TailWindCSS</li>\n<li>Impleented a Javascript giving more dynamic event to the app</li>\n</ul>\n<h5 id=\"github\"><a href=\"https://github.com/Subsystem24/QuizmatePhuvit\">GitHub</a></h5>");

				const frontmatter = {"title":"Quizmate","publishDate":"2020-03-02T00:00:00.000Z","img":"/assets/welcome.png","img_alt":"Iridescent ripples of a bright blue and pink liquid","description":"Tailor made quizzes from an AI to supports learner being able to review their knowledge in a specific topic\n","tags":["Backend","API development","Ruby on Rails"]};
				const file = "/Users/phuvitjaruratkit/Desktop/project/AstroPort/AstroPort/src/content/work/markdown-mystery-tour.md";
				const url = undefined;
				function rawContent() {
					return "\n## Effective Knowledge Review\n\n> Tell me and I forget. Teach me and I remember. Involve me and I learn with <a href=\"https://www.quizmate.tech/\">Quizmate</a>\n\n<a href=\"https://www.quizmate.tech/\">Quizmate</a> is an innovative platform that leverages artificial intelligence (AI) to deliver tailor-made quizzes, enabling learners to assess and review their knowledge in specific topics. Developed using Ruby on Rails and Tailwind CSS, <a href=\"https://www.quizmate.tech/\">Quizmate</a> combines powerful API development and JavaScript to provide dynamic and engaging user experiences. Hosted on Heroku and utilizing PostGreSQL, <a href=\"https://www.quizmate.tech/\">Quizmate</a> offers a seamless and reliable learning environment.\n\nWith <a href=\"https://www.quizmate.tech/\">Quizmate</a>, learners have access to a vast library of quizzes across various subjects, carefully designed to suit their individual learning needs. The AI algorithms analyze the learner's progress, adapt to their strengths and weaknesses, and generate quizzes that challenge and reinforce their knowledge effectively.\n\n#### Team contribution skills involve\n\n- Backend development using rails\n- Support the team styling by using the TailWindCSS\n- Impleented a Javascript giving more dynamic event to the app\n\n##### <a href=\"https://github.com/Subsystem24/QuizmatePhuvit\">GitHub</a>\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"effective-knowledge-review","text":"Effective Knowledge Review"},{"depth":4,"slug":"team-contribution-skills-involve","text":"Team contribution skills involve"},{"depth":5,"slug":"github","text":"GitHub"}];
				}
				async function Content() {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;
					const contentFragment = createVNode(Fragment, { 'set:html': html });
					return contentFragment;
				}
				Content[Symbol.for('astro.needsHeadRendering')] = true;

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, images, rawContent, url };
