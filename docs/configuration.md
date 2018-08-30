## Configuring your applications

The app provides features to customize your application. To configure your application, 
1. Create a file _.github/weekly-digest.yml_ in your repository, where the app has been installed.
2. Add the following configuration in the file:
   ```yaml
   # Configuration for weekly-digest - https://github.com/apps/weekly-digest
   publishDay: sun
   canPublishIssues: true
   canPublishPullRequests: true
   canPublishContributors: true
   canPublishStargazers: true
   canPublishCommits: true
   ```
3. Save the file and you are ready to go! Weekly Digest will read the configuration from your repository and will work accordingly.
