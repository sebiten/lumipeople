import fs from "fs/promises";
import path from "path";
import type { ReactNode } from "react";
import { compileMDX } from "next-mdx-remote/rsc";
import grayMatter from "gray-matter";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import CustomImage from "@/components/CustomImage";
import type { Meta } from "../../types";

type Frontmatter = {
  title: string;
  date: string;
  description: string;
  tags: string[];
  imageUrl: string;
};

type BlogPost = {
  meta: Meta;
  content: ReactNode;
};

function assertFrontmatter(
  data: Record<string, unknown>,
  fileName: string
): Frontmatter {
  const requiredFields: Array<keyof Frontmatter> = [
    "title",
    "date",
    "description",
    "tags",
    "imageUrl",
  ];

  for (const field of requiredFields) {
    if (data[field] === undefined || data[field] === null || data[field] === "") {
      throw new Error(`Missing frontmatter field "${field}" in ${fileName}`);
    }
  }

  if (!Array.isArray(data.tags) || data.tags.some((tag) => typeof tag !== "string")) {
    throw new Error(`Invalid "tags" frontmatter in ${fileName}`);
  }

  return {
    title: String(data.title),
    date: String(data.date),
    description: String(data.description),
    tags: data.tags,
    imageUrl: String(data.imageUrl),
  };
}

export async function getPostByName(
  fileName: string
): Promise<BlogPost | undefined> {
  try {
    const filePath = path.join(process.cwd(), "blogposts", fileName);
    const rawMDX = await fs.readFile(filePath, "utf-8");
    const { data, content } = grayMatter(rawMDX);
    const frontmatter = assertFrontmatter(
      data as Record<string, unknown>,
      fileName
    );

    const result = await compileMDX({
      source: content,
      components: {
        CustomImage,
      },
      options: {
        parseFrontmatter: false,
        mdxOptions: {
          rehypePlugins: [
            rehypeSlug,
            [rehypeAutolinkHeadings, { behavior: "wrap" }],
          ],
        },
      },
    });

    const id = fileName.replace(/\.mdx$/, "");

    return {
      meta: {
        id,
        title: frontmatter.title,
        date: frontmatter.date,
        description: frontmatter.description,
        tags: frontmatter.tags,
        imageUrl: frontmatter.imageUrl,
      },
      content: result.content,
    };
  } catch (error) {
    console.error("Error reading post:", fileName, error);
    return undefined;
  }
}

export async function getPostsMeta(): Promise<Meta[] | undefined> {
  try {
    const dirPath = path.join(process.cwd(), "blogposts");
    const filesArray = await getFilesInDirectory(dirPath, ".mdx");
    const posts = await Promise.all(filesArray.map((file) => getPostByName(file)));

    return posts
      .filter((post): post is BlogPost => Boolean(post))
      .map((post) => post.meta)
      .sort((a, b) =>
        new Date(a.date).getTime() > new Date(b.date).getTime() ? -1 : 1
      );
  } catch (error) {
    console.error("Error fetching posts meta:", error);
    return undefined;
  }
}

async function getFilesInDirectory(
  dirPath: string,
  fileExtension: string
): Promise<string[]> {
  const files = await fs.readdir(dirPath);
  return files.filter((file) => file.endsWith(fileExtension));
}
