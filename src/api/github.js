import axios from "axios";

let githubIns = axios.create({
  baseURL: "https://api.github.com",
  // timeout:6000,
  headers: {
    Authorization: "token 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",
  },
});

// 添加请求拦截器
githubIns.interceptors.request.use(function(config) {
  // 在发送请求之前做些什么
  return config;
});

// 添加响应拦截器
githubIns.interceptors.response.use(
  function(response) {
    // 对响应数据做点什么
    let data = response.data;
    return data;
    // return response.data;
  },

  function(error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

//查询用户
export function getUsers(userName) {
  return githubIns.get(`https://api.github.com/search/users?q=${userName}`, {
    name: "getUsers",
  });
}

//查询一个指定用户的指定仓库的所有issues
export function getIssues() {
  return githubIns.get("/repos/betterDamu/sh_200318/issues");
}

///为一个指定的仓库去新增一个issue
export function addIssues({ title, body }) {
  return githubIns.post("/repos/betterDamu/sh_200318/issues", {
    title,
    body,
  });
}

//修改指定仓库的issue
export function updateIssues({ id, title }) {
  return githubIns.patch(`/repos/betterDamu/sh_200318/issues/${id}`, {
    title,
  });
}

//锁指定仓库的issue
export function lockIssues({ id, lock_reason }) {
  return githubIns.put(`/repos/betterDamu/sh_200318/issues/${id}/lock`, {
    lock_reason,
  });
}

//解锁指定仓库的issue
export function unlockIssues(id) {
  return githubIns.delete(`/repos/betterDamu/sh_200318/issues/${id}/lock`);
}
