# SEO launch for aldomarcelino.com

## Deploy and check the public site

1. Deploy the latest code to Vercel Production. Check that any existing `SITE_URL` environment variable is `https://aldomarcelino.com`; an old value overrides the code's default.
2. In Vercel Domains, use the apex domain as the production address and redirect `www` and the old production `vercel.app` address to it. Keep preview deployments separate.
3. Confirm that `https://aldomarcelino.com/` loads publicly with a valid HTTPS certificate and returns HTTP 200. Its page source should contain one primary heading identifying Aldo Marcelino as a Full Stack Engineer, a canonical link to `https://aldomarcelino.com/`, and robots metadata allowing indexing.
4. Open `https://aldomarcelino.com/robots.txt` and `https://aldomarcelino.com/sitemap.xml`. The sitemap must list the purchased domain. Preview pages must retain `noindex`.

## Connect Google Search Console

1. Open [Google Search Console](https://search.google.com/search-console) and add a **Domain** property for `aldomarcelino.com`.
2. Copy the TXT verification record supplied by Google. Add it in Cloudflare DNS using the name and content shown by Google. Preserve existing website and email records.
3. Complete verification in Search Console. Domain verification covers the apex, `www`, and other subdomains; no HTML verification environment variable is needed for this method.
4. Submit `https://aldomarcelino.com/sitemap.xml` under Sitemaps.
5. Inspect `https://aldomarcelino.com/`, run **Test live URL**, then request indexing when the page is eligible. If Google reports a block, resolve its specific finding before resubmitting.
6. Review indexing and search performance over the following weeks. Track searches for Aldo Marcelino and Aldo Marcelino NF Lubis separately from broader job-title searches.

## Connect the public profiles

Update the website field on the existing LinkedIn and GitHub profiles to `https://aldomarcelino.com/`. Keep the professional name consistent with the portfolio. Add the link to genuine project and contributor profiles where relevant.

Continue publishing useful project material: what the product does, the engineering decisions, and verifiable results. Additional case-study pages should contain distinct substantive content rather than repeated keywords.

Name searches are the primary target. Generic searches such as Aldo, Full Stack Engineer, and Software Engineer are competitive; metadata and structured data do not guarantee indexing or a ranking position.

References: [Domain-property verification](https://support.google.com/webmasters/answer/9008080), [request indexing](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl), [Google SEO starter guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide), [canonical URLs](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls).
