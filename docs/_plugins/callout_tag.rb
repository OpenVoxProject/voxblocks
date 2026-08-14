require "cgi"

module VoxBlocks
  # {% callout tip "Reading the scale" %}
  # Lower numbers are lighter tints...
  # {% endcallout %}
  #
  # Replaces VitePress's `::: tip ... :::` container syntax, which kramdown
  # has no equivalent for. Re-runs the block body through the site's own
  # markdown converter so markdown inside the callout (bold, inline code,
  # links) still works, then wraps it as <vox-callout>.
  class CalloutTag < Liquid::Block
    VARIANTS = %w[info tip warning danger].freeze

    def initialize(tag_name, markup, options)
      super
      if markup.strip =~ /\A(\w+)(?:\s+"([^"]*)")?\z/
        @variant = VARIANTS.include?(Regexp.last_match(1)) ? Regexp.last_match(1) : "info"
        @heading = Regexp.last_match(2)
      else
        @variant = "info"
      end
    end

    def render(context)
      body = super
      site = context.registers[:site]
      converter = site.find_converter_instance(Jekyll::Converters::Markdown)
      html = converter.convert(body)
      heading_attr = @heading ? %( heading="#{CGI.escapeHTML(@heading)}") : ""
      %(<vox-callout variant="#{@variant}"#{heading_attr}>\n#{html}\n</vox-callout>)
    end
  end
end

Liquid::Template.register_tag("callout", VoxBlocks::CalloutTag)
