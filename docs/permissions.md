# Webhook Events
  - `installation.created`
  - `installation_repositories`
  
# Addtional Events 
  - schedule.repository ([probot-scheduler](https://www.npmjs.com/package/probot-scheduler))
  
# Extentions Used
  - probot-scheduler (https://www.npmjs.com/package/probot-scheduler)
  - probot-config (https://www.npmjs.com/package/probot-config)

# Octokit REST APIs
  - [context.github.issues.createLabel](https://octokit.github.io/rest.js/#api-Issues-createLabel)
  - [context.github.issues.create](https://octokit.github.io/rest.js/#api-Issues-create)
  - [context.github.issues.getForRepo](https://octokit.github.io/rest.js/#api-Issues-getForRepo)
  - [context.github.pullRequests.getAll](https://octokit.github.io/rest.js/#api-PullRequests-getAll)
  - [context.github.repos.getCommits](https://octokit.github.io/rest.js/#api-Repos-getCommits)
  - [context.github.repos.getContributors](https://octokit.github.io/rest.js/#api-Repos-getContributors)
  - [context.github.repos.getReleases](https://octokit.github.io/rest.js/#api-Repos-getReleases)
  - [context.github.search.issues](https://octokit.github.io/rest.js/#api-Search-issues)
  - [context.github.activity.getStargazersForRepo](https://octokit.github.io/rest.js/#api-Activity-getStargazersForRepo)
      
