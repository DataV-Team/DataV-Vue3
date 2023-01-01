# 开发流程

## 启动项目

**克隆仓库**

```
// https
git clone https://github.com/DataV-Team/DataV-Vue3.git
// ssh
git clone git@github.com:DataV-Team/DataV-Vue3.git
```

**安装依赖**

```
yarn
```

**启动**

```
yarn dev
```

## 合并代码

目前以 rebase 的方式向 main 分支合并代码，以开发一个 feat 为例：

**从 main 分支切出 feat 分支**

```
git checkout -b feat/user/feature
```

**提交代码**

```
git add .
git commit -m 'feat: some feature'
git push
```

**创建 Pull Request**

在 GitHub Pull Request 创建 PR，开发中的 feat title 应添加 WIP 标记，已完成的 feat 则不需要

**Code Review**

目前需要一个 Approve 才允许合并，代码完成后，应进行 CR，并处理 Comments

**向 commit 追加代码**

用于处理 CR Comments 以及其他场景的追加代码

FYI：如果确有必要可以再添加一个 commit，一般情况为了确保 history 精简，一个 feat 应只有一个 commit

```
git add .
git commit --amend
git push -f
```

**合并代码**

可以在 PR 中选择 auto merge，auto merge 可以在 PR 通过 CI 以及 CR 后自动合并

## 发布测试包

推送代码至分支 `test\*` 即可自动打包，例如 `test/jm/some-change`

release-test Action 会自动进行构建 & 发布 可以查看 Github Actions 状态来确认发布状态

发布成功后会自动在该分支提交一个版本号变更 commit 该版本号即为自动发布的测试包
