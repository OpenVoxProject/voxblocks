import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './vox-record-list.js';
import '../datum/vox-datum.js';
import '../badge/vox-badge.js';
import '../icon/vox-icon.js';

const meta: Meta = {
  title: 'Components/Page Content/Record List',
  parameters: {
    docs: {
      description: {
        component: '`<vox-record-list>` is a list of linked records — search results, an admin index — built from `<vox-record-list-item>` rows.',
      },
    },
  },
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => html`<div style="margin: 1rem 0;">
  <vox-record-list>
    <vox-record-list-item heading="Update scheduling software" href="#">
      <vox-datum name="Owner"><vox-icon slot="icon" name="person" size="sm"></vox-icon>Mafalda_Lesch47</vox-datum>
      <vox-datum name="Updated"><vox-icon slot="icon" name="calendar" size="sm"></vox-icon>April 1, 2021</vox-datum>
    </vox-record-list-item>
    <vox-record-list-item heading="Integrate command line tools" href="#">
      <vox-datum name="Owner"><vox-icon slot="icon" name="person" size="sm"></vox-icon>Janessa79</vox-datum>
      <vox-datum name="Updated"><vox-icon slot="icon" name="calendar" size="sm"></vox-icon>April 1, 2021</vox-datum>
    </vox-record-list-item>
    <vox-record-list-item heading="Synchronize email workflows" href="#">
      <vox-datum name="Owner"><vox-icon slot="icon" name="person" size="sm"></vox-icon>Laura_Schamberger43</vox-datum>
      <vox-datum name="Updated"><vox-icon slot="icon" name="calendar" size="sm"></vox-icon>April 1, 2021</vox-datum>
    </vox-record-list-item>
  </vox-record-list>
</div>`,
};

export const Small: Story = {
  render: () => html`<div style="margin: 1rem 0;">
  <vox-record-list>
    <vox-record-list-item size="sm" heading="8:37 AM" href="#">
      <vox-datum name="Target">web01.example.com</vox-datum>
      <span slot="end"><vox-badge variant="warning">running</vox-badge> (#641)</span>
    </vox-record-list-item>
    <vox-record-list-item size="sm" heading="8:37 AM" href="#">
      <vox-datum name="Target">web01.example.com</vox-datum>
      <span slot="end"><vox-badge variant="warning">running</vox-badge> (#640)</span>
    </vox-record-list-item>
    <vox-record-list-item size="sm" heading="8:37 AM" href="#">
      <vox-datum name="Target">web01.example.com</vox-datum>
      <span slot="end"><vox-badge variant="warning">running</vox-badge> (#639)</span>
    </vox-record-list-item>
    <vox-record-list-item size="sm" heading="8:37 AM" href="#">
      <vox-datum name="Target">no targets</vox-datum>
      <span slot="end"><vox-badge variant="warning">running</vox-badge> (#638)</span>
    </vox-record-list-item>
    <vox-record-list-item size="sm" heading="8:37 AM" href="#">
      <vox-datum name="Target">a.example.com, b.example.com, c.example.com, +1 more</vox-datum>
      <span slot="end"><vox-badge variant="warning">running</vox-badge> (#637)</span>
    </vox-record-list-item>
  </vox-record-list>
</div>`,
};
