import { defHttp } from '@/utils/http/axios';
import axios, { CancelTokenSource } from 'axios';
import { ref, onBeforeUnmount } from 'vue';

// src/types/project.ts
export interface Project {
  title: string;
  icon: string;
  color: string;
  desc: string;
  group: string;
  github: string;
  star: number;
  site: string;
}

const cache: Record<string, any> = {}; // 缓存对象

export function getRepoStarCount(githubUrl: string, cancelToken?: CancelTokenSource): Promise<any> {
  const match = githubUrl.match(/github\.com\/([^/]+)\/([^/]+)/);
  if (!match) {
    return Promise.reject(new Error('Invalid GitHub URL'));
  }
  const [, owner, repo] = match;
  const cacheKey = `${owner}/${repo}`;

  // 检查缓存
  if (cache[cacheKey]) {
    return Promise.resolve(cache[cacheKey]);
  }

  const apiUrl = `https://api.github.com/repos/${owner}/${repo}`;

  return defHttp
    .get({
      url: apiUrl,
      cancelToken: cancelToken?.token, // 传递取消令牌
    })
    .then((data) => {
      // 更新缓存
      cache[cacheKey] = data;
      return data;
    })
    .catch((error) => {
      if (axios.isCancel(error)) {
        console.log('Request canceled:', error.message);
      } else {
        console.error('Error fetching star count:', error);
      }
      return null;
    });
} // 根据实际路径调整

export function useStar(newProjects: Project[]) {
  const projects = ref<Project[]>([]); // 存储项目数据
  const cancelTokens = ref<CancelTokenSource[]>([]); // 存储取消令牌
  projects.value = newProjects; // 更新项目列表

  const updateStarCount = () => {
    const fetchPromises = projects.value.map((project, index) => {
      return new Promise<void>((resolve, reject) => {
        const source = axios.CancelToken.source(); // 创建取消令牌
        cancelTokens.value.push(source); // 保存取消令牌

        const delay = index * 6000; // 延迟时间（毫秒）
        setTimeout(() => {
          getRepoStarCount(project.github, source)
            .then((data) => {
              if (data !== null) {
                project.star = data.stargazers_count;
                project.icon = project.icon || data.organization?.avatar_url;
              }
              resolve();
            })
            .catch((error) => {
              console.error(`Error updating star count for ${project.github}:`, error);
              reject(error);
            });
        }, delay);
      });
    });

    return Promise.all(fetchPromises)
      .then(() => projects.value.sort((a, b) => (b.star ?? 0) - (a.star ?? 0)))
      .catch((error) => {
        console.error('One or more requests failed or were canceled:', error);
        return projects.value; // 返回未排序的项目以防止丢失数据
      });
  };

  // 组件卸载时取消所有请求
  onBeforeUnmount(() => {
    console.log('onBeforeUnmount');
    cancelTokens.value.forEach((source) => source.cancel()); // 取消所有请求
  });

  return {
    projects,
    updateStarCount,
    cancelTokens: cancelTokens.value, // 返回取消令牌以便在导航守卫中使用
  };
}
