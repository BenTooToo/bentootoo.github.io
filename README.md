# Bentootoo Personal Homepage

Static personal homepage for Bentootoo / 本2兔.

## Files

- `index.html` - page structure
- `styles.css` - visual system, layout, responsive design, transitions
- `app.js` - Chinese / English / French language switch, scroll reveal, canvas motion

## GitHub Pages

This site can be deployed directly with GitHub Pages because it is plain static HTML, CSS, and JavaScript.

Use the repository root as the Pages source, then visit:

```text
https://your-github-username.github.io/
```

For a user or organization site, the repository should usually be named:

```text
your-github-username.github.io
```

## Search engine indexing

This site includes the basic files and tags search engines expect:

- `robots.txt` allows crawlers and points them to the sitemap.
- `sitemap.xml` lists the public homepage URL.
- `index.html` includes a canonical URL, description, Open Graph tags, Twitter card tags, and Schema.org structured data.

After publishing the site, submit it manually so search engines discover it faster:

1. Open Google Search Console and add the URL-prefix property:

```text
https://bentootoo.github.io/
```

2. Verify ownership. The easiest choices for GitHub Pages are usually:

- HTML file upload: download Google's verification file, put it in the repository root, commit, push, then verify.
- HTML tag: copy Google's verification `<meta>` tag into the `<head>` of `index.html`, commit, push, then verify.

3. In Search Console, submit this sitemap:

```text
https://bentootoo.github.io/sitemap.xml
```

4. Repeat the same idea in Bing Webmaster Tools. Bing can also import the Google Search Console property.

If the GitHub Pages URL or a custom domain changes, update all occurrences of `https://bentootoo.github.io/` in `index.html`, `robots.txt`, and `sitemap.xml`.
