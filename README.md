# 个人博客

一个简洁的个人博客，基于 [Astro](https://astro.build) 构建。

## 特性

- 简洁设计，专注于内容
- 深色模式切换
- Markdown 写作
- 标签分类
- 自动部署到 GitHub Pages

## 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

## 项目结构

```text
/
├── public/              # 静态资源
├── src/
│   ├── content/posts/   # Markdown 文章
│   ├── layouts/         # 布局组件
│   ├── pages/           # 页面
│   └── styles/          # 全局样式
├── astro.config.mjs     # Astro 配置
└── package.json
```

## 部署

推送到 `main` 分支后，GitHub Actions 会自动构建并部署到 GitHub Pages。

博客地址：https://crdym.github.io/myblog_new/

## 命令

| 命令          | 说明                              |
| :------------ | :-------------------------------- |
| `npm install` | 安装依赖                          |
| `npm run dev` | 启动开发服务器 `localhost:4321`   |
| `npm run build` | 构建生产版本到 `./dist/`        |
| `npm run preview` | 本地预览构建结果              |
