// // const weeklyDigest = require('../src/weeklyDigest')
// const markdownIssues = require('./../src/markdown/markdownIssues')
// // const markdownPullRequests = require('./../src/markdown/markdownIssues')
// // const markdownContributors = require('./../src/markdown/markdownIssues')
// // const markdownStargazers = require('./../src/markdown/markdownIssues')
// // const markdownCommits = require('./../src/markdown/markdownIssues')
// // const markdownReleases = require('./../src/markdown/markdownIssues')

test('checking if test works', () => {
  // your real tests go here
  expect(1 + 2 + 3).toBe(6)
})

// // const owner = mock.mockReturnValue('aps120797')
// // const repo = mock.mockReturnValue('playground')
// // const headDate = mock.mockReturnValue('2018-06-25T00:00:00Z')
// // const tailDate = mock.mockReturnValue('2018-06-18T00:00:00Z')
// // const config = mock.mockReturnValue({
// //   publishDay: 'sunday',
// //   canPublishIssues: true,
// //   canPublishPullRequests: true,
// //   canPublishContributors: true,
// //   canPublishStargazers: true,
// //   canPublishCommits: true,
// //   canPublishReleases: true
// // })
// const issues = jest.fn().mockReturnValue(
//   { data:
//   [
//     {
//       url: 'https://api.github.com/repos/aps120797/playground/issues/24',
//       repository_url: 'https://api.github.com/repos/aps120797/playground',
//       labels_url: 'https://api.github.com/repos/aps120797/playground/issues/24/labels{/name}',
//       comments_url: 'https://api.github.com/repos/aps120797/playground/issues/24/comments',
//       events_url: 'https://api.github.com/repos/aps120797/playground/issues/24/events',
//       html_url: 'https://github.com/aps120797/playground/issues/24',
//       id: 329927760,
//       node_id: 'MDU6SXNzdWUzMjk5Mjc3NjA=',
//       number: 24,
//       title: 'Weekly Digest',
//       user: [Object],
//       labels: [Array],
//       state: 'open',
//       locked: false,
//       assignee: null,
//       assignees: [],
//       milestone: null,
//       comments: 0,
//       created_at: '2018-06-06T15:48:20Z',
//       updated_at: '2018-06-06T15:48:21Z',
//       closed_at: null,
//       author_association: 'CONTRIBUTOR',
//       body: 'Here\'s the Weekly Digest for repository playground owned by aps120797:\n# ISSUES \nThis week, 23 issues were created. Of these, 9 issues have been closed and 14 issues are still open. \n## OPEN ISSUES \n:green_heart: #23 [Weekly Digest](https://github.com/aps120797/playground/issues/23), by [weekly-digest[bot]](https://github.com/apps/weekly-digest)\n:green_heart: #22 [Weekly Digest](https://github.com/aps120797/playground/issues/22), by [weekly-digest[bot]](https://github.com/apps/weekly-digest)\n:green_heart: #21 [Thanos Snapped](https://github.com/aps120797/playground/pull/21), by [aps120797](https://github.com/aps120797)\n:green_heart: #20 [Lorem Ipsum](https://github.com/aps120797/playground/issues/20), by [aps120797](https://github.com/aps120797)\n:green_heart: #15 [Weekly Digest](https://github.com/aps120797/playground/issues/15), by [weekly-digest[bot]](https://github.com/apps/weekly-digest)\n:green_heart: #14 [lets create an issue too](https://github.com/aps120797/playground/issues/14), by [itaditya](https://github.com/itaditya)\n:green_heart: #13 [coz we needed to test the github app](https://github.com/aps120797/playground/pull/13), by [itaditya](https://github.com/itaditya)\n:green_heart: #12 [Major update on README.md](https://github.com/aps120797/playground/pull/12), by [aps120797](https://github.com/aps120797)\n:green_heart: #11 [Another issue for test](https://github.com/aps120797/playground/issues/11), by [aps120797](https://github.com/aps120797)\n:green_heart: #9 [Created an issue!](https://github.com/aps120797/playground/issues/9), by [aps120797](https://github.com/aps120797)\n:green_heart: #5 [testing botty](https://github.com/aps120797/playground/issues/5), by [aps120797](https://github.com/aps120797)\n:green_heart: #4 [Let\'s see unfurl.](https://github.com/aps120797/playground/issues/4), by [aps120797](https://github.com/aps120797)\n:green_heart: #3 [Update README.md](https://github.com/aps120797/playground/pull/3), by [Anubhav-Bhargava](https://github.com/Anubhav-Bhargava)\n:green_heart: #2 [Not compatible with node 8.2](https://github.com/aps120797/playground/issues/2), by [Anubhav-Bhargava](https://github.com/Anubhav-Bhargava)\n## CLOSED ISSUES \n:heart: #19 [Weekly Digest](https://github.com/aps120797/playground/issues/19), by [weekly-digest[bot]](https://github.com/apps/weekly-digest)\n:heart: #18 [Weekly Digest](https://github.com/aps120797/playground/issues/18), by [weekly-digest[bot]](https://github.com/apps/weekly-digest)\n:heart: #17 [Weekly Digest](https://github.com/aps120797/playground/issues/17), by [weekly-digest[bot]](https://github.com/apps/weekly-digest)\n:heart: #16 [Weekly Digest](https://github.com/aps120797/playground/issues/16), by [weekly-digest[bot]](https://github.com/apps/weekly-digest)\n:heart: #10 [Update README.md](https://github.com/aps120797/playground/pull/10), by [aps120797](https://github.com/aps120797)\n:heart: #8 [Update README.md](https://github.com/aps120797/playground/pull/8), by [aps120797](https://github.com/aps120797)\n:heart: #7 [another issue](https://github.com/aps120797/playground/issues/7), by [aps120797](https://github.com/aps120797)\n:heart: #6 [new issue](https://github.com/aps120797/playground/issues/6), by [aps120797](https://github.com/aps120797)\n:heart: #1 [Hey , First timer in this repo, let\'s see First timer in action!](https://github.com/aps120797/playground/issues/1), by [aps120797](https://github.com/aps120797)\n## LIKED ISSUE \nThe issue most liked this week has been:\n#20 [Lorem Ipsum](https://github.com/aps120797/playground/issues/20), by [aps120797](https://github.com/aps120797)\nIt received :+1: x2, :smile: x3, :tada: x2 and :heart: x2.\n## NOISY ISSUE \nThe issue most discussed this week has been:\n#4 [Let\'s see unfurl.](https://github.com/aps120797/playground/issues/4), by [aps120797](https://github.com/aps120797)\nIt received 2 comments.\n\n# PULL REQUESTS \nThis week, 6 pull requests were proposed. Of these, 1 pull requests have been merged and 4 are still open. \n## OPEN PRs \n:green_heart: #21 [Thanos Snapped](https://github.com/aps120797/playground/pull/21), by [aps120797](https://github.com/aps120797)\n:green_heart: #13 [coz we needed to test the github app](https://github.com/aps120797/playground/pull/13), by [itaditya](https://github.com/itaditya)\n:green_heart: #12 [Major update on README.md](https://github.com/aps120797/playground/pull/12), by [aps120797](https://github.com/aps120797)\n:green_heart: #3 [Update README.md](https://github.com/aps120797/playground/pull/3), by [Anubhav-Bhargava](https://github.com/Anubhav-Bhargava)\n## MERGED PRs \n:purple_heart: #10 [Update README.md](https://github.com/aps120797/playground/pull/10), by [aps120797](https://github.com/aps120797)\n\n# CONTRIBUTORS \nThis week, 4 users have contributed to this repository. \nThey are [weekly-digest[bot]](https://github.com/apps/weekly-digest), [aps120797](https://github.com/aps120797), [itaditya](https://github.com/itaditya), and [Anubhav-Bhargava](https://github.com/Anubhav-Bhargava).\n\nThat\'s all for this week, please watch :eyes: and star :star: aps120797/playground to receive next weekly updates. :simple_smile:',
//       reactions: [Object] },
//     { url: 'https://api.github.com/repos/aps120797/playground/issues/23',
//       repository_url: 'https://api.github.com/repos/aps120797/playground',
//       labels_url: 'https://api.github.com/repos/aps120797/playground/issues/23/labels{/name}',
//       comments_url: 'https://api.github.com/repos/aps120797/playground/issues/23/comments',
//       events_url: 'https://api.github.com/repos/aps120797/playground/issues/23/events',
//       html_url: 'https://github.com/aps120797/playground/issues/23',
//       id: 329045447,
//       node_id: 'MDU6SXNzdWUzMjkwNDU0NDc=',
//       number: 23,
//       title: 'Weekly Digest',
//       user: [Object],
//       labels: [],
//       state: 'open',
//       locked: false,
//       assignee: null,
//       assignees: [],
//       milestone: null,
//       comments: 0,
//       created_at: '2018-06-04T13:00:56Z',
//       updated_at: '2018-06-04T14:34:48Z',
//       closed_at: null,
//       author_association: 'CONTRIBUTOR',
//       body: 'Here\'s the Weekly Digest for repository playground owned by aps120797:\n# ISSUES \nThis week, 22 issues were created. Of these, 9 issues have been closed and 13 issues are still open. \n## OPEN ISSUES \n:green_heart: #22 [Weekly Digest](https://github.com/aps120797/playground/issues/22), by [weekly-digest[bot]](https://github.com/apps/weekly-digest)\n:green_heart: #21 [Thanos Snapped](https://github.com/aps120797/playground/pull/21), by [aps120797](https://github.com/aps120797)\n:green_heart: #20 [Lorem Ipsum](https://github.com/aps120797/playground/issues/20), by [aps120797](https://github.com/aps120797)\n:green_heart: #15 [Weekly Digest](https://github.com/aps120797/playground/issues/15), by [weekly-digest[bot]](https://github.com/apps/weekly-digest)\n:green_heart: #14 [lets create an issue too](https://github.com/aps120797/playground/issues/14), by [itaditya](https://github.com/itaditya)\n:green_heart: #13 [coz we needed to test the github app](https://github.com/aps120797/playground/pull/13), by [itaditya](https://github.com/itaditya)\n:green_heart: #12 [Major update on README.md](https://github.com/aps120797/playground/pull/12), by [aps120797](https://github.com/aps120797)\n:green_heart: #11 [Another issue for test](https://github.com/aps120797/playground/issues/11), by [aps120797](https://github.com/aps120797)\n:green_heart: #9 [Created an issue!](https://github.com/aps120797/playground/issues/9), by [aps120797](https://github.com/aps120797)\n:green_heart: #5 [testing botty](https://github.com/aps120797/playground/issues/5), by [aps120797](https://github.com/aps120797)\n:green_heart: #4 [Let\'s see unfurl.](https://github.com/aps120797/playground/issues/4), by [aps120797](https://github.com/aps120797)\n:green_heart: #3 [Update README.md](https://github.com/aps120797/playground/pull/3), by [Anubhav-Bhargava](https://github.com/Anubhav-Bhargava)\n:green_heart: #2 [Not compatible with node 8.2](https://github.com/aps120797/playground/issues/2), by [Anubhav-Bhargava](https://github.com/Anubhav-Bhargava)\n## CLOSED ISSUES \n:heart: #19 [Weekly Digest](https://github.com/aps120797/playground/issues/19), by [weekly-digest[bot]](https://github.com/apps/weekly-digest)\n:heart: #18 [Weekly Digest](https://github.com/aps120797/playground/issues/18), by [weekly-digest[bot]](https://github.com/apps/weekly-digest)\n:heart: #17 [Weekly Digest](https://github.com/aps120797/playground/issues/17), by [weekly-digest[bot]](https://github.com/apps/weekly-digest)\n:heart: #16 [Weekly Digest](https://github.com/aps120797/playground/issues/16), by [weekly-digest[bot]](https://github.com/apps/weekly-digest)\n:heart: #10 [Update README.md](https://github.com/aps120797/playground/pull/10), by [aps120797](https://github.com/aps120797)\n:heart: #8 [Update README.md](https://github.com/aps120797/playground/pull/8), by [aps120797](https://github.com/aps120797)\n:heart: #7 [another issue](https://github.com/aps120797/playground/issues/7), by [aps120797](https://github.com/aps120797)\n:heart: #6 [new issue](https://github.com/aps120797/playground/issues/6), by [aps120797](https://github.com/aps120797)\n:heart: #1 [Hey , First timer in this repo, let\'s see First timer in action!](https://github.com/aps120797/playground/issues/1), by [aps120797](https://github.com/aps120797)\n## LIKED ISSUE \nThe issue most liked this week has been:\n#20 [Lorem Ipsum](https://github.com/aps120797/playground/issues/20), by [aps120797](https://github.com/aps120797)\nIt received :+1: x2, :smile: x3, :tada: x2 and :heart: x2.\n## NOISY ISSUE \nThe issue most discussed this week has been:\n#4 [Let\'s see unfurl.](https://github.com/aps120797/playground/issues/4), by [aps120797](https://github.com/aps120797)\nIt received 2 comments.\n\n# PULL REQUESTS \nThis week, 6 pull requests were proposed. Of these, 1 pull requests have been merged and 4 are still open. \n## OPEN PRs \n:green_heart: #21 [Thanos Snapped](https://github.com/aps120797/playground/pull/21), by [aps120797](https://github.com/aps120797)\n:green_heart: #13 [coz we needed to test the github app](https://github.com/aps120797/playground/pull/13), by [itaditya](https://github.com/itaditya)\n:green_heart: #12 [Major update on README.md](https://github.com/aps120797/playground/pull/12), by [aps120797](https://github.com/aps120797)\n:green_heart: #3 [Update README.md](https://github.com/aps120797/playground/pull/3), by [Anubhav-Bhargava](https://github.com/Anubhav-Bhargava)\n## MERGED PRs \n:purple_heart: #10 [Update README.md](https://github.com/aps120797/playground/pull/10), by [aps120797](https://github.com/aps120797)\n\n# CONTRIBUTORS \nThis week, 4 users have contributed to this repository. \nThey are [weekly-digest[bot]](https://github.com/apps/weekly-digest), [aps120797](https://github.com/aps120797), [itaditya](https://github.com/itaditya), and [Anubhav-Bhargava](https://github.com/Anubhav-Bhargava).\n\nThat\'s all for this week, please watch :eyes: and star :star: aps120797/playground to receive next weekly updates. :simple_smile:',
//       reactions: [Object] }
//   ]}
// )

// describe('test weekly digest', () => {
//   // test('weeklyDigest is called', () => {
//   //   // your real tests go here
//   //   expect(weeklyDigest(context, {owner, repo, headDate, tailDate}, config)).toHaveBeenCalled()
//   // })
//   test('markdownIssues is called', () => {
//     console.log(issues)
//     expect(markdownIssues(issues)).toHaveBeenCalled()
//   })
//   // test('markdownPull Requests is called', () => {
//   //   // your real tests go here
//   //   expect(markdownPullRequests).toHaveBeenCalled()
//   // })
//   // test('markdownContributors is called', () => {
//   //   // your real tests go here
//   //   expect(markdownContributors).toHaveBeenCalled()
//   // })
//   // test('markdownStargazers is called', () => {
//   //   // your real tests go here
//   //   expect(markdownStargazers).toHaveBeenCalled()
//   // })
//   // test('markdownCommits is called', () => {
//   //   // your real tests go here
//   //   expect(markdownCommits).toHaveBeenCalled()
//   // })
//   // test('markdownReleases is called', () => {
//   //   // your real tests go here
//   //   expect(markdownReleases).toHaveBeenCalled()
//   // })
// })
