# Extracts a page's h2 headings (kramdown auto-generates heading ids) as a
# Liquid filter applied directly to the layout's `content` variable, e.g.
# `{{ content | toc_headings }}`. h2-only, matching current actual usage —
# no page in the site nests h3s under the "On this page" panel today.
#
# Deliberately a filter, not a :post_convert hook writing to page.data:
# that approach mutates page.data after the layout's Liquid payload is
# already built, so `page.toc` reads nil during layout rendering even
# though page.data ends up correct by the time the file is written. A
# filter applied to `content` inside the layout has no such timing gap.
module VoxBlocks
  module TocFilter
    def toc_headings(html)
      return [] unless html

      html.scan(/<h2[^>]*\sid="([^"]+)"[^>]*>(.*?)<\/h2>/m).map do |id, inner|
        { "id" => id, "text" => inner.gsub(/<[^>]+>/, "").strip }
      end
    end
  end
end

Liquid::Template.register_filter(VoxBlocks::TocFilter)
