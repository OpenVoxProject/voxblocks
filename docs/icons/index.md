---
title: "Icons"
---

# Icons

79 icons, covering three surfaces VoxBlocks is built to support: the [OpenVox marketing site](https://openvoxproject.github.io/products.html), a Forge-style module registry, and a Puppet Enterprise-style fleet console — plus the cross-cutting UI baseline all three share. Grouped below by what each icon is *for*; a few names (`star`, `copy`, `terminal`, `key`) deliberately cover more than one of those surfaces rather than getting redrawn as near-duplicates. Six more (`blocks`, `plug`, `ballot`, `sun`, `accessibility`, `settings`) were added after the fact, consolidating hand-drawn SVGs that had been copy-pasted across other doc pages before this component existed, or filling a gap a component turned up.

Use any icon by name via [`<vox-icon>`](../components/icon/):

<vox-code-block language="html">
&lt;vox-icon name="search"&gt;&lt;/vox-icon&gt;
</vox-code-block>

## Navigation & search

<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(96px, 1fr)); gap: 0.75rem; margin: 1rem 0;">
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.4rem; padding: 0.75rem; border: 1px solid var(--vox-color-divider); border-radius: 8px;"><vox-icon name="search" size="lg"></vox-icon><code style="font-size: 11px;">search</code></div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.4rem; padding: 0.75rem; border: 1px solid var(--vox-color-divider); border-radius: 8px;"><vox-icon name="menu" size="lg"></vox-icon><code style="font-size: 11px;">menu</code></div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.4rem; padding: 0.75rem; border: 1px solid var(--vox-color-divider); border-radius: 8px;"><vox-icon name="chevron-up" size="lg"></vox-icon><code style="font-size: 11px;">chevron-up</code></div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.4rem; padding: 0.75rem; border: 1px solid var(--vox-color-divider); border-radius: 8px;"><vox-icon name="chevron-down" size="lg"></vox-icon><code style="font-size: 11px;">chevron-down</code></div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.4rem; padding: 0.75rem; border: 1px solid var(--vox-color-divider); border-radius: 8px;"><vox-icon name="chevron-left" size="lg"></vox-icon><code style="font-size: 11px;">chevron-left</code></div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.4rem; padding: 0.75rem; border: 1px solid var(--vox-color-divider); border-radius: 8px;"><vox-icon name="chevron-right" size="lg"></vox-icon><code style="font-size: 11px;">chevron-right</code></div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.4rem; padding: 0.75rem; border: 1px solid var(--vox-color-divider); border-radius: 8px;"><vox-icon name="external-link" size="lg"></vox-icon><code style="font-size: 11px;">external-link</code></div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.4rem; padding: 0.75rem; border: 1px solid var(--vox-color-divider); border-radius: 8px;"><vox-icon name="filter" size="lg"></vox-icon><code style="font-size: 11px;">filter</code></div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.4rem; padding: 0.75rem; border: 1px solid var(--vox-color-divider); border-radius: 8px;"><vox-icon name="sort" size="lg"></vox-icon><code style="font-size: 11px;">sort</code></div>
</div>

## Actions

<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(96px, 1fr)); gap: 0.75rem; margin: 1rem 0;">
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.4rem; padding: 0.75rem; border: 1px solid var(--vox-color-divider); border-radius: 8px;"><vox-icon name="close" size="lg"></vox-icon><code style="font-size: 11px;">close</code></div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.4rem; padding: 0.75rem; border: 1px solid var(--vox-color-divider); border-radius: 8px;"><vox-icon name="copy" size="lg"></vox-icon><code style="font-size: 11px;">copy</code></div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.4rem; padding: 0.75rem; border: 1px solid var(--vox-color-divider); border-radius: 8px;"><vox-icon name="add" size="lg"></vox-icon><code style="font-size: 11px;">add</code></div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.4rem; padding: 0.75rem; border: 1px solid var(--vox-color-divider); border-radius: 8px;"><vox-icon name="remove" size="lg"></vox-icon><code style="font-size: 11px;">remove</code></div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.4rem; padding: 0.75rem; border: 1px solid var(--vox-color-divider); border-radius: 8px;"><vox-icon name="edit" size="lg"></vox-icon><code style="font-size: 11px;">edit</code></div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.4rem; padding: 0.75rem; border: 1px solid var(--vox-color-divider); border-radius: 8px;"><vox-icon name="delete" size="lg"></vox-icon><code style="font-size: 11px;">delete</code></div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.4rem; padding: 0.75rem; border: 1px solid var(--vox-color-divider); border-radius: 8px;"><vox-icon name="refresh" size="lg"></vox-icon><code style="font-size: 11px;">refresh</code></div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.4rem; padding: 0.75rem; border: 1px solid var(--vox-color-divider); border-radius: 8px;"><vox-icon name="publish" size="lg"></vox-icon><code style="font-size: 11px;">publish</code></div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.4rem; padding: 0.75rem; border: 1px solid var(--vox-color-divider); border-radius: 8px;"><vox-icon name="fork" size="lg"></vox-icon><code style="font-size: 11px;">fork</code></div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.4rem; padding: 0.75rem; border: 1px solid var(--vox-color-divider); border-radius: 8px;"><vox-icon name="deploy" size="lg"></vox-icon><code style="font-size: 11px;">deploy</code></div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.4rem; padding: 0.75rem; border: 1px solid var(--vox-color-divider); border-radius: 8px;"><vox-icon name="backup" size="lg"></vox-icon><code style="font-size: 11px;">backup</code></div>
</div>

## Status & alerts

<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(96px, 1fr)); gap: 0.75rem; margin: 1rem 0;">
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.4rem; padding: 0.75rem; border: 1px solid var(--vox-color-divider); border-radius: 8px;"><vox-icon name="check" size="lg"></vox-icon><code style="font-size: 11px;">check</code></div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.4rem; padding: 0.75rem; border: 1px solid var(--vox-color-divider); border-radius: 8px;"><vox-icon name="warning" size="lg"></vox-icon><code style="font-size: 11px;">warning</code></div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.4rem; padding: 0.75rem; border: 1px solid var(--vox-color-divider); border-radius: 8px;"><vox-icon name="info" size="lg"></vox-icon><code style="font-size: 11px;">info</code></div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.4rem; padding: 0.75rem; border: 1px solid var(--vox-color-divider); border-radius: 8px;"><vox-icon name="shield" size="lg"></vox-icon><code style="font-size: 11px;">shield</code></div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.4rem; padding: 0.75rem; border: 1px solid var(--vox-color-divider); border-radius: 8px;"><vox-icon name="verified" size="lg"></vox-icon><code style="font-size: 11px;">verified</code></div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.4rem; padding: 0.75rem; border: 1px solid var(--vox-color-divider); border-radius: 8px;"><vox-icon name="vulnerability" size="lg"></vox-icon><code style="font-size: 11px;">vulnerability</code></div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.4rem; padding: 0.75rem; border: 1px solid var(--vox-color-divider); border-radius: 8px;"><vox-icon name="gauge" size="lg"></vox-icon><code style="font-size: 11px;">gauge</code></div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.4rem; padding: 0.75rem; border: 1px solid var(--vox-color-divider); border-radius: 8px;"><vox-icon name="check-circle" size="lg"></vox-icon><code style="font-size: 11px;">check-circle</code></div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.4rem; padding: 0.75rem; border: 1px solid var(--vox-color-divider); border-radius: 8px;"><vox-icon name="x-circle" size="lg"></vox-icon><code style="font-size: 11px;">x-circle</code></div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.4rem; padding: 0.75rem; border: 1px solid var(--vox-color-divider); border-radius: 8px;"><vox-icon name="trending" size="lg"></vox-icon><code style="font-size: 11px;">trending</code></div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.4rem; padding: 0.75rem; border: 1px solid var(--vox-color-divider); border-radius: 8px;"><vox-icon name="bell" size="lg"></vox-icon><code style="font-size: 11px;">bell</code></div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.4rem; padding: 0.75rem; border: 1px solid var(--vox-color-divider); border-radius: 8px;"><vox-icon name="compliance" size="lg"></vox-icon><code style="font-size: 11px;">compliance</code></div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.4rem; padding: 0.75rem; border: 1px solid var(--vox-color-divider); border-radius: 8px;"><vox-icon name="drift" size="lg"></vox-icon><code style="font-size: 11px;">drift</code></div>
</div>

## People & access

<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(96px, 1fr)); gap: 0.75rem; margin: 1rem 0;">
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.4rem; padding: 0.75rem; border: 1px solid var(--vox-color-divider); border-radius: 8px;"><vox-icon name="person" size="lg"></vox-icon><code style="font-size: 11px;">person</code></div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.4rem; padding: 0.75rem; border: 1px solid var(--vox-color-divider); border-radius: 8px;"><vox-icon name="people" size="lg"></vox-icon><code style="font-size: 11px;">people</code></div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.4rem; padding: 0.75rem; border: 1px solid var(--vox-color-divider); border-radius: 8px;"><vox-icon name="lock" size="lg"></vox-icon><code style="font-size: 11px;">lock</code></div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.4rem; padding: 0.75rem; border: 1px solid var(--vox-color-divider); border-radius: 8px;"><vox-icon name="eye" size="lg"></vox-icon><code style="font-size: 11px;">eye</code></div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.4rem; padding: 0.75rem; border: 1px solid var(--vox-color-divider); border-radius: 8px;"><vox-icon name="eye-slash" size="lg"></vox-icon><code style="font-size: 11px;">eye-slash</code></div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.4rem; padding: 0.75rem; border: 1px solid var(--vox-color-divider); border-radius: 8px;"><vox-icon name="community" size="lg"></vox-icon><code style="font-size: 11px;">community</code></div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.4rem; padding: 0.75rem; border: 1px solid var(--vox-color-divider); border-radius: 8px;"><vox-icon name="badge" size="lg"></vox-icon><code style="font-size: 11px;">badge</code></div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.4rem; padding: 0.75rem; border: 1px solid var(--vox-color-divider); border-radius: 8px;"><vox-icon name="audit" size="lg"></vox-icon><code style="font-size: 11px;">audit</code></div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.4rem; padding: 0.75rem; border: 1px solid var(--vox-color-divider); border-radius: 8px;"><vox-icon name="key" size="lg"></vox-icon><code style="font-size: 11px;">key</code></div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.4rem; padding: 0.75rem; border: 1px solid var(--vox-color-divider); border-radius: 8px;"><vox-icon name="organization" size="lg"></vox-icon><code style="font-size: 11px;">organization</code></div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.4rem; padding: 0.75rem; border: 1px solid var(--vox-color-divider); border-radius: 8px;"><vox-icon name="ballot" size="lg"></vox-icon><code style="font-size: 11px;">ballot</code></div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.4rem; padding: 0.75rem; border: 1px solid var(--vox-color-divider); border-radius: 8px;"><vox-icon name="accessibility" size="lg"></vox-icon><code style="font-size: 11px;">accessibility</code></div>
</div>

## Time & activity

<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(96px, 1fr)); gap: 0.75rem; margin: 1rem 0;">
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.4rem; padding: 0.75rem; border: 1px solid var(--vox-color-divider); border-radius: 8px;"><vox-icon name="calendar" size="lg"></vox-icon><code style="font-size: 11px;">calendar</code></div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.4rem; padding: 0.75rem; border: 1px solid var(--vox-color-divider); border-radius: 8px;"><vox-icon name="clock" size="lg"></vox-icon><code style="font-size: 11px;">clock</code></div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.4rem; padding: 0.75rem; border: 1px solid var(--vox-color-divider); border-radius: 8px;"><vox-icon name="roadmap" size="lg"></vox-icon><code style="font-size: 11px;">roadmap</code></div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.4rem; padding: 0.75rem; border: 1px solid var(--vox-color-divider); border-radius: 8px;"><vox-icon name="changelog" size="lg"></vox-icon><code style="font-size: 11px;">changelog</code></div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.4rem; padding: 0.75rem; border: 1px solid var(--vox-color-divider); border-radius: 8px;"><vox-icon name="activity-log" size="lg"></vox-icon><code style="font-size: 11px;">activity-log</code></div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.4rem; padding: 0.75rem; border: 1px solid var(--vox-color-divider); border-radius: 8px;"><vox-icon name="schedule" size="lg"></vox-icon><code style="font-size: 11px;">schedule</code></div>
</div>

## Communication & support

<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(96px, 1fr)); gap: 0.75rem; margin: 1rem 0;">
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.4rem; padding: 0.75rem; border: 1px solid var(--vox-color-divider); border-radius: 8px;"><vox-icon name="book" size="lg"></vox-icon><code style="font-size: 11px;">book</code></div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.4rem; padding: 0.75rem; border: 1px solid var(--vox-color-divider); border-radius: 8px;"><vox-icon name="help" size="lg"></vox-icon><code style="font-size: 11px;">help</code></div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.4rem; padding: 0.75rem; border: 1px solid var(--vox-color-divider); border-radius: 8px;"><vox-icon name="star" size="lg"></vox-icon><code style="font-size: 11px;">star</code></div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.4rem; padding: 0.75rem; border: 1px solid var(--vox-color-divider); border-radius: 8px;"><vox-icon name="chat" size="lg"></vox-icon><code style="font-size: 11px;">chat</code></div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.4rem; padding: 0.75rem; border: 1px solid var(--vox-color-divider); border-radius: 8px;"><vox-icon name="heart" size="lg"></vox-icon><code style="font-size: 11px;">heart</code></div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.4rem; padding: 0.75rem; border: 1px solid var(--vox-color-divider); border-radius: 8px;"><vox-icon name="sun" size="lg"></vox-icon><code style="font-size: 11px;">sun</code></div>
</div>

## Content & organization

<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(96px, 1fr)); gap: 0.75rem; margin: 1rem 0;">
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.4rem; padding: 0.75rem; border: 1px solid var(--vox-color-divider); border-radius: 8px;"><vox-icon name="repository" size="lg"></vox-icon><code style="font-size: 11px;">repository</code></div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.4rem; padding: 0.75rem; border: 1px solid var(--vox-color-divider); border-radius: 8px;"><vox-icon name="module" size="lg"></vox-icon><code style="font-size: 11px;">module</code></div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.4rem; padding: 0.75rem; border: 1px solid var(--vox-color-divider); border-radius: 8px;"><vox-icon name="tag" size="lg"></vox-icon><code style="font-size: 11px;">tag</code></div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.4rem; padding: 0.75rem; border: 1px solid var(--vox-color-divider); border-radius: 8px;"><vox-icon name="dependency" size="lg"></vox-icon><code style="font-size: 11px;">dependency</code></div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.4rem; padding: 0.75rem; border: 1px solid var(--vox-color-divider); border-radius: 8px;"><vox-icon name="archived" size="lg"></vox-icon><code style="font-size: 11px;">archived</code></div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.4rem; padding: 0.75rem; border: 1px solid var(--vox-color-divider); border-radius: 8px;"><vox-icon name="file-tree" size="lg"></vox-icon><code style="font-size: 11px;">file-tree</code></div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.4rem; padding: 0.75rem; border: 1px solid var(--vox-color-divider); border-radius: 8px;"><vox-icon name="collection" size="lg"></vox-icon><code style="font-size: 11px;">collection</code></div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.4rem; padding: 0.75rem; border: 1px solid var(--vox-color-divider); border-radius: 8px;"><vox-icon name="blocks" size="lg"></vox-icon><code style="font-size: 11px;">blocks</code></div>
</div>

## Infrastructure & operations

<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(96px, 1fr)); gap: 0.75rem; margin: 1rem 0;">
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.4rem; padding: 0.75rem; border: 1px solid var(--vox-color-divider); border-radius: 8px;"><vox-icon name="terminal" size="lg"></vox-icon><code style="font-size: 11px;">terminal</code></div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.4rem; padding: 0.75rem; border: 1px solid var(--vox-color-divider); border-radius: 8px;"><vox-icon name="dashboard" size="lg"></vox-icon><code style="font-size: 11px;">dashboard</code></div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.4rem; padding: 0.75rem; border: 1px solid var(--vox-color-divider); border-radius: 8px;"><vox-icon name="node" size="lg"></vox-icon><code style="font-size: 11px;">node</code></div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.4rem; padding: 0.75rem; border: 1px solid var(--vox-color-divider); border-radius: 8px;"><vox-icon name="node-group" size="lg"></vox-icon><code style="font-size: 11px;">node-group</code></div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.4rem; padding: 0.75rem; border: 1px solid var(--vox-color-divider); border-radius: 8px;"><vox-icon name="pulse" size="lg"></vox-icon><code style="font-size: 11px;">pulse</code></div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.4rem; padding: 0.75rem; border: 1px solid var(--vox-color-divider); border-radius: 8px;"><vox-icon name="report" size="lg"></vox-icon><code style="font-size: 11px;">report</code></div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.4rem; padding: 0.75rem; border: 1px solid var(--vox-color-divider); border-radius: 8px;"><vox-icon name="orchestrate" size="lg"></vox-icon><code style="font-size: 11px;">orchestrate</code></div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.4rem; padding: 0.75rem; border: 1px solid var(--vox-color-divider); border-radius: 8px;"><vox-icon name="plan" size="lg"></vox-icon><code style="font-size: 11px;">plan</code></div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.4rem; padding: 0.75rem; border: 1px solid var(--vox-color-divider); border-radius: 8px;"><vox-icon name="layers" size="lg"></vox-icon><code style="font-size: 11px;">layers</code></div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.4rem; padding: 0.75rem; border: 1px solid var(--vox-color-divider); border-radius: 8px;"><vox-icon name="classifier" size="lg"></vox-icon><code style="font-size: 11px;">classifier</code></div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.4rem; padding: 0.75rem; border: 1px solid var(--vox-color-divider); border-radius: 8px;"><vox-icon name="metrics" size="lg"></vox-icon><code style="font-size: 11px;">metrics</code></div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.4rem; padding: 0.75rem; border: 1px solid var(--vox-color-divider); border-radius: 8px;"><vox-icon name="webhook" size="lg"></vox-icon><code style="font-size: 11px;">webhook</code></div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.4rem; padding: 0.75rem; border: 1px solid var(--vox-color-divider); border-radius: 8px;"><vox-icon name="plug" size="lg"></vox-icon><code style="font-size: 11px;">plug</code></div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.4rem; padding: 0.75rem; border: 1px solid var(--vox-color-divider); border-radius: 8px;"><vox-icon name="settings" size="lg"></vox-icon><code style="font-size: 11px;">settings</code></div>
</div>
