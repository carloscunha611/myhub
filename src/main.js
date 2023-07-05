async function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/carloscunha611`

  const response = await fetch(url)
  const data = await response.json()

  userImage.src = data.avatar_url
  userType.textContent = data.type
  userBlog.href = data.blog
  userName.textContent = data.name
  userBio.textContent = data.bio
  userCommits.textContent = data.public_repos
  userFollowers.textContent = data.followers
  userFollowing.textContent = data.following
}

getGitHubProfileInfos()
