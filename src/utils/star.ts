import { defHttp } from '@/utils/http/axios';

// 获取GitHub仓库的Star数量

const cache = {};
export function getRepoStarCount(githubUrl) {
  const match = githubUrl.match(/github\.com\/([^/]+)\/([^/]+)/);
  if (!match) {
    return Promise.reject(new Error('Invalid GitHub URL'));
  }
  const owner = match[1];
  const repo = match[2];
  const cacheKey = `${owner}/${repo}`;
  // 检查缓存
  if (cache[cacheKey]) {
    return Promise.resolve(cache[cacheKey]);
  }

  const apiUrl = `https://api.github.com/repos/${owner}/${repo}`;
  console.log('apiUrl', apiUrl);
  return defHttp
    .get({
      url: apiUrl,
    })
    .then((data) => {
      // 更新缓存
      cache[cacheKey] = data;
      return data;
    })
    .catch((error) => {
      console.error('Error fetching star count:', error);
      return null;
    });
}

export function updateProjectsStarCount(projects) {
  const fetchPromises = projects.map((project, index) => {
    return new Promise<void>((resolve): void => {
      setTimeout(() => {
        getRepoStarCount(project.github).then((data) => {
          console.log('starCount', data);
          if (data !== null) {
            projects[index].star = data?.stargazers_count;
            projects[index].icon = projects[index].icon || data?.organization?.avatar_url;
          }
          resolve();
        });
      }, index * 6000); // 在请求之间添加 2 秒延迟
    });
  });

  return Promise.all(fetchPromises).then(() => projects.sort((a, b) => b.star - a.star));
}
