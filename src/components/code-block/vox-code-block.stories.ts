import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './vox-code-block.js';

const meta: Meta = {
  title: 'Components/Page Content/Code Block',
  parameters: {
    docs: {
      description: {
        component: '`<vox-code-block>` is a syntax-highlighted code block with a copy button. Highlighting is built in — no Prism/highlight.js/Shiki setup required.',
      },
    },
  },
};
export default meta;

type Story = StoryObj;

export const Puppet: Story = {
  render: () => html`<div style="margin: 1rem 0;">
  <vox-code-block language="puppet" filename="profile/base.pp">
    class profile::base (
      String $version = '1.0',
    ) {
      package { 'openssl':
        ensure => installed,
      }

      file { '/etc/motd':
        ensure  => file,
        content => "Managed by Puppet \${version}\\n",
      }
    }
  </vox-code-block>
</div>`,
};

export const Languages: Story = {
  render: () => html`<div style="display: grid; gap: 1rem; margin: 1rem 0;">
  <vox-code-block language="yaml" filename="hiera.yaml">
    version: 5
    defaults:
      datadir: data
      data_hash: yaml_data
    hierarchy:
      - name: "Per-node data"
        path: "nodes/%{trusted.certname}.yaml"
  </vox-code-block>
  <vox-code-block language="bash" filename="install.sh">
    #!/usr/bin/env bash
    set -euo pipefail

    # Install the OpenVox agent
    curl -fsSL https://apt.voxpupuli.org/openvox-release.deb -o /tmp/release.deb
    sudo dpkg -i /tmp/release.deb
    sudo apt-get update && sudo apt-get install -y openvox-agent
  </vox-code-block>
  <vox-code-block language="json" filename="metadata.json">
    {
      "name": "openvoxproject-motd",
      "version": "1.0.0",
      "dependencies": [],
      "operatingsystem_support": [
        { "operatingsystem": "RedHat", "operatingsystemrelease": ["8", "9"] }
      ]
    }
  </vox-code-block>
</div>`,
};

export const LineNumbers: Story = {
  render: () => html`<div style="margin: 1rem 0;">
  <vox-code-block language="ruby" filename="lib/facter/os_release.rb" line-numbers>
    Facter.add(:os_release) do
      setcode do
        if File.exist?('/etc/os-release')
          File.read('/etc/os-release')
        end
      end
    end
  </vox-code-block>
</div>`,
};

export const PlainText: Story = {
  render: () => html`<div style="margin: 1rem 0;">
  <vox-code-block>
    No language set — renders as plain, unhighlighted text.
  </vox-code-block>
</div>`,
};

export const NoCopyButton: Story = {
  render: () => html`<div style="margin: 1rem 0;">
  <vox-code-block language="bash" no-copy>
    echo "read-only example output"
  </vox-code-block>
</div>`,
};

export const NoHeader: Story = {
  render: () => html`<div style="max-width: 24rem; margin: 1rem 0;">
  <vox-code-block language="json" no-header>
    {
      "version": "1.14.1"
    }
  </vox-code-block>
</div>`,
};

export const NoBorder: Story = {
  render: () => html`<div style="max-width: 24rem; margin: 1rem 0;">
  <vox-code-block language="json" no-header no-border>
    { "version": "1.14.1" }
  </vox-code-block>
</div>`,
};

export const InADenseTable: Story = {
  render: () => html`<div style="margin: 1rem 0;">
  <table class="vox-table">
    <thead>
      <tr><th scope="col">Fact</th><th scope="col">Value</th></tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">clientversion</th>
        <td>8.28.1</td>
      </tr>
      <tr>
        <th scope="row">augeas</th>
        <td>
          <vox-code-block language="json" no-header no-border>
            { "version": "1.14.1" }
          </vox-code-block>
        </td>
      </tr>
      <tr>
        <th scope="row">disks</th>
        <td>
          <vox-code-block language="json" no-header no-border>
            {
              "sda": { "size": "0 bytes", "type": "ssd" },
              "nvme0n1": { "size": "465.76 GiB", "type": "ssd" }
            }
          </vox-code-block>
        </td>
      </tr>
    </tbody>
  </table>
</div>`,
};
