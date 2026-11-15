/**
 * Lumiq Platform - Automated Test Suite
 * Validates DOM architecture, multi-provider AI options, study tools,
 * gamification states, and local persistence hooks.
 */

const { test, describe } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

describe('Lumiq Smart Learning Platform Verification', () => {
  const htmlPath = path.join(__dirname, '..', 'index.html');
  assert.ok(fs.existsSync(htmlPath), 'index.html must exist in repository root');
  const content = fs.readFileSync(htmlPath, 'utf8');

  test('Document structure conforms to HTML5 standards', () => {
    assert.match(content, /<!DOCTYPE\s+html>/i, 'HTML5 DOCTYPE must be declared');
    assert.match(content, /<meta\s+charset=["']?utf-8["']?/i, 'UTF-8 charset must be declared');
    assert.match(content, /<meta\s+name=["']viewport["']/i, 'Viewport must be defined for responsive rendering');
    assert.match(content, /<title>.*Lumiq.*<\/title>/i, 'Page title must reflect Lumiq');
  });

  test('All four AI providers are supported in options', () => {
    const requiredProviders = ['claude', 'gemini', 'openai', 'groq'];
    for (const provider of requiredProviders) {
      assert.ok(
        content.toLowerCase().includes(provider),
        `Provider '${provider}' must be configured in template`
      );
    }
  });

  test('Core AI Study Tools are implemented', () => {
    const requiredTools = ['summar', 'flashcard', 'quiz', 'mindmap', 'pomodoro'];
    for (const tool of requiredTools) {
      assert.ok(
        content.toLowerCase().includes(tool),
        `Core study tool module '${tool}' must be present`
      );
    }
  });

  test('Gamification and local persistence hooks are declared', () => {
    assert.ok(
      content.includes('localStorage'),
      'LocalStorage persistence must be integrated for offline capability'
    );
    assert.ok(
      content.includes('XP') || content.includes('xp') || content.includes('level'),
      'Gamification / XP tracking system must be present'
    );
  });
});
