module VoxBlocks
  # Walks every section of _data/sidebar.yml once and, for each page it
  # finds there, stamps two things onto page.data:
  #
  #   - 'section': the top-level sidebar.yml key the page belongs to (e.g.
  #     'guide', 'utilities'). This is the single source of truth for
  #     "which section is this page in" — _layouts/default.html uses it to
  #     pick which sidebar to render, and _includes/nav.html (via nav.yml's
  #     own `section:` field) uses it to decide which header link is
  #     current. Deliberately NOT derived from the URL's first path
  #     segment: /guide/colors/ and /guide/utilities/ both live on disk
  #     under /guide/ but belong to the "utilities" section, because
  #     that's how sidebar.yml groups them.
  #
  #   - 'prev_url'/'prev_title'/'next_url'/'next_title': the previous/next
  #     page within that same section, for _includes/pager.html. Scoped
  #     per section so a section's last page has no "next" rather than
  #     jumping into a different section's now-invisible sidebar.
  #
  # Matched by page.url == entry link, which is why every link in
  # sidebar.yml must be baseurl-free with a trailing slash (matching the
  # `permalink: /:path/` default).
  class SidebarPagerGenerator < Jekyll::Generator
    priority :low

    def generate(site)
      by_url = site.pages.each_with_object({}) { |p, h| h[p.url] = p }
      sections = site.data['sidebar'] || {}

      sections.each do |section_name, groups|
        flat = flatten(groups)

        flat.each_with_index do |entry, i|
          page = by_url[entry['link']]
          next unless page

          page.data['section'] = section_name

          if i.positive?
            page.data['prev_url'] = flat[i - 1]['link']
            page.data['prev_title'] = flat[i - 1]['text']
          end
          if i < flat.length - 1
            page.data['next_url'] = flat[i + 1]['link']
            page.data['next_title'] = flat[i + 1]['text']
          end
        end
      end
    end

    private

    def flatten(items)
      items.each_with_object([]) do |item, out|
        out << { 'text' => item['text'], 'link' => item['link'] } if item['link']
        out.concat(flatten(item['items'])) if item['items']
      end
    end
  end
end
