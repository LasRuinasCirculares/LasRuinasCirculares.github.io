# Jun Zhang 个人学术主页

一个可直接部署到 GitHub Pages 的纯静态个人主页，不需要安装依赖或运行构建命令。

## 本地预览

在当前目录运行：

```bash
python3 -m http.server 8000
```

然后访问 `http://localhost:8000`。

## 部署到 GitHub Pages

1. 在 GitHub 新建名为 `<你的用户名>.github.io` 的公开仓库。
2. 将本目录中的所有文件上传到仓库根目录。
3. 进入仓库的 **Settings → Pages**。
4. 在 **Build and deployment** 中选择 **Deploy from a branch**，分支选择 `main`，目录选择 `/ (root)`。
5. 等待 GitHub 完成部署，然后访问 `https://<你的用户名>.github.io/`。

## 建议补充的信息

目前页面只使用了 Google Scholar 中能够公开核实的信息，没有虚构个人资料。建议在 [index.html](./index.html) 中继续补充：

- 中文姓名（如果希望在英文姓名旁展示）
- 个人邮箱
- GitHub、ORCID、DBLP 等链接
- 更完整的个人简介、教育经历和研究经历
- 新闻、获奖、学术服务等栏目

头像当前引用 Google Scholar 的公开图片地址。如果希望网站更稳定，可将自己的照片放到 `assets/portrait.jpg`，然后把 `index.html` 中的头像 `src` 改为 `assets/portrait.jpg`。

论文数据根据 Google Scholar 与 arXiv 的公开页面整理，更新日期为 2026-07-30。新增论文时，复制一个 `.publication-item` 区块并修改年份、标题、作者和链接即可。
