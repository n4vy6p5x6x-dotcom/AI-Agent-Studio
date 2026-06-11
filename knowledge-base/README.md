# 工业行业知识库

本目录存放 AI Agent Studio 内置 **80 份**行业文档（Markdown），每篇内容**互不重复**，含 13 个章节、10 步操作流程、独立参数与案例。

## 初始化

```bash
pnpm content:generate   # 生成 80 篇独立正文（修改 content-factory.ts 后执行）
pnpm db:ingest -- --force   # 强制重建知识库与 RAG 切片
```

或运行 `start.bat` 自动完成 seed/ingest。

## 文档结构（每篇）

1. 文档概述 · 2. 背景 · 3. 适用范围 · 4. 详细操作流程（10 步）
5. 关键参数表 · 6. 标准规范 · 7. 设备工具 · 8. 常见问题
9. 术语 · 10. 检查清单 · 11. 典型案例 · 12. Agent 协同 · 13. RAG 说明

## 关联

- 知识库 ID: `industry-kb-main`
- 源码: `packages/database/src/content-factory.ts` + `doc-content-data.ts`
