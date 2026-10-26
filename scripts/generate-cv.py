"""Generate the website CV. Run with Python and reportlab installed."""
from pathlib import Path
from xml.sax.saxutils import escape

from reportlab.lib import colors
from reportlab.lib.enums import TA_RIGHT, TA_CENTER
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak, Table, TableStyle, KeepTogether, HRFlowable

ROOT = Path(__file__).resolve().parents[1]
FONT_DIR = Path('/System/Library/Fonts/Supplemental')
for name, filename in [('CVSerif', 'Times New Roman.ttf'), ('CVSerif-Bold', 'Times New Roman Bold.ttf')]:
    pdfmetrics.registerFont(TTFont(name, str(FONT_DIR / filename)))
pdfmetrics.registerFontFamily('CVSerif', normal='CVSerif', bold='CVSerif-Bold', italic='CVSerif', boldItalic='CVSerif-Bold')
INK = colors.black
MUTED = colors.HexColor('#333333')
BLUE = colors.black
styles = {
    'body': ParagraphStyle('body', fontName='CVSerif', fontSize=10.5, leading=13.5, textColor=INK, spaceAfter=5),
    'small': ParagraphStyle('small', fontName='CVSerif', fontSize=10, leading=13, textColor=MUTED, spaceAfter=4),
    'heading': ParagraphStyle('heading', fontName='CVSerif-Bold', fontSize=10, leading=14, textColor=BLUE, spaceBefore=11, spaceAfter=2),
    'role': ParagraphStyle('role', fontName='CVSerif-Bold', fontSize=11, leading=15, textColor=INK),
    'date': ParagraphStyle('date', fontName='CVSerif', fontSize=9, leading=15, textColor=MUTED, alignment=TA_RIGHT),
    'bullet': ParagraphStyle('bullet', fontName='CVSerif', fontSize=10.5, leading=13.5, textColor=INK, leftIndent=10, firstLineIndent=-10, spaceAfter=5),
}
story = []
def p(text, kind='body'):
    return Paragraph(text, styles[kind])
def section(text):
    story.append(p(text.upper(), 'heading'))
    story.append(HRFlowable(width='100%', thickness=0.7, color=colors.black, spaceAfter=5))
def role(company, title, dates, location, bullets, stack):
    row = Table([[p(company+' | '+location), p(dates, 'date')]], colWidths=[330, 163], hAlign='LEFT')
    row.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('LEFTPADDING',(0,0),(-1,-1),0), ('RIGHTPADDING',(0,0),(-1,-1),0), ('TOPPADDING',(0,0),(-1,-1),0), ('BOTTOMPADDING',(0,0),(-1,-1),3)]))
    story.append(KeepTogether([p(title, 'role'), row, p('• '+bullets[0], 'bullet')]))
    story.extend(p('• '+b, 'bullet') for b in bullets[1:])
    story.append(p('<b>Technologies:</b> '+stack, 'small'))
    story.append(Spacer(1, 5))
def project(name, descriptor, text, stack, url=None):
    title = escape(name)
    if url:
        title = f'<link href="{url}" color="#0000EE">{title}</link>'
    story.append(KeepTogether([p(f'{title} <font color="#555e65">| {descriptor}</font>', 'role'), p(text), p('<b>Technologies:</b> '+stack, 'small') if stack else Spacer(1, 0), Spacer(1, 4)]))

story.append(Paragraph('ALDO MARCELINO', ParagraphStyle('name', fontName='CVSerif-Bold', fontSize=19, leading=23, textColor=INK, alignment=TA_CENTER)))
story.append(Paragraph('FULL-STACK SOFTWARE ENGINEER', ParagraphStyle('title', fontName='CVSerif-Bold', fontSize=11, leading=15, textColor=BLUE, spaceAfter=3, alignment=TA_CENTER)))
contact_style = ParagraphStyle('contact', parent=styles['small'], alignment=TA_CENTER)
story.append(Paragraph('+62 822-6758-0929 | <link href="mailto:aldomarcelinolubis@gmail.com">aldomarcelinolubis@gmail.com</link> | <link href="https://www.linkedin.com/in/aldo-marcelino-791bb5211/" color="#0000EE"><u>LinkedIn</u></link> | <link href="https://github.com/aldomarcelino" color="#0000EE"><u>GitHub</u></link> | Jakarta, Indonesia', contact_style))
section('Summary')
story.append(p('Full-stack software engineer building web applications across frontend and backend, from SaaS platforms and business applications to products built with small teams. Experienced in Next.js, TypeScript, and NestJS, with a focus on clear interfaces, reliable services, and maintainable code. Collaborates remotely with Singapore-based teams and delivers features across production products.'))
section('Technical skills')
for label, content in [
    ('Frontend', 'JavaScript, TypeScript, React, Next.js, Vue, Nuxt, Tailwind CSS, React Native / Expo'),
    ('Backend', 'Node.js, NestJS, Go, REST APIs, GraphQL'),
    ('Databases', 'PostgreSQL, MongoDB, MySQL, Redis, Firebase'),
    ('Cloud &amp; delivery', 'AWS, Google Cloud Platform (GCP), BytePlus, Vercel, Docker, Git'),
    ('State &amp; quality', 'Redux Toolkit, Redux Saga, Zustand, Jotai, TanStack Query, SWR, unit testing, Lighthouse, PageSpeed Insights'),
]:
    story.append(p(f'<b>{label}:</b> {content}'))
section('Professional experience')
role('L’tria Tribe Benefits', 'Full-Stack Engineer | Full-time', 'Jan 2025 - Present', 'Singapore | Remote', [
    'Build and maintain Tribe Benefits and NOVA by Tribe, two employee benefits products for employers and their teams in Singapore.',
    'Develop Nexus HR Admin, a B2B portal for client HR teams, alongside interfaces and backend services for benefits, wellness, and rewards.',
    'Integrate payment gateways, Amazon S3 storage, and Postmark transactional email; manage deployments on Vercel.',
    'Maintain unit test coverage above 93% across both products and guide performance, accessibility, and SEO improvements with Lighthouse and PageSpeed Insights.',
], 'Next.js, TypeScript, NestJS, MongoDB, PostgreSQL, Amazon S3, Vercel, Postmark')
role('CIMB Niaga', 'Front-End Engineer | Contract', 'Dec 2023 - Dec 2024', 'Jakarta, Indonesia', [
    'Developed frontend experiences across three banking products: the public API portal, Back Office, and Customer Portal.',
    'Built reusable interface components and managed application state, API data fetching, and caching across banking service workflows.',
    'Improved public-portal performance and SEO with PageSpeed Insights; reviewed accessibility with Lighthouse and maintained high unit test coverage.',
], 'Next.js, Jotai, Zustand, TanStack Query, SWR, MUI Material, shadcn/ui')

story.append(PageBreak())
section('Professional experience / continued')
role('Eranyacloud', 'Front-End Engineer | Full-time', 'Jan 2023 - Nov 2023', 'Jakarta, Indonesia', [
    'Developed frontend applications for two products at an Indonesian cloud services provider, including the customer-facing Compute Console.',
    'Connected interfaces to cloud service APIs and coordinated application state and asynchronous workflows with Redux Toolkit and Redux Saga.',
    'Maintained comprehensive unit test coverage and reviewed responsive behavior, accessibility, performance, and SEO with Lighthouse and PageSpeed Insights.',
], 'Next.js, Nuxt, Redux Toolkit, Redux Saga')
role('Ekuid', 'Full-Stack Engineer | Part-time', 'Dec 2022 - Jun 2026', 'Jakarta, Indonesia', [
    'Developed web applications and backend services for EKUID, a securities crowdfunding platform, and Wukong, an event ticketing platform.',
    'Built Back Office tools for managing crowdfunding projects and events, with dashboards for monitoring revenue and activity.',
    'Integrated Xendit and Nicepay payment gateways and worked with AWS services to support application infrastructure and delivery.',
], 'Next.js, NestJS, GraphQL, Go, PostgreSQL, Xendit, Nicepay, AWS')
section('Selected projects')
project('Cadira', 'Exam preparation SaaS | Team of 3', 'Built and launched a subscription-based preparation product with practice tests, timed exam simulations, and progress tracking. Reached <b>11 paying users in the first month</b>.', 'React, Vite, Firebase, Midtrans', 'https://cadira.id/')
project('Reign Models', 'Client project | Team of 2', 'Delivered a model discovery and booking inquiry platform for a Bali-based agency, featuring a roster of <b>25+ models</b>. Connected a Next.js frontend with a NestJS backend.', 'Next.js, NestJS', 'https://reignmodels.com/')
project('Rumah Bisnis Mandiri', 'Campus-led community project | Archived', 'Built product discovery, seller information, and catalogue management tools for a local small-business support initiative. Previously used by the community; the service is now closed.', '')
project('Savvie', 'Food rescue mobile app | Prototype', 'Built with friends to connect sellers of surplus food with people looking for discounted meals. A working local prototype and recorded product walkthrough are available.', 'React, Expo, Node.js, Redux, Xendit API')
section('Education')
story.append(p('Bachelor of Informatics Engineering', 'role'))
story.append(p('Universitas Dian Nuswantoro | Graduated Aug 2023 | Cumulative GPA: <b>3.54/4.00</b>'))
story.append(Spacer(1, 5))
story.append(p('Full Stack JavaScript Program', 'role'))
story.append(p('Hacktiv8 | Completed Nov 2022 | Grade: 94.3/100'))

output = ROOT / 'public' / 'Aldo-Marcelino-CV.pdf'
doc = SimpleDocTemplate(str(output), pagesize=A4, rightMargin=45, leftMargin=45, topMargin=38, bottomMargin=51, title='Aldo Marcelino - Full-Stack Software Engineer', author='Aldo Marcelino')
doc.build(story)
print(output)
