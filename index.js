module.exports = (robot) => {
  robot.log('Yay, the app was loaded!');
  robot.on('*', async context => {
    const event = context.event;
    const action = context.payload.action;
    robot.log("Event: " + event + ((typeof action === 'undefined' ||  action === null)? "" : (", Action: " + action)));
    switch(event){
		case "commit_comment":
		switch(action) {
			case "created":
			break;
			default:
			break;
		}
		break;
		case "create":
		break;
		case "delete":
		break;
		case "deployment":
		break;
		case "deployment_status":
		break;
		case "fork":
		break;
		case "gollum":
		break;
		case "installation":
		switch(action){
			case "created":
			break;
			case "deleted":
			break;
			default:
			break;
		}
		break;
		case "installation_repositories":
		switch(action){
			case "added":
			break;
			case "removed":
			break;
			default:
			break;
		}
		break;
		case "issue_comment":
		switch(action){
			case "created":
			break;
			case "deleted":
			break;
			case "edited":
			break;
			default:
			break;
		}
		break;
		case "issues":
		switch(action){
			case "assigned":
			break;
			case "closed":
			break;
			case "demilestoned":
			break;
			case "edited":
			break;
			case "labeled":
			break;
			case "milestoned":
			break;
			case "opened":
			break;
			case "reopened":
			break;
			case "unassigned":
			break;
			case "unlabeled":
			break;
			default:
			break;
		}
		break;
		case "label":
		switch(action){
			case "created":
			break;
			case "deleted":
			break;
			case "edited":
			break;
			default:
			break;
		}
		break;
		case "marketplace_purchase":
		switch(action){
			case "cancelled":
			break;
			case "changed":
			break;
			case "purchased":
			break;
			default:
			break;
		}
		break;
		case "member":
		switch(action){
			case "added":
			break;
			case "deleted":
			break;
			case "edited":
			break;
			default:
			break;
		}
		break;
		case "membership":
		switch (action) {
			case "added":
			break;
			case "removed":
			break;
			default:
			break;
		}
		break;
		case "milestone":
		switch (action) {
			case "closed":
			break;
			case "created":
			break;
			case "deleted":
			break;
			case "edited":
			break;
			case "opened":
			break;
			default:
			break;
		}
		break;
		case "organization":
		switch(action) {
			case "member_added":
			break;
			case "member_invited":
			break;
			case "member_removed":
			break;
			default:
			break;
		}
		break;
		case "org_block":
		switch(action){
			case "blocked":
			break;
			case "unblocked":
			break;
			default:
			break;
		}
		break;
		case "page_build":
		break;
		case "ping":
		break;
		case "project_card":
		switch (action) {
			case "closed":  
			break;
			case "created":  
			break;
			case "deleted":  
			break;
			case "edited":  
			break;
			case "reopened":  
			break;
			default:
			break;
		}
		break;
		case "project_column":
		switch(action){
			case "created":
			break;
			case "deleted":
			break;
			case "edited":
			break;
			case "moved":
			break;
			default:
			break;
		}
		break;
		case "project":
		switch(action){
			case "converted":
			break;
			case "created":
			break;
			case "deleted":
			break;
			case "edited":
			break;
			case "moved":
			break;
			default:
			break;
		}
		break;
		case "public":
		break;
		case "pull_request_review_comment":
		switch (action) {
			case "created":
			break;
			case "deleted":
			break;
			case "edited":
			break;
			default:
			break;
		}
		break;
		case "pull_request_review":
		switch (action){
			case "dismissed":
			break;
			case "edited":
			break;
			case "submitted":
			break;
			default:
			break;
		}
		break;
		case "pull_request":
		switch (action){
			case "closed":
			break;
			case "edited":
			break;
			case "labeled":
			break;
			case "opened":
			break;
			case "reopened":
			break;
			case "review_request_removed":
			break;
			case "review_requested":
			break;
			case "review_requested":
			break;
			case "unassigned":
			break;
			case "unlabeled":
			break;
			default:
			break;
		}
		break;
		case "push":
		break;
		case "repository":
		switch(action){
			case "archived":
			break;
			case "created":
			break;
			case "deleted":
			break;
			case "privatized":
			break;
			case "publicized":
			break;
			case "unarchived":
			break;
			default:
			break;
		}
		break;
		case "release":
		switch(action){
			case "published":
			break;
			default:
			break;
		}
		break;
		case "status":
		break;
		case "team":
		switch(action){
			case "added_to_repository":
			break;
			case "created":
			break;
			case "deleted":
			break;
			case "edited":
			break;
			case "removed_from_repository":
			break;	
			default:
			break;
		}
		break;
		case "team_add":
		break;
		case "watch":
		switch(action){
			case "started":
			break;
			default:
			break;
		}
		break;
		default:
		break;
	}
  });
}