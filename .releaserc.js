module.exports = {
  branches: ['main'],
  plugins: [
    '@semantic-release/npm',
    [
      'semantic-release-gitmoji',
      {
        releaseRules: {
          major: [':boom:'],
          minor: [':sparkles:'],
          patch: [':bug:', ':ambulance:', ':lock:', ':memo:']
        }
      }
    ],
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'CHANGELOG.md'
      }
    ],
    '@semantic-release/github',
    [
      '@semantic-release/git',
      {
        assets: ['package.json', 'CHANGELOG.md'],
        message:
          ':bookmark: release: ${nextRelease.version} \n\n${nextRelease.notes}'
      }
    ]
  ]
}
