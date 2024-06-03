update:
	git add .
	git commit --amend
	git fetch -a
	git merge remotes/origin/development -Xours
	git push origin development